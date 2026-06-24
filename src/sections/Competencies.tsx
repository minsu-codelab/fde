import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import SectionHeading from '../components/SectionHeading'
import { competencies } from '../data/fde'

export default function Competencies() {
  const { lang, t } = useLang()

  return (
    <section id="model" className="relative scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="grid-field absolute inset-0 -z-10 opacity-40 mask-fade-b" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.model.label} heading={t.model.heading} note={t.model.note} />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2">
          {competencies.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className={[
                'group relative bg-ink p-7 transition-colors hover:bg-paper/[0.02] sm:p-8',
                // 마지막 홀수 카드(C-05)는 2열 폭 전체 사용
                i === competencies.length - 1 && competencies.length % 2 === 1 ? 'sm:col-span-2' : '',
              ].join(' ')}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-signal/80">
                  {c.code}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/25">
                  COMPETENCY
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                {c.title[lang]}
              </h3>
              <p className="mt-3 max-w-2xl break-keep leading-relaxed text-paper/65">
                {c.desc[lang]}
              </p>

              <div className="mt-5 flex items-start gap-2 border-t border-paper/10 pt-4">
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/30">
                  EVIDENCE
                </span>
                <p className="break-keep text-[13px] leading-relaxed text-paper/55">
                  {c.evidence[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
