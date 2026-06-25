import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { scrollToId } from '../hooks/useSmoothScroll'

// base='/fde/' 프로젝트 페이지이므로 public 자산은 BASE_URL 로 접두 (절대경로 '/hero.mp4'는 404)
const BASE = import.meta.env.BASE_URL
const HERO_POSTER = `${BASE}hero-poster.jpg`
// FDE 전용 배경 영상 두 컷을 크로스페이드로 순환 (field→code 컨셉)
const HERO_VIDEOS = [`${BASE}hero2.mp4`, `${BASE}hero3.mp4`]
const CROSSFADE = 1.1

export default function FdeHero() {
  const { t } = useLang()
  const reduced = useReducedMotion()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const switching = useRef(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return
    videoRefs.current[0]?.play().catch(() => {})
  }, [reduced])

  const advance = (from: number) => {
    if (switching.current || from !== active) return
    switching.current = true
    const next = (from + 1) % HERO_VIDEOS.length
    const nv = videoRefs.current[next]
    if (nv) {
      nv.currentTime = 0
      nv.play().catch(() => {})
    }
    setActive(next)
    window.setTimeout(() => {
      switching.current = false
    }, CROSSFADE * 1000)
  }

  const handleTimeUpdate = (idx: number) => () => {
    const v = videoRefs.current[idx]
    if (!v || idx !== active) return
    if (v.duration && v.currentTime >= v.duration - CROSSFADE) advance(idx)
  }

  const tagline = t.hero.tagline.split('\n')

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 sm:px-8"
    >
      {/* 배경 영상 크로스페이드 + 콘솔 그리드 */}
      <div className="absolute inset-0 -z-10">
        {reduced ? (
          <img src={HERO_POSTER} alt="" className="h-full w-full object-cover opacity-[0.22]" />
        ) : (
          HERO_VIDEOS.map((src, i) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
              style={{ opacity: active === i ? 0.22 : 0 }}
              muted
              playsInline
              preload="auto"
              poster={HERO_POSTER}
              onTimeUpdate={handleTimeUpdate(i)}
              onEnded={() => advance(i)}
            >
              <source src={src} type="video/mp4" />
            </video>
          ))
        )}
        <div className="grid-field absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.85)_100%)]" />
      </div>

      {/* 오퍼레이터 HUD 코너 좌표 */}
      <div className="pointer-events-none absolute inset-0 hidden font-mono text-[11px] uppercase tracking-[0.25em] text-paper/25 sm:block">
        <span className="absolute left-6 top-24">37.2636 N</span>
        <span className="absolute right-6 top-24 text-right">127.0286 E</span>
        <span className="absolute bottom-8 left-6">SUWON · KR</span>
        <span className="absolute bottom-8 right-6 text-right">FDE // 2026</span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* 상태 라인 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-7 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-paper/65 sm:text-[12px]"
        >
          <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
          {t.hero.status}
        </motion.div>

        {/* 역할 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mb-5 font-display text-base font-medium uppercase tracking-[0.2em] text-paper/70 sm:text-lg"
        >
          {t.hero.role}
        </motion.div>

        {/* 태그라인 (대형) */}
        <h1 className="font-display font-semibold leading-[0.98] tracking-tightest">
          {tagline.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.45 + li * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block break-keep text-[8.5vw] sm:text-[6.4vw] lg:text-[5rem] xl:text-[5.6rem]"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 max-w-xl break-keep text-lg text-paper/80 sm:text-xl"
        >
          {t.hero.sub}
        </motion.p>
      </div>

      {/* 스크롤 큐 */}
      <button
        onClick={() => scrollToId('thesis')}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-paper/55 transition-colors hover:text-paper/80"
      >
        {t.hero.scroll}
        <span className="relative block h-9 w-px overflow-hidden bg-paper/20">
          <span
            className="absolute inset-x-0 top-0 h-3 bg-signal"
            style={{ animation: 'scrolldot 1.6s ease-in-out infinite' }}
          />
        </span>
      </button>
    </section>
  )
}
