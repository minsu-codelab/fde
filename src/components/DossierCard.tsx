import { motion } from 'framer-motion'
import type { Dossier, ProjectLink } from '../data/fde'
import { competencyByKey, dossiers } from '../data/fde'
import { useLang } from '../i18n/LanguageContext'
import SignalFlow from './SignalFlow'
import Gallery from './Gallery'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function LinkPill({ link, label }: { link: ProjectLink; label: string }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-4 py-2 text-[14px] font-medium text-paper/80 transition-all hover:border-paper hover:bg-paper hover:text-ink"
    >
      {label}
      <ArrowIcon />
    </a>
  )
}

export default function DossierCard({ d }: { d: Dossier }) {
  const { lang, t } = useLang()

  const linkLabel: Record<ProjectLink['kind'], string> = {
    live: t.dossiers.live,
    frontend: t.dossiers.frontend,
    backend: t.dossiers.backend,
    repo: t.dossiers.repo,
    org: t.dossiers.org,
  }

  // FDE 케이스 파일 행 (현장 → 통찰 → 배포물 → 성과)
  const fileRows = [
    { label: t.dossiers.userLabel, text: d.user[lang] },
    { label: t.dossiers.statusLabel, text: d.statusQuo[lang] },
    { label: t.dossiers.insightLabel, text: d.insight[lang], insight: true },
    { label: t.dossiers.shippedLabel, text: d.shipped[lang] },
    { label: t.dossiers.outcomeLabel, text: d.outcome[lang], outcome: true },
  ]

  const paarRows = [
    { label: t.dossiers.problem, text: d.paar.problem[lang] },
    { label: t.dossiers.approach, text: d.paar.approach[lang] },
    { label: t.dossiers.action, text: d.paar.action[lang] },
    { label: t.dossiers.result, text: d.paar.result[lang], emphasis: true },
  ]

  return (
    <motion.article
      id={`dossier-${d.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'relative grid scroll-mt-24 gap-8 border-t py-16 lg:grid-cols-[auto_1fr] lg:gap-14',
        d.flagship ? 'border-signal/40' : 'border-paper/10',
        d.muted ? 'opacity-80' : '',
      ].join(' ')}
    >
      {/* 좌측: 인덱스 + 메타 (sticky) */}
      <div className="lg:w-44">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-baseline gap-1.5">
            <span
              className={[
                'font-display font-semibold leading-none tracking-tightest',
                d.muted ? 'text-5xl text-paper/30' : 'text-7xl text-stroke',
              ].join(' ')}
            >
              {d.index}
            </span>
            <span className="font-mono text-base text-paper/60">
              / {String(dossiers.length).padStart(2, '0')}
            </span>
          </div>
          <div className="mt-4 font-mono text-[12px] uppercase tracking-[0.2em] text-paper/55">
            {d.period}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-block rounded-full border border-paper/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.15em] text-paper/65">
              {d.kind === 'team' ? t.dossiers.team : t.dossiers.solo}
            </span>
            {!d.muted && (
              <span className="inline-flex items-center gap-1 rounded-full border border-signal/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-signal/90">
                <span className="inline-block h-1 w-1 rounded-full bg-signal" />
                {t.dossiers.deployed}
              </span>
            )}
          </div>
          {d.flagship && (
            <div className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-signal/80">
              ★ {t.dossiers.flagship}
            </div>
          )}
        </div>
      </div>

      {/* 우측: 본문 */}
      <div className="min-w-0">
        {/* 도메인 헤더 */}
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-signal/70">
          <span className="inline-block h-px w-6 bg-signal/50" />
          {d.domain[lang]}
        </div>

        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tightest sm:text-4xl">
          {d.name}
        </h3>

        {/* FDE 케이스 파일 — 현장의 현실에서 소유한 성과까지 */}
        <div className="hud-bracket relative mt-8 overflow-hidden rounded-xl border border-paper/12 bg-paper/[0.02]">
          <div className="grid-field absolute inset-0 opacity-50" />
          <div className="relative flex items-center justify-between border-b border-paper/10 px-5 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
              DEPLOYMENT DOSSIER · {d.index}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/30">
              {d.id}
            </span>
          </div>
          <div className="relative divide-y divide-paper/[0.06]">
            {fileRows.map((row, i) => (
              <div
                key={i}
                className={[
                  'grid gap-1.5 px-5 py-3.5 sm:grid-cols-[120px_1fr] sm:gap-5',
                  row.insight ? 'border-l-2 border-l-signal/60 bg-signal/[0.03]' : '',
                ].join(' ')}
              >
                <div
                  className={[
                    'pt-0.5 font-mono text-[11px] uppercase tracking-[0.18em]',
                    row.insight ? 'text-signal/80' : 'text-paper/55',
                  ].join(' ')}
                >
                  {row.label}
                </div>
                <p
                  className={[
                    'break-keep text-[14px] leading-relaxed sm:text-[15px]',
                    row.insight ? 'text-paper/90' : row.outcome ? 'text-paper/80' : 'text-paper/60',
                  ].join(' ')}
                >
                  {row.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 수치 */}
        {d.metrics.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 sm:grid-cols-4">
            {d.metrics.map((m, i) => (
              <div key={i} className="bg-ink px-4 py-5 text-center">
                <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1.5 break-keep text-[12px] leading-snug text-paper/60">
                  {m.label[lang]}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 실제 UI 갤러리 */}
        {d.shots && d.shots.length > 0 && <Gallery shots={d.shots} name={d.name} />}

        {/* PAAR */}
        <div className="mt-9 space-y-4">
          <div className="font-mono text-[12px] uppercase tracking-[0.25em] text-paper/55">PAAR</div>
          {paarRows.map((row, i) => (
            <div key={i} className="grid gap-1.5 sm:grid-cols-[88px_1fr] sm:gap-5">
              <div className="pt-0.5 text-[12px] uppercase tracking-[0.2em] text-paper/55">
                {row.label}
              </div>
              <p
                className={[
                  'break-keep leading-relaxed',
                  row.emphasis ? 'text-paper/90' : 'text-paper/80',
                ].join(' ')}
              >
                {row.text}
              </p>
            </div>
          ))}
        </div>

        {/* 동작 흐름 */}
        <div className="mt-10 rounded-2xl border border-paper/10 bg-paper/[0.02] p-6 sm:p-8">
          <SignalFlow flow={d.pipeline} kicker={t.dossiers.pipeline} />
        </div>

        {/* 입증한 역량 태그 */}
        <div className="mt-8">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">
            {t.dossiers.competencyLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {d.competencies.map((key) => {
              const c = competencyByKey[key]
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 px-3 py-1 text-[12px] text-paper/75"
                >
                  <span className="font-mono text-[11px] text-signal/80">{c.code}</span>
                  {c.title[lang]}
                </span>
              )
            })}
          </div>
        </div>

        {/* 스택 */}
        <div className="mt-7 flex flex-wrap gap-2">
          {d.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-paper/10 px-2.5 py-1 font-mono text-[12px] text-paper/65"
            >
              {s}
            </span>
          ))}
        </div>

        {/* 링크 */}
        {d.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {d.links.map((l) => (
              <LinkPill key={l.kind} link={l} label={linkLabel[l.kind]} />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
