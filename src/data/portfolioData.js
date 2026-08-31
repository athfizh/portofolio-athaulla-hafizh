/**
 * Portfolio Data Store with Full Bilingual Support (EN & ID)
 */

export const portfolioData = {
  // Common Metadata
  profile: {
    name:     'Athaulla Hafizh',
    location: 'Malang, Indonesia',
    email:    'athaullahafizh@gmail.com',
    resume:   'https://drive.google.com/drive/folders/1TEQkw_c4-IkZZ1w-0VKEo9w33Mt8_yRt?usp=sharing',
    photo:    '/src/assets/profile.jpg',
    social: {
      linkedin:  'https://www.linkedin.com/in/athaullahafizh/',
      github:    'https://github.com/athfizh',
      instagram: 'https://www.instagram.com/athfizh',
    },
    en: {
      role:         'Informatics Engineering Student',
      availability: 'Open for Internship & Collaboration',
      tagline:      'I build purposeful digital experiences at the intersection of technical engineering, organizational leadership, and modern web technologies.',
    },
    id: {
      role:         'Mahasiswa Teknik Informatika',
      availability: 'Terbuka untuk Magang & Kolaborasi',
      tagline:      'Membangun pengalaman digital yang berdampak melalui rekayasa teknis, kepemimpinan organisasi, dan teknologi web modern.',
    },
  },

  // UI Strings for Navigation, Headings & Actions
  ui: {
    en: {
      nav: [
        { label: 'About',      href: '#about'      },
        { label: 'Experience', href: '#experience' },
        { label: 'Awards',     href: '#awards'     },
        { label: 'Work',       href: '#projects'   },
        { label: 'Skills',     href: '#skills'     },
        { label: 'Contact',    href: '#contact'    },
      ],
      sections: {
        experienceLabel: 'Experience',
        experienceTitle: 'Leadership & Roles',
        awardsLabel:     'Recognition',
        awardsTitle:     'Honors & Awards',
        projectsLabel:   'Work',
        projectsTitle:   'Selected Projects',
        skillsLabel:     'Expertise',
        skillsTitle:     'Skills & Credentials',
        capabilities:    'Capabilities',
        certifications:  'Certifications',
        contactHeading:  "Let's build something together.",
        contactTagline:  'Open for collaboration, internship, or technical discussions.',
      },
      actions: {
        cv:           'CV/Resume',
        copyEmail:    'Copy Email',
        copied:       'Email copied to clipboard!',
        preview:      'Preview',
        verify:       'Verify',
        viewLive:     'View Live',
        viewCode:     'GitHub',
        allRights:    'All rights reserved',
        cmdPlaceholder: 'Type a command or search section...',
        noCmdResults: 'No matching commands found.',
      },
    },
    id: {
      nav: [
        { label: 'Tentang',     href: '#about'      },
        { label: 'Pengalaman',  href: '#experience' },
        { label: 'Prestasi',    href: '#awards'     },
        { label: 'Proyek',      href: '#projects'   },
        { label: 'Keahlian',    href: '#skills'     },
        { label: 'Kontak',      href: '#contact'    },
      ],
      sections: {
        experienceLabel: 'Pengalaman',
        experienceTitle: 'Kepemimpinan & Organisasi',
        awardsLabel:     'Pengakuan',
        awardsTitle:     'Prestasi & Penghargaan',
        projectsLabel:   'Portofolio',
        projectsTitle:   'Proyek Terpilih',
        skillsLabel:     'Keahlian',
        skillsTitle:     'Keahlian & Sertifikasi',
        capabilities:    'Kompetensi Teknis',
        certifications:  'Sertifikasi Resmi',
        contactHeading:  'Mari Berkolaborasi dan Membangun Bersama.',
        contactTagline:  'Terbuka untuk peluang magang, proyek profesional, atau diskusi teknologi.',
      },
      actions: {
        cv:           'Unduh CV/Resume',
        copyEmail:    'Salin Email',
        copied:       'Alamat email berhasil disalin!',
        preview:      'Lihat Foto',
        verify:       'Verifikasi',
        viewLive:     'Buka Website',
        viewCode:     'Lihat Kode',
        allRights:    'Hak cipta dilindungi undang-undang',
        cmdPlaceholder: 'Ketik perintah atau cari navigasi...',
        noCmdResults: 'Perintah tidak ditemukan.',
      },
    },
  },

  about: {
    philosophy: 'Wong Liyo Ngerti Opo.',
    en: {
      bio: [
        "I am a fifth-semester Informatics Engineering student at Politeknik Negeri Malang. Beginning with core software engineering fundamentals in Java, my focus progressed into full-stack web development with Laravel and is currently advancing into mobile platforms and applied artificial intelligence.",
        "Alongside technical development, I serve as Chairman of the Information Technology Student Association (HMTI Polinema) for the 2026/2027 term, leading a 60-member cabinet to execute strategic initiatives, technology events, and student empowerment programs.",
      ],
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
    id: {
      bio: [
        "Saya adalah mahasiswa D-IV Teknik Informatika semester 5 di Politeknik Negeri Malang. Berangkat dari pemahaman dasar pemrograman berorientasi objek dalam Java, fokus keahlian saya berkembang ke pengembangan web full-stack dengan ekosistem Laravel, serta saat ini mendalami aplikasi mobile dan kecerdasan buatan terapan.",
        "Di bidang organisasi, saya mengemban amanah sebagai Ketua Umum Himpunan Mahasiswa Teknologi Informasi (HMTI Polinema) periode 2026/2027, memimpin 60 pengurus kabinet dalam merancang dan mengeksekusi program kerja strategis, kompetisi teknologi, serta pemberdayaan mahasiswa.",
      ],
      philosophyTranslation: 'Pepatah Jawa sebagai pengingat luhur untuk senantiasa rendah hati, fokus berkarya, dan terus bertumbuh.',
      currentFocus: [
        'Platform Web GIS Desa Tulusbesar (pengabdian masyarakat berkelanjutan)',
        'Pengembangan aplikasi mobile berbasis Flutter dan Android',
        'Tata kelola kepemimpinan dan arah strategis kabinet HMTI Polinema',
      ],
      education: {
        degree:      'D-IV Teknik Informatika',
        institution: 'Politeknik Negeri Malang',
        gpa:         '3.85 / 4.00',
        period:      '2024 - Sekarang',
      },
    },
  },

  experiences: [
    {
      id: 'exp-1',
      period: { en: 'Feb 2026 to Present', id: 'Feb 2026 - Sekarang' },
      en: {
        role:         'Chairman',
        organization: 'HMTI Polinema',
        description:  'Direct 5 departments executing 10 major programs and over 30 organizational agendas. Establish weekly alignment frameworks to represent student interests, oversee budget allocations, and formulate long-term strategic plans for the association.',
      },
      idLang: {
        role:         'Ketua Umum',
        organization: 'HMTI Polinema',
        description:  'Memimpin 5 departemen dalam merealisasikan 10 program kerja unggulan dan lebih dari 30 agenda organisasi. Menerapkan evaluasi berkala untuk menyalurkan aspirasi mahasiswa, mengelola alokasi anggaran, serta merumuskan rencana strategis jangka panjang himpunan.',
      },
      images: [
        {
          src: '/src/assets/experiences/Ketua Umum HMTI.jpg',
          caption: {
            en: 'Chairman of the Information Technology Student Association (HMTI Polinema) 2026/2027',
            id: 'Ketua Umum Himpunan Mahasiswa Teknologi Informasi (HMTI) Polinema Periode 2026/2027',
          },
        },
      ],
    },
    {
      id: 'exp-2',
      period: { en: 'Oct 2024 to Feb 2026', id: 'Okt 2024 - Feb 2026' },
      en: {
        role:         'Research, Technology & Talent Development Department (RMB)',
        organization: 'HMTI Polinema',
        description:  'Managed end-to-end execution of student research initiatives, technology competitions, and skill development workshops while coordinating communication between students and faculty.',
      },
      idLang: {
        role:         'Departemen Riset Teknologi dan Minat Bakat (RMB)',
        organization: 'HMTI Polinema',
        description:  'Mengelola pelaksanaan program riset mahasiswa, perlombaan teknologi, dan lokakarya pengembangan kompetensi, sekaligus menjembatani komunikasi terstruktur antara civitas akademika dan mahasiswa.',
      },
      images: [],
    },
    {
      id: 'exp-3',
      period: { en: 'Aug 2022 to Jan 2024', id: 'Agu 2022 - Jan 2024' },
      en: {
        role:         'Chair of OSIS Secretariat, Physical & Creative Affairs',
        organization: 'SMA Negeri 1 Malang',
        description:  'Supervised student athletic and creative extracurricular activities, coordinating division leaders and liaising with school administration and student affairs.',
      },
      idLang: {
        role:         'Ketua Sekbid Daya Kreasi & Olahraga OSIS',
        organization: 'SMA Negeri 1 Malang',
        description:  'Mengkoordinasikan kegiatan ekstrakurikuler seni, kreasi, dan olahraga di lingkungan sekolah. Menyelenggarakan forum koordinasi rutin bersama para ketua ekstrakurikuler serta menjalin kemitraan dengan pihak pembina kesiswaan.',
      },
      images: [],
    },
    {
      id: 'exp-4',
      period: { en: 'May 2022 to Nov 2022', id: 'Mei 2022 - Nov 2022' },
      en: {
        role:         'Executive Chairman, KTS Sinau Nang Desa',
        organization: 'SMA Negeri 1 Malang',
        description:  'Led a 30-member committee to organize a community education outreach initiative, successfully coordinating educational programs for over 200 local residents.',
      },
      idLang: {
        role:         'Ketua Pelaksana, KTS Sinau Nang Desa',
        organization: 'SMA Negeri 1 Malang',
        description:  'Memimpin 30 panitia pelaksana dalam menyelenggarakan program pengabdian masyarakat Sinau Nang Desa pasca-pandemi, berhasil mengedukasi dan memberdayakan lebih dari 200 warga desa setempat.',
      },
      images: [
        {
          src: '/src/assets/experiences/Event Executive Chairman of KTS 2022.jpg',
          caption: {
            en: 'Executive Chairman: KTS Sinau Nang Desa 2022 at SMAN 1 Malang',
            id: 'Ketua Pelaksana: KTS Sinau Nang Desa 2022 SMAN 1 Malang',
          },
        },
      ],
    },
    {
      id: 'exp-5',
      period: { en: 'Aug 2021 to Aug 2022', id: 'Agu 2021 - Agu 2022' },
      en: {
        role:         'Member, OSIS Secretariat for Physical & Creative Affairs',
        organization: 'SMA Negeri 1 Malang',
        description:  'Coordinated operational logistics, security protocols, and resource allocation for institutional student council events and collaborative projects.',
      },
      idLang: {
        role:         'Anggota Sekbid Daya Kreasi & Olahraga OSIS',
        organization: 'SMA Negeri 1 Malang',
        description:  'Bertanggung jawab atas manajemen logistik operasional, protokol keamanan acara, serta alokasi sumber daya dalam berbagai kegiatan resmi sekolah.',
      },
      images: [],
    },
  ],

  awards: [
    {
      event:       'INTERKOM 2026',
      issuer:      'HMTI Polinema',
      date:        { en: 'Jun 2026', id: 'Jun 2026' },
      en: {
        title:       '2nd Place, English Speech Category',
        description: 'Awarded 2nd Place in the English Speech category at INTERKOM 2026, evaluated on oratorical structure, delivery, and critical argumentation by a panel of academic judges.',
      },
      idLang: {
        title:       'Juara 2 Kategori Pidato Bahasa Inggris',
        description: 'Meraih Juara 2 dalam kompetisi English Speech pada ajang INTERKOM 2026, dinilai berdasarkan struktur orasi, artikulasi penyampaian, dan kedalaman argumentasi oleh dewan juri akademisi.',
      },
      images: [
        {
          src: '/src/assets/awards/Awarding Juara 2 Internal Competition Speech 2026.jpg',
          caption: {
            en: 'Awarding Ceremony: 2nd Place Winner, English Speech Category (INTERKOM 2026)',
            id: 'Penganugerahan: Juara 2 Kategori Pidato Bahasa Inggris (INTERKOM 2026)',
          },
        },
      ],
    },
    {
      event:       'INTERKOM 2025',
      issuer:      'HMTI Polinema',
      date:        { en: 'Dec 2025', id: 'Des 2025' },
      en: {
        title:       '3rd Place, Smart City Category',
        description: 'Co-developed SehatSync, an intelligent healthcare referral system for Kabupaten Malang. Built to streamline hospital routing and patient data transfer via secure QR passes with SATUSEHAT integration and UU PDP compliance.',
      },
      idLang: {
        title:       'Juara 3 Kategori Smart City (SehatSync)',
        description: 'Mengembangkan SehatSync, sistem integrasi rujukan medis cerdas berbasis AI untuk Kabupaten Malang. Berfungsi mempercepat pemilihan rumah sakit rujukan dan transfer data rekam medis pasien melalui kode QR terenkripsi yang terintegrasi dengan SATUSEHAT dan kepatuhan UU PDP.',
      },
      images: [
        {
          src: '/src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg',
          caption: {
            en: 'Awarding Ceremony: 3rd Place Winner, Smart City Category (INTERKOM 2025 - SehatSync)',
            id: 'Penganugerahan: Juara 3 Kategori Smart City (INTERKOM 2025 - SehatSync)',
          },
        },
      ],
    },
  ],

  projects: [
    {
      id:     '01',
      title:  'Desa Tulusbesar',
      year:   '2026',
      status: { en: 'In Development', id: 'Sedang Berjalan' },
      github: 'https://github.com/raditya12/KKN-TulusBesar',
      live:   'https://tulusbesar.com/',
      tech:   ['Laravel', 'Filament PHP', 'Web GIS', 'Leaflet.js', 'Tailwind CSS', 'Docker'],
      en: {
        subtitle:    'Official Village Portal & Web GIS Platform (KKN 2026)',
        description: 'Official web platform and interactive Web GIS system for Desa Tulusbesar. Built with Laravel and Filament for administrative governance, public community services, and geospatial mapping.',
      },
      idLang: {
        subtitle:    'Portal Profil Desa & Sistem Informasi Geografis (KKN 2026)',
        description: 'Platform profil resmi dan sistem Web GIS interaktif untuk Desa Tulusbesar. Dikembangkan menggunakan Laravel dan Filament untuk tata kelola administrasi desa, layanan informasi publik, dan pemetaan geospasial wilayah.',
      },
      images: [],
    },
    {
      id:     '02',
      title:  'Magangin',
      year:   '2026',
      status: { en: 'Completed', id: 'Selesai' },
      github: '',
      live:   '',
      tech:   ['Laravel 13', 'Filament v4', 'Tailwind CSS v4', 'MySQL'],
      en: {
        subtitle:    'Online Student Internship Platform',
        description: 'Full-stack web application connecting students with verified internship opportunities, featuring role-based dashboards for students, industry partners, and academic supervisors.',
      },
      idLang: {
        subtitle:    'Platform Manajemen Magang Mahasiswa Terpadu',
        description: 'Aplikasi web full-stack yang menghubungkan mahasiswa dengan peluang magang industri terverifikasi, dilengkapi dashboard multi-peran untuk mahasiswa, mitra industri, dan dosen pembimbing.',
      },
      images: [],
    },
    {
      id:     '03',
      title:  'SehatSync',
      year:   '2025',
      status: { en: 'Award Winner', id: 'Juara Kompetisi' },
      github: '',
      live:   '',
      tech:   ['Python', 'FastAPI', 'AI/ML', 'QR Integration', 'SATUSEHAT API'],
      en: {
        subtitle:    'AI Health Referral System (3rd Place INTERKOM)',
        description: 'Intelligent healthcare referral platform automating hospital recommendations and generating QR data passes to reduce emergency transfer delays.',
      },
      idLang: {
        subtitle:    'Sistem Rujukan Medis Berbasis Kecerdasan Buatan',
        description: 'Platform rujukan kesehatan cerdas yang mengotomatisasi rekomendasi rumah sakit rujukan serta menerbitkan kode QR rekam medis untuk memangkas waktu tunggu rujukan darurat.',
      },
      images: [
        {
          src: '/src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg',
          caption: {
            en: 'Awarding Ceremony: 3rd Place Winner Smart City Category (INTERKOM 2025 - SehatSync)',
            id: 'Penganugerahan: Juara 3 Kategori Smart City (INTERKOM 2025 - SehatSync)',
          },
        },
      ],
    },
    {
      id:     '04',
      title:  'NCS Lab',
      year:   '2024',
      status: { en: 'Completed', id: 'Selesai' },
      github: '',
      live:   '',
      tech:   ['HTML5', 'Tailwind CSS', 'JavaScript'],
      en: {
        subtitle:    'Network & Cyber Security Laboratory Website',
        description: 'Official web platform for the Network and Cyber Security Laboratory at Politeknik Negeri Malang, highlighting research publications, member profiles, and academic resources.',
      },
      idLang: {
        subtitle:    'Website Laboratorium Jaringan & Keamanan Siber',
        description: 'Platform resmi Laboratorium Network & Cyber Security (NCS Lab) Politeknik Negeri Malang untuk menampilkan publikasi penelitian, profil asisten laboratorium, dan fasilitas riset.',
      },
      images: [
        {
          src: '/src/assets/experiences/PBL Semester 3.jpg',
          caption: {
            en: 'NCS Lab (Network & Cyber Security Laboratory) PBL Semester 3 Development Team',
            id: 'Tim Pengembang Website NCS Lab pada PBL Semester 3',
          },
        },
      ],
    },
  ],

  capabilities: [
    {
      area: { en: 'Web Development', id: 'Pengembangan Web' },
      items: ['Laravel', 'PHP', 'HTML / CSS', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Git'],
    },
    {
      area: { en: 'Mobile & App Development', id: 'Aplikasi Mobile' },
      items: ['Java', 'Flutter (learning)', 'Android (learning)', 'OOP'],
    },
    {
      area: { en: 'UI/UX Design', id: 'Desain UI/UX' },
      items: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    },
    {
      area: { en: 'AI & Machine Learning', id: 'AI & Machine Learning' },
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
