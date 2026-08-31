export const portfolioData = {

  profile: {
    name:         'Athaulla Hafizh',
    role:         'Informatics Engineering Student',
    availability: 'Open for Internship & Collaboration',
    tagline:      'I build purposeful digital experiences at the intersection of technical engineering, organizational leadership, and modern web technologies.',
    location:     'Malang, Indonesia',
    email:        'athaullahafizh@gmail.com',
    resume:       'https://drive.google.com/drive/folders/1TEQkw_c4-IkZZ1w-0VKEo9w33Mt8_yRt?usp=sharing',
    photo:        '/src/assets/profile.jpg',

    social: {
      linkedin:  'https://www.linkedin.com/in/athaullahafizh/',
      github:    'https://github.com/athfizh',
      instagram: 'https://www.instagram.com/athfizh',
    },
  },

  about: {
    bio: [
      "I am a fifth-semester Informatics Engineering student at Politeknik Negeri Malang. Beginning with core software engineering fundamentals in Java, my focus progressed into full-stack web development with Laravel and is currently advancing into mobile platforms and applied artificial intelligence.",
      "Alongside technical development, I serve as Chairman of the Information Technology Student Association (HMTI Polinema) for the 2026/2027 term, leading a 60-member cabinet to execute strategic initiatives, technology events, and student empowerment programs.",
    ],
    philosophy: 'Wong Liyo Ngerti Opo.',
    philosophyTranslation: 'A Javanese proverb reflecting the value of humility, focus, and continuous personal growth.',
    currentFocus: [
      'Desa Tulusbesar Web GIS platform (ongoing community development)',
      'Mobile application development with Flutter and Android',
      'Cabinet leadership and governance at HMTI Polinema',
    ],
    education: {
      degree:      'D-IV Informatics Engineering',
      institution: 'Politeknik Negeri Malang',
      gpa:         '3.85 / 4.00',
      period:      '2024 to Present',
    },
  },

  experiences: [
    {
      role:         'Chairman',
      organization: 'HMTI Polinema',
      period:       'Feb 2026 to Present',
      description:  'Direct 5 departments executing 10 major programs and over 30 organizational agendas. Establish weekly alignment frameworks to represent student interests, oversee budget allocations, and formulate long-term strategic plans for the association.',
      images:       [
        {
          src: '/src/assets/experiences/Ketua Umum HMTI.jpg',
          caption: 'Chairman of the Information Technology Student Association (HMTI Polinema) 2026/2027',
        },
      ],
    },
    {
      role:         'Organizing Committee, Research & Talent Development',
      organization: 'HMTI Polinema',
      period:       'Oct 2024 to Feb 2026',
      description:  'Managed end-to-end execution of student research initiatives, technology competitions, and skill development workshops while coordinating communication between students and faculty.',
      images:       [],
    },
    {
      role:         'Chair of OSIS Secretariat, Physical & Creative Affairs',
      organization: 'SMA Negeri 1 Malang',
      period:       'Aug 2022 to Jan 2024',
      description:  'Supervised student athletic and creative extracurricular activities, coordinating division leaders and liaising with school administration and student affairs.',
      images:       [],
    },
    {
      role:         'Executive Chairman, KTS Sinau Nang Desa',
      organization: 'SMA Negeri 1 Malang',
      period:       'May 2022 to Nov 2022',
      description:  'Led a 30-member committee to organize a community education outreach initiative, successfully coordinating educational programs for over 200 local residents.',
      images:       [
        {
          src: '/src/assets/experiences/Event Executive Chairman of KTS 2022.jpg',
          caption: 'Executive Chairman: KTS Sinau Nang Desa 2022 at SMAN 1 Malang',
        },
      ],
    },
    {
      role:         'Member, OSIS Secretariat for Physical & Creative Affairs',
      organization: 'SMA Negeri 1 Malang',
      period:       'Aug 2021 to Aug 2022',
      description:  'Coordinated operational logistics, security protocols, and resource allocation for institutional student council events and collaborative projects.',
      images:       [],
    },
  ],

  awards: [
    {
      title:       '2nd Place, English Speech Category',
      event:       'INTERKOM 2026',
      issuer:      'HMTI Polinema',
      date:        'Jun 2026',
      description: 'Awarded 2nd Place in the English Speech category at INTERKOM 2026, evaluated on oratorical structure, delivery, and critical argumentation by a panel of academic judges.',
      images:      [
        {
          src: '/src/assets/awards/Awarding Juara 2 Internal Competition Speech 2026.jpg',
          caption: 'Awarding Ceremony: 2nd Place Winner, English Speech Category (INTERKOM 2026)',
        },
      ],
    },
    {
      title:       '3rd Place, Smart City Category',
      event:       'INTERKOM 2025',
      issuer:      'HMTI Polinema',
      date:        'Dec 2025',
      description: 'Co-developed SehatSync, an intelligent healthcare referral system for Kabupaten Malang. Built to streamline hospital routing and patient data transfer via secure QR passes with SATUSEHAT integration and UU PDP compliance.',
      images:      [
        {
          src: '/src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg',
          caption: 'Awarding Ceremony: 3rd Place Winner, Smart City Category (INTERKOM 2025 - SehatSync)',
        },
      ],
    },
  ],

  projects: [
    {
      id:          '01',
      title:       'Desa Tulusbesar',
      subtitle:    'Official Village Portal & Web GIS Platform (KKN 2026)',
      description: 'Official web platform and interactive Web GIS system for Desa Tulusbesar. Built with Laravel and Filament for administrative governance, public community services, and geospatial mapping.',
      tech:        ['Laravel', 'Filament PHP', 'Web GIS', 'Leaflet.js', 'Tailwind CSS', 'Docker'],
      year:        '2026',
      status:      'In Development',
      github:      'https://github.com/raditya12/KKN-TulusBesar',
      live:        'https://tulusbesar.com/',
      images:      [],
    },
    {
      id:          '02',
      title:       'Magangin',
      subtitle:    'Online Student Internship Platform',
      description: 'Full-stack web application connecting students with verified internship opportunities, featuring role-based dashboards for students, industry partners, and academic supervisors.',
      tech:        ['Laravel 13', 'Filament v4', 'Tailwind CSS v4', 'MySQL'],
      year:        '2026',
      status:      'Completed',
      github:      '',
      live:        '',
      images:      [],
    },
    {
      id:          '03',
      title:       'SehatSync',
      subtitle:    'AI Health Referral System (3rd Place INTERKOM)',
      description: 'Intelligent healthcare referral platform automating hospital recommendations and generating QR data passes to reduce emergency transfer delays.',
      tech:        ['Python', 'FastAPI', 'AI/ML', 'QR Integration', 'SATUSEHAT API'],
      year:        '2025',
      status:      'Award Winner',
      github:      '',
      live:        '',
      images:      [
        {
          src: '/src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg',
          caption: 'Awarding Ceremony: 3rd Place Winner Smart City Category (INTERKOM 2025 - SehatSync)',
        },
      ],
    },
    {
      id:          '04',
      title:       'NCS Lab',
      subtitle:    'Network & Cyber Security Laboratory Website',
      description: 'Official web platform for the Network and Cyber Security Laboratory at Politeknik Negeri Malang, highlighting research publications, member profiles, and academic resources.',
      tech:        ['HTML5', 'Tailwind CSS', 'JavaScript'],
      year:        '2024',
      status:      'Completed',
      github:      '',
      live:        '',
      images:      [
        {
          src: '/src/assets/experiences/PBL Semester 3.jpg',
          caption: 'NCS Lab (Network & Cyber Security Laboratory) PBL Semester 3 Development Team',
        },
      ],
    },
  ],

  capabilities: [
    {
      area:  'Web Development',
      items: ['Laravel', 'PHP', 'HTML / CSS', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Git'],
    },
    {
      area:  'Mobile & App Development',
      items: ['Java', 'Flutter (learning)', 'Android (learning)', 'OOP'],
    },
    {
      area:  'UI/UX Design',
      items: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    },
    {
      area:  'AI & Machine Learning',
      items: ['Prompt Engineering', 'Google ADK', 'Gemini API', 'Python', 'Scikit-learn'],
    },
  ],

  certifications: [
    {
      title:        'Engineer AI Agents with Agent Development Kit (ADK)',
      issuer:       'Google',
      year:         'Aug 2026',
      credentialId: '76b9b08e-e3a7-4240-9b8d-f41fbd46f87d',
      verify:       'https://www.credly.com/badges/76b9b08e-e3a7-4240-9b8d-f41fbd46f87d',
    },
    {
      title:        'Create Your First Gemini Enterprise Application',
      issuer:       'Google',
      year:         'Aug 2026',
      credentialId: '8005855d-3b45-4418-998b-543c8cf8e883',
      verify:       'https://www.credly.com/badges/8005855d-3b45-4418-998b-543c8cf8e883',
    },
    {
      title:        'Building LLM Applications With Prompt Engineering',
      issuer:       'NVIDIA',
      year:         'Nov 2025',
      credentialId: 'g-2IIRd1RO6ZWcYuaAXLtA',
      verify:       'https://learn.nvidia.com/certificates?id=g:2IRD18O6ZWCYuaAxL1A',
    },
    {
      title:        'Intensive Camp UI/UX Design',
      issuer:       'Special Skill Indonesia',
      year:         'Oct 2025',
      credentialId: 'SSB27B029',
      verify:       'https://specialskill.id/sertifikat',
    },
    {
      title:        'Intensive Camp Machine Learning',
      issuer:       'Special Skill Indonesia',
      year:         'Sep 2025',
      credentialId: 'SPECIAL/342b36/10092025/0043',
      verify:       'https://specialskill.id/sertifikat',
    },
    {
      title:        'Machine Learning Bootcamp',
      issuer:       'Special Skill Indonesia',
      year:         'Sep 2025',
      credentialId: 'SSB2SP101',
      verify:       'https://specialskill.id/sertifikat',
    },
    {
      title:        'Belajar Dasar Pemrograman Web',
      issuer:       'Dicoding Indonesia',
      year:         'Dec 2024',
      credentialId: 'KEXL7E3ERXG2',
      verify:       'https://dicoding.com/certificates/KEXL7E3ERXG2',
    },
  ],

  footer: {
    year: 2026,
  },
};
