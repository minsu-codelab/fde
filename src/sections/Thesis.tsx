import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import SectionHeading from '../components/SectionHeading'

export default function Thesis() {
  const { t } = useLang()

  return (
    <section id="thesis" className="relative scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.thesis.label} heading={t.thesis.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* 좌: 매니페스토 */}
          <div className="space-y-6">
            {t.thesis.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="break-keep text-[17px] leading-relaxed text-paper/75 sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* 우: 궤적 (현장 → 코드) */}
          <div>
            <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-paper/55">
              <span className="inline-block h-px w-6 bg-signal/60" />
              {t.thesis.pathLabel}
            </div>
            <ol className="relative space-y-7 border-l border-paper/15 pl-6">
              {t.thesis.path.map((step, i) => (
                <motion.li
                  key={step.code}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[27px] top-1 flex h-2.5 w-2.5 items-center justify-center">
                    <span className={`h-2.5 w-2.5 rounded-full ${i === 2 ? 'bg-signal' : 'bg-paper/40'}`} />
                  </span>
                  <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-paper/55">
                    STEP {step.code}
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </div>
                  <p className="mt-1.5 break-keep text-[14px] leading-relaxed text-paper/70">
                    {step.desc}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
