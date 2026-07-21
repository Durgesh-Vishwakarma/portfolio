import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/* ---------------------------------------------------------------
   Reveal — scroll-triggered entrance. Direction-aware.
--------------------------------------------------------------- */
export const Reveal = ({ children, delay = 0, y = 26, x = 0, className = '', once = true, as = 'div' }) => {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/* ---------------------------------------------------------------
   Stagger — parent/child orchestration.
--------------------------------------------------------------- */
export const Stagger = ({ children, className = '', delay = 0, gap = 0.08, once = true }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, margin: '-60px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className = '', y = 22, as = 'div' }) => {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  )
}

/* ---------------------------------------------------------------
   SplitText — per-word entrance for headlines.
--------------------------------------------------------------- */
export const SplitText = ({ text = '', className = '', delay = 0, once = true }) => {
  const words = String(text).split(' ')
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', opacity: 0 },
              show: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

/* ---------------------------------------------------------------
   Counter — animates a numeric value when scrolled into view.
   Accepts "2+", "150+", "4" and preserves the suffix.
--------------------------------------------------------------- */
export const Counter = ({ value = '0', className = '', duration = 1.6 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? parseFloat(match[2]) : 0
  const suffix = match?.[3] ?? ''
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || !match) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, match])

  if (!match) return <span className={className}>{value}</span>

  const decimals = String(target).includes('.') ? 1 : 0
  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ---------------------------------------------------------------
   Tilt — pointer-tracking 3D tilt with a light sheen that follows
   the cursor. Disabled on touch/coarse pointers.
--------------------------------------------------------------- */
export const Tilt = ({ children, className = '', max = 7, glare = true }) => {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    setEnabled(mq.matches && !reduce.matches)
  }, [])

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 26 })
  const sy = useSpring(py, { stiffness: 220, damping: 26 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])

  const onMove = (e) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={enabled ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      className={`perspective relative ${className}`}
    >
      {children}
      {enabled && glare && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${glareX.get()} ${glareY.get()}, rgba(155,140,255,.13), transparent 65%)`,
            backgroundPositionX: glareX,
            backgroundPositionY: glareY,
          }}
        />
      )}
    </motion.div>
  )
}

/* ---------------------------------------------------------------
   Spotlight — soft glow that follows the cursor inside a section.
--------------------------------------------------------------- */
export const Spotlight = ({ className = '', size = 520, color = 'rgba(109,91,255,.16)' }) => {
  const ref = useRef(null)
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const sx = useSpring(x, { stiffness: 120, damping: 26, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 26, mass: 0.6 })

  useEffect(() => {
    const el = ref.current?.parentElement
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      x.set(e.clientX - r.left)
      y.set(e.clientY - r.top)
    }
    const leave = () => {
      x.set(-9999)
      y.set(-9999)
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        left: sx,
        top: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  )
}

/* ---------------------------------------------------------------
   ScrollProgress — thin gradient bar pinned to the top of the page.
--------------------------------------------------------------- */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-grad-violet"
    />
  )
}

/* ---------------------------------------------------------------
   Parallax — translates a layer against scroll.
--------------------------------------------------------------- */
export const Parallax = ({ children, distance = 60, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yRaw = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const y = useSpring(yRaw, { stiffness: 90, damping: 24 })
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

/* ---------------------------------------------------------------
   Typewriter — cycles through role strings in the hero.
--------------------------------------------------------------- */
export const Typewriter = ({ words = [], className = '', typeMs = 62, deleteMs = 32, holdMs = 1700 }) => {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced || !words.length) return
    const full = words[i % words.length]
    let t

    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      t = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typeMs, deleteMs, holdMs, reduced])

  if (reduced) return <span className={className}>{words[0]}</span>

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-amber align-middle" style={{ height: '1em' }} />
    </span>
  )
}

/* ---------------------------------------------------------------
   Magnetic — element drifts toward the cursor on hover.
--------------------------------------------------------------- */
export const Magnetic = ({ children, strength = 0.28, className = '' }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18 })
  const sy = useSpring(y, { stiffness: 260, damping: 18 })

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
