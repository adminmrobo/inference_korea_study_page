/* ==========================================================================
   Inference Korea 스터디 보드 — 기본 데이터
   --------------------------------------------------------------------------
   ★ 발제자·날짜는 구글 시트(시간표)를 고치면 자동으로 반영됩니다.
     이 파일은 시트를 읽지 못할 때 보이는 기본값과, 잘 바뀌지 않는 내용
     (책 범위, 논문, 영상, Zoom, 링크, LangCon)을 담고 있습니다.
   ★ 한국어(ko) · 영어(en) · 중국어(zh) 세 언어가 이 파일 하나를 함께 씁니다.
   ========================================================================== */
window.STUDY = {
  community: "Inference Korea",
  communityUrl: "https://songys.github.io/inference-korea/",
  slogan: "From Text to Action",
  startTime: "20:00",          // 기본 시작 시각 (KST). 시트에 '시간' 열을 만들면 그 값이 우선
  durationMin: 120,            // 캘린더에 넣을 때 쓰는 모임 길이(분)

  book: {
    title: "Inference Engineering",
    cite: "Kiely, P. (2026). Inference engineering. Baseten Books.",
    home: "https://www.baseten.co/inference-engineering/",
    read: "https://www.baseten.co/inference-engineering/book/"
  },

  /* 구글 시트: 열 때마다 '회차'·'날짜'·'발제자' 열을 읽습니다.
     선택 열(있으면 읽음): '시간', '완료', '발표자료', '비고'(휴강이라고 적으면 건너뜀) */
  sheet: {
    sync: true,
    id: "1pVf5_bPLA5_UhImUO7EJ_Puh3Q5b485w65WVo1QlFsI",
    gid: "0",
    view: "https://docs.google.com/spreadsheets/d/1pVf5_bPLA5_UhImUO7EJ_Puh3Q5b485w65WVo1QlFsI/edit?usp=sharing"
  },

  zoom: {
    url: "https://us02web.zoom.us/j/88459162312?pwd=jSA93w9V4X3HRXhyauV6fANPBrJrxP.1",
    id: "884 5916 2312",
    pw: "11111"
  },
  slidesFolder: "https://drive.google.com/drive/folders/1NxhUYActOe-POABwqiYdxXBaBg5tY44c",
  discord: "",                 // Discord 초대 링크가 생기면 넣으세요. 비어 있으면 안내 문구만 보입니다.

  credit: {
    name: "Reon Ahn (Ahn, Sang-Sun)",
    mail: "sangsun.ahn@m-robo.com",
    page: "https://www.ahnboat.xyz",
    pageText: "www.ahnboat.xyz"
  },

  /* 상단 띠에 흘러가는 추가 공지 (다음 모임·빈 발제 자리는 자동). 언어별로 적습니다. */
  notices: { ko: [], en: [], zh: [] },

  /* 발제자 이름의 영문 표기 (영어·중국어 페이지에서 사용). 없으면 시트에 적힌 그대로 보입니다. */
  names: {
    "송영숙": "Youngsook Song", "조현석": "Hyunseok Cho", "권갑진": "Gapjin Kwon",
    "박조은": "Joeun Park", "안상선": "Sangseon Ahn",
    "김지은": "Jieun Kim", "이창용": "Changyong Lee", "송태의": "Taeui Song",
    "김수용": "Suyong Kim", "송치성": "Chiseong Song"
  },

  /* 우리 행사 LangCon */
  langcon: {
    name: "LangCon 2026",
    theme: "From Text to Action: 언어 모델이 로봇을 만났을 때",
    theme_en: "From Text to Action: When Language Models Meet Robots",
    theme_zh: "From Text to Action：当语言模型遇见机器人",
    date: "2026-02-28",
    time: "10:00–18:00",
    venue: "마이크로소프트 광화문오피스 (서울특별시 종로구 중학동 19 더케이트윈타워 A동 13층)",
    venue_en: "Microsoft Gwanghwamun Office (The K Twin Towers A, 13F, 19 Junghak-dong, Jongno-gu, Seoul)",
    venue_zh: "微软光化门办公室（首尔市钟路区中学洞19号 The K Twin Towers A栋13层）",
    sponsors: "Microsoft · Hanbit Media · Lablup",
    staff: "송영숙, 송치성, 박신홍, 이여원, 송명근, 이도희, 박조은, 박혜웅",
    links: [
      { key: "home", url: "https://songys.github.io/2026Langcon/" },
      { key: "program", url: "https://songys.github.io/2026Langcon/schedule.html" },
      { key: "history", url: "https://songys.github.io/2026Langcon/history.html" },
      { key: "faq", url: "https://songys.github.io/2026Langcon/faq.html" }
    ],
    talks: [
      ["10:00", "Human-centered physical intelligence", "최성준", "고려대학교 인공지능학과"],
      ["10:40", "로봇 제어를 위한 AI 인터렉션 UI/UX 시스템과 로봇서비스", "이현종", "Roboworks / Makeware"],
      ["11:20", "Physical AI 글로벌 트렌드", "최수환", "RLWRLD(리얼월드)"],
      ["13:00", "Physical AI Guardrails for Real-World Humanoid Robots", "권태윤", "마음AI, 서울대학교"],
      ["13:35", "MuJoCo 기반 LLM Agent를 이용한 Panda-Omron 모바일 매니퓰레이터 제어 시스템", "현청천", "주식회사 위드알엘"],
      ["14:10", "Detect Anything, Token by Token: The Perception with LLM-based VLMs", "차금강", "CMES"],
      ["15:00", "쓰지 말고 말하세요: SLM(Speech Language Model)이 바꾸는 음성 AI", "송치성", "mpWAV"],
      ["15:35", "에이전트 프레임워크가 라즈베리 파이를 만났을 때", "저스틴 유", "Microsoft"],
      ["16:25", "대화를 알아 듣는 로봇 만들기 - 자연어를 알아듣는 로봇", "민형기", "핑크랩"],
      ["17:00", "잘 못들었습니다... 불완전한 텍스트 명령을 극복하는 로봇의 강화학습 및 베이지안 추론", "안상선", "엠로보"]
    ],
    history: [
      { year: 2025, site: "https://songys.github.io/2025Langcon/", video: "https://www.youtube.com/playlist?list=PLqkITFr6P-oT844v0vKFN1FjobLB0CRjl" },
      { year: 2024, site: "https://songys.github.io/2024Langcon/", video: "https://www.youtube.com/playlist?list=PLqkITFr6P-oQ9YXCr5rsMGS1uyMqwA-H9" },
      { year: 2023, site: "https://songys.github.io/2023Langcon/", video: "https://www.youtube.com/playlist?list=PLqkITFr6P-oQwn2hcDauXFht48XHfJojQ" },
      { year: 2021, site: "https://songys.github.io/2021Langcon/", video: "https://www.youtube.com/playlist?list=PLqkITFr6P-oTd4YenELiGHcKSBdgVaC0L" },
      { year: 2020, site: "https://songys.github.io/2020LangconOnOff/", video: "https://www.youtube.com/playlist?list=PLqkITFr6P-oRTpBB7GZB7zRq70RQ4Brqt" },
      { year: 2019, site: "https://songys.github.io/2019LangCon/", video: "https://youtu.be/NV5rjDRCebk" }
    ]
  },

  /* 책 장(章) 정보 */
  chapters: [
    { no: 0, en: "Inference", ko: "추론", zh: "推理", url: "https://www.baseten.co/inference-engineering/book/00-inference/", sections: [] },
    { no: 1, en: "Prerequisites", ko: "시작 전에 정할 것", zh: "前置准备", url: "https://www.baseten.co/inference-engineering/book/01-prerequisites/",
      sections: ["1.1 Scale and Specialization", "1.2 About Your App", "1.3 Model Selection", "1.4 Measuring Latency and Throughput"] },
    { no: 2, en: "Models", ko: "모델", zh: "模型", url: "https://www.baseten.co/inference-engineering/book/02-models/",
      sections: ["2.1 Neural Networks", "2.2 LLM Inference Mechanics", "2.3 Image Generation Inference Mechanics", "2.4 Calculating Inference Bottlenecks", "2.5 Optimizing Attention"] },
    { no: 3, en: "Hardware", ko: "하드웨어", zh: "硬件", url: "https://www.baseten.co/inference-engineering/book/03-hardware/",
      sections: ["3.1 GPU Architecture", "3.2 GPU Architecture Generations", "3.3 Instances", "3.4 Other Datacenter Accelerator Options", "3.5 Local Inference"] },
    { no: 4, en: "Software", ko: "소프트웨어", zh: "软件", url: "https://www.baseten.co/inference-engineering/book/04-software/",
      sections: ["4.1 CUDA", "4.2 Deep Learning Frameworks and Libraries", "4.3 Inference Engines", "4.4 NVIDIA Dynamo", "4.5 Performance Benchmarking and Load Testing"] },
    { no: 5, en: "Techniques", ko: "최적화 기법", zh: "优化技术", url: "https://www.baseten.co/inference-engineering/book/05-techniques/",
      sections: ["5.1 Quantization", "5.2 Speculative Decoding", "5.3 Caching", "5.4 Model Parallelism", "5.5 Disaggregation"] },
    { no: 6, en: "Modalities", ko: "입출력 유형", zh: "模态", url: "https://www.baseten.co/inference-engineering/book/06-modalities/",
      sections: ["6.1 Vision Language Models", "6.2 Embedding Models", "6.3 ASR Models", "6.4 TTS Models", "6.5 Image Generation Models", "6.6 Video Generation Models"] },
    { no: 7, en: "Production", ko: "운영", zh: "生产运营", url: "https://www.baseten.co/inference-engineering/book/07-production/",
      sections: ["7.1 Containerization", "7.2 Autoscaling", "7.3 Multi-Cloud Capacity Management", "7.4 Testing and Deployment", "7.5 Client Code", "7.6 Production Inference with Baseten"] }
  ],

  /* 회차별 기본값. 날짜·발제자는 시트가 덮어씁니다.
     title/goal/range 는 한국어, _en 은 영어, _zh 는 중국어 */
  sessions: [
    { no: 1, date: "2026-10-24", chapters: [0, 1],
      title: "추론의 개념과 성능 평가",
      title_en: "Inference Concepts and Performance Evaluation",
      title_zh: "推理的概念与性能评估",
      range: "0장 Inference 전체 · 1장 Prerequisites 1.1–1.4",
      range_en: "Ch. 0 Inference (entire) · Ch. 1 Prerequisites 1.1–1.4",
      range_zh: "第0章 Inference 全章 · 第1章 Prerequisites 1.1–1.4",
      reads: ["0 Inference", "1.1 Scale and Specialization", "1.2 About Your App", "1.3 Model Selection", "1.4 Measuring Latency and Throughput"],
      goal: "학습(training)과 추론(inference)을 구분하고, 모델 선택 시 지연 시간(latency)·처리량(throughput)·품질을 함께 고려하는 이유를 설명한다.",
      goal_en: "Distinguish training from inference and explain why latency, throughput, and quality must be considered together when selecting a model.",
      goal_zh: "区分训练与推理，并说明在选择模型时为何必须同时考虑延迟、吞吐量与质量。",
      paperInfo: { short: "LiveBench", title: "LiveBench: A Challenging, Contamination-Limited LLM Benchmark", year: 2024, url: "https://arxiv.org/pdf/2406.19314v2" },
      video: { title: "Apple — Get started with MLX for Apple silicon", url: "https://developer.apple.com/videos/play/wwdc2025/315/" },
      book: "송영숙", paper: "조현석" },

    { no: 2, date: "2026-10-31", chapters: [2],
      title: "신경망과 언어 모델의 생성 과정",
      title_en: "Neural Networks and the Language Model Generation Process",
      title_zh: "神经网络与语言模型的生成过程",
      range: "2장 Models 전반 · 도입부, 2.1–2.2",
      range_en: "Ch. 2 Models, first half · intro, 2.1–2.2",
      range_zh: "第2章 Models 前半 · 引言、2.1–2.2",
      reads: ["2 Introduction", "2.1 Neural Networks", "2.2 LLM Inference Mechanics"],
      goal: "토큰화(tokenization), 입력 처리(prefill), 토큰 생성(decode)의 흐름과 어텐션(attention)의 역할을 설명한다.",
      goal_en: "Explain the flow of tokenization, prefill, and decoding, and the role of attention.",
      goal_zh: "说明分词（tokenization）、预填充（prefill）、解码（decode）的流程以及注意力（attention）的作用。",
      paperInfo: { short: "Transformer", title: "Attention Is All You Need", year: 2017, url: "https://arxiv.org/pdf/1706.03762v7" },
      video: { title: "Apple — Explore large language models on Apple silicon with MLX", url: "https://developer.apple.com/videos/play/wwdc2025/298/" },
      book: "권갑진", paper: "송영숙" },

    { no: 3, date: "2026-11-07", chapters: [2],
      title: "이미지 생성과 추론 성능의 병목",
      title_en: "Image Generation and Inference Performance Bottlenecks",
      title_zh: "图像生成与推理性能瓶颈",
      range: "2장 Models 후반 · 2.3–2.5",
      range_en: "Ch. 2 Models, second half · 2.3–2.5",
      range_zh: "第2章 Models 后半 · 2.3–2.5",
      reads: ["2.3 Image Generation Inference Mechanics", "2.4 Calculating Inference Bottlenecks", "2.5 Optimizing Attention"],
      goal: "연산 성능과 메모리 대역폭(memory bandwidth)이 추론 속도를 제한하는 경우를 구분한다.",
      goal_en: "Distinguish cases where compute performance or memory bandwidth limits inference speed.",
      goal_zh: "区分计算性能与内存带宽分别限制推理速度的情形。",
      paperInfo: { short: "FlashAttention", title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness", year: 2022, url: "https://arxiv.org/pdf/2205.14135v2" },
      video: { title: "Apple — Get started with MLX for Apple silicon", url: "https://developer.apple.com/videos/play/wwdc2025/315/" },
      book: "안상선", paper: "김지은" },

    { no: 4, date: "2026-11-14", chapters: [3],
      title: "GPU 구조와 추론 실행 환경",
      title_en: "GPU Architecture and Inference Execution Environments",
      title_zh: "GPU 架构与推理运行环境",
      range: "3장 Hardware 전체 · 도입부, 3.1–3.5",
      range_en: "Ch. 3 Hardware (entire) · intro, 3.1–3.5",
      range_zh: "第3章 Hardware 全章 · 引言、3.1–3.5",
      reads: ["3 Introduction", "3.1 GPU Architecture", "3.2 GPU Architecture Generations", "3.3 Instances", "3.4 Other Datacenter Accelerator Options", "3.5 Local Inference"],
      goal: "GPU의 연산 성능·메모리 용량·메모리 대역폭(memory bandwidth)을 구분하고 실행 환경 선택과 연결한다.",
      goal_en: "Distinguish GPU compute performance, memory capacity, and memory bandwidth, and relate them to the choice of execution environment.",
      goal_zh: "区分 GPU 的计算性能、显存容量与内存带宽，并将其与运行环境的选择联系起来。",
      paperInfo: { short: "Roofline", title: "Roofline: An Insightful Visual Performance Model for Floating-Point Programs and Multicore Architectures", year: 2008, url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/Archive/EECS-2008-134.pdf" },
      video: { title: "Apple — Get started with MLX for Apple silicon (Review)", url: "https://developer.apple.com/videos/play/wwdc2025/315/" },
      book: "조현석", paper: "이창용" },

    { no: 5, date: "2026-11-21", chapters: [4],
      title: "추론 소프트웨어와 성능 측정",
      title_en: "Inference Software and Performance Measurement",
      title_zh: "推理软件与性能测量",
      range: "4장 Software 전체 · 도입부, 4.1–4.5",
      range_en: "Ch. 4 Software (entire) · intro, 4.1–4.5",
      range_zh: "第4章 Software 全章 · 引言、4.1–4.5",
      reads: ["4 Introduction", "4.1 CUDA", "4.2 Deep Learning Frameworks and Libraries", "4.3 Inference Engines", "4.4 NVIDIA Dynamo", "4.5 Performance Benchmarking and Load Testing"],
      goal: "프레임워크(framework)·추론 엔진(inference engine)·서버의 역할을 구분하고, 성능 측정에 필요한 조건을 정리한다.",
      goal_en: "Distinguish the roles of frameworks, inference engines, and servers, and outline the conditions required for performance measurement.",
      goal_zh: "区分框架、推理引擎与服务器的角色，并整理性能测量所需的条件。",
      paperInfo: { short: "PagedAttention / vLLM", title: "Efficient Memory Management for Large Language Model Serving with PagedAttention", year: 2023, url: "https://arxiv.org/pdf/2309.06180v1" },
      video: { title: "Stanford CS336 2025 — Lecture 10: Inference", url: "https://www.youtube.com/watch?v=fcgPYo3OtV0" },
      book: "송태의", paper: "권갑진" },

    { no: 6, date: "2026-11-28", chapters: [5],
      title: "양자화와 추측 디코딩",
      title_en: "Quantization and Speculative Decoding",
      title_zh: "量化与推测解码",
      range: "5장 Techniques 전반 · 도입부, 5.1–5.2",
      range_en: "Ch. 5 Techniques, first half · intro, 5.1–5.2",
      range_zh: "第5章 Techniques 前半 · 引言、5.1–5.2",
      reads: ["5 Introduction", "5.1 Quantization", "5.2 Speculative Decoding"],
      goal: "양자화(quantization)와 추측 디코딩(speculative decoding)의 원리를 설명하고, 속도·메모리·품질을 함께 비교한다.",
      goal_en: "Explain the principles of quantization and speculative decoding, and compare speed, memory use, and quality.",
      goal_zh: "说明量化与推测解码的原理，并比较速度、内存与质量。",
      paperInfo: { short: "DFlash", title: "DFlash: Block Diffusion for Flash Speculative Decoding", year: 2026, url: "https://arxiv.org/pdf/2602.06036" },
      extra: { short: "GSM-Symbolic", title: "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models", year: 2024, url: "https://arxiv.org/pdf/2410.05229v2" },
      video: { title: "Apple — Explore large language models on Apple silicon with MLX", url: "https://developer.apple.com/videos/play/wwdc2025/298/" },
      book: "권갑진", paper: "이창용" },

    { no: 7, date: "2026-12-05", chapters: [5],
      title: "캐시 재사용과 모델 병렬화",
      title_en: "Caching and Model Parallelism",
      title_zh: "缓存复用与模型并行",
      range: "5장 Techniques 후반 · 5.3–5.5",
      range_en: "Ch. 5 Techniques, second half · 5.3–5.5",
      range_zh: "第5章 Techniques 后半 · 5.3–5.5",
      reads: ["5.3 Caching", "5.4 Model Parallelism", "5.5 Disaggregation"],
      goal: "캐시 재사용(caching), 모델 병렬화(model parallelism), 단계 분리(disaggregation)의 목적과 차이를 설명한다.",
      goal_en: "Explain the purposes of and differences between caching, model parallelism, and disaggregation.",
      goal_zh: "说明缓存复用、模型并行与阶段分离（disaggregation）的目的与差异。",
      paperInfo: { short: "SGLang", title: "SGLang: Efficient Execution of Structured Language Model Programs", year: 2023, url: "https://arxiv.org/pdf/2312.07104v2" },
      video: { title: "Stanford CS336 2025 — Lecture 10: Inference", url: "https://www.youtube.com/watch?v=fcgPYo3OtV0" },
      book: "박조은", paper: "김수용" },

    { no: 8, date: "2026-12-12", chapters: [6],
      title: "입출력 유형에 따른 모델과 추론 방식",
      title_en: "Models and Inference Methods by Input and Output Modality",
      title_zh: "按输入输出模态划分的模型与推理方式",
      range: "6장 Modalities 전체 · 도입부, 6.1–6.6",
      range_en: "Ch. 6 Modalities (entire) · intro, 6.1–6.6",
      range_zh: "第6章 Modalities 全章 · 引言、6.1–6.6",
      reads: ["6 Introduction", "6.1 Vision Language Models", "6.2 Embedding Models", "6.3 ASR Models", "6.4 TTS Models", "6.5 Image Generation Models", "6.6 Video Generation Models"],
      goal: "텍스트·이미지·음성 등 입출력 유형(modality)에 따른 처리 과정과 성능 지표의 차이를 설명한다.",
      goal_en: "Explain how processing workflows and performance metrics differ across input and output modalities such as text, images, and audio.",
      goal_zh: "说明文本、图像、语音等不同输入输出模态在处理流程与性能指标上的差异。",
      paperInfo: { short: "LLaVA", title: "Visual Instruction Tuning", year: 2023, url: "https://arxiv.org/pdf/2304.08485v2" },
      video: null,
      book: "안상선", paper: "김지은" },

    { no: 9, date: "2026-12-19", chapters: [7],
      title: "서비스 배포와 요청량에 따른 자원 조절",
      title_en: "Service Deployment and Resource Scaling Based on Request Volume",
      title_zh: "服务部署与按请求量调节资源",
      range: "7장 Production 전반 · 도입부, 7.1–7.2",
      range_en: "Ch. 7 Production, first half · intro, 7.1–7.2",
      range_zh: "第7章 Production 前半 · 引言、7.1–7.2",
      reads: ["7 Introduction", "7.1 Containerization", "7.2 Autoscaling"],
      goal: "배치 처리(batching)와 자동 확장(autoscaling)의 역할을 구분하고, 대기 시간·처리량(throughput)·자원 사용의 관계를 설명한다.",
      goal_en: "Distinguish the roles of batching and autoscaling, and explain the relationship between waiting time, throughput, and resource use.",
      goal_zh: "区分批处理与自动扩缩容的作用，并说明等待时间、吞吐量与资源使用之间的关系。",
      paperInfo: { short: "Orca", title: "Orca: A Distributed Serving System for Transformer-Based Generative Models", year: 2022, url: "https://www.usenix.org/system/files/osdi22-yu.pdf" },
      video: { title: "Stanford CS336 2025 — Lecture 10: Inference", url: "https://www.youtube.com/watch?v=fcgPYo3OtV0" },
      book: "송태의", paper: "" },

    { no: 10, date: "2026-12-26", chapters: [7],
      title: "추론 서비스의 안정적 운영과 전체 복습",
      title_en: "Reliable Inference Service Operations and Comprehensive Review",
      title_zh: "推理服务的稳定运营与全面复习",
      range: "7장 Production 후반 · 7.3–7.6, 0–7장 핵심 복습",
      range_en: "Ch. 7 Production, second half · 7.3–7.6 · review of Ch. 0–7",
      range_zh: "第7章 Production 后半 · 7.3–7.6，第0–7章复习",
      reads: ["7.3 Multi-Cloud Capacity Management", "7.4 Testing and Deployment", "7.5 Client Code", "7.6 Production Inference with Baseten", "Review: Ch. 0–7"],
      goal: "모델 선택부터 배포(deployment)와 운영까지의 흐름을 설명하고, 품질·성능·비용·안정성을 함께 고려한다.",
      goal_en: "Explain the workflow from model selection through deployment and operations, considering quality, performance, cost, and reliability together.",
      goal_zh: "说明从模型选择到部署与运营的完整流程，并综合考虑质量、性能、成本与稳定性。",
      paperInfo: { short: "AgentDojo", title: "AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents", year: 2024, url: "https://arxiv.org/pdf/2406.13352v3" },
      video: null,
      book: "송치성", paper: "" }
  ]
};
