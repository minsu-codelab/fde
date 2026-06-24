/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#fafafa',
        // 오퍼레이터 콘솔 시그널 (포스퍼 앰버) — 아주 절제해서만 사용
        signal: '#ffb000',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Pretendard', 'sans-serif'],
        sans: ['Pretendard', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        flow: 'flow 1s linear infinite',
        blink: 'blink 1.5s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
