
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
  'nav.joinWaitlist': { en: 'Apply', uk: 'Подати Заявку' },
  'nav.hostEvent': { en: 'Host Event', uk: 'Провести івент' },
  'nav.partnerWithUs': { en: 'Partner With Us', uk: 'Співпраця з нами' },
  'nav.aboutUs': { en: 'About Us', uk: 'Про нас' },
  'nav.ourMission': { en: 'Our Mission', uk: 'Наша місія' },
  'nav.partnership': { en: 'Partnership', uk: 'Партнерство' },
  'nav.language': { en: 'Language', uk: 'Мова' },
  'nav.join': { en: 'Join', uk: 'Подати Заявку' },

  // Hero Section
  'hero.title': { en: 'KYIV.ONCHAIN', uk: 'KYIV.ONCHAIN' },
  'hero.tagline': { en: 'A Permanent Home for web 3 community in Ukraine', uk: 'Простір, у якому дихає Web3 Україна' },
  'hero.subtitle': { en: 'Powered by Solana. Built by Acropolis. Backed by Kumeka Team.', uk: 'Powered by Solana. Built by Acropolis. Backed by Kumeka Team.' },
  'hero.joinBtn': { en: 'Join Waiting List', uk: 'Подати Заявку' },
  'hero.hostBtn': { en: 'Host Your Event', uk: 'Провести івент' },
  'hero.hostBtnSoon': { en: 'Soon', uk: 'Скоро' },
  'hero.joinWaitlist': { en: 'Apply', uk: 'Подати Заявку' },
  'hero.communityMembers': { en: 'Community Members', uk: 'Мемберів спільноти' },
  'hero.eventsHosted': { en: 'Events Hosted', uk: 'Івентів проведено' },
  'hero.projectsLaunched': { en: 'Projects Launched', uk: 'Проєктів запущено' },
  'hero.buildingFuture': { en: 'Building Ukraine\'s Web3 Future', uk: 'Розробляємо Web3 майбутнє України' },
  'hero.empowering': { en: 'Empowering Ukrainian developers and entrepreneurs in the decentralized economy', uk: 'Підтримуємо українських розробників та підприємців у децентралізованій економіці' },

  // About Section
  'about.title': { en: 'About the Hub', uk: 'Про хаб' },
  'about.description': { en: 'KYIV.ONCHAIN is Ukraine\'s dedicated IRL home for founders, developers, marketers, researchers, traders, and operators building in Web3.', uk: 'KYIV.ONCHAIN - це спеціальний офлайн дім України для фаундерів, розробників, маркетологів, дослідників, трейдерів та операторів, які розробляють у Web3.' },
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
  'about.web3Builders': { en: 'Web3 Builders', uk: 'Web3 розробники' },

  // Membership Tiers
  'membership.title': { en: 'Membership Tiers', uk: 'Рівні Доступу' },
  'membership.subtitle': { en: 'Join Ukraine\'s premier Web3 hub with distinct membership levels, each building upon the previous to unlock greater opportunities and influence.', uk: 'Приєднуйтесь до топового Web3 хабу України з різними рівнями членства, кожен з яких відкриває більше можливостей та впливу.' },
  'membership.guest': { en: 'Guest', uk: 'Guest' },
  'membership.member': { en: 'Member', uk: 'Member' },
  'membership.innerCircle': { en: 'Inner Circle', uk: 'Inner Circle' },
  'membership.mostPopular': { en: 'Most Popular', uk: 'Найпопулярніший' },
  'membership.leadershipLevel': { en: 'Leadership', uk: 'Лідерський' },
  'membership.getStarted': { en: 'Get Started', uk: 'Почати' },
  'membership.joinWaitlist': { en: 'Apply', uk: 'Подати Заявку' },
  'membership.whyChoose': { en: 'Why Become a Member?', uk: 'Навіщо ставати мембером?' },
  'membership.communityFirst': { en: 'Community First:', uk: 'Спільнота понад усе:' },
  'membership.communityFirst.desc': { en: 'Connect with Ukraine\'s top Web3 builders and innovators', uk: 'Знайомтесь з топовими Web3 розробниками та інноваторами України' },
  'membership.warResilient': { en: 'War-Resilient:', uk: 'Стійкі до війни:' },
  'membership.warResilient.desc': { en: 'Underground workspace ensures continuity during alerts', uk: 'Підземний простір забезпечує безперервність під час тривог' },
  'membership.globalNetwork': { en: 'Global Network:', uk: 'Глобальна мережа:' },
  'membership.globalNetwork.desc': { en: 'Access to international Web3 partnerships and opportunities', uk: 'Доступ до міжнародних Web3 партнерств та можливостей' },

  // Featured Events
  'events.title': { en: 'Featured Events', uk: 'Головні івенти' },
  'events.subtitle': { en: 'Join our signature events that bring together Ukraine\'s Web3 community. From education and networking to building and socializing — there\'s something for everyone.', uk: 'Приєднуйтесь до наших флагманських івентів, які об\'єднують Web3 спільноту України. Від освіти та нетворкінгу до розробки та спілкування — є щось для кожного.' },
  'events.communityImpact': { en: 'Community Impact', uk: 'Вплив спільноти' },
  'events.eventsHosted': { en: 'Events Hosted', uk: 'Івентів проведено' },
  'events.totalAttendees': { en: 'Total Attendees', uk: 'Всього відвідувачів' },
  'events.countries': { en: 'Countries', uk: 'Країн' },
  'events.expertSpeakers': { en: 'Expert Speakers', uk: 'Експертних спікерів' },
  'events.attendees': { en: 'attendees', uk: 'відвідувачів' },
  
  // Event specific translations
  'events.web3Education.title': { en: 'Web3 Education', uk: 'Web3 освіта' },
  'events.web3Education.desc': { en: 'Student-focused Web3 education event with workshops, talks, and networking opportunities for aspiring blockchain developers.', uk: 'Студентський Web3 освітній івент з воркшопами, доповідями та можливостями для нетворкінгу для майбутніх блокчейн розробників.' },
  'events.web3Education.attendees': { en: '150+ students', uk: '150+ студентів' },
  'events.pitchDays.title': { en: 'Pitch Days & Ideathons', uk: 'Дні пітчів та ідеатони' },
  'events.pitchDays.desc': { en: 'Founder-focused events to refine decks, token models and business plans — often with live investor feedback.', uk: 'Івенти для фаундерів для покращення презентацій, токен моделей та бізнес планів — часто з живим фідбеком інвесторів.' },
  'events.pitchDays.attendees': { en: 'Packed house', uk: 'Аншлаг' },
  'events.kolGathering.title': { en: 'The KOL Gathering', uk: 'The KOL Gathering' },
  'events.kolGathering.desc': { en: 'In partnership with Cointelegraph and NewTribe Capital, brought together top crypto influencers for an event full of valuable insights and alpha moments.', uk: 'В партнерстві з Cointelegraph та NewTribe Capital, об\'єднав топових криптоінфлюенсерів для івенту, повного цінних інсайтів та альфа моментів.' },
  'events.kolGathering.attendees': { en: 'Packed house', uk: 'Аншлаг' },
  'events.networkSchool.title': { en: 'Network School Event', uk: 'Network School Event' },
  'events.networkSchool.desc': { en: 'Solana Journey Workshop where we covered the founding team, investors, stories, communities, and funding opportunities like grants, accelerators, and VCs.', uk: 'Solana Journey Воркшоп, де ми розглянули команду засновників, інвесторів, історії, спільноти та можливості фінансування, такі як гранти, акселератори та VC.' },
  'events.networkSchool.attendees': { en: '100+ participants', uk: '100+ учасників' },
  'events.solanaTemple.title': { en: 'Solana Temple', uk: 'Solana Temple' },
  'events.solanaTemple.desc': { en: 'A wellness-first co-living experience designed for Solana teams, founders and influencers. The program brought together 102 participants for a month of deep focus & daily fitness.', uk: 'Велнес-орієнтований ко-лівінг, розроблений для команд Solana, фаундерів та інфлюенсерів. Програма об\'єднала 102 учасники на місяць глибокого фокусу та щоденного фітнесу.' },
  'events.solanaTemple.attendees': { en: '102 participants', uk: '102 учасники' },
  'events.kumekathon.title': { en: 'KUMEKATHON', uk: 'KUMEKATHON' },
  'events.kumekathon.desc': { en: 'Intensive competition where teams build innovative blockchain solutions with mentorship from industry experts.', uk: 'Інтенсивне змагання, де команди створюють інноваційні блокчейн рішення з наставництвом від експертів індустрії.' },
  'events.kumekathon.attendees': { en: 'Packed house', uk: 'Аншлаг' },
  'events.solanaPong.title': { en: 'Solana Pong', uk: 'Solana Pong' },
  'events.solanaPong.desc': { en: 'In collaboration with Cudis, we hosted a community ping pong tournament at Network School.', uk: 'У співпраці з Cudis ми провели турнір з пінг-понгу для спільноти в Network School.' },
  'events.solanaPong.attendees': { en: '20 attendees', uk: '20 відвідувачів' },
  'events.vcStartupConnect.title': { en: 'VC <> Startup Connect', uk: 'VC <> Startup Connect' },
  'events.vcStartupConnect.desc': { en: 'Exclusive B2B gathering of VCs, founders, and ecosystem builders fostering investment opportunities and partnerships.', uk: 'Ексклюзивна B2B зустріч VC, фаундерів та девелоперів екосистеми для розвитку інвестиційних можливостей та партнерств.' },
  'events.vcStartupConnect.attendees': { en: '50+ VCs & Founders', uk: '50+ VC та фаундерів' },
  'events.irlWorkshops.title': { en: 'IRL Workshops in Kyiv', uk: 'IRL Workshops in Kyiv' },
  'events.irlWorkshops.desc': { en: 'Workshop on GTM & Product Positioning.', uk: 'Воркшоп з GTM та позиціонування продукту.' },
  'events.irlWorkshops.attendees': { en: '50+ attendees', uk: '50+ відвідувачів' },
  'events.hangouts.title': { en: 'Hangouts & Celebrations', uk: 'Hangouts & Celebrations' },
  'events.hangouts.desc': { en: 'Community gatherings and celebration events bringing together Web3 enthusiasts.', uk: 'Збори спільноти та святкові події, що об\'єднують Web3 ентузіастів.' },
  'events.hangouts.attendees': { en: 'Packed house', uk: 'Аншлаг' },
  'events.jobFest.title': { en: 'Job Fest', uk: 'Job Fest' },
  'events.jobFest.desc': { en: 'The event that answered two main questions "How to break into Web3? Where to start?"', uk: 'Івент, який дав відповіді на два головні питання "Як потрапити в Web3? З чого почати?"' },
  'events.jobFest.attendees': { en: '200+ attendees', uk: '200+ відвідувачів' },

  // Footer
  'footer.tagline': { en: 'Ukraine\'s permanent home for Web3 builders, built by the community.', uk: 'Створено для Web3 спільноти України' },
  'footer.address': { en: 'Khreshchatyk St, 10 (iHUB - coworking)', uk: 'вул. Хрещатик, 10 (iHUB - коворкінг)' },
  'footer.stayUpdated': { en: 'Stay Updated', uk: 'Залишайтесь в курсі' },
  'footer.quickLinks': { en: 'Quick Links', uk: 'Швидкі посилання' },
  'footer.getStarted': { en: 'Get Started', uk: 'Почати' },
  'footer.contact': { en: 'Contact', uk: 'Контакти' },
  'footer.location': { en: 'Location', uk: 'Локація' },
  'footer.builtWith': { en: 'Built with', uk: 'Створено з' },
  'footer.forUkraine': { en: 'for Ukraine\'s Web3 community', uk: '' },
  'footer.language': { en: 'Language:', uk: 'Мова:' },
  'footer.privacyPolicy': { en: 'Privacy Policy', uk: 'Політика конфіденційності' },
  'footer.termsOfService': { en: 'Terms of Service', uk: 'Умови користування' },
  'footer.codeOfConduct': { en: 'Code of Conduct', uk: 'Кодекс поведінки' },
  'footer.aboutUs': { en: 'About Us', uk: 'Про нас' },
  'footer.ourVision': { en: 'Our Vision', uk: 'Наше бачення' },
  'footer.partners': { en: 'Partners', uk: 'Партнери' },
  'footer.calendar': { en: 'Calendar', uk: 'Календар' },
  'footer.joinWaitingList': { en: 'Join Waiting List', uk: 'Подати Заявку' },
  'footer.hostEvent': { en: 'Host Event', uk: 'Провести івент' },
  'footer.partnershipInfo': { en: 'Partnership Info', uk: 'Інфо про партнерство' },
  'footer.brandingAccess': { en: 'Branding Access', uk: 'Доступ до брендингу' },

  // Forms
  'form.join.title': { en: 'Join the Waitlist', uk: 'Подати Заявку' },
  'form.event.title': { en: 'Host an Event', uk: 'Провести івент' },
  'form.partner.title': { en: 'Partner With Us', uk: 'Партнерство з нами' },
  'form.name': { en: 'Name', uk: 'Ім\'я' },
  'form.email': { en: 'Email', uk: 'Електронна пошта' },
  'form.company': { en: 'Company', uk: 'Компанія' },
  'form.message': { en: 'Message', uk: 'Повідомлення' },
  'form.submit': { en: 'Submit Application', uk: 'Подати Заявку' },
  'form.membershipTier': { en: 'Membership Tier', uk: 'Тип членства' },
  'form.guest': { en: 'Guest', uk: 'Guest' },
  'form.member': { en: 'Member', uk: 'Member' },
  'form.innerCircle': { en: 'Inner Circle', uk: 'Inner Circle' },
  'form.mostPopular': { en: 'Most Popular', uk: 'Найпопулярніший' },
  'form.submitting': { en: 'Submitting...', uk: 'Надсилання...' },
  'form.eventTitle': { en: 'Event Title', uk: 'Назва івенту' },
  'form.eventDescription': { en: 'Event Description', uk: 'Опис івенту' },
  'form.expectedAttendees': { en: 'Expected Attendees', uk: 'Очікувана кількість учасників' },
  'form.preferredDate': { en: 'Preferred Date', uk: 'Бажана дата' },
  'form.additionalInfo': { en: 'Additional Information', uk: 'Додаткова інформація' },
  'form.partnershipType': { en: 'Partnership Type', uk: 'Тип партнерства' },
  'form.sponsor': { en: 'Sponsor', uk: 'Спонсор' },
  'form.venue': { en: 'Venue Partner', uk: 'Партнер по локації' },
  'form.technology': { en: 'Technology Partner', uk: 'Технологічний партнер' },
  'form.media': { en: 'Media Partner', uk: 'Медіа партнер' },
  'form.community': { en: 'Community Partner', uk: 'Партнер зі спільноти' },
  'form.branding': { en: 'Branding', uk: 'Брендинг' },
  
  // Form placeholders
  'form.placeholders.eventTitle': { en: 'Name of your event', uk: 'Назва вашого івенту' },
  'form.placeholders.eventDescription': { en: 'Brief description of your event', uk: 'Короткий опис вашого івенту' },
  'form.placeholders.expectedAttendees': { en: 'Number of expected attendees', uk: 'Кількість очікуваних учасників' },
  'form.placeholders.preferredDate': { en: 'e.g., March 2024, or specific date', uk: 'наприклад, березень 2024, або конкретна дата' },
  'form.placeholders.additionalInfo': { en: 'Any additional details about your event...', uk: 'Будь-які додаткові деталі про ваш івент...' },
  'form.placeholders.partnershipMessage': { en: 'Tell us about your partnership proposal...', uk: 'Розкажіть нам про вашу пропозицію партнерства...' },

  // Pages
  'pages.vision.title': { en: 'Our Vision', uk: 'Наше бачення' },
  'pages.vision.subtitle': { en: 'Building the permanent home for Web3 innovation in Ukraine, fostering a resilient ecosystem that thrives even in challenging times.', uk: 'Розробляємо постійний дім для Web3 інновацій в Україні, розвиваючи стійку екосистему, яка процвітає навіть у складні часи.' },
  'pages.vision.backTo': { en: 'Back to KYIV.ONCHAIN', uk: 'Назад до KYIV.ONCHAIN' },
  'pages.vision.returnTo': { en: 'Return to KYIV.ONCHAIN', uk: 'Повернутися до KYIV.ONCHAIN' },
  'pages.vision.joinBuilding': { en: 'Join Us in Building the Future', uk: 'Приєднуйтесь до нас у розробці майбутнього' },
  'pages.vision.joinDescription': { en: 'This vision becomes reality through community. Whether you\'re a developer, entrepreneur, investor, or simply passionate about Web3\'s potential in Ukraine, your contribution shapes our collective future.', uk: 'Це бачення стає реальністю через спільноту. Незалежно від того, чи ви розробник, підприємець, інвестор чи просто захоплюєтесь потенціалом Web3 в Україні, ваш внесок формує наше колективне майбутнє.' },

  // Calendar Page
  'calendar.title': { en: 'Event Calendar', uk: 'Календар івентів' },
  'calendar.subtitle': { en: 'Stay updated with all upcoming events at KYIV.ONCHAIN', uk: 'Залишайтесь в курсі всіх майбутніх івентів у KYIV.ONCHAIN' },
  'calendar.hostYourEvent': { en: 'Host Your Event', uk: 'Провести свій івент' },
  'calendar.register': { en: 'Register', uk: 'Реєстрація' },
  'calendar.stayConnected': { en: 'Stay Connected', uk: 'Залишайтесь на зв\'язку' },
  'calendar.subscribeUpdates': { en: 'Subscribe to our newsletter to get automatic updates about all events', uk: 'Підпишіться на нашу розсилку, щоб автоматично отримувати оновлення про всі івенти' },
  'calendar.enterEmailUpdates': { en: 'Enter your email', uk: 'Введіть вашу пошту' },
  'calendar.subscribe': { en: 'Subscribe', uk: 'Підписатися' },

  // Partners
  'partners.title': { en: 'Our Partners', uk: 'Наші партнери' },
  'partners.subtitle': { en: 'KYIV.ONCHAIN is supported by leading organizations in the Web3 ecosystem, providing us with the resources and expertise to build Ukraine\'s premier blockchain community.', uk: 'KYIV.ONCHAIN підтримується провідними організаціями Web3 екосистеми, надаючи нам ресурси та експертизу для створення провідної блокчейн спільноти України.' },
  'partners.becomePartner': { en: 'Become a Partner', uk: 'Стати партнером' },
  'partners.becomePartner.desc': { en: 'Interested in partnering with KYIV.ONCHAIN? We\'re always looking for organizations that share our vision of building Ukraine\'s Web3 ecosystem.', uk: 'Зацікавлені в партнерстві з KYIV.ONCHAIN? Ми завжди шукаємо організації, які поділяють наше бачення розвитку Web3 екосистеми України.' },
  'partners.inquiry': { en: 'Partnership Inquiry', uk: 'Запит на партнерство' },
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

  // General
  'general.free': { en: 'Free', uk: 'Безплатно' },
  'general.month': { en: '/month', uk: '/місяць' },
  'general.save': { en: 'SAVE', uk: 'ЗНИЖКА' },

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
  'branding.readyToShowcase.desc': { en: 'Join the leading Web3 brands that trust KYIV.ONCHAIN to connect with Ukraine\'s blockchain community. Let\'s create something amazing together.', uk: 'Приєднуйтесь до провідних Web3 брендів, які довіряють KYIV.ONCHAIN у зв\'язку з українською блокчейн спільнотою. Давайте створимо щось дивовижне разом.' },
  'branding.contactTeam': { en: 'Contact our partnerships team to discuss custom branding opportunities', uk: 'Зв\'яжіться з нашою командою партнерств для обговорення кастомних брендингових можливостей' },
  'branding.contactPartnershipsTeam': { en: 'Contact Partnerships Team', uk: 'Зв\'язатися з командою партнерств' },
  'branding.learnMore': { en: 'Learn More', uk: 'Дізнатися більше' },
  'branding.brandingPartners': { en: 'Branding Partners', uk: 'Брендингові партнери' },
  'branding.brandingPartners.desc': { en: 'Showcase your brand to our vibrant Web3 community', uk: 'Покажіть ваш бренд нашій яскравій Web3 спільноті' },
  'branding.logoPlacementOpportunities': { en: 'Logo placement opportunities', uk: 'Можливості розміщення логотипу' },
  'branding.eventSponsorshipOptions': { en: 'Event sponsorship options', uk: 'Варіанти спонсорства івентів' },
  'branding.digitalPresence': { en: 'Digital presence', uk: 'Цифрова присутність' },

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
  'partnershipDeck.buildTogether': { en: 'Let\'s discuss how we can build Ukraine\'s Web3 future together', uk: 'Давайте обговоримо, як ми можемо разом розробляти Web3 майбутнє України' },
  'partnershipDeck.contactPartnershipTeam': { en: 'Contact Partnership Team', uk: 'Звʼязатися з командою' },

  // Vision Page Translations
  'vision.ourFuture': { en: 'The Future of Ukrainian Web3', uk: 'Майбутнє українського Web3' },
  'vision.ourFuture.desc1': { en: 'KYIV.ONCHAIN represents more than just a physical workspace—it\'s the cornerstone of Ukraine\'s digital sovereignty in the Web3 era. Our vision extends beyond borders, creating a global network where Ukrainian innovation leads the way in decentralized technologies.', uk: 'KYIV.ONCHAIN представляє більше, ніж просто фізичний робочий простір — це наріжний камінь цифрового суверенітету України в епоху Web3. Наше бачення виходить за межі кордонів, створюючи глобальну мережу, де українські інновації ведуть шлях у децентралізованих технологіях.' },
  'vision.ourFuture.desc2': { en: 'We envision a future where Ukraine becomes the premier destination for Web3 builders, researchers, and entrepreneurs from around the world, drawn by our unique combination of technical excellence, resilient infrastructure, and unwavering community spirit.', uk: 'Ми бачимо майбутнє, де Україна стане топовим місцем для Web3 розробників, дослідників та підприємців з усього світу, приваблених нашим унікальним поєднанням технічної досконалості, стійкої інфраструктури та незламного духу спільноти.' },
  'vision.resilience': { en: 'Resilience Through Innovation', uk: 'Стійкість через інновації' },
  'vision.resilience.desc1': { en: 'Our underground workspace isn\'t just about safety—it symbolizes our commitment to continuous innovation despite adversity. We\'re proving that great technology can emerge from any circumstances when brilliant minds come together with shared purpose.', uk: 'Наш підземний робочий простір — це не лише безпека, він символізує нашу відданість постійним інноваціям попри труднощі. Ми доводимо, що чудові технології можуть з\'явитися за будь-яких обставин, коли блискучі уми об\'єднуються зі спільною метою.' },
  'vision.resilience.desc2': { en: 'This resilience model will become a blueprint for Web3 hubs worldwide, demonstrating how communities can maintain productivity and innovation even in the most challenging environments.', uk: 'Ця модель стійкості стане планом для Web3 хабів по всьому світу, демонструючи, як спільноти можуть підтримувати продуктивність та інновації навіть у найскладніших умовах.' },
  'vision.leadership': { en: 'Global Web3 Leadership', uk: 'Глобальне Web3 лідерство' },
  'vision.leadership.desc1': { en: 'Through strategic partnerships with Solana, Acropolis, Kumeka Team, and iHUB Kyiv, we\'re positioning KYIV.ONCHAIN as a global leader in Web3 innovation and adoption. Our goal is to become the primary bridge between Eastern European talent and global Web3 opportunities.', uk: 'Через стратегічні партнерства з Solana, Acropolis, Kumeka Team та iHUB Kyiv, ми позиціонуємо KYIV.ONCHAIN як глобального лідера у Web3 інноваціях та впровадженні. Наша мета — стати основним мостом між східноєвропейськими талантами та глобальними Web3 можливостями.' },
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
  'membership.tier.inner.features.1': { en: 'Personal consultation sessions', uk: 'Персональні консультаційні сесії' },
  'membership.tier.inner.features.2': { en: 'Strategic partnership opportunities', uk: 'Можливості стратегічного партнерства' },
  'membership.tier.inner.features.3': { en: 'Priority for hosting events in the hub', uk: 'Пріоритет на проведення івентів у хабі' },
  'membership.tier.inner.features.4': { en: 'Participation in strategic decisions', uk: 'Участь у стратегічних рішеннях' },
  'membership.tier.inner.features.5': { en: 'Exclusive alpha and deal flow', uk: 'Ексклюзивна альфа та deal flow' },
  'membership.tier.inner.features.6': { en: 'Access to the closed Inner Circle chat', uk: 'Доступ до закритого Inner Circle чату' },

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
  
  // Additional general terms
  'general.from': { en: 'From', uk: 'Від' },
  'general.custom': { en: 'Custom pricing', uk: 'Індивідуальна ціна' },
  'general.attending': { en: 'attending', uk: 'відвідують' },
  'general.cities': { en: 'Cities', uk: 'Міст' },


  // About page content translations
  'about.intro.desc1': { en: 'In a world that\'s increasingly online, we\'ve started to forget the power of real-life connection — the kind that sparks ideas, builds trust, and moves ecosystems forward.', uk: 'У світі, що дедалі більше занурюється в онлайн, ми почали забувати силу живого зв\'язку — того, що народжує ідеї, будує довіру та рухає екосистеми вперед.' },
  'about.intro.desc2': { en: 'KYIV.ONCHAIN is more than just a co-working space — it\'s the heartbeat of Ukraine\'s Web3 community. After years of remote work, war, and scattered events, our Web3 scene lacked a central, trusted HQ. We built KYIV.ONCHAIN to change that — a place where genuine connection and serendipitous collaboration can happen every day, not just during hackathons.', uk: 'KYIV.ONCHAIN — це більше, ніж коворкінг. Це серце української Web3-спільноти.\nПісля років віддаленої роботи, війни та розрізнених івентів нам бракувало єдиного, довіреного центру. Ми створили KYIV.ONCHAIN, щоб змінити це — дім, де справжні зв\'язки та випадкова співпраця відбуваються щодня, не лише на хакатонах.' },
  'about.intro.desc3': { en: 'Founders. Developers. Researchers. Operators. Traders. Educators. All under one roof.', uk: 'Фаундери. Розробники. Дослідники. Оператори. Трейдери. Освітяни. Всі під одним дахом.' },
  'about.intro.desc4': { en: 'Built in partnership with iHUB Kyiv, we operate within a fully equipped co-working space — with high-speed internet, flexible desks, and a full event setup.', uk: 'Створений у партнерстві з iHUB Kyiv, ми працюємо у повністю обладнаному коворкінгу — зі швидким інтернетом, робочими місцями та повним сетапом для івентів.' },
  'about.team': { en: 'Team', uk: 'Команда' },
  'about.features': { en: 'Features', uk: 'Ключові елементи' },

  // Feature names and descriptions
  'about.feature.allYouNeed': { en: 'All you need for work', uk: 'Все для роботи' },
  'about.feature.allYouNeed.desc': { en: 'Desks, Wi-Fi & meeting rooms', uk: 'Столи, Wi-Fi та переговорні' },
  'about.feature.ihubPartner': { en: 'iHUB Partner', uk: 'Партнер iHUB' },
  'about.feature.ihubPartner.desc': { en: 'Official partnership with innovation hub', uk: 'Офіційне партнерство з інноваційним хабом' },
  'about.feature.web3Environment': { en: 'Web3 environment', uk: 'Web3 середовище' },
  'about.feature.web3Environment.desc': { en: 'Web3 teams & builders around you', uk: 'Web3 команди та розробники навколо вас' },
  'about.feature.tokenizedMembership': { en: 'Tokenized Membership', uk: 'Токенізоване членство' },
  'about.feature.tokenizedMembership.desc': { en: 'Token-based membership system', uk: 'Система членства на основі токенів' },
  'about.feature.mentorships': { en: 'Mentorships', uk: 'Менторство' },
  'about.feature.mentorships.desc': { en: 'Expert guidance from industry leaders', uk: 'Експертне керівництво від лідерів індустрії' },
  'about.feature.hackathons': { en: 'Hackathons', uk: 'Хакатони' },
  'about.feature.hackathons.desc': { en: 'Hackathon prep, education, pitches', uk: 'Підготовка, навчання фаундерів, пітчі' },
  'about.feature.events': { en: 'Events', uk: 'Івенти' },
  'about.feature.events.desc': { en: 'Conferences, workshops, meetups', uk: 'Конференції, воркшопи, мітапи' },
  'about.feature.loyaltyGamification': { en: 'Loyalty/Gamification', uk: 'Лояльність/Геймифікація' },
  'about.feature.loyaltyGamification.desc': { en: 'Rewards system for active members', uk: 'Система нагород для активних мемберів' },
  'about.feature.web3Store': { en: 'Web3 Store', uk: 'Web3 магазин' },
  'about.feature.web3Store.desc': { en: 'Exclusive Web3 gadgets, merch & wallets', uk: 'Ексклюзивні Web3 гаджети, мерч та гаманці' },

  // Vision page translations - Complete translated text
  'vision.missionTitle': { en: 'Our Mission', uk: 'Наша місія' },
  'vision.missionSubtitle': { en: 'To unite and empower Ukraine\'s Web3 talent through a permanent physical hub — built by the community, for the community — where ideas meet action, and local builders connect to global ecosystems', uk: 'Об\'єднати та посилити Web3-таланти України через постійний фізичний хаб, створений спільнотою для спільноти. Ми прагнемо створити середовище, де ідеї перетворюються на дію, а українські розробники отримують доступ до глобальних екосистем' },
  'vision.futureTitle': { en: 'The Future of Ukrainian Web3 Starts Here', uk: 'Майбутнє українського Web3 починається тут' },
  'vision.future.desc1': { en: 'KYIV.ONCHAIN is more than a physical space. It\'s the launchpad for Ukraine\'s digital sovereignty in the Web3 era. We\'re building a worldwide ecosystem where Ukrainian ideas and technology shape the future of decentralization.', uk: 'KYIV.ONCHAIN — це не просто простір. Це плацдарм цифрової незалежності України в нову епоху Web3. Ми будуємо глобальну екосистему, де українські ідеї та технології формують хід децентралізованої революції.' },
  'vision.future.desc2': { en: 'We see Ukraine as a new gravitational center for Web3 builders, researchers, and entrepreneurs from across the globe. What sets us apart is our deep technical expertise, resilient infrastructure, and a community with unbreakable spirit.', uk: 'Ми бачимо Україну як нову точку тяжіння для Web3-білдерів, дослідників і підприємців з усього світу. У нас є все: технічна глибина, стійка інфраструктура і спільнота, яку неможливо зламати.' },
  'vision.future.desc3': { en: 'What we\'re building knows no borders. But its heart — is Ukrainian.', uk: 'Те, що ми створюємо, не має меж. Але його серце — українське.' },
  
  'vision.solanaTitle': { en: 'Solana & Kumeka — Building with Purpose: A Foundation-Layer Partnership', uk: 'Solana & Kumeka — фундаментальні партнери з правильною мотивацією' },
  'vision.solana.desc1': { en: 'We didn\'t choose Solana and Kumeka by chance — we chose them because they build from first principles, at both the protocol and ecosystem level. That\'s exactly how we see KYIV.ONCHAIN: not as another co-working space, but as core infrastructure for Ukraine\'s Web3 future.', uk: 'Ми обрали Solana і Kumeka не випадково — це гравці, які мислять з перших принципів: на рівні протоколу та екосистеми. Саме так ми бачимо й KYIV.ONCHAIN — не як черговий коворкінг, а як інфраструктурну основу для Web3 в Україні.' },
  'vision.solana.desc2': { en: 'Solana isn\'t just a high-performance blockchain — it\'s a complete ecosystem designed to support founders from zero to one, and from idea to scale. At its core is a community-first philosophy that empowers builders with access, funding, and distribution — not just code.', uk: 'Solana — це не просто високопродуктивний блокчейн. Це повноцінна екосистема, створена для того, щоб підтримувати фаундерів від ідеї — до запуску та масштабування. В її основі — філософія ком\'юніті: доступ, фінансування, дистрибуція — не лише код.' },
  'vision.solana.grants': { en: 'The Solana ecosystem also offers a wide range of grants to support builders at every stage — from shipping early ideas to scaling public goods. Whether you\'re working on dev tooling, consumer apps, or community projects, there\'s funding available. Explore opportunities through the [GRANTS_LINK] and the [KUMEKA_GRANTS_LINK].', uk: 'Екосистема Solana також пропонує широкий спектр грантів для підтримки білдерів на кожному етапі — від реалізації ранніх ідей до масштабування публічних благ. Незалежно від того, працюєте ви над інструментами розробки, споживчими додатками чи комьюніті проєктами — є доступне фінансування. Досліджуйте можливості через [GRANTS_LINK] і [KUMEKA_GRANTS_LINK].' },
  
  'vision.kumeka.title': { en: 'KUMEKA Team — Ukrainian Solana Hub', uk: 'Kumeka — український осередок Solana' },
  'vision.kumeka.desc1': { en: 'Kumeka helps the most promising projects in the Solana ecosystem launch and grow. Organized as a collective of creatives, developers, and operators, they bring deep experience in building and scaling tech businesses.', uk: 'Kumeka — це команда, яка допомагає найперспективнішим проєктам в екосистемі Solana запускатись і зростати.\nЦе колектив креаторів, девелоперів і операторів із реальним досвідом побудови технологічного бізнесу.' },
  'vision.kumeka.learnMore': { en: 'Learn more: [KUMEKA_LINK]', uk: 'Дізнатися більше: [KUMEKA_LINK]' },
  'vision.kumeka.desc2': { en: 'Kumeka values the sovereignty that comes with founding a company, the skin in the game that comes with investing, and the joy that comes with getting sh*t done. In a pre-crypto world, you had to choose: founder, investor, or employee. Crypto allows us to be all three — and Kumeka embodies that freedom.', uk: 'Вони вірять у свободу підприємництва, цінують особисту відповідальність в інвестуванні й кайф від реального прогресу. Раніше світ змушував обирати: фаундер, інвестор чи співробітник. Крипта дозволяє бути всім одразу. Kumeka живе цим принципом.' },
  'vision.kumeka.desc3': { en: 'As the core tenant of KYIV.ONCHAIN, Kumeka has supported this hub from day one.', uk: 'І саме вони стали основним партнером KYIV.ONCHAIN з першого дня запуску.' },
  
  
  'vision.accelerators.title': { en: 'Accelerators That Actually Build Startups', uk: 'Акселератори, які реально створюють стартапи' },
  'vision.accelerators.desc1': { en: 'Solana doesn\'t just fund projects — it incubates them. The ecosystem includes top-tier accelerators like:', uk: 'Solana не лише фінансує проєкти — вона їх виношує. Екосистема включає провідні акселератори, такі як:' },
  'vision.accelerators.list': { en: '[COLOSSEUM_LINK], [SOLANA_LABS_LINK], [VENTURE_LAUNCH_LINK], [OUTLIER_VENTURES_LINK]', uk: '[COLOSSEUM_LINK], [SOLANA_LABS_LINK], [VENTURE_LAUNCH_LINK], [OUTLIER_VENTURES_LINK]' },
  'vision.accelerators.desc2': { en: 'Each program provides hands-on mentorship, product support, and growth expertise tailored to Solana-native startups.', uk: 'Кожна з програм надає практичне менторство, продуктову підтримку та експертизу зростання, адаптовану для Solana-нативних стартапів.' },
  
  'vision.nodes.title': { en: '🌐 XYZ.ONCHAIN Local Nodes of a Global Movement', uk: '🌐 XYZ.ONCHAIN — локальні вузли глобального руху' },
  'vision.nodes.desc1': { en: 'Solana Superteams like UK, UAE, Kumeka, and others have proven how impactful local builder communities can be when given the right structure and support. They have helped to launch hundreds of projects by offering:', uk: 'Solana Superteam-спільноти, як-от UK, UAE, Kumeka та інші, довели, наскільки впливовими можуть бути локальні білдерські громади за правильної структури та підтримки. Вони допомогли запустити сотні проєктів, пропонуючи:' },
  'vision.nodes.benefits': { en: 'Trusted peer feedback, mentorship, and hiring support; Localized events, quests, and hackathons; Real-time amplification and access to ecosystem capital', uk: 'Довірений зворотний зв\'язок від колег, менторство та підтримку в наймі; Локалізовані івенти, квести та хакатони; Ампліфікацію в реальному часі та доступ до екосистемного капіталу' },
  'vision.nodes.desc2': { en: 'With growing Web3 scene, [XYZ].ONCHAIN aims to become the chain of IRL hubs in multiple cities activating and uniting regional talent into the broader Solana & Other Web3 ecosystem movements.', uk: 'З огляду на зростаючу глобальну Web3 екосистему, [XYZ].ONCHAIN прагне стати мережею IRL-хабів у кількох містах, що активує та об\'єднує регіональні таланти в ширші рухи екосистем Solana та інших Web3-платформ.' },
  
  'vision.governance.title': { en: 'Tokenized Community Governance', uk: 'Токенізоване управління спільнотою' },
  'vision.governance.desc1': { en: 'The Inner Circle membership tier represents the first step toward full tokenization of our community governance. We\'re building toward a future where KYIV.ONCHAIN operates as a true DAO, with members having direct influence over strategic decisions, resource allocation, and ecosystem development.', uk: 'Рівень Inner Circle — це перший крок до повної токенізації управління хабом. Ми будуємо майбутнє, де KYIV.ONCHAIN функціонує як справжній DAO, у якому учасники впливають на стратегічні рішення, розподіл ресурсів та розвиток екосистеми.' },
  'vision.governance.desc2': { en: 'Our tokenized membership will create unprecedented transparency and democratic participation in hub operations, setting new standards for community-owned Web3 infrastructure.', uk: 'Це — новий стандарт для прозорої, децентралізованої спільнотної інфраструктури.' },
  
  'vision.cta.title': { en: 'Join Us in Building the Future', uk: 'Приєднуйся до творення майбутнього' },
  'vision.cta.desc': { en: 'This vision becomes reality through community. Whether you\'re a developer, entrepreneur, investor, or simply passionate about Web3\'s potential in Ukraine, your contribution shapes our collective future.', uk: 'Це бачення не реалізується саме по собі. Його створює ком\'юніті.\nТи — розробник, підприємець, інвестор чи просто віриш у Web3-потенціал України?\nТвоя участь формує наше спільне завтра.' },

  // Event translations
  'events.sailing.title': { en: 'Solana Sailing', uk: 'Solana Sailing' },
  'events.sailing.desc': { en: 'Unique sailing experience combining Web3 learning and networking on the water. Connect with fellow builders while exploring new horizons.', uk: 'Унікальний досвід вітрильного спорту, що поєднує роботу та нетворкінг на воді. Зконектились з колегами-розробниками, досліджуючи нові горизонти.' },
  'events.sailing.attendees': { en: '25 builders', uk: '25 фаундерів' },
  'events.sailing.location': { en: 'Various Coastal Locations', uk: 'Various Coastal Locations' },
  // Partners section translations 
  'partners.followUs': { en: 'Follow Us', uk: 'Слідкуйте за нами' },
  'partners.partnerWithUs': { en: 'Partner With Us', uk: 'Партнерство з нами' },
  'partners.joinEcosystem': { en: 'Join our ecosystem and help build the future of Web3 in Ukraine. We\'re looking for strategic partners, sponsors, and collaborators.', uk: 'Приєднуйтесь до нашої екосистеми та допоможіть побудувати майбутнє Web3 в Україні. Ми шукаємо стратегічних партнерів, спонсорів та колабораторів.' },
  'partners.more': { en: 'More', uk: 'Більше' },

  // Additional links and common text
  'links.exploreOpportunities': { en: 'Explore opportunities through the', uk: 'Ознайомитися з можливостями можна на' },
  'links.learnMore': { en: 'Learn more', uk: 'Більше' },
  'common.and': { en: 'and the', uk: 'та' },
  'cta.joinWaitlist': { en: 'Apply', uk: 'Подати Заявку' },
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
