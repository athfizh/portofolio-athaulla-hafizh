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
        cv:             'CV/Resume',
        copyEmail:      'Copy Email',
        copied:         'Email copied to clipboard!',
        preview:        'Preview',
        verify:         'Verify',
        viewLive:       'View Live',
        viewCode:       'GitHub',
        allRights:      'All rights reserved',
        cmdPlaceholder: 'Type a command or search section...',
        noCmdResults:   'No matching commands found.',
      },
    },
    id: {
      nav: [
        { label: 'Tentang',    href: '#about'      },
        { label: 'Pengalaman', href: '#experience' },
        { label: 'Prestasi',   href: '#awards'     },
        { label: 'Proyek',     href: '#projects'   },
        { label: 'Keahlian',   href: '#skills'     },
        { label: 'Kontak',     href: '#contact'    },
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
        cv:             'Unduh CV/Resume',
        copyEmail:      'Salin Email',
        copied:         'Alamat email berhasil disalin!',
        preview:        'Lihat Foto',
        verify:         'Verifikasi',
        viewLive:       'Buka Website',
        viewCode:       'Lihat Kode',
        allRights:      'Hak cipta dilindungi undang-undang',
        cmdPlaceholder: 'Ketik perintah atau cari navigasi...',
        noCmdResults:   'Perintah tidak ditemukan.',
      },
    },
  },

  about: {
    philosophy: 'Wong Liyo Ngerti Opo.',
    en: {
      bio: [
        "I am an Informatics Engineering student (Applied Bachelor / D-IV) at Politeknik Negeri Malang (Polinema). Beginning with core software engineering fundamentals, my focus has progressed into full-stack web development and is now advancing into mobile platforms and applied artificial intelligence.",
        "Alongside technical development, I serve as Chairman of the Information Technology Student Association (HMTI Polinema) for the 2026/2027 term, directing five departments to execute major programmes and long-term strategic initiatives for the association.",
      ],
      philosophyTranslation: 'A Javanese proverb reflecting the value of humility, focus, and continuous personal growth.',
      currentFocus: [
        'Mobile application development with Flutter and TensorFlow Lite',
        'Full-stack web development using Laravel and Filament',
        'Cabinet leadership and governance at HMTI Polinema',
      ],
      education: {
        degree:      'D-IV Informatics Engineering (Applied Bachelor)',
        institution: 'Politeknik Negeri Malang (Polinema)',
        gpa:         '3.86 / 4.00',
        period:      'Aug 2024 to Present',
      },
    },
    id: {
      bio: [
        "Saya adalah mahasiswa D-IV Teknik Informatika di Politeknik Negeri Malang (Polinema). Berangkat dari pemahaman dasar rekayasa perangkat lunak, fokus keahlian saya berkembang ke pengembangan web full-stack, serta saat ini mendalami aplikasi mobile dan kecerdasan buatan terapan.",
        "Di bidang organisasi, saya mengemban amanah sebagai Ketua Umum Himpunan Mahasiswa Teknologi Informasi (HMTI Polinema) periode 2026/2027, mengarahkan 5 departemen dalam mengeksekusi program kerja unggulan dan rencana strategis jangka panjang himpunan.",
      ],
      philosophyTranslation: 'Pepatah Jawa sebagai pengingat luhur untuk senantiasa rendah hati, fokus berkarya, dan terus bertumbuh.',
      currentFocus: [
        'Pengembangan aplikasi mobile berbasis Flutter dan TensorFlow Lite',
        'Pengembangan web full-stack menggunakan Laravel dan Filament',
        'Tata kelola kepemimpinan dan arah strategis kabinet HMTI Polinema',
      ],
      education: {
        degree:      'D-IV Teknik Informatika',
        institution: 'Politeknik Negeri Malang (Polinema)',
        gpa:         '3.86 / 4.00',
        period:      'Agu 2024 - Sekarang',
      },
    },
  },

  experiences: [
    {
      id: 'exp-1',
      period: { en: 'Feb 2026 to Present', id: 'Feb 2026 - Sekarang' },
      en: {
        role:         'Chairman',
        organization: 'Student Association of Information Technology (HMTI) - Polinema',
        description:  'Directed 5 departments in executing 10 major programmes and 30+ agendas, implementing structured weekly alignments to effectively bridge student aspirations and ensure professional execution. Formulated comprehensive operational guidelines and long-term strategic plans, establishing a sustainable administrative foundation for the association.',
      },
      idLang: {
        role:         'Ketua Umum',
        organization: 'Himpunan Mahasiswa Teknologi Informasi (HMTI) - Polinema',
        description:  'Mengarahkan 5 departemen dalam merealisasikan 10 program kerja unggulan dan lebih dari 30 agenda organisasi, menerapkan evaluasi mingguan terstruktur untuk menjembatani aspirasi mahasiswa dan memastikan eksekusi yang profesional. Merumuskan pedoman operasional komprehensif dan rencana strategis jangka panjang sebagai fondasi administratif himpunan yang berkelanjutan.',
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
      period: { en: 'Aug 2022 to Jan 2024', id: 'Agu 2022 - Jan 2024' },
      en: {
        role:         'Chair of the OSIS Secretariat for Physical Fitness and Creative Ability',
        organization: 'OSIS SMA Negeri 1 Malang',
        description:  'Managed the execution of physical fitness and creative extracurricular programmes, acting as the primary liaison between student leaders and school administration to resolve operational bottlenecks. Orchestrated the "Kegiatan Tengah Semester (KTS) Sinau Nang Desa 2022" as Event Executive Chairman, successfully delivering a large-scale student activity programme.',
      },
      idLang: {
        role:         'Ketua Sekretariat Bidang Daya Kreasi dan Olahraga OSIS',
        organization: 'OSIS SMA Negeri 1 Malang',
        description:  'Mengelola pelaksanaan program ekstrakurikuler olahraga dan kreativitas, bertindak sebagai penghubung utama antara pengurus siswa dan administrasi sekolah untuk menyelesaikan hambatan operasional. Mengorkestrasi "Kegiatan Tengah Semester (KTS) Sinau Nang Desa 2022" sebagai Ketua Pelaksana, berhasil menyelenggarakan program kegiatan siswa berskala besar.',
      },
      images: [
        {
          src: '/src/assets/experiences/Event Executive Chairman of KTS 2022.jpg',
          caption: {
            en: 'Event Executive Chairman: KTS Sinau Nang Desa 2022 at SMAN 1 Malang',
            id: 'Ketua Pelaksana: KTS Sinau Nang Desa 2022 SMAN 1 Malang',
          },
        },
      ],
    },
  ],

  awards: [
    {
      event:  'INTERKOM 2026',
      issuer: 'HMTI Polinema',
      date:   { en: 'Jun 2026', id: 'Jun 2026' },
      en: {
        title:       '2nd Place - English Speech Category',
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
      event:  'INTERKOM 2025',
      issuer: 'HMTI Polinema',
      date:   { en: 'Dec 2025', id: 'Des 2025' },
      en: {
        title:       '3rd Place Winner - Smart City Category',
        description: 'Co-developed SehatSync, an AI-based health referral integration system for Kabupaten Malang that reduces manual referral delays through QR-based data transfers, complying with data protection regulations (UU PDP) and integrating with the national SATUSEHAT system.',
      },
      idLang: {
        title:       'Juara 3 Kategori Smart City',
        description: 'Mengembangkan SehatSync, sistem integrasi rujukan kesehatan berbasis AI untuk Kabupaten Malang yang mengurangi keterlambatan rujukan manual melalui transfer data berbasis QR, sesuai dengan regulasi perlindungan data (UU PDP) dan terintegrasi dengan sistem SATUSEHAT nasional.',
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
      title:  'Kenali Batikmu',
      year:   'On Going',
      status: { en: 'In Development', id: 'Sedang Dikembangkan' },
      github: '',
      live:   '',
      tech:   ['Flutter', 'TensorFlow Lite', 'Dart', 'Android'],
      en: {
        subtitle:    'Indonesian Batik Motif Recognition Mobile App',
        description: 'Developing a Flutter-based Android application that introduces Indonesian batik motifs, featuring on-device image classification with TensorFlow Lite for motif scanning and practice evaluation.',
      },
      idLang: {
        subtitle:    'Aplikasi Mobile Pengenalan Motif Batik Indonesia',
        description: 'Mengembangkan aplikasi Android berbasis Flutter yang memperkenalkan motif batik Indonesia, dilengkapi klasifikasi gambar secara on-device menggunakan TensorFlow Lite untuk pemindaian motif dan evaluasi latihan.',
      },
      images: [],
    },
    {
      id:     '02',
      title:  'Tulusbesar Village Information System',
      year:   'Aug 2026',
      status: { en: 'Completed', id: 'Selesai' },
      github: 'https://github.com/athfizh/KKN-TulusBesar',
      live:   'https://tulusbesar.com/',
      tech:   ['Laravel 13', 'Filament 5', 'PHP', 'Docker', 'MySQL'],
      en: {
        subtitle:    'Full-Stack Village Information System (KKN)',
        description: 'Built a full-stack village information system for Desa Tulusbesar as part of the Community Service Programme (KKN), using Laravel 13 and Filament 5 with map-based location input, Google sign-in, and QR code, PDF, and Word document generation, containerised with Docker.',
      },
      idLang: {
        subtitle:    'Sistem Informasi Desa Full-Stack (KKN)',
        description: 'Membangun sistem informasi desa full-stack untuk Desa Tulusbesar sebagai bagian dari Kuliah Kerja Nyata (KKN), menggunakan Laravel 13 dan Filament 5 dengan input lokasi berbasis peta, Google sign-in, serta pembuatan kode QR, dokumen PDF, dan Word, dikontainerisasi menggunakan Docker.',
      },
      images: [],
    },
    {
      id:     '03',
      title:  'MAGANGIN',
      year:   'Jun 2026',
      status: { en: 'Completed', id: 'Selesai' },
      github: 'https://github.com/athfizh/magangin',
      live:   '',
      tech:   ['Tailwind CSS v4', 'JavaScript', 'Vite 8', 'Laravel 13', 'Filament v4'],
      en: {
        subtitle:    'Student Internship Web Platform - Front-end Developer',
        description: 'Developed the front-end interface of a web platform that enables Polinema Information Technology students to apply for internships with partner companies, using Tailwind CSS v4, JavaScript, and Vite 8, integrated with a Laravel 13 back-end and Filament v4.',
      },
      idLang: {
        subtitle:    'Platform Web Magang Mahasiswa - Pengembang Front-end',
        description: 'Mengembangkan antarmuka front-end platform web yang memungkinkan mahasiswa Teknologi Informasi Polinema mendaftar magang ke perusahaan mitra, menggunakan Tailwind CSS v4, JavaScript, dan Vite 8, terintegrasi dengan back-end Laravel 13 dan Filament v4.',
      },
      images: [],
    },
    {
      id:     '04',
      title:  'SehatSync',
      year:   'Dec 2025',
      status: { en: 'Award Winner', id: 'Juara Kompetisi' },
      github: '',
      live:   '',
      tech:   ['AI/ML', 'QR Integration', 'SATUSEHAT API', 'UU PDP Compliance'],
      en: {
        subtitle:    'Health Referral Integration System (3rd Place - INTERKOM 2025)',
        description: 'Developed an AI-based health referral system for Kabupaten Malang that reduces manual referral delays through QR-based data transfers, complying with data protection regulations (UU PDP) and integrating with the national SATUSEHAT system.',
      },
      idLang: {
        subtitle:    'Sistem Integrasi Rujukan Kesehatan (Juara 3 - INTERKOM 2025)',
        description: 'Mengembangkan sistem rujukan kesehatan berbasis AI untuk Kabupaten Malang yang mengurangi keterlambatan rujukan manual melalui transfer data berbasis QR, sesuai regulasi perlindungan data (UU PDP) dan terintegrasi dengan sistem SATUSEHAT nasional.',
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
    {
      id:     '05',
      title:  'NCS Lab Website',
      year:   'Dec 2025',
      status: { en: 'Completed', id: 'Selesai' },
      github: '',
      live:   '',
      tech:   ['HTML5', 'CSS', 'JavaScript'],
      en: {
        subtitle:    'Network & Cyber Security Lab Website - Front-end Developer',
        description: 'Built a user-centric website for the Network and Cyber Security (NCS) Lab as part of a Project-Based Learning initiative, improving digital accessibility and resource sharing for laboratory members.',
      },
      idLang: {
        subtitle:    'Website Laboratorium Network & Cyber Security - Pengembang Front-end',
        description: 'Membangun website yang berpusat pada pengguna untuk Laboratorium Network and Cyber Security (NCS Lab) sebagai bagian dari inisiatif Project-Based Learning, meningkatkan aksesibilitas digital dan berbagi sumber daya bagi anggota laboratorium.',
      },
      images: [
        {
          src: '/src/assets/experiences/PBL Semester 3.jpg',
          caption: {
            en: 'NCS Lab (Network & Cyber Security Laboratory) - PBL Semester 3 Development Team',
            id: 'Tim Pengembang Website NCS Lab - PBL Semester 3',
          },
        },
      ],
    },
  ],

  // Merged: old skills retained, new skills from CV projects added where not yet present
  capabilities: [
    {
      area:  { en: 'Web Development', id: 'Pengembangan Web' },
      items: ['PHP', 'Laravel', 'Filament', 'Blade', 'HTML / CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'MySQL', 'Git', 'Docker'],
    },
    {
      area:  { en: 'Mobile & App Development', id: 'Aplikasi Mobile' },
      items: ['Flutter', 'TensorFlow Lite', 'Dart', 'Android', 'Java', 'OOP'],
    },
    {
      area:  { en: 'UI/UX Design', id: 'Desain UI/UX' },
      items: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    },
    {
      area:  { en: 'AI & Machine Learning', id: 'AI & Machine Learning' },
      items: ['Machine Learning (Fundamentals)', 'Prompt Engineering', 'Google ADK', 'Gemini API', 'Python', 'Scikit-learn'],
    },
  ],

  // Merged: all previous certifications retained, combined SSI ML entries, ordered newest to oldest
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
      title:        'Machine Learning Bootcamp & Intensive Camp',
      issuer:       'Special Skill Indonesia',
      year:         'Sep 2025',
      credentialId: 'SSB2SP101 / SPECIAL/342b36/10092025/0043',
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
