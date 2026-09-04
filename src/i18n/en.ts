// src/i18n/en.ts
export const en = {
  meta: {
    title: 'Green Metrics Solutions (GREEMETS) — Environmental Engineering & Consulting',
    description:
      'Premium carbon and water footprint calculation, decarbonization, certification, industrial safety, and ISO 9001, 14001, 45001 and 50001 management systems services in Ecuador.',
    ogLocale: 'en_US',
  },

  nav: {
    ariaLabel: 'Main navigation',
    about: 'About Us',
    services: 'Services',
    differentiators: 'Why Us',
    cta: 'Talk to an Expert',
    openMenu: 'Open menu',
    langSwitchAria: 'Switch language',
  },

  hero: {
    titleBefore: 'We measure what truly matters to build a',
    titleAccent: 'sustainable future',
    subtitle:
      'Specialists in decarbonization, ecological footprint measurement, industrial safety, risk analysis, consulting, and comprehensive environmental certification.',
    ctaPrimary: 'Talk to an Expert',
    ctaSecondary: 'View Services',
    scrollAria: 'Scroll down',
    scrollLabel: 'Discover',
  },

  about: {
    tag: 'About Us',
    titleBefore: 'Guiding industry toward a',
    titleAccent: 'sustainable and profitable model',
    lead:
      'At <strong>Green Metrics Solutions (GREEMETS)</strong>, we believe sustainability is not an abstract goal, but the only viable path forward for modern businesses.',
    p1: 'We were founded with the vision of turning ecological commitment into measurable business value. We specialize in delivering precision analytical tools and mitigation engineering, enabling organizations to accurately assess their environmental impact and chart efficient paths toward decarbonization and water regeneration.',
    p2: 'We guide corporations across Ecuador and the region through the implementation of international standards (ISO) and rigorous scientific methodologies. Our approach combines technical soundness with a deep commitment to social and occupational safety, ensuring operations that are environmentally responsible, economically prosperous, and safe.',
    stats: [
      { number: '100%', label: 'Technical Rigor' },
      { number: 'ISO', label: 'Global Standards' },
      { number: 'Ec', label: 'National Presence' },
    ],
    imageAlt: 'GREEMETS team conducting a technical environmental audit',
    badgeTop: 'GREEMETS',
    badgeBottom: 'Sustainable Solutions',
  },

  services: {
    tag: 'Our Services',
    titleBefore: 'Specialized, high-level',
    titleAccent: 'engineering and consulting',
    subtitle:
      'We deliver environmental, energy, and industrial safety solutions with scientific rigor, aligned with the highest global standards to drive sustainable profitability.',
    items: [
      {
        title: 'Occupational Risk Analysis',
        description:
          "We protect what matters most in your organization: your people and your operations, through specialized occupational risk analysis and evaluation of industrial safety management system infrastructure.",
        details:
          'We identify hazards, minimize risks, and strengthen prevention to ensure safe, efficient work environments that comply with current regulations.',
      },
      {
        title: 'Methane Emissions Mitigation',
        description:
          'We help oil and gas companies reduce their methane emissions through the implementation of Leak Detection and Repair (LDAR) programs.',
        details:
          'We apply advanced technologies to identify, quantify, and manage fugitive emissions at hydrocarbon production, processing, transport, and storage facilities.',
      },
      {
        title: 'Carbon Footprint and Decarbonization Plan',
        description:
          "We support organizations in measuring, managing, and reducing their climate impact through corporate carbon footprint calculation and the development of decarbonization strategies.",
        details:
          'We quantify greenhouse gas emissions, identify the main sources of emissions, and design tailored action plans to reduce them efficiently and sustainably. Our services strengthen environmental performance, help meet climate standards and commitments, and support the transition toward more competitive, low-carbon operations.',
      },
      {
        title: 'Energy Efficiency Consulting',
        description:
          'We help organizations optimize energy use and reduce operating costs by identifying improvement opportunities across their processes and facilities.',
        details:
          'We conduct energy audits, consumption analysis, and efficiency assessments that boost productivity, cut energy waste, and reduce emissions linked to energy use. Our solutions strengthen competitiveness and support sustainability and decarbonization goals.',
      },
    ],
  },

  whyus: {
    tag: 'Why Us',
    titleBefore: 'Why choose',
    titleAccent: 'GREEMETS',
    titleAfter: '?',
    subtitle:
      'We offer a premium consulting model that connects ecological responsibility with operational efficiency and human development.',
    pillarLabel: 'Pillar 0',
    items: [
      {
        title: 'Scientific Rigor and Data Engineering',
        description:
          'Our measurements and audits are never mere general estimates. We use advanced modeling and engineering data analysis to deliver undeniable metrics, enabling truly fact-based decision-making.',
        badge: 'Precision',
      },
      {
        title: 'Compliance with International Standards',
        description:
          'Every process, report, and consulting engagement we structure is designed to directly meet the requirements of formal certification audits under global standards such as ISO, the GHG Protocol, or CDP.',
        badge: 'Assurance',
      },
      {
        title: 'Human-Centered Approach and Risk Prevention',
        description:
          'Environmental sustainability is inseparable from the safety and wellbeing of the people who make your operations possible. We design safe, healthy environments through industrial safety and occupational health consulting.',
        badge: 'Wellbeing',
      },
      {
        title: 'Sustainable Return on Investment (ROI)',
        description:
          "We don't treat environmental compliance as a passive regulatory expense. We structure carbon and water reduction projects that optimize operational efficiency, generating savings that offset the investment.",
        badge: 'Efficiency',
      },
    ],
  },

  testimonials: {
    tag: 'Testimonials',
    titleBefore: 'What clients who',
    titleAccent: 'trust us say',
    prevAria: 'Previous testimonial',
    nextAria: 'Next testimonial',
    dotAria: (n: number) => `Go to testimonial ${n}`,
    items: [
      {
        quote:
          "GREEMETS' advisory work on our carbon footprint was flawless. We not only obtained a rigorously verified calculation, but their decarbonization plan also helped us cut fuel costs. A service with real technical and financial value.",
        author: 'Ing. Carlos Mendoza',
        role: 'Operations Manager',
        company: 'Conalimentos S.A.',
        location: 'Quito, Ecuador',
      },
      {
        quote:
          'Implementing our integrated industrial safety management system with GREEMETS transformed our preventive culture. Their consulting is genuinely human and hands-on, adapting perfectly to our realities in the field.',
        author: 'Dra. Andrea Peralta',
        role: 'Director of Safety and Health',
        company: 'Corporación Minera del Norte',
        location: 'Machala, El Oro',
      },
      {
        quote:
          'The water footprint study and subsequent ISO 14046 certification exceeded our expectations. The technical water-recirculation proposal reduced our consumption and strengthened our green reputation.',
        author: 'Ing. Luis Fernando Espinosa',
        role: 'Sustainability Coordinator',
        company: 'Textiles del Sol',
        location: 'Guayaquil, Ecuador',
      },
    ],
  },

  projects: {
    tag: 'Success Stories',
    titleBefore: 'Real impact on',
    titleAccent: "Ecuador's industry",
    subtitle:
      'See how we help our clients optimize resources, mitigate emissions, and earn global certifications through engineering- and data-driven solutions.',
    detailCta: 'View impact and details',
    closeModalAria: 'Close modal',
    descriptionHeading: 'Project Description',
    scopeLabel: 'Scope:',
    durationLabel: 'Project Duration:',
    dialogCta: 'I want a similar assessment',
    items: [
      {
        title: 'Decarbonization at a Food Manufacturing Plant',
        client: 'Confiteca S.A.',
        location: 'Quito, Pichincha',
        shortDesc:
          'Greenhouse gas audit and installation of efficient boiler burners.',
        fullDesc:
          'We carried out a full Scope 1 and 2 emissions audit under ISO 14064. We found that steam-generating boilers accounted for 65% of total direct combustion emissions. We designed and implemented an industrial burner modernization plan with oxygen control and combustion air preheaters.',
        metrics: [
          { value: '1,250 T', label: 'CO₂ Reduced/Year' },
          { value: '15%', label: 'Fuel Savings' },
        ],
        duration: '6 Months',
        scope: 'Scope 1 & 2, ISO 14064-1',
      },
      {
        title: 'Water Efficiency in the Flower-Growing Sector',
        client: 'Exportadora RoseLux',
        location: 'Cayambe, Pichincha',
        shortDesc:
          'Water footprint calculation and certification with a redesign of the drip irrigation and recirculation system.',
        fullDesc:
          'We assessed water consumption profiles (blue, green, and grey footprint) on a 40-hectare export rose farm following the ISO 14046 methodology. Based on the diagnosis, we implemented an automated pulse drip-irrigation system and a drainage channel to recirculate substrate leachate.',
        metrics: [
          { value: '45,000 m³', label: 'Water Saved/Year' },
          { value: '98%', label: 'Irrigation Efficiency' },
        ],
        duration: '8 Months',
        scope: 'Water Footprint, ISO 14046',
      },
      {
        title: 'Methane Mitigation in the Oil & Gas Sector',
        client: 'Oleoducto Andino',
        location: 'Lago Agrio, Sucumbíos',
        shortDesc:
          'Baseline diagnostics and LDAR detection of fugitive emissions in valves and tanks.',
        fullDesc:
          'We deployed optical gas imaging (OGI) infrared cameras and portable analyzers to map, detect, and quantify fugitive methane emissions at crude oil pumping stations. We designed a systematic Leak Detection and Repair (LDAR) program and trained internal maintenance crews.',
        metrics: [
          { value: '340 Tons', label: 'Fugitive CH₄ Eliminated' },
          { value: '100%', label: 'Critical Valves Repaired' },
        ],
        duration: '4 Months',
        scope: 'Methane Baseline, LDAR Program',
      },
      {
        title: 'ISO 50001 Energy Management',
        client: 'Aceros del Pacífico',
        location: 'Guayaquil, Guayas',
        shortDesc:
          'Comprehensive energy audit and performance indicator design at a metallurgical plant.',
        fullDesc:
          'We designed and implemented an Energy Management System (EnMS) under ISO 50001 at a steel foundry and metalworking plant. We established energy baselines linking consumption to critical production variables, optimized control of electric arc furnaces, and automated air compressors.',
        metrics: [
          { value: '8%', label: 'Overall Electricity Savings' },
          { value: '1.8 Years', label: 'Return on Investment' },
        ],
        duration: '12 Months',
        scope: 'Energy Management, ISO 50001',
      },
    ],
  },

  contact: {
    tag: 'Contact',
    titleBefore: 'Ready to take the',
    titleAccent: 'next step',
    titleAfter: '?',
    description:
      'Get in touch today for a preliminary, no-obligation assessment. Our team of engineers is ready to design the ideal environmental solution for your company.',
    methods: {
      locationTitle: 'Location',
      locationLine1: 'Telmo Heredia y Elisa Mariño',
      locationLine2: 'San Juan de Cumbayá, Quito - Ecuador',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
    },
    form: {
      subjectHidden: 'New contact from GREEMETS website',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Eng. John Smith',
      nameError: 'Name is required.',
      companyLabel: 'Company / Organization *',
      companyPlaceholder: 'e.g. Southern Industries',
      companyError: 'Company is required.',
      emailLabel: 'Corporate Email *',
      emailPlaceholder: 'john.smith@company.com',
      emailError: 'Please enter a valid email.',
      phoneLabel: 'Contact Phone (Ecuador Format) *',
      phonePlaceholder: '987654321',
      phoneError: 'Enter a 9-digit mobile or 8-digit landline number (without +593).',
      messageLabel: 'Message / Requirement *',
      messagePlaceholder: 'Briefly describe the services you are interested in...',
      messageError: 'Message cannot be empty.',
      submit: 'Send Message',
      submitting: 'Sending...',
      toastValidationError: 'Please correctly fill in all required fields.',
      toastSuccess: 'Message sent successfully! We will get in touch soon.',
      toastGenericError: 'There was an error sending the form. Please try again.',
      // Labels used inside the message payload sent to Formspree
      payloadName: 'Name',
      payloadCompany: 'Company',
      payloadPhone: 'Phone',
      payloadMessage: 'Original message',
    },
  },

  footer: {
    tagline: 'Green Metrics Solutions',
    description:
      "Engineering and technical consulting specialized in calculating, reducing, and certifying environmental footprints across Ecuador's industrial sector.",
    linkedinAria: 'GREEMETS on LinkedIn',
    navHeading: 'Navigation',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      differentiators: 'Why Us',
      contact: 'Contact',
    },
    servicesHeading: 'Core Services',
    servicesList: [
      'Carbon Footprint',
      'Water Footprint',
      'Methane Mitigation',
      'Safety & Health',
      'ISO Management Systems',
    ],
    officeHeading: 'Head Office',
    addressLine: 'Telmo Heredia y Elisa Mariño, San Juan de Cumbayá, Quito - Ecuador',
    rightsReserved: 'All rights reserved.',
    legalNotice: 'Legal Notice',
    privacyPolicy: 'Privacy Policy',
    legalDialog: {
      heading: 'Legal Notice',
      closeAria: 'Close legal notice',
      p1: '<strong>Green Metrics Solutions GREEMETS</strong> is a trademark registered in the Republic of Ecuador. All information provided on this website is for informational purposes and presents our technical consulting services.',
      p2: "Intellectual property rights over the content, images, code, and text on this website belong to GREEMETS or its respective licensors. Partial or full reproduction without express written authorization is prohibited.",
    },
    privacyDialog: {
      heading: 'Privacy Policy',
      closeAria: 'Close privacy policy',
      p1: "In accordance with Ecuador's Organic Law on Personal Data Protection, we inform you that data submitted through the contact form will be processed exclusively to respond to your business inquiry.",
      p2: 'GREEMETS does not sell, rent, or share your data with third parties under any circumstances. Your data will be stored securely and indefinitely as part of our corporate correspondence records, unless you expressly request its deletion by writing to gerencia@greemets.com.',
    },
  },

  cookie: {
    message:
      'We use our own and third-party cookies to analyze traffic on our site and optimize your user experience. By clicking "Accept," you consent to the use of all cookies.',
    decline: 'Decline',
    accept: 'Accept',
  },
} as const;
