# FDE Portfolio — 유민수 (Forward Deployed Engineer 관점)

메인 포트폴리오(`minsu-codelab.github.io`)와 **같은 디자인 시스템**을 쓰되, 같은 프로젝트를
**"무엇을 만들었나"가 아니라 "어떤 현장에 투입돼 무엇을 바꿨나"** 로 다시 풀어낸 별도 사이트.

- **배포 목표 URL:** `https://minsu-codelab.github.io/fde/` (조직 `minsu-codelab` 의 프로젝트 페이지)
- **Vite `base`:** `/fde/`

## 차별화 포인트 (메인 대비)

| | 메인 포트폴리오 | FDE 포트폴리오 (이 사이트) |
|---|---|---|
| 관점 | "내가 무엇을 만들었나" (craft-first) | "어떤 도메인에 투입돼 무엇을 바꿨나" (deployment-first) |
| 구조 | About · Skills · Projects · Journey | Thesis · **FDE 역량 맵** · **투입 도메인** · **배포 도식** |
| 프로젝트 | 메트릭 + PAAR + 파이프라인 | **케이스 파일**(도메인·현장 현실·**현장에서 얻은 통찰**·배포물·소유한 성과) + PAAR |
| 톤 | 시네마틱 모노톤 | 같은 모노톤 + **오퍼레이터 콘솔**(시그널 앰버 액센트·좌표 그리드·HUD 브래킷) |
| 영상 | code → world (자동화) | **field → code** (현장 흡수) — `docs/fde-hero-prompt.md` |

## 섹션 구성

1. **Hero** — FDE 테제 + 오퍼레이터 HUD
2. **Thesis** — FDE란 무엇인가 + 현장(제조 PM 4년) → 코드 궤적
3. **Competency Map** — 5대 FDE 역량(도메인 몰입·프로토타입 속도·운영 소유·이해관계자 번역·모호함을 수치로) + 근거
4. **Domains** — 투입한 6개 도메인(해운·건설·음악·제조·리테일·모빌리티)
5. **Deployment Dossiers** — 프로젝트 6종 FDE 재해석 (FDE Smart Shutter = 플래그십)
6. **Contact** — 메인 포트폴리오 링크 포함

## 개발

```bash
npm install
npm run dev      # http://localhost:5173/fde/
npm run build    # tsc -b && vite build → dist/
npm run preview  # 빌드 결과 미리보기
```

콘텐츠는 전부 [`src/data/fde.ts`](src/data/fde.ts) 한 파일에 있다 — 배포 도식·역량·도메인·KO/EN.

## 배포 (GitHub Pages 프로젝트 페이지)

1. 조직에 새 저장소 생성: `minsu-codelab/fde` (Public)
2. 이 폴더를 그 저장소에 push (`main` 브랜치)
3. 저장소 **Settings → Pages → Build and deployment → Source: GitHub Actions** 로 설정
4. `main` push 시 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 가 자동 빌드·배포
5. 결과: `https://minsu-codelab.github.io/fde/`

> 저장소 이름을 `fde` 가 아닌 다른 이름으로 만들면 `vite.config.ts` 의 `base` 와
> `index.html`/Hero 의 자산 경로(자동으로 `import.meta.env.BASE_URL` 사용)도 그에 맞춰야 한다.
> 자산 경로는 `BASE_URL` 기반이라 `base` 값만 바꾸면 따라온다.

## 배경 영상

[`docs/fde-hero-prompt.md`](docs/fde-hero-prompt.md) 에 Deevid AI용 원샷 프롬프트(컷 A·B)와
후처리·압축·배치 가이드가 있다. 현재 Hero는 FDE 전용 영상 **`public/hero2.mp4`(컷 A)** + **`public/hero3.mp4`(컷 B)**
를 크로스페이드로 순환한다(`src/sections/FdeHero.tsx`의 `HERO_VIDEOS`). 포스터(`public/hero-poster.jpg`)는 hero2 첫 프레임.
