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
  'nav.login': { en: 'Log In', uk: 'Вхід' },
  'nav.joinWaitlist': { en: 'Join Waitlist', uk: 'Приєднатися до Списку Очікування' },
  'nav.hostEvent': { en: 'Host Event', uk: 'Провести Подію' },
  'nav.partnerWithUs': { en: 'Partner With Us', uk: 'Партнерство' },

  // Hero Section
  'hero.title': { en: 'KYIV.ONCHAIN', uk: 'KYIV.ONCHAIN' },
  'hero.tagline': { en: 'The permanent home for Web3 in Ukraine', uk: 'Постійний дім для Web3 в Україні' },
  'hero.subtitle': { en: 'Powered by Solana. Built by Acropolis. Backed by Kumeka.', uk: 'На базі Solana. Побудовано Acropolis. За підтримки Kumeka.' },
  'hero.joinBtn': { en: 'Join Waiting List', uk: 'Приєднатися до Списку Очікування' },
  'hero.hostBtn': { en: 'Host Your Event', uk: 'Провести Вашу Подію' },
  'hero.hostBtnSoon': { en: 'Soon', uk: 'Незабаром' },

  // About Section
  'about.title': { en: 'About the Hub', uk: 'Про Хаб' },
  'about.description': { en: 'KYIV.ONCHAIN is Ukraine\'s dedicated IRL home for founders, developers, marketers, researchers, traders, and operators building in Web3.', uk: 'KYIV.ONCHAIN - це спеціалізований фізичний дім України для засновників, розробників, маркетологів, дослідників, трейдерів та операторів, які будують у Web3.' },
  'about.partnership': { en: 'Built in partnership with iHUB Kyiv, we operate within a fully equipped co-working space — with high-speed internet, flexible desks, and a full event setup.', uk: 'Побудований у партнерстві з iHUB Kyiv, ми працюємо в повністю обладнаному коворкінг-просторі — з високошвидкісним інтернетом, гнучкими робочими місцями та повним обладнанням для подій.' },
  'about.safety': { en: '🛡️ Safety-first: iHUB features an underground workspace, allowing members to work during air raid alarms, making KYIV.ONCHAIN a rare wartime-resilient Web3 HQ.', uk: '🛡️ Безпека понад усе: iHUB має підземний робочий простір, що дозволяє учасникам працювати під час повітряних тривог, роблячи KYIV.ONCHAIN рідкісною стійкою до воєнного часу Web3 штаб-квартирою.' },

  // Gamification
  'gamification.title': { en: 'Gamification System', uk: 'Система Гейміфікації' },
  'gamification.passport': { en: 'Solana NFT Membership Passport', uk: 'NFT Паспорт Учасника на Solana' },
  'gamification.xp': { en: 'XP engine (check-ins, quest completions)', uk: 'Система XP (відмітки, виконання квестів)' },
  'gamification.rewards': { en: 'Rewards: coffee, merch, tickets, governance', uk: 'Винагороди: кава, мерч, квитки, управління' },
  'gamification.quests': { en: 'Quests via Zealy or in-house dashboard', uk: 'Квести через Zealy або внутрішню панель' },

  // Membership Tiers
  'membership.title': { en: 'Membership Tiers', uk: 'Рівні Членства' },
  'membership.guest': { en: 'Guest', uk: 'Гість' },
  'membership.member': { en: 'Member', uk: 'Учасник' },
  'membership.closed': { en: 'Closed Community', uk: 'Закрита Спільнота' },

  // Forms
  'form.join.title': { en: 'Join the Waitlist', uk: 'Приєднатися до Списку Очікування' },
  'form.event.title': { en: 'Host an Event', uk: 'Провести Подію' },
  'form.partner.title': { en: 'Partner With Us', uk: 'Партнерство з Нами' },
  'form.name': { en: 'Name', uk: 'Ім\'я' },
  'form.email': { en: 'Email', uk: 'Електронна пошта' },
  'form.company': { en: 'Company', uk: 'Компанія' },
  'form.message': { en: 'Message', uk: 'Повідомлення' },
  'form.submit': { en: 'Submit Application', uk: 'Подати Заявку' },

  // Partners
  'partners.title': { en: 'Our Partners', uk: 'Наші Партнери' },

  // Events
  'events.title': { en: 'Previous Events', uk: 'Попередні Події' },
  'events.viewMore': { en: 'View on X', uk: 'Подивитися на X' },

  // Footer
  'footer.contact': { en: 'Contact Us', uk: 'Зв\'язатися з Нами' },
  'footer.community': { en: 'Join Our Community', uk: 'Приєднуйтесь до Нашої Спільноти' },
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