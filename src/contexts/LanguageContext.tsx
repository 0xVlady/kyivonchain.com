
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uk' | 'en';

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
  'nav.joinWaitlist': { en: 'Join Waitlist', uk: 'Приєднатися' },
  'nav.hostEvent': { en: 'Host Event', uk: 'Хостити івент' },
  'nav.partnerWithUs': { en: 'Partner With Us', uk: 'Співпраця з нами' },
  'nav.aboutUs': { en: 'About Us', uk: 'Про нас' },
  'nav.ourMission': { en: 'Our Mission', uk: 'Наша місія' },
  'nav.partnership': { en: 'Partnership', uk: 'Партнерство' },
  'nav.language': { en: 'Language', uk: 'Мова' },
  'nav.join': { en: 'Join', uk: 'Приєднатися' },

  // Hero Section
  'hero.title': { en: 'KYIV.ONCHAIN', uk: 'KYIV.ONCHAIN' },
  'hero.tagline': { en: 'The permanent home for Web3 in Ukraine', uk: 'Постійний дім для Web3 в Україні' },
  'hero.subtitle': { en: 'Powered by Solana. Built by Acropolis. Backed by Kumeka.', uk: 'На Solana. Створено Acropolis. За підтримки Kumeka.' },
  'hero.joinBtn': { en: 'Join Waiting List', uk: 'Приєднатися' },
  'hero.hostBtn': { en: 'Host Your Event', uk: 'Хостити івент' },
  'hero.hostBtnSoon': { en: 'Soon', uk: 'Скоро' },
  'hero.joinWaitlist': { en: 'Join Waitlist', uk: 'Приєднатися' },
  'hero.communityMembers': { en: 'Community Members', uk: 'Мемберів спільноти' },
  'hero.eventsHosted': { en: 'Events Hosted', uk: 'Івентів проведено' },
  'hero.projectsLaunched': { en: 'Projects Launched', uk: 'Проєктів запущено' },
  'hero.buildingFuture': { en: 'Building Ukraine\'s Web3 Future', uk: 'Будуємо Web3 майбутнє України' },
  'hero.empowering': { en: 'Empowering Ukrainian developers and entrepreneurs in the decentralized economy', uk: 'Підтримуємо українських девелоперів та підприємців у децентралізованій економіці' },

  // About Section
  'about.title': { en: 'About the Hub', uk: 'Про хаб' },
  'about.description': { en: 'KYIV.ONCHAIN is Ukraine\'s dedicated IRL home for founders, developers, marketers, researchers, traders, and operators building in Web3.', uk: 'KYIV.ONCHAIN - це спеціальний офлайн дім України для фаундерів, девелоперів, маркетологів, дослідників, трейдерів та операторів, які будують у Web3.' },
  'about.partnership': { en: 'Built in partnership with iHUB Kyiv, we operate within a fully equipped co-working space — with high-speed internet, flexible desks, and a full event setup.', uk: 'Створено в партнерстві з iHUB Kyiv, ми працюємо у повністю обладнаному коворкінгу — з швидким інтернетом, гнучкими робочими місцями та повним івент сетапом.' },
  'about.safety': { en: '🛡️ Safety-first: iHUB features an underground workspace, allowing members to work during air raid alarms, making KYIV.ONCHAIN a rare wartime-resilient Web3 HQ.', uk: '🛡️ Безпека перш за все: iHUB має підземний робочий простір, що дозволяє мемберам працювати під час повітряних тривог, роблячи KYIV.ONCHAIN рідкісною стійкою до воєнного часу Web3 штаб-квартирою.' },
  'about.features.undergroundSafety': { en: 'Underground Safety', uk: 'Підземна безпека' },
  'about.features.undergroundSafety.desc': { en: 'Work safely during air raid alarms in our underground workspace', uk: 'Працюйте безпечно під час тривог у нашому підземному просторі' },
  'about.features.highSpeedInternet': { en: 'High-Speed Internet', uk: 'Швидкий інтернет' },
  'about.features.highSpeedInternet.desc': { en: 'Reliable connectivity for all your Web3 development needs', uk: 'Надійне з\'єднання для всіх ваших Web3 потреб' },
  'about.features.flexibleWorkspaces': { en: 'Flexible Workspaces', uk: 'Гнучкі робочі місця' },
  'about.features.flexibleWorkspaces.desc': { en: 'Hot desks, private offices, and collaboration areas', uk: 'Флекс столи, приватні офіси та зони для колаборації' },
  'about.features.fullEventSetup': { en: 'Full Event Setup', uk: 'Повний івент сетап' },
  'about.features.fullEventSetup.desc': { en: 'Complete AV equipment for hosting events and presentations', uk: 'Повне AV обладнання для івентів та презентацій' },
  'about.features.ihubPartnership': { en: 'iHUB Partnership', uk: 'Партнерство з iHUB' },
  'about.features.ihubPartnership.desc': { en: 'Access to established coworking infrastructure', uk: 'Доступ до налагодженої коворкінг інфраструктури' },
  'about.features.communityPerks': { en: 'Community Perks', uk: 'Комьюніті фішки' },
  'about.features.communityPerks.desc': { en: 'Coffee, networking events, and member benefits', uk: 'Кава, нетворкінг івенти та мемберські переваги' },
  'about.partnerLocation': { en: 'Partner Location', uk: 'Партнерська локація' },
  'about.safeWorkspace': { en: 'Safe Workspace', uk: 'Безпечний простір' },
  'about.internetTech': { en: 'Internet & Tech', uk: 'Інтернет та технології' },
  'about.web3Builders': { en: 'Web3 Builders', uk: 'Web3 будівельники' },

  // Membership Tiers
  'membership.title': { en: 'Membership Tiers', uk: 'Тарифи членства' },
  'membership.subtitle': { en: 'Join Ukraine\'s premier Web3 hub with three distinct membership levels, each building upon the previous to unlock greater opportunities and influence.', uk: 'Приєднуйтесь до топового Web3 хабу України з трьома різними рівнями членства, кожен з яких відкриває більше можливостей та впливу.' },
  'membership.guest': { en: 'Guest', uk: 'Guest' },
  'membership.member': { en: 'Member', uk: 'Member' },
  'membership.innerCircle': { en: 'Inner Circle', uk: 'Inner Circle' },
  'membership.mostPopular': { en: 'Most Popular', uk: 'Найпопулярніший' },
  'membership.leadershipLevel': { en: 'Leadership', uk: 'Лідерський' },
  'membership.getStarted': { en: 'Get Started', uk: 'Почати' },
  'membership.joinWaitlist': { en: 'Join Waitlist', uk: 'Хочу в лист очікування' },
  'membership.whyChoose': { en: 'Why Become a Member?', uk: 'Навіщо ставати мембером?' },
  'membership.communityFirst': { en: 'Community First:', uk: 'Спільнота понад усе:' },
  'membership.communityFirst.desc': { en: 'Connect with Ukraine\'s top Web3 builders and innovators', uk: 'Знайомтесь з топовими Web3 будівельниками та інноваторами України' },
  'membership.warResilient': { en: 'War-Resilient:', uk: 'Стійкі до війни:' },
  'membership.warResilient.desc': { en: 'Underground workspace ensures continuity during alerts', uk: 'Підземний простір забезпечує безперервність під час тривог' },
  'membership.globalNetwork': { en: 'Global Network:', uk: 'Глобальна мережа:' },
  'membership.globalNetwork.desc': { en: 'Access to international Web3 partnerships and opportunities', uk: 'Доступ до міжнародних Web3 партнерств та можливостей' },

  // Featured Events
  'events.title': { en: 'Featured Events', uk: 'Головні івенти' },
  'events.subtitle': { en: 'Join our signature events that bring together Ukraine\'s Web3 community. From education and networking to building and socializing — there\'s something for everyone.', uk: 'Приєднуйтесь до наших флагманських івентів, які об\'єднують Web3 спільноту України. Від освіти та нетворкінгу до будівництва та спілкування — є щось для кожного.' },
  'events.communityImpact': { en: 'Community Impact', uk: 'Вплив спільноти' },
  'events.eventsHosted': { en: 'Events Hosted', uk: 'Івентів проведено' },
  'events.totalAttendees': { en: 'Total Attendees', uk: 'Всього відвідувачів' },
  'events.countries': { en: 'Countries', uk: 'Країн' },
  'events.expertSpeakers': { en: 'Expert Speakers', uk: 'Експертних спікерів' },
  'events.attendees': { en: 'attendees', uk: 'відвідувачів' },

  // Footer
  'footer.tagline': { en: 'Ukraine\'s permanent home for Web3 builders, built by the community.', uk: 'Постійний дім України для Web3 будівельників, створений спільнотою.' },
  'footer.stayUpdated': { en: 'Stay Updated', uk: 'Залишайтесь в курсі' },
  'footer.quickLinks': { en: 'Quick Links', uk: 'Швидкі посилання' },
  'footer.getStarted': { en: 'Get Started', uk: 'Почати' },
  'footer.contact': { en: 'Contact', uk: 'Контакти' },
  'footer.location': { en: 'Location', uk: 'Локація' },
  'footer.builtWith': { en: 'Built with', uk: 'Створено з' },
  'footer.forUkraine': { en: 'for Ukraine\'s Web3 community', uk: 'для Web3 спільноти України' },
  'footer.language': { en: 'Language:', uk: 'Мова:' },
  'footer.privacyPolicy': { en: 'Privacy Policy', uk: 'Політика конфіденційності' },
  'footer.termsOfService': { en: 'Terms of Service', uk: 'Умови користування' },
  'footer.codeOfConduct': { en: 'Code of Conduct', uk: 'Кодекс поведінки' },
  'footer.aboutUs': { en: 'About Us', uk: 'Про нас' },
  'footer.ourVision': { en: 'Our Vision', uk: 'Наше бачення' },
  'footer.partners': { en: 'Partners', uk: 'Партнери' },
  'footer.calendar': { en: 'Calendar', uk: 'Календар' },
  'footer.joinWaitingList': { en: 'Join Waiting List', uk: 'Хочу в лист очікування' },
  'footer.hostEvent': { en: 'Host Event', uk: 'Організувати івент' },
  'footer.partnershipInfo': { en: 'Partnership Info', uk: 'Інфо про партнерство' },
  'footer.brandingAccess': { en: 'Branding Access', uk: 'Доступ до брендингу' },

  // Forms
  'form.join.title': { en: 'Join the Waitlist', uk: 'Хочу в лист очікування' },
  'form.event.title': { en: 'Host an Event', uk: 'Організувати івент' },
  'form.partner.title': { en: 'Partner With Us', uk: 'Партнерство з нами' },
  'form.name': { en: 'Name', uk: 'Ім\'я' },
  'form.email': { en: 'Email', uk: 'Електронна пошта' },
  'form.company': { en: 'Company', uk: 'Компанія' },
  'form.message': { en: 'Message', uk: 'Повідомлення' },
  'form.submit': { en: 'Submit Application', uk: 'Подати заявку' },

  // Pages
  'pages.vision.title': { en: 'Our Vision', uk: 'Наше бачення' },
  'pages.vision.subtitle': { en: 'Building the permanent home for Web3 innovation in Ukraine, fostering a resilient ecosystem that thrives even in challenging times.', uk: 'Будуємо постійний дім для Web3 інновацій в Україні, розвиваючи стійку екосистему, яка процвітає навіть у складні часи.' },
  'pages.vision.backTo': { en: 'Back to KYIV.ONCHAIN', uk: 'Назад до KYIV.ONCHAIN' },
  'pages.vision.returnTo': { en: 'Return to KYIV.ONCHAIN', uk: 'Повернутися до KYIV.ONCHAIN' },
  'pages.vision.joinBuilding': { en: 'Join Us in Building the Future', uk: 'Приєднуйтесь до нас у будівництві майбутнього' },
  'pages.vision.joinDescription': { en: 'This vision becomes reality through community. Whether you\'re a developer, entrepreneur, investor, or simply passionate about Web3\'s potential in Ukraine, your contribution shapes our collective future.', uk: 'Це бачення стає реальністю через спільноту. Незалежно від того, чи ви девелопер, підприємець, інвестор чи просто захоплюєтесь потенціалом Web3 в Україні, ваш внесок формує наше колективне майбутнє.' },

  // Calendar Page
  'calendar.title': { en: 'Event Calendar', uk: 'Календар івентів' },
  'calendar.subtitle': { en: 'Stay updated with all upcoming events at KYIV.ONCHAIN', uk: 'Залишайтесь в курсі всіх майбутніх івентів у KYIV.ONCHAIN' },
  'calendar.hostYourEvent': { en: 'Host Your Event', uk: 'Організувати свій івент' },
  'calendar.register': { en: 'Register', uk: 'Зареєструватися' },
  'calendar.stayConnected': { en: 'Stay Connected', uk: 'Залишайтесь на зв\'язку' },
  'calendar.subscribeUpdates': { en: 'Subscribe to our newsletter to get automatic updates about all events', uk: 'Підпишіться на нашу розсилку, щоб автоматично отримувати оновлення про всі івенти' },
  'calendar.enterEmailUpdates': { en: 'Enter your email for event updates', uk: 'Введіть вашу пошту для оновлень про івенти' },
  'calendar.subscribe': { en: 'Subscribe', uk: 'Підписатися' },

  // Partners
  'partners.title': { en: 'Our Partners', uk: 'Наші партнери' },
  'partners.subtitle': { en: 'KYIV.ONCHAIN is supported by leading organizations in the Web3 ecosystem, providing us with the resources and expertise to build Ukraine\'s premier blockchain community.', uk: 'KYIV.ONCHAIN підтримується провідними організаціями Web3 екосистеми, надаючи нам ресурси та експертизу для створення провідної блокчейн спільноти України.' },
  'partners.becomePartner': { en: 'Become a Partner', uk: 'Стати партнером' },
  'partners.becomePartner.desc': { en: 'Interested in partnering with KYIV.ONCHAIN? We\'re always looking for organizations that share our vision of building Ukraine\'s Web3 ecosystem.', uk: 'Зацікавлені в партнерстві з KYIV.ONCHAIN? Ми завжди шукаємо організації, які поділяють наше бачення розвитку Web3 екосистеми України.' },
  'partners.inquiry': { en: 'Partnership Inquiry', uk: 'Запит про партнерство' },
  'partners.downloadDeck': { en: 'Download Partnership Deck', uk: 'Завантажити партнерську презентацію' },
  'partners.categories.backer': { en: 'Backer', uk: 'Бекер' },
  'partners.categories.ecosystem': { en: 'Ecosystem', uk: 'Екосистема' },
  'partners.categories.infrastructure': { en: 'Infrastructure', uk: 'Інфраструктура' },
  'partners.categories.investment': { en: 'Investment', uk: 'Інвестиції' },
  'partners.categories.community': { en: 'Community', uk: 'Спільнота' },
  'partners.categories.acceleration': { en: 'Acceleration', uk: 'Акселерація' },
  'partners.stats.partners': { en: 'Strategic Partners', uk: 'Стратегічних партнерів' },
  'partners.stats.investment': { en: 'Partner Investment', uk: 'Партнерські інвестиції' },
  'partners.stats.events': { en: 'Joint Events', uk: 'Спільних івентів' },
  'partners.stats.community': { en: 'Community-First', uk: 'Спільнота понад усе' },

  // Branding
  'branding.title': { en: 'Branding & Sponsorship', uk: 'Брендинг та спонсорство' },
  'branding.subtitle': { en: 'Showcase your brand in Ukraine\'s premier Web3 community space', uk: 'Покажіть ваш бренд у провідному Web3 комьюніті просторі України' },
  'branding.opportunities': { en: 'Branding Opportunities', uk: 'Можливості брендингу' },
  'branding.packages': { en: 'Branding Packages', uk: 'Брендингові пакети' },
  'branding.logoPlacement': { en: 'Logo Placement', uk: 'Розміщення логотипу' },
  'branding.logoPlacement.desc': { en: 'Strategic placement of your logo in high-traffic areas', uk: 'Стратегічне розміщення вашого логотипу у популярних зонах' },
  'branding.eventSponsorship': { en: 'Event Sponsorship', uk: 'Спонсорство івентів' },
  'branding.eventSponsorship.desc': { en: 'Exclusive branding during events and workshops', uk: 'Ексклюзивний брендинг під час івентів та воркшопів' },
  'branding.customBranding': { en: 'Custom Branding', uk: 'Кастомний брендинг' },
  'branding.customBranding.desc': { en: 'Dedicated branded spaces and installations', uk: 'Спеціальні брендовані простори та інсталяції' },
  'branding.brandGuidelines': { en: 'Brand Guidelines & Assets', uk: 'Брендові гайдлайни та матеріали' },
  'branding.brandGuidelines.desc': { en: 'Download our comprehensive brand guidelines and logo assets for your marketing materials', uk: 'Завантажте наші повні брендові гайдлайни та логотипи для ваших маркетингових матеріалів' },
  'branding.downloadBrandKit': { en: 'Download Brand Kit', uk: 'Завантажити брендовий кіт' },
  'branding.viewGuidelines': { en: 'View Guidelines Online', uk: 'Переглянути гайдлайни онлайн' },
  'branding.readyToShowcase': { en: 'Ready to Showcase Your Brand?', uk: 'Готові показати ваш бренд?' },
  'branding.contactTeam': { en: 'Contact our partnerships team to discuss custom branding opportunities', uk: 'Зв\'яжіться з нашою командою партнерств для обговорення кастомних брендингових можливостей' },
  'branding.contactPartnershipsTeam': { en: 'Contact Partnerships Team', uk: 'Зв\'язатися з командою партнерств' },
  'branding.learnMore': { en: 'Learn More', uk: 'Дізнатися більше' },

  // Partnership Deck
  'partnershipDeck.title': { en: 'Partnership', uk: 'Партнерство' },
  'partnershipDeck.subtitle': { en: 'Explore partnership opportunities with Ukraine\'s leading Web3 hub', uk: 'Досліджуйте можливості партнерства з провідним Web3 хабом України' },
  'partnershipDeck.downloadDeck': { en: 'Download Full Deck', uk: 'Завантажити повну презентацію' },
  'partnershipDeck.communityPartners': { en: 'Community Partners', uk: 'Комьюніті партнери' },
  'partnershipDeck.communityPartners.desc': { en: 'Collaborate on events and community building initiatives', uk: 'Співпраця в івентах та ініціативах розвитку спільноти' },
  'partnershipDeck.technologyPartners': { en: 'Technology Partners', uk: 'Технологічні партнери' },
  'partnershipDeck.technologyPartners.desc': { en: 'Technical integrations and product collaborations', uk: 'Технічні інтеграції та продуктова співпраця' },
  'partnershipDeck.strategicPartners': { en: 'Strategic Partners', uk: 'Стратегічні партнери' },
  'partnershipDeck.strategicPartners.desc': { en: 'Long-term strategic alliances and investments', uk: 'Довгострокові стратегічні альянси та інвестиції' },
  'partnershipDeck.eventCohosting': { en: 'Event co-hosting', uk: 'Спільна організація івентів' },
  'partnershipDeck.crossPromotion': { en: 'Cross-promotion', uk: 'Взаємна промоція' },
  'partnershipDeck.sharedResources': { en: 'Shared resources', uk: 'Спільні ресурси' },
  'partnershipDeck.apiIntegrations': { en: 'API integrations', uk: 'API інтеграції' },
  'partnershipDeck.coDevelopment': { en: 'Co-development', uk: 'Спільна розробка' },
  'partnershipDeck.technicalSupport': { en: 'Technical support', uk: 'Технічна підтримка' },
  'partnershipDeck.strategicPlanning': { en: 'Strategic planning', uk: 'Стратегічне планування' },
  'partnershipDeck.investmentOpportunities': { en: 'Investment opportunities', uk: 'Інвестиційні можливості' },
  'partnershipDeck.globalReach': { en: 'Global reach', uk: 'Глобальний охоплення' },
  'partnershipDeck.presentationTitle': { en: 'Partnership Presentation', uk: 'Партнерська презентація' },
  'partnershipDeck.deckComingSoon': { en: 'Partnership Deck Coming Soon', uk: 'Партнерська презентація скоро' },
  'partnershipDeck.deckComingSoon.desc': { en: 'Our comprehensive partnership presentation will be available here', uk: 'Наша повна партнерська презентація буде доступна тут' },
  'partnershipDeck.requestPreview': { en: 'Request Preview Access', uk: 'Запросити попередній доступ' },
  'partnershipDeck.readyToPartner': { en: 'Ready to Partner?', uk: 'Готові до партнерства?' },
  'partnershipDeck.buildTogether': { en: 'Let\'s discuss how we can build Ukraine\'s Web3 future together', uk: 'Давайте обговоримо, як ми можемо разом будувати Web3 майбутнє України' },
  'partnershipDeck.contactPartnershipTeam': { en: 'Contact Partnership Team', uk: 'Зв\'язатися з командою партнерств' },

  // Vision Page Translations
  'vision.ourFuture': { en: 'The Future of Ukrainian Web3', uk: 'Майбутнє українського Web3' },
  'vision.ourFuture.desc1': { en: 'KYIV.ONCHAIN represents more than just a physical workspace—it\'s the cornerstone of Ukraine\'s digital sovereignty in the Web3 era. Our vision extends beyond borders, creating a global network where Ukrainian innovation leads the way in decentralized technologies.', uk: 'KYIV.ONCHAIN представляє більше, ніж просто фізичний робочий простір — це наріжний камінь цифрового суверенітету України в епоху Web3. Наше бачення виходить за межі кордонів, створюючи глобальну мережу, де українські інновації ведуть шлях у децентралізованих технологіях.' },
  'vision.ourFuture.desc2': { en: 'We envision a future where Ukraine becomes the premier destination for Web3 builders, researchers, and entrepreneurs from around the world, drawn by our unique combination of technical excellence, resilient infrastructure, and unwavering community spirit.', uk: 'Ми бачимо майбутнє, де Україна стане топовим місцем для Web3 будівельників, дослідників та підприємців з усього світу, приваблених нашим унікальним поєднанням технічної досконалості, стійкої інфраструктури та незламного духу спільноти.' },
  'vision.resilience': { en: 'Resilience Through Innovation', uk: 'Стійкість через інновації' },
  'vision.resilience.desc1': { en: 'Our underground workspace isn\'t just about safety—it symbolizes our commitment to continuous innovation despite adversity. We\'re proving that great technology can emerge from any circumstances when brilliant minds come together with shared purpose.', uk: 'Наш підземний робочий простір — це не лише безпека, він символізує нашу відданість постійним інноваціям попри труднощі. Ми доводимо, що чудові технології можуть з\'явитися за будь-яких обставин, коли блискучі уми об\'єднуються зі спільною метою.' },
  'vision.resilience.desc2': { en: 'This resilience model will become a blueprint for Web3 hubs worldwide, demonstrating how communities can maintain productivity and innovation even in the most challenging environments.', uk: 'Ця модель стійкості стане планом для Web3 хабів по всьому світу, демонструючи, як спільноти можуть підтримувати продуктивність та інновації навіть у найскладніших умовах.' },
  'vision.governance': { en: 'Tokenized Community Governance', uk: 'Токенізоване управління спільнотою' },
  'vision.governance.desc1': { en: 'The Inner Circle membership tier represents the first step toward full tokenization of our community governance. We\'re building toward a future where KYIV.ONCHAIN operates as a true DAO, with members having direct influence over strategic decisions, resource allocation, and ecosystem development.', uk: 'Рівень членства Inner Circle представляє перший крок до повної токенізації управління нашою спільнотою. Ми будуємо майбутнє, де KYIV.ONCHAIN функціонує як справжнє DAO, з мемберами, які мають прямий вплив на стратегічні рішення, розподіл ресурсів та розвиток екосистеми.' },
  'vision.governance.desc2': { en: 'Our tokenized membership will create unprecedented transparency and democratic participation in hub operations, setting new standards for community-owned Web3 infrastructure.', uk: 'Наше токенізоване членство створить безпрецедентну прозорість та демократичну участь в операціях хабу, встановлюючи нові стандарти для Web3 інфраструктури, що належить спільноті.' },
  'vision.leadership': { en: 'Global Web3 Leadership', uk: 'Глобальне Web3 лідерство' },
  'vision.leadership.desc1': { en: 'Through strategic partnerships with Solana, Acropolis, Kumeka, and iHUB Kyiv, we\'re positioning KYIV.ONCHAIN as a global leader in Web3 innovation and adoption. Our goal is to become the primary bridge between Eastern European talent and global Web3 opportunities.', uk: 'Через стратегічні партнерства з Solana, Acropolis, Kumeka та iHUB Kyiv, ми позиціонуємо KYIV.ONCHAIN як глобального лідера у Web3 інноваціях та впровадженні. Наша мета — стати основним мостом між східноєвропейськими талантами та глобальними Web3 можливостями.' },
  'vision.leadership.desc2': { en: 'We will establish sister hubs across Europe and beyond, creating a network of interconnected Web3 communities that share resources, knowledge, and opportunities while maintaining their unique local character and strengths.', uk: 'Ми створимо побратимські хаби по всій Європі та за її межами, створюючи мережу взаємопов\'язаних Web3 спільнот, які діляться ресурсами, знаннями та можливостями, зберігаючи при цьому свій унікальний місцевий характер та сильні сторони.' },

  // Membership tier features
  'membership.tier.guest.features.0': { en: '1-day guest pass', uk: '1-денний гостьовий пас' },
  'membership.tier.guest.features.1': { en: 'Telegram community access', uk: 'Доступ до Telegram спільноти' },
  'membership.tier.guest.features.2': { en: 'Access to public events', uk: 'Доступ до публічних івентів' },
  'membership.tier.guest.features.3': { en: 'Networking opportunities', uk: 'Можливості для нетворкінгу' },
  'membership.tier.member.features.0': { en: 'Unlimited workspace access', uk: 'Необмежений доступ до робочого простору' },
  'membership.tier.member.features.1': { en: 'Private member community', uk: 'Приватна спільнота мемберів' },
  'membership.tier.member.features.2': { en: 'Partner product discounts', uk: 'Знижки на продукти партнерів' },
  'membership.tier.member.features.3': { en: 'Loyalty program rewards', uk: 'Нагороди програми лояльності' },
  'membership.tier.member.features.4': { en: 'Members only event invites', uk: 'Запрошення на івенти тільки для мемберів' },
  'membership.tier.member.features.5': { en: 'Personal mentorship program', uk: 'Програма персонального менторства' },
  'membership.tier.member.features.6': { en: 'KYIV.ONCHAIN merch', uk: 'KYIV.ONCHAIN мерч' },
  'membership.tier.member.features.7': { en: 'Exclusive investor network access', uk: 'Ексклюзивний доступ до мережі інвесторів' },
  'membership.tier.inner.features.0': { en: 'All Member tier benefits', uk: 'Всі переваги рівня Member' },
  'membership.tier.inner.features.1': { en: 'One-on-one advisory sessions', uk: 'Персональні консультаційні сесії' },
  'membership.tier.inner.features.2': { en: 'Strategic partnership opportunities', uk: 'Можливості стратегічного партнерства' },
  'membership.tier.inner.features.3': { en: 'Priority event hosting rights', uk: 'Пріоритетні права на проведення івентів' },
  'membership.tier.inner.features.4': { en: 'Leadership council participation', uk: 'Участь у лідерській раді' },
  'membership.tier.inner.features.5': { en: 'Exclusive alpha & deal flow', uk: 'Ексклюзивна альфа та дील флоу' },
  'membership.tier.inner.features.6': { en: 'One-on-one advisory sessions', uk: 'Персональні консультаційні сесії' },
  'membership.tier.inner.features.7': { en: 'Strategic partnership opportunities', uk: 'Можливості стратегічного партнерства' },

  // Partners individual descriptions
  'partners.kumeka.desc': { en: 'Primary backer providing strategic support and funding', uk: 'Головний бекер, що надає стратегічну підтримку та фінансування' },
  'partners.solana.desc': { en: 'Ecosystem support and technical resources', uk: 'Підтримка екосистеми та технічні ресурси' },
  'partners.ihub.desc': { en: 'Physical coworking space and infrastructure partner', uk: 'Фізичний коворкінг простір та партнер з інфраструктури' },
  'partners.solus.desc': { en: 'Investment and ecosystem development', uk: 'Інвестиції та розвиток екосистеми' },
  'partners.3xCapital.desc': { en: 'Web3 venture capital and startup acceleration', uk: 'Web3 венчурний капітал та акселерація стартапів' },
  'partners.flow.desc': { en: 'Community building and developer programs', uk: 'Розвиток спільноти та програми для девелоперів' },
  'partners.nomadz.desc': { en: 'Digital nomad community and Web3 adoption', uk: 'Спільнота цифрових кочівників та впровадження Web3' },
  'partners.ventures.desc': { en: 'Startup incubation and acceleration programs', uk: 'Програми інкубації та акселерації стартапів' },
  
  // Gamification
  'gamification.title': { en: 'Gamification & Rewards', uk: 'Геймифікація та нагороди' },
  'gamification.passport': { en: 'NFT Passport', uk: 'NFT паспорт' },
  'gamification.xp': { en: 'XP System', uk: 'Система XP' },
  'gamification.rewards': { en: 'Reward Store', uk: 'Магазин нагород' },
  'gamification.quests': { en: 'Quest System', uk: 'Система квестів' },
  
  // General
  'general.free': { en: 'Free', uk: 'Безкоштовно' },
  'general.month': { en: '/month', uk: '/місяць' },
  'general.save': { en: 'SAVE', uk: 'ЕКОНОМІЯ' },
  'general.from': { en: 'From', uk: 'Від' },
  'general.custom': { en: 'Custom pricing', uk: 'Індивідуальна ціна' },
  'general.attending': { en: 'attending', uk: 'відвідують' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'uk' (Ukrainian)
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('kyiv-onchain-language');
    return (savedLanguage === 'uk' || savedLanguage === 'en') ? savedLanguage : 'uk';
  });

  // Update localStorage when language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('kyiv-onchain-language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
