export type PublicationLink = {
  label: string;
  href: string;
};

export type PublicationDetail = {
  abstract?: string;
  pdf?: string;
  bibtex?: string;
  hero?: { src: string; alt: string };
};

export type Author = {
  name: string;
  highlight?: boolean;
};

export type Publication = {
  slug: string;
  year: number;
  title: string;
  authors: Author[];
  venue: string;
  proceedings?: string;
  image: { src: string; alt: string };
  links: PublicationLink[];
  highlight?: string;
  detail?: PublicationDetail;
  tags?: string[];
};

export const publications: Publication[] = [
  // 2026
  {
    slug: "vlat-hlc-eduvis-2026",
    year: 2026,
    title:
      "Do Visualization Literacy Assessment Tests Account for High-Level Visualization Comprehension?",
    authors: [
      { name: "Aaryani Chowdary Ambati" },
      { name: "Tapendra Pandey" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue:
      "In Proceedings of the IEEE Workshop on Education in Visualization (EduVis 2026).",
    image: {
      src: "/publications/eduvis-2026.png",
      alt: "EduVis 2026 placeholder thumbnail; official thumbnail not provided",
    },
    links: [],
    detail: {
      abstract: `Visualization literacy assessment tests such as VLAT and Mini-VLAT measure people’s ability to perform isolated, low-level visual analytics tasks, such as estimating statistical quantities. However, it remains unclear whether these assessments also account for the overall understanding viewers intuitively gain about the data without explicit cuing or guidance, often referred to as high-level comprehension. In this work, we examine whether Mini-VLAT scores predict high-level comprehension, characterized as alignment between viewers’ uncued interpretations and designer intent. We conducted a study with 80 participants, in which each participant completed the Mini-VLAT test and interpreted 16 charts selected from a set of 40 real-world visualizations. Our qualitative and quantitative analyses show no significant relationship between participants’ Mini-VLAT scores and high-level comprehension. Our findings suggest while visualization literacy tests like Mini-VLAT capture viewers’ ability to perform directed, low-level tasks, they do not assess high-level comprehension in natural, uncued settings. Future work should develop VLAT that accounts for high-level comprehension beyond estimating prespecified statistical quantities.`,
    },
    tags: ["Recent", "HLC", "Empirical"],
  },
  {
    slug: "title-framing-line-charts",
    year: 2026,
    title:
      "How Does Title Framing Influence Pattern Identification in Line Charts?",
    authors: [
      { name: "Jasmine Lim" },
      { name: "Tapendra Pandey", highlight: true },
      { name: "Arran Zeyu Wang" },
      { name: "Sungahn Ko" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "In Proceedings of the VisxVision Workshop at IEEE VIS 2026",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2609.17455",
      },
      {
        label: "PDF",
        href: "https://arxiv.org/pdf/2609.17455",
      },
    ],
    image: {
      src: "/publications/How does title.png",
      alt: "How Does Title Framing Influence Pattern Identification in Line Charts?",
    },
    detail: {
      hero: {
        src: "/publications/How does title.png",
        alt: "Title framing in line charts",
      },
      pdf: "https://arxiv.org/pdf/2609.17455",
      abstract: `Visual data communication in digital media is increasingly characterized by short attention spans and snapshot-based viewing, often employing line charts to convey trends and patterns. Among all visual elements, titles are crucial elements that can shape how viewers interpret visual information and form chart takeaways. In this study, we examine how title characteristics, particularly title word count and intended message, influence people's pattern identification in single-class line charts. Participants viewed 50 line charts collected from online news media and identified the pattern they perceived. Our results demonstrate that both title word count and intended message significantly influence viewers' pattern identification. Our findings highlight the importance of title framing in shaping quick-view pattern takeaways and supporting effective visualization communication.`,
      bibtex: `@misc{lim2026titleframing,
  title={How Does Title Framing Influence Pattern Identification in Line Charts?},
  author={Jasmine Lim and Tapendra Pandey and Arran Zeyu Wang and Sungahn Ko and Ghulam Jilani Quadri},
  year={2026},
  eprint={2609.17455},
  archivePrefix={arXiv},
  url={https://arxiv.org/abs/2609.17455}
}`,
    },
    tags: ["Recent", "HLC", "Perception"],
  },
  {
    slug: "guidelines-are-not-rules",
    year: 2026,
    title:
      "Guidelines Are Not Rules: Characterizing Terminologies around Visualization Design Guidelines",
    authors: [
      { name: "Anna L Chinni" },
      { name: "Md Dilshadur Rahman" },
      { name: "Bon Adriel Aseniero" },
      { name: "Petra Isenberg" },
      { name: "Kushin Mukherjee" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
      { name: "Karen B Schloss" },
      { name: "Daniel Weiskopf" },
    ],
    venue: "In Proceedings of the BELIV Workshop at IEEE VIS 2026.",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2608.27842",
      },
      {
        label: "PDF",
        href: "https://arxiv.org/pdf/2608.27842",
      },
    ],
    image: {
      src: "/publications/Guidelines.png",
      alt: "Guidelines Are Not Rules",
    },
    detail: {
      hero: {
        src: "/publications/Guidelines.png",
        alt: "Guidelines Are Not Rules",
      },
      pdf: "https://arxiv.org/pdf/2608.27842",
      abstract: `A common expectation in visualization research is that outcomes recommend how researchers and practitioners take action or make design decisions. We often express these as "guidelines." Yet, the term "guideline" is both ambiguous and loosely defined, and what one researcher considers a guideline may be too broad, too loose, or too strict for another. We take a closer look at a broader set of terms that can express desirable results around visualization research, and untangle how these words are understood in the community in relation to other similar terms. We base our work on an exploratory study with experts, followed by a crowdsourcing study with a separate mapping phase (n=30) and rating phase (n=42) targeting input from the broader visualization community, and an analysis of the use of terminology in 3,877 IEEE VIS papers published from 1990 to 2024. Based on our findings, we call for more nuanced, precise discussions of research outcomes and their communication to the broader community, including practitioners and students.`,
      bibtex: `@misc{chinni2026guidelines,
  title={Guidelines Are Not Rules: Characterizing Terminologies around Visualization Design Guidelines},
  author={Anna L Chinni and Md Dilshadur Rahman and Bon Adriel Aseniero and Petra Isenberg and Kushin Mukherjee and Ghulam Jilani Quadri and Paul Rosen and Karen B Schloss and Daniel Weiskopf},
  year={2026},
  eprint={2608.27842},
  archivePrefix={arXiv},
  url={https://arxiv.org/abs/2608.27842}
}`,
    },
    tags: ["Recent", "HLC", "Design Optimization"],
  },
  {
    slug: "hlc-llm",
    year: 2026,
    title:
      "How Do LLMs See Charts? A Comparative Study on High-Level Visualization Comprehension in Humans and LLMs",
    authors: [
      { name: "Hyotaek Jeon" },
      { name: "Hyunwook Lee" },
      { name: "Minjeong Shin" },
      { name: "Tapendra Pandey" },
      { name: "Joohee Kim" },
      { name: "Shinwook Seon" },
      { name: "Daeun Jeong" },
      { name: "Sungahn Ko" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue:
      "In Proceedings of EuroVis 2026: Eurographics Conference on Visualization.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2604.08959" }],
    image: {
      src: "/publications/hlcllm.png",
      alt: "HLCLLM Image",
    },
    detail: {
      hero: {
        src: "/publications/hlcllm.png",
        alt: "HLCLLM Image",
      },
      pdf: "https://arxiv.org/abs/2604.08959",
    },
    tags: ["Recent", "HLC", "Comprehension", "Empirical"],
  },
  {
    slug: "human-mllm",
    year: 2026,
    title:
      "Seeing graphs like humans: Benchmarking computational measures and MLLMs for similarity assessment",
    authors: [
      { name: "Seokweon Jung" },
      { name: "Jeongmin Rhee" },
      { name: "Seoyoung Doh" },
      { name: "Hyeon Jeon" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jinwook Seo" },
    ],
    venue: "Information Visualization, 2024.",
    links: [
      {
        label: "PDF",
        href: "https://journals.sagepub.com/doi/pdf/10.1177/14738716261434961",
      },
    ],
    image: {
      src: "/publications/human-mllm.png",
      alt: "Human MLLM Image",
    },
    detail: {
      hero: {
        src: "/publications/human-mllm.png",
        alt: "Human MLLM Image",
      },
      pdf: "https://journals.sagepub.com/doi/pdf/10.1177/14738716261434961",
    },
    tags: ["Recent", "Perception"],
  },
  {
    slug: "annotation-educator",
    year: 2026,
    title:
      "Designing Annotations in Visualization: Considerations from Visualization Practitioners and Educators",
    authors: [
      { name: "MD Rahman" },
      { name: "Devin Lange" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of EuroVis 2026: Eurographics Conference on Visualization.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2604.07691" }],
    image: {
      src: "/publications/annotation-educator.png",
      alt: "Annotation Educator Image",
    },
    detail: {
      hero: {
        src: "/publications/annotation-educator.png",
        alt: "Annotation Educator Image",
      },
      pdf: "https://arxiv.org/abs/2604.07691",
    },
    tags: ["Recent", "Annotation", "Encoding", "Perception"],
  },
  {
    slug: "redundant-is-not-redundant",
    year: 2026,
    title:
      "Redundant is Not Redundant: Automating Efficient Categorical Palette Design Unifying Color & Shape Encodings with CatPAW",
    authors: [
      { name: "Chin Tseng" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of ACM CHI’ 2026: ACM Conference on Human Factors in Computing Systems.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2602.06792" }],
    image: {
      src: "/publications/catpaw.png",
      alt: "CatPAW Image",
    },
    detail: {
      hero: {
        src: "/publications/catpaw.png",
        alt: "CatPAW Image",
      },
      pdf: "https://arxiv.org/abs/2602.06792",
    },
    highlight: "Best Paper Honorable Mention (ACM CHI 2026) 🏆",
    tags: ["Best", "Recent", "Encoding", "Perception"],
  },
  {
    slug: "visual-stenography",
    year: 2025,
    title:
      "Visual Stenography: Feature Recreation and Preservation in Sketches of Noisy Line Charts",
    authors: [
      { name: "Rifat Ara Proma" },
      { name: "Michael Correll" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    links: [
      { label: "PDF", href: "https://arxiv.org/abs/2510.11927" },
      { label: "DOI", href: "https://ieeexplore.ieee.org/document/11218815" },
    ],
    image: {
      src: "/publications/vs.png",
      alt: "Visual Stenography Image",
    },
    tags: ["Recent", "Encoding", "Perception", "Empirical"],
  },
  {
    slug: "discrepancies-in-mental-workload",
    year: 2025,
    title:
      "Discrepancies in Mental Workload Estimation: Self-Reported versus EEG-Based Measures in Data Visualization Evaluation",
    authors: [
      { name: "Soobin Yim" },
      { name: "Sangbong Yoo" },
      { name: "Chanyoung Yoon" },
      { name: "Chanyoung Jung" },
      { name: "Chansoo Kim" },
      { name: "Yun Jang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "Preprint, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.09262" }],
    image: { src: "/publications/dmw.png", alt: "Distortion Image" },
    tags: ["Recent", "Perception", "Encoding"],
  },
  {
    slug: "evaluating-line-chart",
    year: 2025,
    title:
      "Evaluating Line Chart Strategies for Mitigating Density of Temporal Data: The Impact on Trend, Prediction, and Decision-Making",
    authors: [
      { name: "Rifat Ara Proma" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of the 20th International Symposium on Visual Computing, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/abs/2510.11912" }],
    image: {
      src: "/publications/elc.png",
      alt: "Evaluating line strategies",
    },
    tags: ["Perception", "Empirical"],
  },
  {
    slug: "distortion-aware",
    year: 2025,
    title:
      "Distortion-aware Brushing for Reliable Cluster Analysis in Multidimensional Projections",
    authors: [
      { name: "Hyeon Jeon" },
      { name: "Michaël Aupetit" },
      { name: "Soohyun Lee" },
      { name: "Kwon Ko" },
      { name: "Youngtaek Kim" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jinwook Seo" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/daa.png", alt: "Distortion Image" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11184260",
      },
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/document/11184260",
      },
    ],
    tags: ["Encoding", "Perception"],
  },
  {
    slug: "understanding-bias",
    year: 2025,
    title:
      "Understanding Bias in Perceiving Dimensionality Reduction Projections",
    authors: [
      { name: "Seoyoung Doh" },
      { name: "Hyeon Jeon" },
      { name: "Sungbok Shin" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Nam Wook Kim" },
      { name: "Jinwook Seo" },
    ],
    venue:
      "In Proceedings of the Workshop on Visualization for Communication (VisComm) at IEEE VIS, 2025.",
    links: [{ label: "PDF", href: "https://arxiv.org/pdf/2507.20805" }],
    image: { src: "/publications/ub.png", alt: "Bias Image" },
    tags: ["Empirical", "Encoding", "Perception"],
  },
  {
    slug: "subitizing-visualization",
    year: 2025,
    title:
      "Characterizing Visualization Perception with Psychological Phenomena: Uncovering the Role of Subitizing in Data Visualization",
    authors: [
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Mengyuan Zhu" },
      { name: "Chin Tseng" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2025; to appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/sv.png", alt: "Subitizing teaser" },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2508.17460" },
      { label: "PDF", href: "https://arxiv.org/abs/2508.17460" },
    ],
    highlight: "Best Paper Honorable Mention (IEEE VIS 2025) 🏆",
    tags: ["Best", "Recent", "Empirical", "Encoding", "Perception"],
  },
  {
    slug: "annotation-survey-2025",
    year: 2025,
    title:
      "A Survey on Annotations in Information Visualization: Empirical Insights, Applications, and Challenges",
    authors: [
      { name: "Md Dilshadur Rahman" },
      { name: "Bhavana Doppalapudi" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "(in press) To appear in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/as.png", alt: "Annotation survey" },
    links: [
      { label: "DOI", href: "https://arxiv.org/abs/2410.05579" },
      { label: "PDF", href: "https://arxiv.org/pdf/2410.05579" },
    ],
    tags: ["Recent", "Design Optimization", "Perception"],
  },
  // 2024
  {
    slug: "shape-it-up",
    year: 2024,
    title:
      "Shape It Up: An Empirically Grounded Approach for Designing Shape Palettes",
    authors: [
      { name: "Chin Tseng" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: { src: "/publications/siu.png", alt: "Shape It Up" },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10681156",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2408.16079" },
      { label: "Shape Tool", href: "https://shape-it-up-eec5e.web.app/" },
    ],
    tags: ["Recent", "Encoding", "Perception", "Empirical"],
  },
  {
    slug: "annotation-design-space",
    year: 2024,
    title:
      "A Qualitative Analysis of Common Practices in Annotations: A Taxonomy and Design Space",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Bhavana Doppalapudi" },
      { name: "Danielle Albers Szafir" },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE VIS 2024; published in IEEE Transactions on Visualization and Computer Graphics, 2025.",
    image: {
      src: "/publications/ads.png",
      alt: "Annotation design space",
    },
    links: [
      {
        label: "DOI",
        href: "https://ieeexplore.ieee.org/abstract/document/10670067",
      },
      { label: "PDF", href: "https://arxiv.org/pdf/2306.06043" },
      {
        label: "Data",
        href: "https://osf.io/e5zq9/?view_only=173a644eb5d3448c832408baf3b050b0",
      },
    ],
    tags: ["Recent", "Annotation"],
  },
  {
    slug: "evaluation-method-balance",
    year: 2024,
    title:
      "Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types",
    authors: [
      { name: "Feng Lin" },
      { name: "Arran Zeyu Wang" },
      { name: "Dilshad ur Rahman" },
      { name: "Danielle Albers Szafir" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "In Proceedings of BELIV Workshop at IEEE VIS 2024.",
    image: {
      src: "/publications/publication_3.png",
      alt: "Evaluation method balance",
    },
    links: [
      {
        label: "DOI",
        href: "https://www.computer.org/csdl/proceedings-article/beliv/2024/284600a129/22a0EOOwpQA",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16080" },
    ],
  },
  {
    slug: "our-stories-our-data",
    year: 2024,
    title:
      "Our Stories, Our Data: Co-designing Visualizations with People with Intellectual and Developmental Disabilities",
    authors: [
      { name: "Keke Wu" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Arran Zeyu Wang" },
      { name: "David Kwame Osei-Tutu" },
      { name: "Emma Peterson" },
      { name: "Varsha Koushik" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In the Proceedings of ACM SIGACCESS Conference on Computers and Accessibility, 2024.",
    image: {
      src: "/publications/osod.png",
      alt: "Our Stories Our Data",
    },
    links: [
      {
        label: "DOI",
        href: "https://dl.acm.org/doi/abs/10.1145/3663548.3675615",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2408.16072" },
    ],
  },
  {
    slug: "annotation-barchart",
    year: 2024,
    title:
      "Exploring Annotation Taxonomy in Grouped Bar Charts: A Qualitative Classroom Study",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
      { name: "Paul Rosen" },
    ],
    venue: "Information Visualization, 2024.",
    image: {
      src: "/publications/publication_5.png",
      alt: "Grouped bar chart annotations",
    },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
    ],
    detail: {
      pdf: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
    },
    tags: ["Annotation"],
  },
  {
    slug: "task-design-optimized",
    year: 2024,
    title:
      "Toward Constructing Frameworks for Task- and Design-Optimized Visualizations",
    authors: [{ name: "Ghulam Jilani Quadri", highlight: true }],
    venue: "IEEE Computer Graphics and Applications (CG&A), 2024.",
    image: {
      src: "/publications/publication_6.png",
      alt: "Task & design optimized",
    },
    links: [
      { label: "DOI", href: "https://ieeexplore.ieee.org/document/10736168" },
    ],
    tags: ["Design Optimization", "Empirical"],
  },
  {
    slug: "do-you-see-what-i-see",
    year: 2024,
    title:
      "Do You See What I See? A Qualitative Study Eliciting High-Level Visualization Comprehension",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Arran Zeyu Wang" },
      { name: "Zhehao Wang" },
      { name: "Jennifer Adorno" },
      { name: "Paul Rosen" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of ACM CHI 2024: ACM Conference on Human Factors in Computing Systems, 2024.",
    image: {
      src: "/publications/dys.png",
      alt: "High-level comprehension",
    },
    links: [
      { label: "DOI", href: "https://dl.acm.org/doi/10.1145/3613904.3642813" },
      { label: "PDF", href: "https://arxiv.org/pdf/2402.15605" },
      { label: "Data", href: "https://osf.io/869ev/" },
    ],
    tags: ["Recent", "HLC", "Perception", "Comprehension"],
  },
  {
    slug: "categorical-color-perception",
    year: 2024,
    title:
      "Revisiting Categorical Color Perception in Scatterplots: Sequential, Diverging, and Categorical Palettes",
    authors: [
      { name: "Chin Tseng" },
      { name: "Arran Zeyu Wang" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of EG/VGTC European Conference on Visualization (EuroVis) 2024, Odense, Denmark.",
    image: {
      src: "/publications/publication_8.png",
      alt: "Categorical color perception",
    },
    highlight: "Best Short Paper Award (Top 1% submissions) 🏆",
    links: [
      {
        label: "DOI",
        href: "https://diglib.eg.org/items/1f3ab945-36dc-4e43-ac70-5d152cef3dc0",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2404.03787" },
      { label: "EuroVis News", href: "https://event.sdu.dk/eurovis/awards" },
    ],
    tags: ["Best", "Encoding", "Perception", "Empirical"],
  },
  {
    slug: "clams",
    year: 2023,
    title:
      "CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering",
    authors: [
      { name: "Hyeon Jeon*" },
      { name: "Ghulam Jilani Quadri*", highlight: true },
      { name: "Hyunwook Lee" },
      { name: "Paul Rosen" },
      { name: "Danielle Albers Szafir" },
      { name: "Jinwook Seo" },
    ],
    venue:
      "IEEE Transactions on Visualization & Computer Graphics (Proc. IEEE VIS 2023), 2024.",
    image: { src: "/projects/project_3.png", alt: "CLAMS" },
    links: [
      {
        label: "DOI",
        href: "https://journals.sagepub.com/doi/epdf/10.1177/14738716241270247",
      },
      { label: "Preprint", href: "https://arxiv.org/pdf/2308.00284" },
      {
        label: "UNC-News",
        href: "https://cs.unc.edu/news-article/visualab-earns-2-best-paper-honorable-mention-awards-at-ieee-vis/",
      },
      {
        label: "Demo",
        href: "http://clusterambiguity.dev.s3-website.ap-northeast-2.amazonaws.com/",
      },
    ],
    highlight: "Best Paper Honorable Mention (IEEE VIS 2023) 🏆",
    tags: ["Best", "Perception"],
  },
  {
    slug: "exploring-annotation",
    year: 2023,
    title:
      "Exploring Annotation Strategies in Professional Visualizations:Insights from Prominent US News Portals",
    authors: [
      { name: "Md Dilshadur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’23: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2023.",
    image: { src: "/publications/ea.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://osf.io/preprints/osf/fd8zj_v1",
      },
    ],

    tags: ["Annotation"],
  },
  {
    slug: "measuring-categorical",
    year: 2023,
    title: "Measuring Categorical Perception in Color-Coded Scatterplots",
    authors: [
      { name: "Chin Tseng" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Zeyu Wang" },
      { name: "Danielle Albers Szafir" },
    ],
    venue:
      "In Proceedings of ACM CHI’ 2023: ACM Conference on Human Factors in Computing Systems, 2023.",
    image: { src: "/publications/mc.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://dl.acm.org/doi/abs/10.1145/3544548.3581416",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/pdf/2303.15583",
      },
      {
        label: "Project Page",
        href: "https://paper.categories.chintseng.com",
      },
    ],

    tags: ["Encoding", "Perception", "Empirical"],
  },
  {
    slug: "automatic-scatterplot",
    year: 2022,
    title:
      "Automatic Scatterplot Design Optimization for Clustering Identification.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jeniffer Adorno" },
      { name: "Brenton Wiernik" },
      { name: "Paul Rosen" },
    ],
    venue: "IEEE Transactions on Visualization & Computer Graphics, 2022.",
    image: { src: "/publications/ac.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9826389",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2207.03355",
      },
      {
        label: "Project Page",
        href: "https://scatter.projects.jadorno.com",
      },
    ],

    tags: ["Perception", "Encoding", "Design Optimization"],
  },
  {
    slug: "qualitative-eval",
    year: 2022,
    title:
      "A Qualitative Evaluation and Taxonomy ofStudent Annotations on Bar Charts",
    authors: [
      { name: "Dilshad ur Rahman" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’22: IEEE Conference on Visualization. Workshop on Visualization on Communication (VisComm), 2022.",
    image: { src: "/publications/qe.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://osf.io/preprints/osf/e5vfy_v1",
      },
    ],

    tags: ["Annotation", "Empirical"],
  },
  {
    slug: "survey-perception",
    year: 2021,
    title: "A Survey of Perception-Based Visualization Studies by Task.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue: "IEEE Transactions on Visualization & Computer Graphics, 2021.",
    image: { src: "/publications/sp.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9492011",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2107.07477",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/VisPerceptionSurvey/index.html",
      },
    ],

    tags: ["Design Optimization", "Encoding", "Perception"],
  },
  {
    slug: "constructing-frameworks",
    year: 2021,
    title: "Constructing Frameworks for Task-Optimized Visualizations.",
    authors: [{ name: "Ghulam Jilani Quadri", highlight: true }],
    venue: "Docotoral Dissertation, University of South Florida, 2021.",
    image: { src: "/publications/ca.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9991011",
      },
      {
        label: "Dissertation Copy Access",
        href: "https://digitalcommons.usf.edu/etd/9213/",
      },
    ],
    highlight: "2022 IEEE VGTC Best Dissertation Award 🏆",
    tags: [
      "Best",
      "Perception",
      "Encoding",
      "Empirical",
      "Design Optimization",
    ],
  },
  {
    slug: "modeling-influence",
    year: 2020,
    title:
      "Modeling the Influence of Visual Density on Cluster Perception in Scatterplots Using Topology.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/mi.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9222295",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/pdf/2007.13872",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/TopoClusterPerceptionDemo/",
      },
    ],

    tags: ["Encoding", "Empirical", "Perception"],
  },
  {
    slug: "lineSmooth",
    year: 2020,
    title:
      "LineSmooth: An Analytical Framework for Evaluating the Effectiveness of Smoothing Techniques on Line Charts.",
    authors: [
      { name: "Paul Rosen" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue:
      "Transactions on Visualization & Computer Graphics, 2020. Part of the Proceedings of IEEE VIS 2020.",
    image: { src: "/publications/line.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/document/9222269",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2007.13882",
      },
      {
        label: "Project Page",
        href: "https://usfdatavisualization.github.io/LineSmoothDemo/",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=81VDDnue_24",
      },
    ],

    tags: ["Encoding", "Perception", "Empirical"],
  },
  {
    slug: "you-cant",
    year: 2019,
    title: "You Can’t Publish Replication Studies (and How to Anyways).",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of VIS’19: IEEE Conference on Visualization. Workshop on Vis X Vision, 2019.",
    image: { src: "/publications/yc.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/1908.08893",
      },
    ],

    tags: ["Empirical", "Design Optimization"],
  },
  {
    slug: "variations-observed",
    year: 2019,
    title:
      "A Case-Study on Variations Observed in Accelerometers Across Devices.",
    authors: [
      { name: "Carlos Alvarado" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Jennifer Adorno" },
      { name: "Paul Rosen" },
    ],
    venue: "",
    image: { src: "/publications/vo.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/2207.03350",
      },
    ],

    tags: [],
  },
  {
    slug: "modeling-visual",
    year: 2018,
    title: "Modelling Visual Density in Scatterplot Using Megre Trees.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "Poster at Data Science Colloquium, College of Business Analytics and Information Science, University of South Florida 2018.",
    image: { src: "/publications/mv.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://par.nsf.gov/servlets/purl/10250292",
      },
    ],

    tags: ["Encoding", "Perception"],
  },
  {
    slug: "make-bone",
    year: 2017,
    title:
      "Make Your Bone Great Again: A Study on Osteoporosis Classification.",
    authors: [
      { name: "Rahul Paul" },
      { name: "Saeed Alhamari" },
      { name: "Sulav Malla" },
      { name: "Ghulam Jilani Quadri", highlight: true },
    ],
    venue: "In arXiv. 2017.",
    image: { src: "/publications/mb.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://arxiv.org/abs/1707.05385",
      },
    ],

    tags: [],
  },
  {
    slug: "multi-spectral",
    year: 2017,
    title:
      "Multi-Spectral Satellite Image Analysis for Feature Identification and Change Detection.",
    authors: [
      { name: "Sulav Malla" },
      { name: "Anwesh Tuladhar" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "IEEE Conference on Visual Analytics Science and Technology (VAST), VAST Challenge, 2017.",
    image: { src: "/publications/ms.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/abstract/document/8585482",
      },
      {
        label: "USF News",
        href: "https://www.usf.edu/ai-cybersecurity-computing/index.aspx",
      },
    ],
    highlight:
      "Honorable Mention Award for Good Facilitation of Single Image Analysis",

    tags: [],
  },
  {
    slug: "visual-analytic",
    year: 2017,
    title:
      "Visual Analytic Design for Characterizing Air-Sampling Sensor Performance and Oeration.",
    authors: [
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Anwesh Tuladhar" },
      { name: "Sulav Malla" },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/va.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "https://ieeexplore.ieee.org/abstract/document/8585678",
      },
    ],

    tags: ["Best"],
  },
  {
    slug: "data-aggregation",
    year: 2017,
    title:
      "Data Aggregation and Visualization Technique for Traﬀic Sensor Data.",
    authors: [
      { name: "Anwesh Tuladhar" },
      { name: "Sulav Malla" },
      { name: "Ghulam Jilani Quadri", highlight: true },
      { name: "Paul Rosen" },
    ],
    venue:
      "In Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST) 2017.",
    image: { src: "/publications/da.png", alt: "Exploring Annotation" },
    links: [
      {
        label: "PDF",
        href: "",
      },
    ],

    tags: [],
  },
];

// Selected subset for home page, derived from the canonical publication data.
const FEATURED_TAGS = new Set(["Best", "Recent"]);

export const selectedPublications: Publication[] = publications.filter((p) =>
  p.tags?.some((tag) => FEATURED_TAGS.has(tag))
);

// Backward-compatible alias for existing imports.
export const selectedPulications = selectedPublications;
