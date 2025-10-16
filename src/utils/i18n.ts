// Translation utilities for bilingual support

export const translations = {
  en: {
    // Navigation
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      services: 'Services',
      projects: 'Projects',
    },

    // Hero Section
    hero: {
      title: 'WEBSITES THAT RANK\nAND BRING YOU CUSTOMERS',
      subtitle: 'I design and build fast, clean websites and landing pages with strong local SEO. The goal: more visibility, more calls, more clients.',
      cta: 'CONTACT ME',
    },

    // Services Section
    services: {
      sectionTitle: 'WHAT I OFFER',
      sectionSubtitle: 'Two focused services designed to help your business grow online',

      service1Title: 'Landing Pages that Convert',
      service1Description: 'Fast delivery of clean, modern landing pages. Ideal for promotions, ads, or businesses that need a simple online presence that converts visitors into leads.',
      service1CTA: 'Get a landing page',

      service2Title: 'SEO-Optimised Websites',
      service2Description: 'Full websites designed and built to rank higher on Google. Includes design, copy, and SEO setup so local businesses can get more traffic, more calls, and more clients.',
      service2CTA: 'Start your website project',
    },

    // Case Study Section
    caseStudy: {
      sectionTitle: 'CASE STUDY',
      sectionSubtitle: 'Real results from a recent local SEO project',

      overviewLabel: 'Overview',
      clientLabel: 'Client',
      industryLabel: 'Industry',
      locationLabel: 'Location',
      timelineLabel: 'Timeline',

      whatIDidTitle: 'What I did',
      resultsTitle: 'Results',
      challengeTitle: 'Challenge',
      solutionTitle: 'Solution',

      viewProject: 'View full project',
      contactCTA: 'INTERESTED? LET\'S TALK',
    },

    // About Section
    about: {
      sectionTitle: 'ABOUT ME',
      whoAmITitle: 'WHO I AM',
      whatIDoTitle: 'WHAT I DO',
      whyLocalSEOTitle: 'WHY LOCAL SEO?',
      myApproachTitle: 'MY APPROACH',

      viewProjects: 'VIEW MY PROJECTS',
    },

    // Contact Section
    contact: {
      sectionTitle: 'GET IN TOUCH',
      sectionSubtitle: 'Ready to start your project? Let\'s talk.',

      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',

      submitButton: 'SEND MESSAGE',

      orReachOut: 'Or reach out directly:',
      phone: '+351 924 466 899',
      email: 'luismadeira@ruimadeira.pt',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
    },

    // Footer
    footer: {
      copyright: '© 2025 Luís Madeira. All rights reserved.',
      madeWith: 'Made with',
      location: 'Based in Porto, Portugal',
    },

    // Common
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      getStarted: 'Get started',
      viewAll: 'View all',
      backToHome: 'Back to home',
    },
  },

  pt: {
    // Navigation
    nav: {
      work: 'Trabalhos',
      about: 'Sobre',
      contact: 'Contacto',
      services: 'Serviços',
      projects: 'Projetos',
    },

    // Hero Section
    hero: {
      title: 'WEBSITES QUE APARECEM\nNO GOOGLE E TRAZEM CLIENTES',
      subtitle: 'Crio websites rápidos e profissionais com SEO local forte. O objetivo: mais visibilidade, mais chamadas, mais clientes.',
      cta: 'CONTACTE-ME',
    },

    // Services Section
    services: {
      sectionTitle: 'O QUE OFEREÇO',
      sectionSubtitle: 'Dois serviços focados para ajudar o seu negócio a crescer online',

      service1Title: 'Landing Pages que Convertem',
      service1Description: 'Entrega rápida de landing pages modernas e limpas. Ideal para promoções, anúncios ou negócios que precisam de uma presença online simples que converte visitantes em leads.',
      service1CTA: 'Pedir landing page',

      service2Title: 'Websites Otimizados para SEO',
      service2Description: 'Websites completos desenhados e construídos para aparecer melhor no Google. Inclui design, conteúdo e configuração SEO para que negócios locais tenham mais tráfego, mais chamadas e mais clientes.',
      service2CTA: 'Começar projeto de website',
    },

    // Case Study Section
    caseStudy: {
      sectionTitle: 'CASO DE ESTUDO',
      sectionSubtitle: 'Resultados reais de um projeto recente de SEO local',

      overviewLabel: 'Visão Geral',
      clientLabel: 'Cliente',
      industryLabel: 'Indústria',
      locationLabel: 'Localização',
      timelineLabel: 'Cronologia',

      whatIDidTitle: 'O que Fiz',
      resultsTitle: 'Resultados',
      challengeTitle: 'Desafio',
      solutionTitle: 'Solução',

      viewProject: 'Ver projeto completo',
      contactCTA: 'INTERESSADO? VAMOS FALAR',
    },

    // About Section
    about: {
      sectionTitle: 'SOBRE MIM',
      whoAmITitle: 'QUEM SOU',
      whatIDoTitle: 'O QUE FAÇO',
      whyLocalSEOTitle: 'PORQUÊ SEO LOCAL?',
      myApproachTitle: 'A MINHA ABORDAGEM',

      viewProjects: 'VER OS MEUS PROJETOS',
    },

    // Contact Section
    contact: {
      sectionTitle: 'ENTRE EM CONTACTO',
      sectionSubtitle: 'Pronto para começar o seu projeto? Vamos falar.',

      nameLabel: 'Nome',
      namePlaceholder: 'João Silva',
      emailLabel: 'Email',
      emailPlaceholder: 'joao@exemplo.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre o seu projeto...',

      submitButton: 'ENVIAR MENSAGEM',

      orReachOut: 'Ou contacte-me diretamente:',
      phone: '+351 924 466 899',
      email: 'luismadeira@ruimadeira.pt',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
    },

    // Footer
    footer: {
      copyright: '© 2025 Luís Madeira. Todos os direitos reservados.',
      madeWith: 'Feito com',
      location: 'Baseado no Porto, Portugal',
    },

    // Common
    common: {
      readMore: 'Ler mais',
      learnMore: 'Saber mais',
      getStarted: 'Começar',
      viewAll: 'Ver tudo',
      backToHome: 'Voltar ao início',
    },
  },
};

/**
 * Get translation for a specific key
 * @param locale - Language code ('en' or 'pt')
 * @param key - Translation key in dot notation (e.g., 'nav.work')
 * @returns Translated string
 */
export function getTranslation(locale: string, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale as keyof typeof translations];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

/**
 * Shorthand function for getting translations
 * @param locale - Language code ('en' or 'pt')
 * @param key - Translation key in dot notation
 * @returns Translated string
 */
export function t(locale: string, key: string): string {
  return getTranslation(locale, key);
}

/**
 * Get the current locale from the URL pathname
 * @param pathname - Current URL pathname
 * @returns Locale code ('en' or 'pt')
 */
export function getLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/pt')) {
    return 'pt';
  }
  return 'en';
}

/**
 * Path mappings between English and Portuguese pages
 */
const pathMappings: Record<string, { en: string; pt: string }> = {
  home: { en: '/', pt: '/pt/' },
  about: { en: '/about', pt: '/pt/sobre' },
  projects: { en: '/projects', pt: '/pt/projetos' },
  services: { en: '/services', pt: '/pt/servicos' },
  // Case Studies
  portoCarCare: { en: '/projects/porto-car-care', pt: '/pt/projetos/porto-car-care' },
  brunnoRodrigues: { en: '/projects/brunno-rodrigues', pt: '/pt/projetos/brunno-rodrigues' },
  portoMassageStudio: { en: '/projects/porto-massage-studio', pt: '/pt/projetos/porto-massage-studio' },
};

/**
 * Get the alternate path for the other language
 * @param pathname - Current URL pathname
 * @param currentLocale - Current locale
 * @returns Path in the other language
 */
export function getAlternatePath(pathname: string, currentLocale: string): string {
  // Normalize pathname (remove trailing slash except for root)
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  // Find matching mapping
  for (const mapping of Object.values(pathMappings)) {
    if (currentLocale === 'en' && mapping.en === normalizedPath) {
      return mapping.pt;
    }
    if (currentLocale === 'pt' && mapping.pt === normalizedPath) {
      return mapping.en;
    }
  }

  // Fallback: if no mapping found, use simple prefix logic
  if (currentLocale === 'en') {
    return `/pt${normalizedPath}`;
  } else {
    return normalizedPath.replace('/pt', '') || '/';
  }
}
