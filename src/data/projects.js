export const projectFilters = ['All', 'VR', 'Robotics', 'Digital Twin', 'AI', 'HCI']

export const projects = [
  {
    id: 'digital-twin-vehicle-sync',
    index: '01',
    year: '2023',
    title: '실차–가상 차량 디지털 트윈',
    subtitle: 'REAL–VIRTUAL VEHICLE SYNC',
    description:
      '아두이노 기반 차량의 센서와 주행 상태를 Unity 가상 모델에 실시간으로 반영한 디지털 트윈 프로토타입입니다.',
    challenge:
      '실제 차량의 움직임과 센서 데이터를 네트워크로 전달하고, 가상 차량이 같은 상태와 경로를 따라가도록 동기화하는 것이 핵심 과제였습니다.',
    contribution: [
      'ESP Wi-Fi 통신을 이용한 실시간 데이터 전달 구조 설계',
      'Unity 내 실차 대응 가상 차량과 주행 환경 구성',
      '장애물 인식과 차량 상태를 비교할 수 있는 데모 시나리오 구현',
    ],
    categories: ['Digital Twin', 'Robotics'],
    period: '2023',
    role: '프로토타입 개발 · 시스템 통합',
    technologies: ['Unity', 'Arduino', 'ESP Wi-Fi', 'C#', 'Sensor Fusion'],
    achievements: [
      '실차와 가상 차량의 동시 주행 데모 구현',
      '센서 기반 현실–가상 상태 동기화 가능성 검증',
    ],
    image: '/media/2023/digital-twin-vehicle-cover.jpg',
    imageAlt: '실제 소형 차량과 Unity 가상 차량의 동기화 화면',
    paperUrl: '',
    videoUrl: '/media/2023/digital-twin-vehicle-demo.mp4',
    codeUrl: '',
    codeStatus: 'Private prototype',
    featured: true,
  },
  {
    id: 'vr-battlefield-driving-simulator',
    index: '02',
    year: '2023',
    title: 'VR 전장 주행 시뮬레이터',
    subtitle: 'IMMERSIVE DRIVING SIMULATION',
    description:
      'HMD와 드라이빙 시트를 결합해 전장 환경의 주행·상황 인지·팀 기반 대응을 훈련할 수 있도록 제작한 몰입형 시뮬레이터입니다.',
    challenge:
      '넓은 전장 상황을 여러 시점에서 파악하면서도 운전석의 조작감과 차량 움직임을 자연스럽게 연결하는 것이 중요했습니다.',
    contribution: [
      'Unity 기반 전장 환경과 차량 주행 시나리오 구성',
      'Meta Quest 2·Vive Pro Eye 대응 VR 인터랙션 구현',
      '드라이빙 휠과 시트를 활용한 조작 및 피드백 환경 연동',
    ],
    categories: ['VR', 'Robotics'],
    period: '2023',
    role: 'VR 인터랙션 · 주행 시뮬레이션 개발',
    technologies: ['Unity', 'Meta Quest 2', 'Vive Pro Eye', 'Driving Wheel', 'Photon'],
    achievements: [
      '운전 시점과 전술 시점을 결합한 다중 뷰 시연',
      '실물 운전 장치와 VR 환경을 연결한 훈련 데모 완성',
    ],
    image: '/media/2023/vr-battlefield-driving-cover.jpg',
    imageAlt: '전장 지형과 운전 시점, 드라이빙 시트가 함께 표시된 VR 시뮬레이션',
    paperUrl: '',
    videoUrl: '/media/2023/vr-battlefield-driving-demo.mp4',
    codeUrl: '',
    codeStatus: 'Private prototype',
    featured: true,
  },
  {
    id: 'ros-unity-unmanned-vehicle',
    index: '03',
    year: '2023',
    title: 'ROS–Unity 무인차량 시뮬레이션',
    subtitle: 'ROBOT DATA FUSION',
    description:
      'TurtleBot3의 LiDAR·SLAM 데이터를 Unity 환경과 연결해 실제 로봇과 가상 로봇의 상태를 동기화한 무인차량 시뮬레이션입니다.',
    challenge:
      'ROS의 센서·내비게이션 데이터와 Unity의 3D 공간을 안정적으로 연결하고, 가상 환경에서도 실제 로봇의 이동과 장애물 정보를 일치시켜야 했습니다.',
    contribution: [
      'ROS-TCP-Connector와 ROS# 기반 통신 구조 구성',
      '2D LiDAR SLAM 맵과 Unity 3D 환경의 데이터 매핑',
      '목표 지점 이동과 장애물 회피를 확인하는 테스트 환경 구축',
    ],
    categories: ['Robotics', 'Digital Twin'],
    period: '2023',
    role: '로봇–시뮬레이터 연동 · 데이터 시각화',
    technologies: ['ROS', 'Unity', 'TurtleBot3', 'LiDAR', 'SLAM', 'ROS-TCP-Connector'],
    achievements: [
      '실제·가상 로봇 간 상태 동기화 데모 구현',
      '가상 환경에서 경로 계획과 장애물 회피 과정 시각화',
    ],
    image: '/media/2023/ros-unity-simulation-cover.jpg',
    imageAlt: 'ROS와 Unity로 구성한 무인차량 이동 및 LiDAR 시뮬레이션 화면',
    paperUrl: '',
    videoUrl: '/media/2023/ros-unity-simulation-demo.mp4',
    codeUrl: '',
    codeStatus: 'Private prototype',
    featured: true,
  },
  {
    id: 'gpt-vr-training-simulator',
    index: '04',
    year: '2023',
    title: 'GPT 기반 VR 훈련 시뮬레이션',
    subtitle: 'GENERATIVE TRAINING INTERFACE',
    description:
      '가상 훈련 환경 안에서 GPT와 질의응답하고, 응답과 시나리오 정보를 공간 UI로 확인할 수 있도록 설계한 VR 프로토타입입니다.',
    challenge:
      '키보드 사용이 어려운 HMD 환경에서 질문을 입력하고 긴 응답을 읽을 수 있는 인터페이스와 연속적인 대화 흐름이 필요했습니다.',
    contribution: [
      'VR 환경에 맞는 질문 입력·응답 표시 UI 설계',
      '대화 맥락을 이어가는 GPT 기반 질의응답 흐름 구성',
      '교육·훈련 시나리오에서 활용 가능한 데모 환경 구현',
    ],
    categories: ['VR', 'AI', 'HCI'],
    period: '2023',
    role: 'VR UI/UX · 생성형 AI 인터랙션 개발',
    technologies: ['Unity', 'GPT', 'OpenAI API', 'Meta Quest 2', 'C#', 'Python'],
    achievements: [
      'HMD 환경에서 동작하는 대화형 훈련 인터페이스 구현',
      '프롬프트 기반 교육 시나리오 생성 가능성 검증',
    ],
    image: '/media/2023/gpt-vr-training-cover.jpg',
    imageAlt: 'VR HMD 사용자가 GPT 기반 훈련 인터페이스를 시연하는 모습',
    paperUrl: '',
    videoUrl: '/media/2023/gpt-vr-training-demo.mp4',
    codeUrl: '',
    codeStatus: 'Private prototype',
    featured: false,
  },
  {
    id: 'vr-museum-curator',
    index: '05',
    year: '2023',
    title: '대화형 VR 박물관 큐레이터',
    subtitle: 'CONVERSATIONAL MUSEUM GUIDE',
    description:
      '가상 박물관에서 작품과 유물을 탐색하고, 음성 질문을 통해 작품 설명·작가 정보·관련 지식을 확인하는 대화형 VR 콘텐츠입니다.',
    challenge:
      'VR 컨트롤러로 전시물을 탐색하는 흐름과 음성 질문·응답 인터페이스를 하나의 자연스러운 관람 경험으로 연결해야 했습니다.',
    contribution: [
      '가상 전시 공간과 전시물 중심의 탐색 동선 구성',
      '질문 녹음·응답 표시·추천 질문으로 이어지는 공간 UI 설계',
      '작품과 유물을 직접 들어보는 VR 인터랙션 구현',
    ],
    categories: ['VR', 'AI', 'HCI'],
    period: '2023',
    role: 'VR 콘텐츠 · 대화 인터페이스 개발',
    technologies: ['Unity', 'VR Interaction', 'Voice UI', 'Conversational AI'],
    achievements: [
      '작품 설명과 음성 질의응답이 결합된 관람 데모 구현',
      '경남 SW 경진대회 프로젝트 시연 자료 제작',
    ],
    image: '/media/2023/vr-museum-curator-cover.jpg',
    imageAlt: '가상 박물관의 작품 설명과 음성 질문 인터페이스',
    paperUrl: '',
    videoUrl: '/media/2023/vr-museum-curator-highlight.mp4',
    codeUrl: '',
    codeStatus: 'Private prototype',
    featured: false,
  },
  {
    id: 'vr-investment-risk-experience',
    index: '06',
    year: '2023',
    title: '몰입형 VR 투자위험 체험 콘텐츠',
    subtitle: 'EXPERIENTIAL FINANCIAL EDUCATION',
    description:
      '투자 성공과 손실을 하나의 VR 스토리로 경험하게 하여 무리한 투자와 부채 위험을 학습하도록 설계한 몰입형 금융교육 연구입니다.',
    challenge:
      '투자 지식이 적은 사용자도 짧은 체험 안에서 의사결정과 결과의 변화를 이해하고, 실제 투자처럼 느낄 수 있는 시나리오가 필요했습니다.',
    contribution: [
      'NPC 대화–이동–투자로 이어지는 반복형 VR 시나리오 설계',
      '매수·매도·잔고·수익률을 조작하는 공간형 투자 차트 구현',
      '50명 대상 실재감·몰입감·교육 효과 설문 분석',
    ],
    categories: ['VR', 'HCI'],
    period: '2023.03 — 2023.06',
    role: '제1저자 · 연구 및 VR 콘텐츠 개발',
    technologies: ['Unity', 'XR Interaction Toolkit', 'Meta Quest 2', 'C#', 'Mixamo'],
    achievements: [
      '한국정보기술학회논문지 제21권 제6호 게재',
      'VR 기반 금융교육의 실재감과 몰입 가능성 확인',
    ],
    image: '/media/2023/vr-investment-risk-cover.jpg',
    imageAlt: 'VR 투자위험 콘텐츠의 투자 차트와 수익·손실 화면',
    paperUrl: 'https://doi.org/10.14801/jkiit.2023.21.6.127',
    videoUrl: '',
    codeUrl: '',
    codeStatus: 'Research prototype',
    featured: true,
  },
]

export function findProject(id) {
  return projects.find((project) => project.id === id)
}
