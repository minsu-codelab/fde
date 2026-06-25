import type { L10n } from '../i18n/LanguageContext'

/* ──────────────────────────────────────────────────────────────
 * 공유 타입 (SignalFlow · Gallery 가 참조)
 * ────────────────────────────────────────────────────────────── */
export interface FlowNode {
  id: string
  label: L10n
  emphasis?: boolean
}
export interface Flow {
  title: L10n
  nodes: FlowNode[]
}
export interface ProjectLink {
  kind: 'live' | 'frontend' | 'backend' | 'repo' | 'org'
  url: string
}
export interface Metric {
  value: string
  label: L10n
}
export interface Shot {
  src: string
  caption: L10n
}

/** PAAR (Problem · Approach · Action · Result) — FDE 관점으로 재작성 */
export interface Paar {
  problem: L10n
  approach: L10n
  action: L10n
  result: L10n
}

/* ──────────────────────────────────────────────────────────────
 * FDE 역량 모델. 각 배포 도식이 어떤 역량을 입증하는지의 키.
 * ────────────────────────────────────────────────────────────── */
export type CompetencyKey =
  | 'immersion' // 도메인 몰입
  | 'velocity' // 프로토타입 속도
  | 'ownership' // 운영 소유
  | 'translation' // 이해관계자 번역
  | 'measure' // 모호함을 수치로

export interface Competency {
  key: CompetencyKey
  code: string // 콘솔 라벨 (C-01 …)
  title: L10n
  desc: L10n
  evidence: L10n // 어떤 배포에서 드러났는지
}

export const competencies: Competency[] = [
  {
    key: 'immersion',
    code: 'C-01',
    title: { ko: '도메인 몰입', en: 'Domain Immersion' },
    desc: {
      ko: '사용자가 실제로 하는 일을 직접 이해하고, 머릿속이나 엑셀에만 있던 규칙을 코드로 옮깁니다. 도메인을 모르면 데이터부터 어긋난다고 봅니다.',
      en: 'I learn what the user actually does and move rules that lived only in heads and spreadsheets into code. Without the domain, even the data goes wrong.',
    },
    evidence: {
      ko: '방화셔터 현장 4년 → 7개 모델 규칙 엔진, 한국 건축 하자 6.3만 장 직접 수집',
      en: '4 years on the fire-shutter floor → a 7-model rule engine, 63K Korean-defect images collected by hand',
    },
  },
  {
    key: 'velocity',
    code: 'C-02',
    title: { ko: '프로토타입 속도', en: 'Prototype Velocity' },
    desc: {
      ko: '동작하는 결과물을 빠르게 올려, 말보다 화면으로 합의합니다. 같은 자리를 몇 번이고 갈아엎을 수 있도록 테스트로 받쳐 둡니다.',
      en: 'I get a working artifact up fast and align on a screen instead of a slide deck. Tests back it up so I can rework the same spot again and again.',
    },
    evidence: {
      ko: 'Re:Chord 1인 출시 직전까지, FDE 백엔드 16K LOC, Closet 같은 모듈 반복 리워크',
      en: 'Re:Chord built solo to the launch edge, a 16K-LOC FDE backend, Closet reworked fearlessly',
    },
  },
  {
    key: 'ownership',
    code: 'C-03',
    title: { ko: '운영 소유', en: 'Production Ownership' },
    desc: {
      ko: '만든 사람이 장애 추적과 무중단, 비용 방어까지 끝까지 책임집니다. 배포했다고 끝이 아니라, 계속 살아 돌아가게 만드는 게 진짜 일입니다.',
      en: 'Whoever builds it owns the outage trace, the uptime and the cost. Shipping isn’t the finish line. Keeping it alive is.',
    },
    evidence: {
      ko: 'ArcticTwin 디스크풀 502 직접 추적·복구 후 24/7, AeroInspect GPU 분리 과금, EggTalk API 비용 방어',
      en: 'Traced and fixed ArcticTwin’s disk-full 502 then ran it 24/7, split GPU billing, defended API quotas',
    },
  },
  {
    key: 'translation',
    code: 'C-04',
    title: { ko: '이해관계자 번역', en: 'Stakeholder Translation' },
    desc: {
      ko: '도메인 언어와 엔지니어링을 잇고, 고객이 신뢰하는 양식과 관행을 깨지 않으면서 자동화합니다. 신뢰가 깨지면 아무리 좋은 자동화도 거부당합니다.',
      en: 'I bridge domain language and engineering, automating without breaking the forms and habits customers trust. Break that trust and even good automation gets rejected.',
    },
    evidence: {
      ko: 'FDE: 규칙은 코드로 옮기되, 거래처와 인증기관이 믿는 원본 엑셀 양식은 100% 그대로 보존',
      en: 'FDE: rules moved into code while the original Excel forms clients and certifiers trust stayed 100% intact',
    },
  },
  {
    key: 'measure',
    code: 'C-05',
    title: { ko: '모호함을 수치로', en: 'Measure the Ambiguous' },
    desc: {
      ko: '“좋다”는 느낌을 SDR·recall·정확도 같은 수치로 바꾸고, CI 게이트로 퇴행을 자동으로 막습니다. 측정되지 않으면 끝난 게 아니라고 봅니다.',
      en: 'I turn “it’s good” into numbers like SDR, recall and accuracy, and block regressions automatically with CI gates. If it isn’t measured, it isn’t done.',
    },
    evidence: {
      ko: 'Re:Chord SDR 15.06dB·pytest 220 게이트, AeroInspect 통념을 WBF로 검증·반증, Closet 임계값 직접 보정',
      en: 'Re:Chord 15.06 dB SDR with a 220-test gate, an assumption disproved with WBF, Closet’s threshold hand-calibrated',
    },
  },
]

export const competencyByKey: Record<CompetencyKey, Competency> = Object.fromEntries(
  competencies.map((c) => [c.key, c]),
) as Record<CompetencyKey, Competency>

/* ──────────────────────────────────────────────────────────────
 * 배포 도식 (Deployment Dossier). 프로젝트의 FDE 재해석.
 * ────────────────────────────────────────────────────────────── */
export interface Dossier {
  id: string
  index: string
  name: string
  flagship?: boolean
  muted?: boolean
  period: string
  kind: 'team' | 'solo'

  /** 투입 도메인 (짧은 태그) */
  domain: L10n
  /** 현장의 실제 사용자 */
  user: L10n
  /** 투입 전 현장의 현실 (status quo) */
  statusQuo: L10n
  /** 현장에서 얻은 통찰. FDE의 핵심 차별점. */
  insight: L10n
  /** 현장에 배포한 것 */
  shipped: L10n
  /** 소유한 성과 (운영·비즈니스) */
  outcome: L10n

  competencies: CompetencyKey[]
  metrics: Metric[]
  paar: Paar
  stack: string[]
  links: ProjectLink[]
  pipeline: Flow
  shots?: Shot[]
}

export const dossiers: Dossier[] = [
  /* 01 ───────────────────────────────────────────── ArcticTwin */
  {
    id: 'arctictwin',
    index: '01',
    name: 'ArcticTwin',
    period: '2026.04 ~ 06',
    kind: 'team',
    domain: { ko: '해운 · 북극물류', en: 'Shipping · Arctic logistics' },
    user: {
      ko: '선사 운항관리자, 용선 의사결정자',
      en: 'Carrier ops managers and charter decision-makers',
    },
    statusQuo: {
      ko: '“북극항로가 수에즈보다 40% 짧다”는 말은 돌았지만, 특정 선박으로 지금 가는 게 정말 이득인지 책임지고 답할 도구가 없었습니다.',
      en: 'Everyone repeated that the route was 40% shorter than Suez, yet no tool could actually answer whether this ship should take it now and stand behind the call.',
    },
    insight: {
      ko: '운항 의사결정자는 “가능성” 설명이 아니라 연료비, 리스크, 항행 적합성 같은 숫자로 움직입니다. 그래서 산출물도 모델 정확도가 아니라 의사결정에 바로 쓰는 지표로 잡았습니다.',
      en: 'Decision-makers move on numbers like fuel cost, risk and navigability, not on talk of potential. So I made the deliverable the decision number rather than model accuracy.',
    },
    shipped: {
      ko: 'Cesium 3D 트윈 위에 AI 4종(빙산 회피 RL, 연료 XGBoost, SAR 빙산 YOLO, What-If LLM)을 얹어 항로별 ROI와 리스크를 산출.',
      en: 'A Cesium 3D twin with four AI models (RL avoidance, XGBoost fuel, YOLO iceberg, What-If LLM) producing per-route ROI and risk.',
    },
    outcome: {
      ko: '검증 조합 전부에서 출항 안전 성공률 100%. 디스크풀 502 장애도 직접 추적해 복구한 뒤 24/7 무중단으로 운영.',
      en: '100% safe-departure across every verified set. Traced and fixed a disk-full 502 outage, then ran it 24/7.',
    },
    competencies: ['immersion', 'measure', 'ownership'],
    metrics: [
      { value: '40%', label: { ko: '수에즈 대비 거리 단축', en: 'shorter than the Suez route' } },
      { value: '84', label: { ko: '항로×빙급×선종 자동 학습 조합', en: 'auto-trained route × ice × ship combos' } },
      { value: '100%', label: { ko: '출항 안전 성공률(검증셋)', en: 'safe-departure success (verified set)' } },
      { value: '24/7', label: { ko: '무중단 운영', en: 'uninterrupted uptime' } },
    ],
    paar: {
      problem: {
        ko: '선사는 북극항로가 40% 짧다는 건 알지만, “이 배로 지금 가면 정말 이득인가”를 근거로 답할 수 없었습니다. 의사결정의 공백이 곧 손실 리스크였습니다.',
        en: 'Carriers knew the route was 40% shorter, yet couldn’t answer “is it actually worth it for this ship, now?” That decision gap was itself a loss risk.',
      },
      approach: {
        ko: '현장이 믿는 건 가능성 설명이 아니라 연료비와 리스크, 항행 적합성 숫자였습니다. 그래서 “모델을 잘 만든다”가 아니라 “의사결정 지표를 산출한다”를 목표로 잡았습니다.',
        en: 'What the field trusts is fuel-cost, risk and navigability figures, not talk of potential. So I set the goal as producing the decision number, not building a good model.',
      },
      action: {
        ko: '위성·해빙·기상 공공데이터를 Cesium 3D 트윈에 얹고 AI 4종을 붙였습니다. RL이 항로×빙급×선종 84조합을 스스로 반복 학습하게 파이프라인을 짜고, 경로는 해상 마스크로 검증해 이상하면 A*로 되돌렸습니다.',
        en: 'I layered satellite, ice and weather data onto a Cesium 3D twin and added four AI models. The RL retrains itself across 84 route × ice × ship combos, and every path is checked against a sea mask, falling back to A* when it strays onto land.',
      },
      result: {
        ko: '검증 조합 전부에서 출항 안전 성공률 100%가 나왔습니다. 디스크 풀로 서비스 전체가 502로 죽던 장애도 직접 추적해 잡고 24/7로 운영했습니다. 만든 사람이 운영까지 책임진 셈입니다.',
        en: 'Departure scheduling hit a 100% safe-success rate across every verified combination. I also traced and fixed a disk-full outage that had been taking the whole service down with 502s, then kept it running 24/7. The person who built it owned the operation too.',
      },
    },
    stack: ['React', 'Vite', 'Cesium', 'deck.gl', 'FastAPI', 'PostgreSQL', 'SAC', 'XGBoost', 'YOLOv8', 'Docker', 'AWS EC2', 'Vercel'],
    links: [
      { kind: 'live', url: 'http://www.arctictwin.com' },
      { kind: 'frontend', url: 'https://github.com/youmin0523/Arctic_Twin_Frontend' },
      { kind: 'backend', url: 'https://github.com/youmin0523/Arctic_Twin_Backend' },
    ],
    pipeline: {
      title: { ko: '공공데이터에서 의사결정 지표까지', en: 'From public data to a decision' },
      nodes: [
        { id: 'a1', label: { ko: '위성·해빙·기상 데이터', en: 'Satellite · ice · weather' } },
        { id: 'a2', label: { ko: 'Cesium 3D 트윈', en: 'Cesium 3D twin' } },
        { id: 'a3', label: { ko: 'AI 4종 (RL·XGBoost·YOLO·LLM)', en: '4 AI models' }, emphasis: true },
        { id: 'a4', label: { ko: '경로 검증 → A* 폴백', en: 'Path check → A* fallback' }, emphasis: true },
        { id: 'a5', label: { ko: '연료비 · ROI · 리스크', en: 'Fuel · ROI · risk' } },
      ],
    },
    shots: [
      { src: 'shots/arctictwin-1.jpg', caption: { ko: '① Cesium 3D 디지털 트윈: 항로·해빙·실시간 선박 대시보드', en: '① Cesium 3D digital twin: route, sea-ice & live vessel dashboard' } },
      { src: 'shots/arctictwin-2.jpg', caption: { ko: '② 위성 지도 위 항로 시각화와 분석 패널', en: '② Route visualization & analysis panels over the satellite map' } },
      { src: 'shots/arctictwin-3.jpg', caption: { ko: '③ Fuel Analysis: 연료 소비·비용 분석', en: '③ Fuel Analysis: consumption & cost' } },
      { src: 'shots/arctictwin-4.jpg', caption: { ko: '④ What-If 시나리오: 조건별 항행 비교', en: '④ What-If scenarios: comparing voyage conditions' } },
      { src: 'shots/arctictwin-6.jpg', caption: { ko: '⑤ 생성된 PDF 보고서: 10p 표·차트 (북극 항로 AI 동향)', en: '⑤ Generated PDF report: 10-page tables & charts' } },
    ],
  },

  /* 02 ──────────────────────────────────────────── AeroInspect */
  {
    id: 'aeroinspect',
    index: '02',
    name: 'AeroInspect',
    period: '2026.04 ~ 06',
    kind: 'team',
    domain: { ko: '건설 · 시설 안전점검', en: 'Construction · facility inspection' },
    user: {
      ko: '건물 외벽 점검 인력, 시설 안전관리자',
      en: 'Façade inspectors and facility safety managers',
    },
    statusQuo: {
      ko: '하자 점검이 사람 눈에 의존하다 보니, 손이 안 닿는 외벽은 빠지고 결과도 검사자마다 달랐습니다. 안전과 직결되는데 일관성이 없었습니다.',
      en: 'Inspection leaned on the human eye, so unreachable façades got skipped and results varied person to person. Safety-critical work, yet inconsistent.',
    },
    insight: {
      ko: '공개 모델은 한국 건축 하자를 잘 못 잡습니다. 도메인을 모르면 데이터부터 어긋나기 때문입니다. “외부 모델을 더 붙이면 좋아진다”는 통념도 그냥 믿지 않고 검증 대상으로 봤습니다.',
      en: 'Off-the-shelf models miss Korean construction defects, because without the domain even the data is wrong. And I treated “more models means better” as a claim to test, not a given.',
    },
    shipped: {
      ko: '하자 20여 종을 6모델 앙상블로 검출하고, 최신 프레임만 처리하는 실시간 드롭 큐와 3D 하자 매핑, LLM 보고서를 붙임.',
      en: 'A 6-model ensemble over 20+ defect types, a real-time drop-queue that processes only the latest frame, 3D defect mapping and LLM reports.',
    },
    outcome: {
      ko: 'M1 recall 90.4%→94.1%, Tier1 추론 60ms 이내, 빌드 이미지 80MB→5.2MB. GPU는 추론할 때만 분리 과금.',
      en: 'M1 recall 90.4%→94.1%, Tier-1 inference under 60ms, build image 80MB→5.2MB, with GPU billed only on demand.',
    },
    competencies: ['immersion', 'measure', 'ownership'],
    metrics: [
      { value: '63,285', label: { ko: '직접 모은 학습 이미지', en: 'images collected & trained on' } },
      { value: '94.1%', label: { ko: 'M1 검출 recall (앙상블, +3.8%p)', en: 'M1 detection recall (ensemble, +3.8pp)' } },
      { value: '<60ms', label: { ko: '실시간 추론 지연 (Tier1)', en: 'real-time inference (Tier 1)' } },
      { value: '80→5.2MB', label: { ko: '빌드 이미지 경량화', en: 'build image slimmed down' } },
    ],
    paar: {
      problem: {
        ko: '건물 하자 점검은 사람 눈에 의존해서, 손이 안 닿는 외벽은 빠지고 결과가 검사자마다 달랐습니다. 안전 판단에 일관성이 없었습니다.',
        en: 'Inspection leaned on the human eye, so unreachable façades were skipped and results varied by person. Safety calls had no consistency.',
      },
      approach: {
        ko: '공개 모델로는 한국 건축 하자가 잘 안 잡혔습니다. 도메인 데이터를 직접 모아 학습하는 수밖에 없다고 판단했고, “모델을 더 붙이면 좋아진다”는 기대도 그대로 믿지 않았습니다.',
        en: 'Off-the-shelf models missed Korean defects, so I concluded I had to gather domain data and train it myself, and I refused to simply believe that more models would help.',
      },
      action: {
        ko: '하자 20여 종을 6개 모델로 나눠 직접 모은 63,285장으로 학습했고, 실시간 추론은 최신 프레임만 처리하는 드롭 큐로 묶었습니다. 기대치는 WBF로 직접 재서, 맞지 않으면 버렸습니다.',
        en: 'I split 20+ defect types across 6 models trained on 63,285 hand-collected images, and wrapped real-time inference in a drop-queue. I measured the assumption with WBF and dropped what didn’t hold.',
      },
      result: {
        ko: '같은 도메인 self-ensemble로 M1 recall을 90.4%에서 94.1%로 올렸고, 오탐만 늘린 외부 모델은 쓰지 않았습니다. Tier1 추론은 60ms 이내, 빌드 이미지는 80MB에서 5.2MB로 줄였고, GPU는 추론할 때만 켜서 운영비를 지켰습니다.',
        en: 'A same-domain self-ensemble lifted M1 recall from 90.4% to 94.1%; the external model only added false positives, so I cut it. Tier-1 inference stays under 60 ms, the build image went from 80 MB to 5.2 MB, and the GPU only comes up on demand to protect the running cost.',
      },
    },
    stack: ['React', 'Three.js', 'FastAPI', 'WebSocket', 'PostgreSQL', 'PyTorch', 'ONNX', 'YOLOv8', 'ResNet50', 'Docker', 'Fly.io', 'GCP'],
    links: [
      { kind: 'live', url: 'http://www.aeroinspect.site' },
      { kind: 'frontend', url: 'https://github.com/youmin0523/AeroInspect_frontend' },
      { kind: 'backend', url: 'https://github.com/youmin0523/AeroInspect_backend' },
    ],
    pipeline: {
      title: { ko: '드론 영상에서 보고서까지', en: 'From drone video to a report' },
      nodes: [
        { id: 'b1', label: { ko: '드론 영상 (30fps)', en: 'Drone video (30fps)' } },
        { id: 'b2', label: { ko: '드롭 큐 (최신 프레임)', en: 'Drop-queue (latest frame)' }, emphasis: true },
        { id: 'b3', label: { ko: '6모델 앙상블 검출', en: '6-model ensemble' }, emphasis: true },
        { id: 'b4', label: { ko: '3D 하자 매핑', en: '3D defect mapping' } },
        { id: 'b5', label: { ko: 'LLM 자동 보고서', en: 'LLM auto report' } },
      ],
    },
    shots: [
      { src: 'shots/aeroinspect-2.jpg', caption: { ko: '① 랜딩: 도면 없이 드론으로 3D 디지털 트윈 완성', en: '① Landing: drone-built 3D digital twin, no blueprint' } },
      { src: 'shots/aeroinspect-1.jpg', caption: { ko: '② 직원 허브: 점검 시작·보고서·현장 관리', en: '② Employee hub: inspection, reports & site management' } },
      { src: 'shots/aeroinspect-7.jpg', caption: { ko: '③ 실시간 하자 검출: 영상 위 bbox와 AI 하자 분석 패널', en: '③ Real-time defect detection: live bbox + AI analysis panel' } },
      { src: 'shots/aeroinspect-3.jpg', caption: { ko: '④ 3D 하자 리포트 뷰어: 건물 트윈 위 하자 위치 매핑', en: '④ 3D defect report: defects mapped onto the building twin' } },
      { src: 'shots/aeroinspect-4.jpg', caption: { ko: '⑤ 3D 리포트: 하자 상세·평면 데이터 뷰어', en: '⑤ 3D report: defect detail & floor-plan viewer' } },
    ],
  },

  /* 03 ───────────────────────────────────────────────── Re:Chord */
  {
    id: 'rechord',
    index: '03',
    name: 'Re:Chord',
    period: '2026.05 ~ 06',
    kind: 'solo',
    domain: { ko: '음악 · 예배/실용음악', en: 'Music · worship & performance' },
    user: {
      ko: '찬양팀, 실용음악 연주자',
      en: 'Worship teams and gigging musicians',
    },
    statusQuo: {
      ko: '매주 새 곡을 연습하는데 팀 키에 맞는 반주(MR)는 구하기 어렵고, 음원 분리와 키 변환, 채보가 전부 따로 놀았습니다.',
      en: 'New songs come every week, but in-key backing tracks are scarce, and separation, transposition and transcription were all separate chores.',
    },
    insight: {
      ko: '사용자가 진짜 원하는 건 “내 팀 키의 반주” 하나입니다. 게다가 분리 품질이 무너지면 그 위에 얹는 코드와 악보가 전부 틀어지기 때문에, 품질을 주장 대신 SDR 수치로 못 박아야 했습니다.',
      en: 'What users really want is one thing: a track in their key. And if separation quality breaks, every chord and score on top breaks too, so I had to pin quality to an SDR number instead of a claim.',
    },
    shipped: {
      ko: '업로드 한 번이면 4모델 앙상블 분리, 키 변환, Whisper·LLM 채보까지. SDR·F1 회귀 게이트를 CI에 박음.',
      en: 'One upload runs a 4-model ensemble split, transposition and Whisper·LLM transcription, with SDR/F1 regression gates baked into CI.',
    },
    outcome: {
      ko: '반주 분리 SDR 15.06dB, 음색 추정 98.3%, pytest 220 게이트. 결제와 도메인 연결만 남기고 1인으로 완성.',
      en: '15.06 dB backing-track SDR, 98.3% timbre estimation, a 220-test gate, built solo to the edge of launch.',
    },
    competencies: ['measure', 'velocity', 'ownership'],
    metrics: [
      { value: '15.06dB', label: { ko: '반주 분리 SDR (실측)', en: 'backing-track SDR (measured)' } },
      { value: '98.3%', label: { ko: '악기 음색 자동 추정', en: 'instrument-timbre estimation' } },
      { value: '220', label: { ko: 'pytest 통과 (CI 게이트)', en: 'pytest passing (CI gate)' } },
      { value: '1인', label: { ko: '기획부터 인프라까지', en: 'solo, plan to infra' } },
    ],
    paar: {
      problem: {
        ko: '찬양팀은 매주 새 곡을 연습하는데 팀 키 반주는 구하기 어렵고, 분리와 키 변환, 채보가 전부 따로였습니다. 정작 사용자가 원하는 건 “내 키의 반주” 하나였습니다.',
        en: 'Worship teams rehearse weekly, but in-key tracks are hard to find and separation, transposition and transcription were all separate. What users wanted was just one thing: a track in their key.',
      },
      approach: {
        ko: '분리 품질이 무너지면 그 위의 코드와 악보가 전부 틀어집니다. 그래서 분리부터 측정 가능한 수치로 잡고, “품질은 주장이 아니라 측정”을 원칙으로 삼았습니다.',
        en: 'If separation breaks, every chord and score on top breaks. So I started by pinning separation to measurable numbers, living by the rule that quality is measured, not claimed.',
      },
      action: {
        ko: '업로드 한 번이면 분리에서 키 변환, 채보까지 끝나도록 묶고, 분리는 모델 4개를 앙상블로 돌렸습니다. SDR·F1 회귀 게이트를 CI에 박아 퇴행을 자동으로 막았습니다.',
        en: 'I chained separation, transposition and transcription behind a single upload, ran four models as an ensemble, and baked SDR/F1 regression gates into CI to auto-block any backslide.',
      },
      result: {
        ko: '반주 분리 SDR 15.06dB, 음색 추정 98.3%를 실측으로 확보했고, pytest 220개가 모든 퇴행을 막습니다. 결제와 도메인 연결만 남기고 혼자 출시 직전까지 만들었습니다.',
        en: 'I measured 15.06 dB SDR and 98.3% timbre estimation, with 220 tests blocking regressions. I built it solo to the edge of launch, with only payments and the domain left.',
      },
    },
    stack: ['React', 'Vite', 'FastAPI', 'Python', 'PyTorch', 'Demucs', 'BS-Roformer', 'Whisper', 'Docker', 'Supabase', 'Cloudflare'],
    links: [
      { kind: 'live', url: 'http://www.youmin.site' },
      { kind: 'repo', url: 'https://github.com/youmin0523/Re-Chord_PJT' },
    ],
    pipeline: {
      title: { ko: '업로드에서 반주까지', en: 'From upload to backing track' },
      nodes: [
        { id: 'c1', label: { ko: '음원 업로드', en: 'Audio upload' } },
        { id: 'c2', label: { ko: '4모델 앙상블 분리', en: '4-model ensemble split' }, emphasis: true },
        { id: 'c3', label: { ko: '키 변환', en: 'Key transpose' } },
        { id: 'c4', label: { ko: 'Whisper·LLM 채보', en: 'Whisper · LLM transcribe' } },
        { id: 'c5', label: { ko: '반주·코드·악보', en: 'Track · chords · score' } },
      ],
    },
    shots: [
      { src: 'shots/rechord-1.jpg', caption: { ko: '① 랜딩: 듣는 음악에서 직접 연주하는 음악으로', en: '① Landing: from listening to playing' } },
      { src: 'shots/rechord-2.jpg', caption: { ko: '② 기능 소개: 분리·키 변환·채보 흐름', en: '② Features: separation, transposition, transcription' } },
      { src: 'shots/rechord-3.jpg', caption: { ko: '③ 작업 화면 / 라이브러리', en: '③ Workspace / library' } },
    ],
  },

  /* 04 ───────────────────────────────────── FDE Smart Shutter ★ */
  {
    id: 'fde-shutter',
    index: '04',
    name: 'FDE Smart Shutter',
    flagship: true,
    period: '2026.05 ~ 06',
    kind: 'solo',
    domain: { ko: '제조 · 방화설비', en: 'Manufacturing · fire-safety' },
    user: {
      ko: '비숙련 견적 담당, 생산·품질·실측자, 거래처, 인증기관',
      en: 'Non-expert estimators, production/QC/field staff, clients, certifiers',
    },
    statusQuo: {
      ko: '발주 단계부터 전문 지식이 필요해 숙련자만 처리할 수 있었고, 품질관리서와 납품확인서는 따로 작성됐습니다. 게다가 이 서류는 프로젝트 끝에 한 번에 발송되는데, 현장 수량과 사이즈를 일일이 대조하느라 매번 많은 시간이 들었고 이력도 남지 않았습니다.',
      en: 'Even ordering took specialist knowledge, so only veterans could handle it, and the QC certificate and delivery confirmation were written separately. Worse, those went out together at the very end, and cross-checking them against on-site quantities and sizes burned hours every project, with nothing traceable left behind.',
    },
    insight: {
      ko: '제가 4년간 그 현장의 PM이라 규칙이 손에 익었고, 발주·품질·실측 담당자와 직접 이야기하며 진짜 병목을 짚었습니다. 시간이 가장 많이 새던 곳은 프로젝트 끝에 품질관리서·납품확인서를 현장 수량·사이즈와 대조하는 작업이었습니다. 동시에 거래처·인증기관이 “원본 엑셀 양식”을 신뢰한다는 것도 알았기에, 규칙과 대조는 코드로 자동화하되 양식은 100% 그대로 살렸습니다. 신뢰를 깨지 않고 자동화하는 것이 핵심이었습니다.',
      en: 'As that floor’s PM for four years the rules were second nature, and I sat with the ordering, QC and field-measurement staff to pin down the real bottleneck. The biggest time sink was reconciling the QC certificate and delivery confirmation against on-site quantities and sizes at the end of a project. I also knew clients and certifiers trust the original Excel forms, so I automated the rules and that reconciliation in code while keeping the forms 100% intact. Automating without breaking that trust was the whole point.',
    },
    shipped: {
      ko: '7개 모델 규칙 엔진, 견적→발주→승인→품질→작업지시→실측 단일 추적선, 품질관리서·납품확인서를 현장 수량·사이즈와 자동 대조해 한 번에 발급하는 자동화, 그리고 사내 실시간 메신저.',
      en: 'A 7-model rule engine, a single traceable thread from quote → order → approval → QC → work-order → measurement, automation that cross-checks the QC certificate and delivery confirmation against on-site quantities and sizes and issues them in one pass, and a real-time in-house messenger.',
    },
    outcome: {
      ko: '이제 비숙련자도 발주·견적 가능. 끝단 서류 대조에 들던 시간을 자동화로 크게 단축. 핵심 계산은 골든 36건으로 잠금. 백엔드 16K LOC·27테이블·23 API를 1인 운영.',
      en: 'Non-experts can now order and quote, the end-stage document reconciliation that used to eat hours is automated, the core math is locked behind 36 golden tests, and a 16K-LOC, 27-table, 23-API backend runs solo.',
    },
    competencies: ['immersion', 'translation', 'ownership', 'velocity'],
    metrics: [
      { value: '16,000', label: { ko: '백엔드 코드 줄 (1인)', en: 'lines of backend, solo' } },
      { value: '27', label: { ko: 'DB 테이블', en: 'DB tables' } },
      { value: '23', label: { ko: 'API 라우터', en: 'API routers' } },
      { value: '36/36', label: { ko: '골든 회귀 테스트 통과', en: 'golden regression tests pass' } },
    ],
    paar: {
      problem: {
        ko: '방화셔터는 발주부터 전문 지식이 필요해 숙련자만 처리했고, 품질관리서·납품확인서는 따로 작성돼 프로젝트 끝에 한꺼번에 나갔습니다. 이때 현장 수량·사이즈를 일일이 대조하느라 시간이 많이 들었고, 견적부터 검사까지 이력도 남지 않았습니다.',
        en: 'Fire-shutter work needed specialist knowledge from the ordering stage, so only veterans handled it, and the QC certificate and delivery confirmation were written separately and sent together at the end. Reconciling them against on-site quantities and sizes burned a lot of time, and nothing was traceable from quote to inspection.',
      },
      approach: {
        ko: '숙련자 머릿속 규칙을 코드로 옮기되, 거래처와 인증기관이 믿고 보는 원본 엑셀 양식은 100% 그대로 살려야 했습니다. 제가 4년간 일한 도메인이라 규칙이 손에 익었고, 발주·품질·실측 담당자와 직접 이야기하며 시간이 가장 많이 새는 지점을 먼저 짚었습니다.',
        en: 'I had to move the veterans’ rules into code while keeping the original Excel forms, the ones clients and certifiers trust, 100% intact. It was my own domain for four years, so the rules were second nature, and I talked directly with the ordering, QC and field staff to first pin down where time leaked most.',
      },
      action: {
        ko: '7개 모델 제작 규칙을 규칙 엔진으로 코드화하고, 발주·품질·실측 담당자와 소통해 끝단에서 품질관리서·납품확인서를 현장 수량·사이즈와 대조하던 수작업을 자동화했습니다. 견적→발주→승인→품질→작업지시→실측을 하나로 잇는 추적 구조에 실시간 사내 메신저까지 붙였습니다.',
        en: 'I codified the 7 models’ rules into a rule engine and, working with the ordering, QC and field staff, automated the manual end-stage reconciliation of the QC certificate and delivery confirmation against on-site quantities and sizes. I tied quote → order → approval → QC → work-order → measurement into one traceable thread and added a real-time in-house messenger.',
      },
      result: {
        ko: '이제 비숙련자도 발주·견적을 낼 수 있고, 끝단 서류 대조에 들던 시간이 크게 줄었습니다. 핵심 계산은 골든 테스트 36건으로 묶었고, 백엔드 16,000줄·27테이블·23 API를 혼자 만들어 Fly.io에 올려 운영 중입니다.',
        en: 'Now non-experts can order and quote, and the hours spent on end-stage document reconciliation dropped sharply. The core calculations are locked behind 36 golden tests, and I built the 16,000-line backend, 27 tables and 23 APIs alone and run it live on Fly.io.',
      },
    },
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'React', 'WebSocket', 'Docker', 'PostgreSQL', 'Fly.io', 'GitHub Actions'],
    links: [
      { kind: 'live', url: 'https://fde-shutter.fly.dev/' },
      { kind: 'org', url: 'https://github.com/fde-factory' },
    ],
    pipeline: {
      title: { ko: '견적에서 실측까지 한 줄로', en: 'One thread: quote to measurement' },
      nodes: [
        { id: 'd1', label: { ko: '견적 (규칙 엔진)', en: 'Quote (rule engine)' }, emphasis: true },
        { id: 'd2', label: { ko: '발주', en: 'Order' } },
        { id: 'd3', label: { ko: '승인', en: 'Approval' } },
        { id: 'd4', label: { ko: '품질', en: 'QC' } },
        { id: 'd5', label: { ko: '작업지시', en: 'Work order' } },
        { id: 'd6', label: { ko: '실측', en: 'Measurement' } },
      ],
    },
    shots: [
      { src: 'shots/fde-5.jpg', caption: { ko: '① GitHub 조직 페이지 (fde-factory.github.io): 스마트팩토리 소개', en: '① GitHub org page (fde-factory.github.io): smart-factory intro' } },
      { src: 'shots/fde-2.jpg', caption: { ko: '② 실적 대시보드: 견적·작업지시·생산 KPI', en: '② Performance dashboard: quote, work-order & production KPIs' } },
      { src: 'shots/fde-1.jpg', caption: { ko: '③ 견적: 7개 모델 제작 규칙 엔진 (원본 엑셀 양식 보존)', en: '③ Quote: rule engine for 7 models, Excel form preserved' } },
      { src: 'shots/fde-3.jpg', caption: { ko: '④ 작업지시 / 공정 보드', en: '④ Work-order / process board' } },
      { src: 'shots/fde-4.jpg', caption: { ko: '⑤ 품질관리서 발급: 자재 종합 검사', en: '⑤ QC certificate issuing: material inspection' } },
    ],
  },

  /* 05 ──────────────────────────────────────── What's in my Closet */
  {
    id: 'closet',
    index: '05',
    name: "What's in my Closet",
    period: '2026.06',
    kind: 'solo',
    domain: { ko: '리테일 · 개인 의류관리', en: 'Retail · personal wardrobe' },
    user: {
      ko: '옷을 자주 사는 개인 소비자',
      en: 'People who shop for clothes often',
    },
    statusQuo: {
      ko: '옷을 사고 나서야 “비슷한 거 있었는데” 하는 일이 잦은데, 정작 그걸 사기 전에 알려주는 앱은 없었습니다.',
      en: 'We so often realize “I already had one like this” only after buying, yet no app actually warns you beforehand.',
    },
    insight: {
      ko: '“비슷하다”는 느낌을 믿을 수 있는 점수로 바꿔야 사용자가 결정을 바꿉니다. 그리고 개인 앱에서는 API 키 요구가 곧 진입장벽이라, 키 0개로도 전 기능이 돌게 폴백을 깔았습니다.',
      en: 'Only when “looks similar” becomes a score you can trust does the user change a decision. And for a personal app, demanding API keys is a barrier, so I made it run with zero keys via fallbacks.',
    },
    shipped: {
      ko: '임베딩과 CIEDE2000 색상거리, 카테고리를 가중 합성한 유사도 엔진과 pgvector 검색, 그리고 외부 5종 폴백.',
      en: 'A similarity engine blending embeddings, CIEDE2000 color distance and category weights, pgvector search, and fallbacks for five external services.',
    },
    outcome: {
      ko: '평가셋 임계값을 직접 보정해 중복 감지 94.7%, 오경보 0. API 키 0개로도 전 기능 동작. Vitest 97, Playwright 12.',
      en: '94.7% duplicate detection with zero false alarms after hand-calibrating the threshold, runs with zero keys, 97 Vitest and 12 Playwright tests.',
    },
    competencies: ['measure', 'ownership', 'velocity'],
    metrics: [
      { value: '94.7%', label: { ko: '중복 감지 정확도', en: 'duplicate-detection accuracy' } },
      { value: '0', label: { ko: '오경보 (평가셋)', en: 'false alarms (eval set)' } },
      { value: '0개', label: { ko: 'API 키로도 전 기능 동작', en: 'API keys needed to run it all' } },
      { value: '97·12', label: { ko: 'Vitest · Playwright', en: 'Vitest · Playwright' } },
    ],
    paar: {
      problem: {
        ko: '옷을 사고 나서야 “비슷한 거 있었는데” 하는 일이 잦은데, 정작 사기 전에 알려주는 앱은 없었습니다.',
        en: 'We keep realizing “I already own one like this” only after buying, yet nothing warns us before the purchase.',
      },
      approach: {
        ko: '“비슷하다”를 느낌이 아니라 믿을 수 있는 점수로 만들어야 했습니다. 그리고 개인 사용자에게 API 키를 요구하는 건 곧 이탈이라고 봤습니다.',
        en: 'I had to turn “looks similar” into a score you can trust. And I saw demanding API keys from a personal user as a guaranteed drop-off.',
      },
      action: {
        ko: '임베딩과 색상거리(CIEDE2000), 카테고리를 가중 합성한 유사도 엔진을 만들고 pgvector로 검색했습니다. 외부 서비스 5종은 키가 없어도 돌아가도록 폴백으로 감쌌습니다.',
        en: 'I built a similarity engine blending embeddings, CIEDE2000 color distance and category weights, searched it with pgvector, and wrapped five external services in fallbacks so it runs with no keys.',
      },
      result: {
        ko: '평가셋으로 임계값을 직접 맞춰 중복 감지 94.7%, 오경보 0을 확인했고, API 키 0개로도 전 기능이 돌아갑니다. Vitest 97개와 Playwright 12개 덕분에 같은 곳을 몇 번이고 갈아엎으며 다듬을 수 있었습니다.',
        en: 'Calibrating the threshold on a labeled set, I confirmed 94.7% accuracy with zero false alarms, and the whole thing runs with no keys. With 97 Vitest and 12 Playwright tests, I could rework the same parts again and again.',
      },
    },
    stack: ['Next.js', 'React', 'TypeScript', 'tRPC', 'Drizzle', 'PostgreSQL', 'pgvector', 'Auth.js', 'Playwright', 'Vitest'],
    links: [{ kind: 'repo', url: 'https://github.com/youmin0523/whats-in-my-closet' }],
    pipeline: {
      title: { ko: '사진 한 장에서 경고까지', en: 'From one photo to a warning' },
      nodes: [
        { id: 'e1', label: { ko: '옷 사진 업로드', en: 'Garment photo' } },
        { id: 'e2', label: { ko: '임베딩 + 색상 + 카테고리', en: 'Embedding + color + category' }, emphasis: true },
        { id: 'e3', label: { ko: 'pgvector 유사도 검색', en: 'pgvector similarity search' }, emphasis: true },
        { id: 'e4', label: { ko: '"비슷한 옷" 경고', en: '"Similar item" warning' } },
      ],
    },
    shots: [
      { src: 'shots/closet-2.jpg', caption: { ko: '① 랜딩: "가진 옷을 알면 충동구매가 멈춥니다"', en: '① Landing: "know what you own, stop impulse buys"' } },
      { src: 'shots/closet-3.jpg', caption: { ko: '② 옷장 대시보드: 카테고리·색상 필터', en: '② Wardrobe dashboard: category & color filters' } },
      { src: 'shots/closet-1.jpg', caption: { ko: '③ 3D 옷장 뷰어: 행거·선반·서랍에 옷 배치', en: '③ 3D wardrobe: garments across rods, shelves & drawers' } },
    ],
  },

  /* 06 ───────────────────────────────────────────────── EggTalk */
  {
    id: 'eggtalk',
    index: '06',
    name: 'EggTalk',
    muted: true,
    period: '2026.02 ~ 03',
    kind: 'team',
    domain: { ko: '도시 모빌리티', en: 'Urban mobility' },
    user: {
      ko: '펫 키우기 앱 사용자',
      en: 'Pet-care app users',
    },
    statusQuo: {
      ko: '펫 키우기만 있는 앱이라 다시 켤 이유가 약했습니다. 매일 쓰는 대중교통 길찾기를 붙여 체류 시간을 늘려보기로 했습니다.',
      en: 'A pet-only app gave little reason to return, so we tried adding the transit routing people use every day to lift retention.',
    },
    insight: {
      ko: '여러 외부 지도 API를 한 번에 쓰되 무료 한도를 넘기지 않는 게 진짜 제약이었습니다. 기능이 아니라 비용이 병목이라, 토큰 버킷과 캐시로 방어했습니다.',
      en: 'The real constraint wasn’t the feature but the bill: combining several map APIs without blowing free quotas. So I defended it with a token bucket and caching.',
    },
    shipped: {
      ko: 'ODsay·Tmap·서울시 실시간 지하철 API를 백엔드에서 묶어, 지하철·버스·도보를 하나의 폴리라인 경로로 렌더.',
      en: 'Proxied ODsay, Tmap and Seoul’s live-subway APIs on the backend, rendering subway, bus and walking as one polyline route.',
    },
    outcome: {
      ko: '이후 팀 리뉴얼로 대부분 교체됐지만, 지도 API와 ODsay로 경로 폴리라인을 직접 그려본 경험은 그대로 남았습니다.',
      en: 'Most was later replaced in a team renewal, but the hands-on experience of rendering route polylines from map APIs stayed.',
    },
    competencies: ['ownership', 'velocity'],
    metrics: [],
    paar: {
      problem: {
        ko: '펫 키우기만 있는 앱이라 다시 켤 이유가 약했습니다. 매일 쓰는 대중교통 길찾기를 붙여 체류 시간을 늘려보기로 했습니다.',
        en: 'A pet-only app gave little reason to come back, so we tried adding the transit routing people use every day.',
      },
      approach: {
        ko: '여러 외부 지도 API를 한 번에 쓰되 무료 한도를 넘기지 않는 구조가 필요했습니다. 기능보다 비용이 병목이었습니다.',
        en: 'I needed to combine several map APIs without blowing past their free quotas. Cost, not features, was the bottleneck.',
      },
      action: {
        ko: 'ODsay·Tmap·서울시 실시간 지하철 API를 백엔드에서 묶고, 지하철·버스·도보를 지도 위 하나의 폴리라인 경로로 그렸습니다. 토큰 버킷과 24h 캐시로 호출을 방어했습니다.',
        en: 'I proxied ODsay, Tmap and Seoul’s live subway APIs on the backend and drew subway, bus and walking as a single polyline, with a token bucket and 24h cache defending the calls.',
      },
      result: {
        ko: '이후 팀 리뉴얼로 대부분 교체됐지만, 지도 API와 ODsay로 경로 폴리라인을 직접 그려본 경험은 그대로 남았습니다.',
        en: 'Most was later replaced in a team renewal, but the hands-on experience of rendering route polylines from map APIs and ODsay stayed with me.',
      },
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Kakao Maps SDK', 'ODsay API', 'Tmap API'],
    links: [],
    pipeline: {
      title: { ko: '출발·도착에서 경로까지', en: 'From start/end to a route' },
      nodes: [
        { id: 'f1', label: { ko: '출발 · 도착', en: 'Origin · destination' } },
        { id: 'f2', label: { ko: 'ODsay · Tmap API', en: 'ODsay · Tmap API' } },
        { id: 'f3', label: { ko: '지도 폴리라인', en: 'Map polyline' }, emphasis: true },
      ],
    },
    shots: [
      { src: 'shots/eggtalk-1.jpg', caption: { ko: 'MS 모듈: Kakao 지도 기반 대중교통 길찾기 화면 (로컬 실행)', en: 'MS module: Kakao-map transit routing screen (local run)' } },
    ],
  },
]

/* ──────────────────────────────────────────────────────────────
 * 투입 도메인 맵. 6개 산업에 forward-deploy 한 범위.
 * ────────────────────────────────────────────────────────────── */
export interface DomainEntry {
  code: string
  id: string // 대상 배포 도식 id (앵커 스크롤용)
  project: string
  label: L10n
  line: L10n
}

export const domains: DomainEntry[] = dossiers.map((d, i) => ({
  code: `D-0${i + 1}`,
  id: d.id,
  project: d.name,
  label: d.domain,
  line: d.user,
}))
