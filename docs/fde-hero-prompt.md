# FDE Hero 배경 영상 — Deevid AI 프롬프트

> FDE(Forward Deployed Engineer) 포트폴리오 Hero 배경용 **블랙&화이트 모노톤 루프 영상** 제작 프롬프트.
>
> **컨셉 (메인 포트폴리오와의 의도적 반전):**
> - 메인 영상 = *남자가 코딩하면 → 모니터 밖 세상이 자동화된다* (code → world)
> - **FDE 영상 = 엔지니어가 현장에 투입돼 → 현장의 현실이 데이터·코드로 흡수된다** (**field → code**)
>
> 즉, 책상 앞이 아니라 **현장(항만·건물 외벽·공장·도시)에 forward-deploy** 된 모습. 실제 사물 위에
> 모노톤 HUD 오버레이(바운딩 박스·디지털 트윈 와이어프레임·텔레메트리·좌표 눈금)가 얹히고,
> 신호 펄스가 **현실 → 화면 방향**으로 흘러 들어간다.
>
> **시각 정합:** 사이트는 이 영상을 opacity ≈ 0.22 로 깔고, 그 위에 옅은 좌표 그리드 + 오퍼레이터 HUD 코너 좌표를
> 올린다. 그러니 영상은 **중앙을 차분하게**, 움직임은 **느리고 부드럽게**, **seamless loop** 로 만든다.
> (이 사이트의 Hero는 `hero2.mp4` + `hero3.mp4` 두 영상을 크로스페이드로 순환하므로, 아래 **A·B 두 컷**을 만들면 가장 좋다.)

---

## ⭐ 컷 A — 추천 1순위: 현장 투입 원샷 프롬프트 (EN — 이것 하나만 붙여넣기 → `public/hero2.mp4`)

> Deevid엔 네거티브 입력란이 없으므로 모든 제약(Avoid: ~)을 프롬프트 끝에 포함했다. **이 블록 하나만** 입력.

```
Cinematic black-and-white monochrome video, perfectly seamless loop — the first and last
frame match exactly, continuous cyclic motion, no fade in and no fade out. A young Korean
man in his late twenties wearing glasses, a forward-deployed field engineer, stands on an
industrial work site holding a rugged tablet, seen from behind and slightly to the side,
calm and still at the center of the frame. The environment around him reads as a real
work site — a port with large ships, a tall building facade with scaffolding, and a factory
floor — softly blended in depth. Over these real objects, translucent monochrome HUD
overlays lock on: thin bounding boxes framing structural defects on the facade, a glowing
wireframe digital-twin mesh wrapping a ship and a building, small telemetry readouts,
crosshair ticks and coordinate markers, floating data panels and line charts at different
depths with gentle parallax. Thin glowing white signal pulses travel inward in a continuous
cycle — flowing from the real-world structures into the engineer's tablet screen, as if the
field itself is being absorbed into data and code. The tablet screen faintly shows a dark
code editor and a dashboard. Camera motion is alive but loops: a very slow breathing dolly
that eases gently in and returns to its exact starting position by the end, with soft
parallax depth. High-contrast grayscale, fine film grain, soft volumetric light, shallow
depth of field, quiet and composed center. Strictly black and white, grayscale only — no
color. Avoid: any colored tint, Windows logo or blue screen, a person facing the camera or
direct eye contact, fast or shaky camera, one-directional pan, sudden zoom, abrupt cut,
any readable text, captions, subtitles, numbers on screen or watermark, distorted hands or
extra fingers, deformed face, cartoon or anime style, cluttered busy center, low quality
or blur.
```

---

## ⭐ 컷 B — 추천 2순위: 오퍼레이터 콘솔 / 디지털 트윈 (EN → `public/hero3.mp4`)

> 사람 없이 **현장을 위에서 내려다보는 디지털 트윈/관제 화면** 느낌. 컷 A와 크로스페이드되며 톤을 채운다.

```
Cinematic black-and-white monochrome video, perfectly seamless loop — first and last frame
match exactly, continuous cyclic motion, no fade in and no fade out. A slow aerial / operator
console view of a monochrome digital twin: a port, ships, a city grid and a tall building
rendered as a translucent glowing wireframe over a dark surface, like a control-room
overview. Thin HUD elements drift calmly — crosshair reticles, corner frame brackets,
coordinate tick marks, subtle telemetry panels and connected-node network graphs at varying
depths with gentle parallax. Thin glowing white signal pulses travel continuously along the
wireframe lines, converging toward a central focus point as if the whole field is being
sensed and ingested. The very center stays calm and uncluttered. Camera motion loops: an
extremely slow breathing push that returns to its exact starting position by the end, soft
parallax depth. High-contrast grayscale, fine film grain, soft volumetric light, shallow
depth of field. Strictly black and white, grayscale only — no color. Avoid: any colored
tint, recognizable map labels or country shapes, fast or shaky camera, one-directional pan,
sudden zoom, abrupt cut, any readable text, captions, subtitles, real numbers or watermark,
cartoon or game-UI look, busy cluttered center, low quality or blur.
```

---

## 보조 / 대안 컷 (원하면 교체용 — EN)

```
Monochrome high-contrast cinematic. A young Korean man wearing glasses, seen in profile on a
construction site, raising a tablet toward a building facade; in his glasses and on the
tablet, a grayscale HUD of bounding boxes and a wireframe digital twin locks onto the real
structure. Thin white signal dots travel from the building inward into the screen. Slow,
quiet, fine grain, seamless loop, calm center, strictly black and white, no color, no text,
no logos, no watermark, no eye contact.
```

---

## 루프 솔기 제거 (받은 뒤 후처리 — 거의 확실)

영상에 솔기가 남으면 끝 0.5초를 처음과 크로스페이드해 매끄럽게 만든다 (메인과 동일 방식):

```bash
# 5초 영상 기준, 끝 0.5초를 앞과 블렌드해 루프 솔기 제거
ffmpeg -i hero_raw.mp4 -filter_complex \
  "[0]split[a][b];[b]reverse[r];[a][r]xfade=transition=fade:duration=0.5:offset=4.5,format=yuv420p" \
  -an hero.mp4
```

## 설정 가이드 (Deevid)

| 항목 | 권장값 |
|---|---|
| Style | Cinematic / Black & White |
| Motion | Subtle · Slow |
| Loop | On (seamless) |
| Aspect ratio | 16:9 (데스크톱) — 필요 시 9:16 세로 버전도 동일 프롬프트로 |
| Duration | 5–8초 |
| Text / Logo | 없음 (HUD의 "텍스트처럼 보이는 눈금"은 허용, 읽히는 글자는 금지) |

## 산출물 배치

1. 컷 A → **`public/hero2.mp4`**, 컷 B → **`public/hero3.mp4`** 로 저장 (현재 적용된 파일명).
2. 컷 A의 첫 프레임을 캡처해 **`public/hero-poster.jpg`** 로 저장 (로드 전·reduced-motion 폴백).
3. 1080p 기준 **2–4MB** 목표로 압축, 오디오 제거:
   ```bash
   ffmpeg -i in.mp4 -vf scale=1920:-2 -b:v 2M -an hero.mp4
   ```
4. 파일을 넣으면 `src/sections/FdeHero.tsx`의 `HERO_VIDEOS = ['hero2.mp4', 'hero3.mp4']`(BASE_URL 접두)가 자동으로
   크로스페이드 순환 재생한다. 한 컷만 쓰려면 배열에서 hero3 제거 가능.
5. 파일이 없어도 그라데이션 + 좌표 그리드 배경만으로 정상 표시된다.

> 영상은 `autoplay muted loop playsInline`로 재생되며, `prefers-reduced-motion` 사용자는 정지 프레임(poster)만 본다.
> 사이트가 영상 위에 옅은 그리드·HUD 좌표를 얹으므로 **영상 자체는 과하게 화려할 필요 없다 — 차분할수록 좋다.**
