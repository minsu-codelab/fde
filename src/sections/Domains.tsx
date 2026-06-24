import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import SectionHeading from '../components/SectionHeading'
import { domains } from '../data/fde'
import { scrollToId } from '../hooks/useSmoothScroll'

export default function Domains() {
  const { lang, t } = useLang()

  return (
    <section id="domains" className="relative scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.domains.label} heading={t.domains.heading} note={t.domains.note} />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <motion.button
              key={d.code}
              onClick={() => scrollToId('dossiers')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group relative bg-ink p-7 text-left transition-colors hover:bg-paper/[0.03]"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/30">
                <span className="text-signal/70">{d.code}</span>
                <span className="opacity-0 transition-opacity group-hover:opacity-100">→ dossier</span>
              </div>

              <div className="mt-5 font-display text-xl font-semibold tracking-tight">
                {d.label[lang]}
              </div>

              <div className="mt-3 flex items-start gap-2">
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/30">
                  {t.domains.userPrefix}
                </span>
                <p className="break-keep text-[13px] leading-relaxed text-paper/55">
                  {d.line[lang]}
                </p>
              </div>

              <div className="mt-5 font-mono text-[11px] text-paper/35">{d.project}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
