// FDE(Forward Deployed Engineer) 관점 포트폴리오의 UI 문자열.
// 프로젝트/도식 콘텐츠는 /data/fde.ts 에 있음.

export interface Dict {
  nav: {
    thesis: string
    model: string
    domains: string
    dossiers: string
    contact: string
  }
  hero: {
    status: string
    role: string
    tagline: string
    sub: string
    scroll: string
  }
  thesis: {
    label: string
    heading: string
    body: string[]
    pathLabel: string
    path: { code: string; title: string; desc: string }[]
  }
  model: {
    label: string
    heading: string
    note: string
  }
  domains: {
    label: string
    heading: string
    note: string
    userPrefix: string
  }
  dossiers: {
    label: string
    heading: string
    note: string
    flagship: string
    deployed: string
    team: string
    solo: string
    domainLabel: string
    userLabel: string
    statusLabel: string
    insightLabel: string
    shippedLabel: string
    outcomeLabel: string
    competencyLabel: string
    pipeline: string
    problem: string
    approach: string
    action: string
    result: string
    live: string
    frontend: string
    backend: string
    repo: string
    org: string
  }
  contact: {
    label: string
    heading: string
    line: string
    email: string
    github: string
    mainSite: string
    backToTop: string
  }
  footer: {
    built: string
    note: string
  }
}

const ko: Dict = {
  nav: {
    thesis: '관점',
    model: '역량',
    domains: '도메인',
    dossiers: '배포 도식',
    contact: '연락',
  },
  hero: {
    status: 'FORWARD DEPLOYED · 6 DOMAINS · STATUS: LIVE',
    role: 'Forward Deployed Engineer',
    tagline: '현장에 투입돼,\n도메인을 코드로 옮깁니다.',
    sub: '문제를 현장의 언어로 듣고, 산출물을 배포하고, 성과를 숫자로 소유합니다.',
    scroll: '스크롤',
  },
  thesis: {
    label: '관점',
    heading: 'FDE는 결과를\n현장에서 소유한다',
    body: [
      'Forward Deployed Engineer는 제품을 들고 고객 현장에 투입돼, 그들의 실제 워크플로를 이해하고, 핵심 제품과 현장의 messy한 현실 사이를 잇는 사람입니다. 코드를 짜는 게 아니라 결과를 만드는 게 일입니다.',
      '저는 4년간 방화셔터 제조 현장의 PM으로 일하며 문제를 정의하고 풀었고, 그 현장을 코드로 옮기고 싶어 개발자가 됐습니다. 그래서 제 강점은 명확합니다 — 낯선 도메인에 빠르게 투입돼, 현장의 언어로 문제를 듣고, 숫자로 답하는 산출물을 배포하고, 운영까지 소유하는 것.',
      '아래 6개의 배포 도식은 같은 프로젝트를 “무엇을 만들었나”가 아니라 “어떤 현장에 투입돼 무엇을 바꿨나”로 다시 풀어낸 기록입니다.',
    ],
    pathLabel: '현장에서 코드로 — 궤적',
    path: [
      {
        code: '01',
        title: '제조 현장 PM · 4년',
        desc: '방화셔터 설계·견적·생산·현장 관리. 도메인 규칙이 손에 익은 시기.',
      },
      {
        code: '02',
        title: '풀스택 전환',
        desc: '현장에서 정의하던 문제를 직접 코드로 푸는 개발자로. 6개 프로젝트 기획→배포.',
      },
      {
        code: '03',
        title: 'Forward Deployed',
        desc: '해운·건설·음악·제조·리테일·모빌리티 — 6개 도메인에 투입해 산출물을 소유.',
      },
    ],
  },
  model: {
    label: '역량',
    heading: 'FDE 역량 맵',
    note: '각 역량이 어떤 배포에서 실제로 드러났는지로 적었습니다. 말이 아니라 근거로.',
  },
  domains: {
    label: '도메인',
    heading: '투입한 현장',
    note: '한 산업에 머문 게 아니라, 6개의 서로 다른 도메인에 투입해 각자의 현실을 코드로 옮겼습니다.',
    userPrefix: '사용자',
  },
  dossiers: {
    label: '배포 도식',
    heading: 'Deployment Dossiers',
    note: '프로젝트 6종을 FDE 관점으로 재해석 — 도메인 · 현장의 현실 · 거기서 얻은 통찰 · 배포물 · 소유한 성과, 그리고 PAAR.',
    flagship: 'FLAGSHIP DEPLOYMENT',
    deployed: 'DEPLOYED',
    team: '팀',
    solo: '개인',
    domainLabel: '도메인',
    userLabel: '현장 사용자',
    statusLabel: '투입 전 현실',
    insightLabel: '현장에서 얻은 통찰',
    shippedLabel: '배포물',
    outcomeLabel: '소유한 성과',
    competencyLabel: '입증한 역량',
    pipeline: '동작 흐름',
    problem: '문제',
    approach: '접근',
    action: '실행',
    result: '결과',
    live: '라이브',
    frontend: '프론트엔드',
    backend: '백엔드',
    repo: '저장소',
    org: '조직',
  },
  contact: {
    label: '연락',
    heading: '현장에 투입할\n팀을 찾습니다',
    line: '새 도메인에 빠르게 투입돼 문제를 코드로 옮기고 성과까지 소유할 엔지니어가 필요하다면 편하게 연락 주세요.',
    email: '이메일',
    github: '깃허브',
    mainSite: '메인 포트폴리오',
    backToTop: '맨 위로',
  },
  footer: {
    built: 'React · GSAP · Framer Motion',
    note: 'FDE 관점 포트폴리오',
  },
}

const en: Dict = {
  nav: {
    thesis: 'Thesis',
    model: 'Model',
    domains: 'Domains',
    dossiers: 'Dossiers',
    contact: 'Contact',
  },
  hero: {
    status: 'FORWARD DEPLOYED · 6 DOMAINS · STATUS: LIVE',
    role: 'Forward Deployed Engineer',
    tagline: 'I deploy into the field\nand turn the domain into code.',
    sub: 'I hear the problem in the field’s own language, ship the artifact, and own the outcome in numbers.',
    scroll: 'Scroll',
  },
  thesis: {
    label: 'Thesis',
    heading: 'An FDE owns the\noutcome in the field',
    body: [
      'A Forward Deployed Engineer deploys into the customer’s world with the product, learns their actual workflow, and bridges the core product and the messy reality on the ground. The job isn’t to write code — it’s to produce the outcome.',
      'I spent four years as a PM on a fire-shutter manufacturing floor, defining and solving real problems, and became a developer to put that floor into code. So my edge is clear — deploy fast into an unfamiliar domain, hear the problem in its own language, ship an artifact that answers in numbers, and own the operation.',
      'The six dossiers below retell the same projects not as “what I built,” but as “which field I deployed into and what I changed.”',
    ],
    pathLabel: 'From the field to code — trajectory',
    path: [
      {
        code: '01',
        title: 'Manufacturing PM · 4 yrs',
        desc: 'Fire-shutter design, estimation, production and on-site management — where the domain rules became second nature.',
      },
      {
        code: '02',
        title: 'Into full-stack',
        desc: 'From defining problems on the floor to solving them directly in code — six projects planned to deployment.',
      },
      {
        code: '03',
        title: 'Forward deployed',
        desc: 'Shipping · construction · music · manufacturing · retail · mobility — deployed into six domains and owned the result.',
      },
    ],
  },
  model: {
    label: 'Model',
    heading: 'The FDE competency map',
    note: 'Written as where each competency actually showed up in a deployment — evidence, not adjectives.',
  },
  domains: {
    label: 'Domains',
    heading: 'Fields deployed into',
    note: 'Not one industry, but six different domains — each with its own reality moved into code.',
    userPrefix: 'User',
  },
  dossiers: {
    label: 'Dossiers',
    heading: 'Deployment Dossiers',
    note: 'Six projects retold through the FDE lens — domain · the reality on the ground · the insight it gave · what shipped · the outcome owned, plus PAAR.',
    flagship: 'FLAGSHIP DEPLOYMENT',
    deployed: 'DEPLOYED',
    team: 'Team',
    solo: 'Solo',
    domainLabel: 'Domain',
    userLabel: 'Field user',
    statusLabel: 'Reality before',
    insightLabel: 'Insight from the field',
    shippedLabel: 'Shipped',
    outcomeLabel: 'Outcome owned',
    competencyLabel: 'Competencies shown',
    pipeline: 'How it works',
    problem: 'Problem',
    approach: 'Approach',
    action: 'Action',
    result: 'Result',
    live: 'Live',
    frontend: 'Frontend',
    backend: 'Backend',
    repo: 'Repo',
    org: 'Org',
  },
  contact: {
    label: 'Contact',
    heading: 'Looking for a team\nto deploy into',
    line: 'If you need an engineer who deploys fast into a new domain, turns the problem into code and owns the outcome, let’s talk.',
    email: 'Email',
    github: 'GitHub',
    mainSite: 'Main portfolio',
    backToTop: 'Back to top',
  },
  footer: {
    built: 'React · GSAP · Framer Motion',
    note: 'FDE-lens portfolio',
  },
}

export const dict: Record<'ko' | 'en', Dict> = { ko, en }
