import { FiDownload, FiAward, FiMapPin, FiBriefcase } from 'react-icons/fi'
import Section from './Section'
import { Reveal, Stagger, StaggerItem, Tilt, Parallax } from './ui/Motion'

const About = ({ data, education }) => {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={data?.headline || 'About me'}
      lead="The short version: I build the whole thing — schema, API, interface — and I test it on the way."
      className="bg-base-950"
      mesh
    >
      {/* ---------- Bento grid ---------- */}
      <div className="grid gap-5 lg:grid-cols-12">
        {/* Portrait */}
        <Reveal className="lg:col-span-4" y={30}>
          <Tilt max={6} className="group h-full">
            <div className="card card-hover h-full overflow-hidden p-0">
              <Parallax distance={14}>
                <img
                  src={data?.image || '/profile.jpg'}
                  alt="Durgesh Vishwakarma, Full Stack Developer based in Mumbai, India"
                  width="480"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Parallax>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-lg font-bold text-white">Durgesh Vishwakarma</p>
                <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-violet-soft">
                  <FiMapPin aria-hidden="true" /> Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </Tilt>
        </Reveal>

        {/* Copy */}
        <Reveal className="lg:col-span-8" y={30} delay={0.1}>
          <div className="card h-full p-7 sm:p-10">
            <div className="space-y-5">
              {data?.paragraphs?.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.85] text-ghost-300 sm:text-base">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-base-700 pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-base-650 bg-base-850 text-violet-light">
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-500">Education</p>
                  <p className="mt-1 text-sm font-semibold text-white">{education?.degree}</p>
                  <p className="text-xs text-ghost-400">
                    {education?.school} · {education?.detail}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-base-650 bg-base-850 text-amber">
                  <FiBriefcase aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-500">Currently</p>
                  <p className="mt-1 text-sm font-semibold text-white">Full Stack Developer</p>
                  <p className="text-xs text-ghost-400">Servora · Mumbai</p>
                </div>
              </div>
            </div>

            <a
              href={data?.resumeUrl || '/resume.pdf'}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost mt-8 w-full sm:w-auto"
            >
              <FiDownload aria-hidden="true" />
              Download résumé (PDF)
            </a>
          </div>
        </Reveal>

        {/* Principles */}
        <Stagger className="grid gap-5 sm:grid-cols-3 lg:col-span-12" gap={0.1}>
          {data?.principles?.map((pr, i) => (
            <StaggerItem key={pr.title}>
              <Tilt max={5} className="group h-full">
                <div className="card card-hover h-full p-7">
                  <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-grad-violet font-mono text-sm font-bold text-white shadow-glow-violet">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-white">{pr.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ghost-400">{pr.desc}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* ---------- Skills ---------- */}
      <div className="mt-24">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Toolkit</p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Technologies I work with</h3>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" gap={0.07}>
          {data?.skillGroups?.map((group) => (
            <StaggerItem key={group.label}>
              <div className="card card-hover h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-amber">{group.label}</h4>
                  <span className="ml-auto font-mono text-[10px] text-ghost-600">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}

export default About
