import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { scrollToId } from '../hooks/useSmoothScroll'

export default function FdeContact() {
  const { lang, t } = useLang()

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-5 py-32 sm:px-8 sm:py-40">
      <div className="grid-field absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.35em] text-paper/55"
        >
          <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
          {t.contact.label}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 whitespace-pre-line font-display text-[2.4rem] font-semibold leading-[1.04] tracking-tightest sm:text-6xl"
        >
          {t.contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-xl break-keep text-base text-paper/60"
        >
          {t.contact.line}
        </motion.p>

        {/* 연락처 */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group bg-ink p-6 transition-colors hover:bg-paper/[0.03]"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">
              {t.contact.email}
            </div>
            <div className="mt-2 break-all font-display text-base text-paper/85 transition-colors group-hover:text-paper">
              {profile.email}
            </div>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink p-6 transition-colors hover:bg-paper/[0.03]"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">
              {t.contact.github}
            </div>
            <div className="mt-2 font-display text-base text-paper/85 transition-colors group-hover:text-paper">
              {profile.githubHandle} ↗
            </div>
          </a>
          <a
            href={profile.mainSite}
            className="group bg-ink p-6 transition-colors hover:bg-paper/[0.03]"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal/70">
              {t.contact.mainSite}
            </div>
            <div className="mt-2 font-display text-base text-paper/85 transition-colors group-hover:text-paper">
              minsu-codelab.github.io ↗
            </div>
          </a>
        </div>

        {/* 푸터 */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-7 text-[12px] text-paper/55 sm:flex-row sm:items-center">
          <div className="font-mono uppercase tracking-[0.2em]">
            {profile.location[lang]} · {t.footer.note}
          </div>
          <div className="flex items-center gap-5">
            <span className="font-mono">{t.footer.built}</span>
            <button
              onClick={() => scrollToId('hero')}
              className="uppercase tracking-[0.2em] transition-colors hover:text-paper"
            >
              {t.contact.backToTop} ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
