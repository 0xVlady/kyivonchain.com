import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    en: string;
    uk: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.login': { en: 'Log In', uk: 'Увійти' },
  'nav.joinWaitlist': { en: 'Join Waitlist', uk: 'Хочу у вейтліст' },
  'nav.hostEvent': { en: 'Host Event', uk: 'Організувати тусу' },
  'nav.partnerWithUs': { en: 'Partner With Us', uk: 'Співпраця' },
  'nav.aboutUs': { en: 'About Us', uk: 'Хто ми такі' },
  'nav.ourMission': { en: 'Our Mission', uk: 'Наша місія' },
  'nav.partnership': { en: 'Partnership', uk: 'Співпраця' },
  'nav.language': { en: 'Language', uk: 'Мова' },
  'nav.join': { en: 'Join', uk: 'Хочу' },

  // Hero Section
  'hero.title': { en: 'KYIV.ONCHAIN', uk: 'KYIV.ONCHAIN' },
  'hero.tagline': { en: 'The permanent home for Web3 in Ukraine', uk: 'Web3 дім для України' },
  'hero.subtitle': { en: 'Powered by Solana. Built by Acropolis. Backed by Kumeka.', uk: 'На Solana. Від Acropolis. За підтримки Kumeka.' },
  'hero.joinBtn': { en: 'Join Waiting List', uk: 'Хочу у вейтліст' },
  'hero.hostBtn': { en: 'Host Your Event', uk: 'Зробити свою тусу' },
  'hero.hostBtnSoon': { en: 'Soon', uk: 'Скоро' },
  'hero.joinWaitlist': { en: 'Join Waitlist', uk: 'Хочу у вейтліст' },
  'hero.communityMembers': { en: 'Community Members', uk: 'Наших людей' },
  'hero.eventsHosted': { en: 'Events Hosted', uk: 'Подій провели' },
  'hero.projectsLaunched': { en: 'Projects Launched', uk: 'Проєктів запустили' },
  'hero.buildingFuture': { en: 'Building Ukraine\'s Web3 Future', uk: 'Будуємо Web3 майбутнє України' },
  'hero.empowering': { en: 'Empowering Ukrainian developers and entrepreneurs in the decentralized economy', uk: 'Допомагаємо українським розробникам та підприємцям у децентралізованій економіці' },

  // About Section
  'about.title': { en: 'About the Hub', uk: 'Про Хаб' },
  'about.description': { en: 'KYIV.ONCHAIN is Ukraine\'s dedicated IRL home for founders, developers, marketers, researchers, traders, and operators building in Web3.', uk: 'KYIV.ONCHAIN - це спеціалізований фізичний дім України для засновників, розробників, маркетологів, дослідників, трейдерів та операторів, які будують у Web3.' },
  'about.partnership': { en: 'Built in partnership with iHUB Kyiv, we operate within a fully equipped co-working space — with high-speed internet, flexible desks, and a full event setup.', uk: 'Побудований у партнерстві з iHUB Kyiv, ми працюємо в повністю обладнаному коворкінг-просторі — з високошвидкісним інтернетом, гнучкими робочими місцями та повним обладнанням для подій.' },
  'about.safety': { en: '🛡️ Safety-first: iHUB features an underground workspace, allowing members to work during air raid alarms, making KYIV.ONCHAIN a rare wartime-resilient Web3 HQ.', uk: '🛡️ Безпека понад усе: iHUB має підземний робочий простір, що дозволяє учасникам працювати під час повітряних тривог, роблячи KYIV.ONCHAIN рідкісною стійкою до воєнного часу Web3 штаб-квартирою.' },
  'about.features.undergroundSafety': { en: 'Underground Safety', uk: 'Підземна Безпека' },
  'about.features.undergroundSafety.desc': { en: 'Work safely during air raid alarms in our underground workspace', uk: 'Працюйте безпечно під час повітряних тривог у нашому підземному робочому просторі' },
  'about.features.highSpeedInternet': { en: 'High-Speed Internet', uk: 'Високошвидкісний Інтернет' },
  'about.features.highSpeedInternet.desc': { en: 'Reliable connectivity for all your Web3 development needs', uk: 'Надійне з\'єднання для всіх ваших потреб у розробці Web3' },
  'about.features.flexibleWorkspaces': { en: 'Flexible Workspaces', uk: 'Гнучкі Робочі Простори' },
  'about.features.flexibleWorkspaces.desc': { en: 'Hot desks, private offices, and collaboration areas', uk: 'Гарячі столи, приватні офіси та зони співпраці' },
  'about.features.fullEventSetup': { en: 'Full Event Setup', uk: 'Повне Обладнання для Подій' },
  'about.features.fullEventSetup.desc': { en: 'Complete AV equipment for hosting events and presentations', uk: 'Повне аудіовізуальне обладнання для проведення подій та презентацій' },
  'about.features.ihubPartnership': { en: 'iHUB Partnership', uk: 'Партнерство з iHUB' },
  'about.features.ihubPartnership.desc': { en: 'Access to established coworking infrastructure', uk: 'Доступ до встановленої коворкінг-інфраструктури' },
  'about.features.communityPerks': { en: 'Community Perks', uk: 'Переваги Спільноти' },
  'about.features.communityPerks.desc': { en: 'Coffee, networking events, and member benefits', uk: 'Кава, нетворкінг-заходи та переваги для учасників' },
  'about.partnerLocation': { en: 'Partner Location', uk: 'Локація Партнера' },
  'about.safeWorkspace': { en: 'Safe Workspace', uk: 'Безпечний Робочий Простір' },
  'about.internetTech': { en: 'Internet & Tech', uk: 'Інтернет та Технології' },
  'about.web3Builders': { en: 'Web3 Builders', uk: 'Web3 Будівельники' },

  // Membership Tiers
  'membership.title': { en: 'Membership Tiers', uk: 'Рівні участі' },
  'membership.subtitle': { en: 'Join Ukraine\'s premier Web3 hub with three distinct membership levels, each building upon the previous to unlock greater opportunities and influence.', uk: 'Приєднуйтесь до топового Web3 хабу України з трьома рівнями участі — кожен наступний відкриває більше можливостей та впливу.' },
  'membership.guest': { en: 'Guest', uk: 'Гість' },
  'membership.member': { en: 'Member', uk: 'Свій' },
  'membership.innerCircle': { en: 'Inner Circle', uk: 'Внутрішнє коло' },
  'membership.mostPopular': { en: 'Most Popular', uk: 'Найпопулярніший' },
  'membership.leadershipLevel': { en: 'Leadership Level', uk: 'Лідерський рівень' },
  'membership.getStarted': { en: 'Get Started', uk: 'Почати' },
  'membership.joinWaitlist': { en: 'Join Waitlist', uk: 'Хочу у вейтліст' },
  'membership.whyChoose': { en: 'Why Choose Membership?', uk: 'Навіщо брати участь?' },
  'membership.communityFirst': { en: 'Community First:', uk: 'Спільнота понад усе:' },
  'membership.communityFirst.desc': { en: 'Connect with Ukraine\'s top Web3 builders and innovators', uk: 'Знайомтесь з топовими Web3 будівельниками та інноваторами України' },
  'membership.warResilient': { en: 'War-Resilient:', uk: 'Стійкі до війни:' },
  'membership.warResilient.desc': { en: 'Underground workspace ensures continuity during alerts', uk: 'Підземний простір дозволяє працювати навіть під час тривог' },
  'membership.globalNetwork': { en: 'Global Network:', uk: 'Глобальна мережа:' },
  'membership.globalNetwork.desc': { en: 'Access to international Web3 partnerships and opportunities', uk: 'Доступ до міжнародних Web3 партнерств та можливостей' },

  // Featured Events
  'events.title': { en: 'Featured Events', uk: 'Рекомендовані Події' },
  'events.subtitle': { en: 'Join our signature events that bring together Ukraine\'s Web3 community. From education and networking to building and socializing — there\'s something for everyone.', uk: 'Приєднуйтесь до наших флагманських подій, які об\'єднують Web3 спільноту України. Від освіти та нетворкінгу до будівництва та соціалізації — є щось для кожного.' },
  'events.communityImpact': { en: 'Community Impact', uk: 'Вплив Спільноти' },
  'events.eventsHosted': { en: 'Events Hosted', uk: 'Проведених Подій' },
  'events.totalAttendees': { en: 'Total Attendees', uk: 'Загальна Кількість Відвідувачів' },
  'events.countries': { en: 'Countries', uk: 'Країн' },
  'events.expertSpeakers': { en: 'Expert Speakers', uk: 'Експертних Спікерів' },
  'events.attendees': { en: 'attendees', uk: 'відвідувачів' },

  // Footer
  'footer.tagline': { en: 'Ukraine\'s permanent home for Web3 builders, built by the community.', uk: 'Web3 дім України, створений нашою спільнотою.' },
  'footer.stayUpdated': { en: 'Stay Updated', uk: 'Тримайтесь в курсі' },
  'footer.quickLinks': { en: 'Quick Links', uk: 'Швидкі посилання' },
  'footer.getStarted': { en: 'Get Started', uk: 'Почати' },
  'footer.contact': { en: 'Contact', uk: 'Зв\'язок' },
  'footer.location': { en: 'Location', uk: 'Де знайти' },
  'footer.builtWith': { en: 'Built with', uk: 'Зроблено з' },
  'footer.forUkraine': { en: 'for Ukraine\'s Web3 community', uk: 'для Web3 спільноти України' },
  'footer.language': { en: 'Language:', uk: 'Мова:' },
  'footer.privacyPolicy': { en: 'Privacy Policy', uk: 'Політика конфіденційності' },
  'footer.termsOfService': { en: 'Terms of Service', uk: 'Умови використання' },
  'footer.codeOfConduct': { en: 'Code of Conduct', uk: 'Правила поведінки' },
  'footer.aboutUs': { en: 'About Us', uk: 'Хто ми такі' },
  'footer.ourVision': { en: 'Our Vision', uk: 'Наше бачення' },
  'footer.partners': { en: 'Partners', uk: 'Партнери' },
  'footer.calendar': { en: 'Calendar', uk: 'Календар' },
  'footer.joinWaitingList': { en: 'Join Waiting List', uk: 'Хочу у вейтліст' },
  'footer.hostEvent': { en: 'Host Event', uk: 'Організувати тусу' },
  'footer.partnershipInfo': { en: 'Partnership Info', uk: 'Про співпрацю' },
  'footer.brandingAccess': { en: 'Branding Access', uk: 'Брендинг матеріали' },

  // Forms
  'form.join.title': { en: 'Join the Waitlist', uk: 'Хочу у вейтліст' },
  'form.event.title': { en: 'Host an Event', uk: 'Організувати тусу' },
  'form.partner.title': { en: 'Partner With Us', uk: 'Співпраця з нами' },
  'form.name': { en: 'Name', uk: 'Ім\'я' },
  'form.email': { en: 'Email', uk: 'Пошта' },
  'form.company': { en: 'Company', uk: 'Компанія' },
  'form.message': { en: 'Message', uk: 'Повідомлення' },
  'form.submit': { en: 'Submit Application', uk: 'Подати заявку' },

  // Pages
  'pages.vision.title': { en: 'Our Vision', uk: 'Наше Бачення' },
  'pages.vision.subtitle': { en: 'Building the permanent home for Web3 innovation in Ukraine, fostering a resilient ecosystem that thrives even in challenging times.', uk: 'Будуємо постійний дім для Web3 інновацій в Україні, сприяючи створенню стійкої екосистеми, яка процвітає навіть у складні часи.' },
  'pages.vision.backTo': { en: 'Back to KYIV.ONCHAIN', uk: 'Назад до KYIV.ONCHAIN' },
  'pages.vision.returnTo': { en: 'Return to KYIV.ONCHAIN', uk: 'Повернутися до KYIV.ONCHAIN' },
  'pages.vision.joinBuilding': { en: 'Join Us in Building the Future', uk: 'Приєднуйтесь до Нас у Будівництві Майбутнього' },
  'pages.vision.joinDescription': { en: 'This vision becomes reality through community. Whether you\'re a developer, entrepreneur, investor, or simply passionate about Web3\'s potential in Ukraine, your contribution shapes our collective future.', uk: 'Це бачення стає реальністю через спільноту. Незалежно від того, чи ви розробник, підприємець, інвестор чи просто захоплюєтесь потенціалом Web3 в Україні, ваш внесок формує наше спільне майбутнє.' },

  // Calendar Page
  'calendar.title': { en: 'Event Calendar', uk: 'Календар Подій' },
  'calendar.subtitle': { en: 'Stay updated with all upcoming events at KYIV.ONCHAIN', uk: 'Будьте в курсі всіх майбутніх подій у KYIV.ONCHAIN' },
  'calendar.hostYourEvent': { en: 'Host Your Event', uk: 'Провести Вашу Подію' },
  'calendar.register': { en: 'Register', uk: 'Зареєструватися' },
  'calendar.stayConnected': { en: 'Stay Connected', uk: 'Залишайтесь на Зв\'язку' },
  'calendar.subscribeUpdates': { en: 'Subscribe to our newsletter to get automatic updates about all events', uk: 'Підпишіться на нашу розсилку, щоб автоматично отримувати оновлення про всі події' },
  'calendar.enterEmailUpdates': { en: 'Enter your email for event updates', uk: 'Введіть вашу електронну пошту для оновлень подій' },
  'calendar.subscribe': { en: 'Subscribe', uk: 'Підписатися' },

  // General
  'general.free': { en: 'Free', uk: 'Безкоштовно' },
  'general.month': { en: '/month', uk: '/місяць' },
  'general.save': { en: 'SAVE', uk: 'ЗАОЩАДЬТЕ' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};