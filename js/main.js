(function bootstrapPortfolioPage() {
  const STARTED_SECTION_SELECTOR = '.section.started';
  const HEADER_SELECTOR = 'header';
  const MENU_BUTTON_SELECTOR = '.menu-btn';
  const MENU_LINK_SELECTOR = '.top-menu a[href^="#section-"]';
  const MOUSE_BUTTON_SELECTOR = '.mouse_btn';
  const DOTTED_SKILL_SELECTOR = '.skills.dotted .progress';
  const LANGUAGE_SWITCH_SELECTOR = '[data-language-switch]';
  const THEME_SWITCH_SELECTOR = '[data-theme-switch]';
  const HERO_TYPED_SELECTOR = '.typed-subtitle';
  const PRELOADER_TYPED_SELECTOR = '.typed-load';
  const THEME_COLOR_META_SELECTOR = 'meta[name="theme-color"]';
  const STORAGE_KEYS = {
    language: 'portfolio-language',
    theme: 'portfolio-theme',
  };

  const TRANSLATIONS = {
    en: {
      meta: {
        title: 'Bohdan Pukhno | Lead Web3 Engineer',
        description:
          'Portfolio of Bohdan Pukhno, lead Web3 engineer focused on Solidity smart contracts, RWA tokenization, DeFi systems, zero-knowledge verification, and blockchain security.',
        keywords:
          'Bohdan Pukhno, lead web3 engineer, smart contract developer, smart contract auditor, Solidity, zero-knowledge verification, cross-chain systems, RWA tokenization, DeFi, Chainlink CCIP',
      },
      controls: {
        menuToggleAria: 'Toggle menu',
        scrollAria: 'Scroll to next section',
        languageAria: 'Language selector',
        themeAria: 'Toggle color theme',
        darkMode: 'Dark',
        lightMode: 'Light',
      },
      menu: {
        about: 'About',
        resume: 'Resume',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        titlePrefix: "I'm",
        titleFull: "I'm Bohdan Pukhno",
      },
      about: {
        title: 'About Me',
        summary:
          'Lead Web3 Engineer with 5+ years of experience in Solidity smart contract development, protocol architecture, and security. I currently lead smart contract development at Swarm Markets, delivering production-grade systems for tokenized real-world assets, DeFi products, zero-knowledge verification, and cross-chain asset flows across EVM ecosystems.',
        info: {
          name: '<strong>Name:</strong> Bohdan Pukhno',
          role: '<strong>Role:</strong> Lead Web3 Engineer',
          experience: '<strong>Experience:</strong> 5+ years in Web3',
          location: '<strong>Location:</strong> Kyiv, Ukraine',
          email: '<strong>E-mail:</strong> pukhnobg@gmail.com',
        },
        cta: "Let's talk",
      },
      resume: {
        experienceTitle: 'Experience',
        experience: [
          {
            name: 'Lead Smart Contract Developer, Swarm Markets',
            description:
              'Lead smart contract architecture and delivery for an EU-regulated tokenized asset platform, shipping 40+ production-grade contracts across RWA issuance, OTC trading, staking, asset management, and cross-chain flows.',
          },
          {
            name: 'Smart Contract Auditor & Security Analyst, Hacken',
            description:
              'Audited tokens, staking, vesting, DAOs, marketplaces, upgradeable contracts, and DeFi protocols, then validated and triaged vulnerability reports through HackenProof security workflows.',
          },
          {
            name: 'Smart Contract Developer Intern, Nethermind',
            description:
              'Researched Starknet and LayerZero implementation patterns, cross-chain contract logic, and interoperability-focused architecture for emerging blockchain infrastructure.',
          },
          {
            name: 'Co-Founder & CTO, Hata',
            description:
              'Co-founded and led technical development of a smart-contract-based platform for real estate agreements and payments, launched at a Chainlink hackathon and later advanced through the Vacuum Deep Tech Acceleration program.',
          },
          {
            name: 'Freelance Smart Contract Developer, Upwork',
            description:
              'Built Solidity contracts, tests, and technical documentation for Ethereum and Polygon projects across DeFi and asset management use cases.',
          },
        ],
        educationTitle: 'Education',
        education: [
          {
            name: 'PhD in Electronic Engineering (in progress)',
            description: 'Kyiv Polytechnic Institute, Kyiv, Ukraine.',
          },
          {
            name: "Master's Degree in Electronic Engineering",
            description: 'Kyiv Polytechnic Institute, Kyiv, Ukraine.',
          },
          {
            name: "Bachelor's Degree in Electronic Engineering",
            description: 'Kyiv Polytechnic Institute, Kyiv, Ukraine.',
          },
          {
            name: 'Hackathons & Recognition',
            description:
              'BuggyDAO took 2nd place at Kyiv Tech Summit 2022. AragonDAO and Police Oracle won Aragon bounties, and Hata was recognized in the Science Intensive Innovation track.',
          },
          {
            date: 'Certificates',
            name: 'CBP & CEP',
            description: 'Certified Bitcoin Professional and Certified Ethereum Professional.',
          },
        ],
      },
      skills: {
        languageTitle: 'Language Skills',
        languages: ['Ukrainian / Native', 'Russian / Fluent', 'English / B2'],
        codingTitle: 'Coding Skills',
        stackTitle: 'Web3 Stack',
        stack: [
          'Zero-knowledge verification and cross-chain systems',
          'Slither, MythX, Tenderly, secure testing workflows',
          'Smart contract security, auditing, and exploit prevention',
        ],
      },
      projects: {
        title: 'Selected Projects',
        items: [
          {
            name: 'Asset Tokenization & RWAs',
            description:
              'Built contract systems for tokenized stocks, U.S. Treasury bills, BlackRock ETFs, gold-backed NFTs, and bundled NFT vaults with secure lifecycle management.',
          },
          {
            name: 'dOTC Protocol',
            description:
              'Designed a decentralized OTC trading protocol with Chainlink price feeds, KYC/AML verification, and atomic escrow-based settlement for regulated tokenized assets.',
          },
          {
            name: 'Hata',
            description:
              'Co-founded a smart-contract-based platform for real estate agreements and payments, launched at a Chainlink hackathon, and advanced it into deep-tech acceleration.',
          },
        ],
      },
      contacts: {
        title: 'Contacts',
        items: {
          github: 'GitHub',
          email: 'E-mail',
          linkedin: 'LinkedIn',
          telegram: 'Telegram',
        },
      },
    },
    uk: {
      meta: {
        title: 'Bohdan Pukhno | Lead Web3 Engineer',
        description:
          'Портфоліо Богдана Пухна, lead Web3 engineer, з фокусом на Solidity smart contracts, RWA tokenization, DeFi systems, zero-knowledge verification та blockchain security.',
        keywords:
          'Bohdan Pukhno, lead web3 engineer, smart contract developer, smart contract auditor, Solidity, zero-knowledge verification, cross-chain systems, RWA tokenization, DeFi, Chainlink CCIP',
      },
      controls: {
        menuToggleAria: 'Відкрити меню',
        scrollAria: 'Прокрутити до наступної секції',
        languageAria: 'Вибір мови',
        themeAria: 'Перемкнути тему',
        darkMode: 'Темна',
        lightMode: 'Світла',
      },
      menu: {
        about: 'Про мене',
        resume: 'Резюме',
        skills: 'Навички',
        projects: 'Проєкти',
        contact: 'Контакти',
      },
      hero: {
        titlePrefix: 'Я',
        titleFull: 'Я і Богдан Пухно',
      },
      about: {
        title: 'Про мене',
        summary:
          'Lead Web3 Engineer з 5+ роками досвіду в розробці Solidity smart contracts, архітектурі протоколів і безпеці. Зараз я очолюю напрям smart contract development у Swarm Markets, де доставляю production-grade системи для tokenized real-world assets, DeFi-продуктів, zero-knowledge verification та cross-chain asset flows в EVM-екосистемах.',
        info: {
          name: "<strong>Ім'я:</strong> Bohdan Pukhno",
          role: '<strong>Роль:</strong> Lead Web3 Engineer',
          experience: '<strong>Досвід:</strong> 5+ років у Web3',
          location: '<strong>Локація:</strong> Київ, Україна',
          email: '<strong>E-mail:</strong> pukhnobg@gmail.com',
        },
        cta: 'Написати',
      },
      resume: {
        experienceTitle: 'Досвід',
        experience: [
          {
            name: 'Lead Smart Contract Developer, Swarm Markets',
            description:
              'Очолюю архітектуру та delivery smart contracts для EU-regulated платформи токенізованих активів, де випустив 40+ production-grade контрактів для RWA issuance, OTC trading, staking, asset management і cross-chain flows.',
          },
          {
            name: 'Smart Contract Auditor & Security Analyst, Hacken',
            description:
              'Аудитував токени, staking, vesting, DAO, marketplace, upgradeable contracts і DeFi-протоколи, а також валідував і тріажив vulnerability reports у процесах HackenProof.',
          },
          {
            name: 'Smart Contract Developer Intern, Nethermind',
            description:
              'Досліджував implementation patterns для Starknet і LayerZero, cross-chain contract logic та архітектурні підходи для emerging blockchain infrastructure.',
          },
          {
            name: 'Co-Founder & CTO, Hata',
            description:
              'Співзаснував і очолив технічну розробку smart-contract-based платформи для угод і платежів у сфері нерухомості, запущеної на Chainlink hackathon та розвиненої в межах Vacuum Deep Tech Acceleration.',
          },
          {
            name: 'Freelance Smart Contract Developer, Upwork',
            description:
              'Розробляв Solidity contracts, тести й технічну документацію для Ethereum- і Polygon-проєктів у DeFi та asset management напрямах.',
          },
        ],
        educationTitle: 'Освіта',
        education: [
          {
            name: 'PhD з електронної інженерії (навчаюсь)',
            description: 'Київський політехнічний інститут, Київ, Україна.',
          },
          {
            name: 'Магістр з електронної інженерії',
            description: 'Київський політехнічний інститут, Київ, Україна.',
          },
          {
            name: 'Бакалавр з електронної інженерії',
            description: 'Київський політехнічний інститут, Київ, Україна.',
          },
          {
            name: 'Хакатони та відзнаки',
            description:
              'BuggyDAO посів 2 місце на Kyiv Tech Summit 2022. AragonDAO і Police Oracle виграли Aragon bounty, а Hata був відзначений у напрямі Science Intensive Innovation.',
          },
          {
            date: 'Сертифікації',
            name: 'CBP & CEP',
            description: 'Certified Bitcoin Professional та Certified Ethereum Professional.',
          },
        ],
      },
      skills: {
        languageTitle: 'Мовні навички',
        languages: ['Українська / Рідна', 'Російська / Вільно', 'Англійська / B2'],
        codingTitle: 'Навички кодування',
        stackTitle: 'Web3 стек',
        stack: [
          'Zero-knowledge verification та cross-chain systems',
          'Slither, MythX, Tenderly, безпечні testing workflows',
          'Безпека smart contracts, аудит і запобігання експлойтам',
        ],
      },
      projects: {
        title: 'Обрані проєкти',
        items: [
          {
            name: 'Токенізація активів і RWA',
            description:
              'Побудував contract systems для tokenized stocks, U.S. Treasury bills, BlackRock ETF, gold-backed NFT та bundled NFT vaults із secure lifecycle management.',
          },
          {
            name: 'dOTC Protocol',
            description:
              'Спроєктував decentralized OTC trading protocol з Chainlink price feeds, KYC/AML verification та atomic escrow-based settlement для regulated tokenized assets.',
          },
          {
            name: 'Hata',
            description:
              'Співзаснував smart-contract-based платформу для угод і платежів у нерухомості, запустив її на Chainlink hackathon і довів до deep-tech acceleration програми.',
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        items: {
          github: 'GitHub',
          email: 'E-mail',
          linkedin: 'LinkedIn',
          telegram: 'Telegram',
        },
      },
    },
  };

  function select(selector, root = document) {
    return root.querySelector(selector);
  }

  function selectAll(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function getTranslationValue(language, key) {
    return key.split('.').reduce((value, segment) => (value ? value[segment] : undefined), TRANSLATIONS[language]);
  }

  function translate(key, language = getCurrentLanguage()) {
    const value = getTranslationValue(language, key);
    return typeof value === 'string' ? value : '';
  }

  function readStorage(key, fallback) {
    try {
      return window.localStorage.getItem(key) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage write errors in restricted environments.
    }
  }

  function getCurrentTheme() {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function getCurrentLanguage() {
    return document.documentElement.lang === 'uk' ? 'uk' : 'en';
  }

  function readStoredTheme() {
    return readStorage(STORAGE_KEYS.theme, getCurrentTheme()) === 'dark' ? 'dark' : 'light';
  }

  function readStoredLanguage() {
    return readStorage(STORAGE_KEYS.language, getCurrentLanguage()) === 'uk' ? 'uk' : 'en';
  }

  function setStartedHeight() {
    const startedSection = select(STARTED_SECTION_SELECTOR);
    if (!startedSection) {
      return;
    }

    const offset = window.innerWidth < 840 ? 30 : 60;
    startedSection.style.height = `${window.innerHeight - offset}px`;
  }

  function hidePreloader() {
    document.body.classList.add('loaded');
  }

  function closeMenu() {
    const header = select(HEADER_SELECTOR);
    if (header) {
      header.classList.remove('active');
    }
  }

  function toggleMenu(event) {
    event.preventDefault();
    const header = select(HEADER_SELECTOR);
    if (!header) {
      return;
    }

    header.classList.toggle('active');
  }

  function scrollToSection(targetSelector) {
    const target = select(targetSelector);
    if (!target) {
      return;
    }

    const offset = window.innerWidth < 840 ? 90 : 110;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  function updateActiveMenuLink() {
    const links = selectAll(MENU_LINK_SELECTOR);
    const scrollPosition = window.scrollY + 140;

    let activeId = '';

    links.forEach(link => {
      const target = select(link.getAttribute('href'));
      if (target && target.offsetTop <= scrollPosition) {
        activeId = link.getAttribute('href');
      }
    });

    if (!activeId && links.length) {
      activeId = links[0].getAttribute('href');
    }

    links.forEach(link => {
      const listItem = link.closest('li');
      if (!listItem) {
        return;
      }

      listItem.classList.toggle('active', link.getAttribute('href') === activeId);
    });
  }

  function handleMenuLinkClick(event) {
    const link = event.currentTarget;
    const href = link.getAttribute('href');

    if (!href) {
      return;
    }

    event.preventDefault();
    scrollToSection(href);
    closeMenu();
  }

  function handleMouseButtonClick(event) {
    event.preventDefault();
    scrollToSection('#section-about');
  }

  function buildDotSet(className) {
    const wrapper = document.createElement('span');
    wrapper.className = className;

    for (let index = 0; index < 10; index += 1) {
      wrapper.appendChild(document.createElement('span'));
    }

    return wrapper;
  }

  function initDottedSkills() {
    selectAll(DOTTED_SKILL_SELECTOR).forEach(progress => {
      if (!progress.querySelector('.dg')) {
        progress.appendChild(buildDotSet('dg'));
      }

      const percentage = select('.percentage', progress);
      if (!percentage) {
        return;
      }

      let activeDots = select('.da', percentage);
      if (!activeDots) {
        activeDots = buildDotSet('da');
        percentage.appendChild(activeDots);
      }

      activeDots.style.width = `${progress.clientWidth}px`;
    });
  }

  function applyTranslations(language) {
    selectAll('[data-i18n]').forEach(element => {
      element.textContent = translate(element.dataset.i18n, language);
    });

    selectAll('[data-i18n-html]').forEach(element => {
      element.innerHTML = translate(element.dataset.i18nHtml, language);
    });

    selectAll('[data-i18n-content]').forEach(element => {
      element.setAttribute('content', translate(element.dataset.i18nContent, language));
    });

    selectAll('[data-i18n-aria-label]').forEach(element => {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel, language));
    });

    selectAll('[data-i18n-data-text]').forEach(element => {
      element.setAttribute('data-text', translate(element.dataset.i18nDataText, language));
    });

    document.title = translate('meta.title', language);
  }

  function updateThemeMetaColor() {
    const themeColorMeta = select(THEME_COLOR_META_SELECTOR);
    if (!themeColorMeta) {
      return;
    }

    themeColorMeta.setAttribute('content', getCurrentTheme() === 'dark' ? '#0b1117' : '#ffffff');
  }

  function updateThemeSwitch() {
    const themeSwitch = select(THEME_SWITCH_SELECTOR);
    if (!themeSwitch) {
      return;
    }

    const label = select('.theme-switch__label', themeSwitch);
    const icon = select('.theme-switch__icon', themeSwitch);
    const isDarkTheme = getCurrentTheme() === 'dark';

    themeSwitch.setAttribute('aria-label', translate('controls.themeAria'));
    themeSwitch.setAttribute('aria-pressed', String(isDarkTheme));

    if (label) {
      label.textContent = translate(isDarkTheme ? 'controls.lightMode' : 'controls.darkMode');
    }

    if (icon) {
      icon.className = `theme-switch__icon ion ${isDarkTheme ? 'ion-ios-sunny-outline' : 'ion-ios-moon-outline'}`;
    }
  }

  function updateLanguageSwitches(language) {
    selectAll(LANGUAGE_SWITCH_SELECTOR).forEach(button => {
      const isActive = button.dataset.languageSwitch === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function updateTypedOutput(output, selector, shouldRefresh) {
    if (!output) {
      return;
    }

    output.dataset.typedSource = selector;

    if (shouldRefresh && output.dataset.typedReady === 'true' && window.PortfolioTypedText) {
      window.PortfolioTypedText.refreshTypedText(output);
    }
  }

  function updateTypedSources(language, shouldRefresh = false) {
    updateTypedOutput(
      select(PRELOADER_TYPED_SELECTOR),
      `.typing-load[data-language-source="${language}"]`,
      shouldRefresh && !document.body.classList.contains('loaded'),
    );
    updateTypedOutput(
      select(HERO_TYPED_SELECTOR),
      `.typing-subtitle[data-language-source="${language}"]`,
      shouldRefresh,
    );
  }

  function setTheme(theme, options = {}) {
    const { persist = true } = options;
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', normalizedTheme);
    document.body.classList.toggle('is-dark', normalizedTheme === 'dark');

    if (persist) {
      writeStorage(STORAGE_KEYS.theme, normalizedTheme);
    }

    updateThemeMetaColor();
    updateThemeSwitch();
  }

  function setLanguage(language, options = {}) {
    const { persist = true, refreshTyped = true } = options;
    const normalizedLanguage = language === 'uk' ? 'uk' : 'en';

    document.documentElement.lang = normalizedLanguage;

    if (persist) {
      writeStorage(STORAGE_KEYS.language, normalizedLanguage);
    }

    applyTranslations(normalizedLanguage);
    updateLanguageSwitches(normalizedLanguage);
    updateTypedSources(normalizedLanguage, refreshTyped);
    updateThemeSwitch();
  }

  function handleThemeSwitchClick() {
    setTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
  }

  function handleLanguageSwitchClick(event) {
    setLanguage(event.currentTarget.dataset.languageSwitch);
  }

  function bindEvents() {
    const menuButton = select(MENU_BUTTON_SELECTOR);
    if (menuButton) {
      menuButton.addEventListener('click', toggleMenu);
    }

    selectAll(MENU_LINK_SELECTOR).forEach(link => {
      link.addEventListener('click', handleMenuLinkClick);
    });

    const mouseButton = select(MOUSE_BUTTON_SELECTOR);
    if (mouseButton) {
      mouseButton.addEventListener('click', handleMouseButtonClick);
    }

    const themeSwitch = select(THEME_SWITCH_SELECTOR);
    if (themeSwitch) {
      themeSwitch.addEventListener('click', handleThemeSwitchClick);
    }

    selectAll(LANGUAGE_SWITCH_SELECTOR).forEach(button => {
      button.addEventListener('click', handleLanguageSwitchClick);
    });

    window.addEventListener('resize', () => {
      setStartedHeight();
      initDottedSkills();
    });

    window.addEventListener('scroll', updateActiveMenuLink);
  }

  function init() {
    setLanguage(readStoredLanguage(), { persist: false, refreshTyped: false });
    setTheme(readStoredTheme(), { persist: false });
    setStartedHeight();
    bindEvents();
    initDottedSkills();
    updateActiveMenuLink();

    const preloader = select('.preloader');
    if (preloader) {
      window.PortfolioTypedText.initTypedTexts(preloader);
    }
  }

  document.addEventListener('DOMContentLoaded', init, { once: true });

  window.addEventListener(
    'load',
    () => {
      const startedSection = select(STARTED_SECTION_SELECTOR);
      if (startedSection) {
        window.PortfolioTypedText.initTypedTexts(startedSection);
      }

      window.setTimeout(() => {
        hidePreloader();
        initDottedSkills();
      }, 450);
    },
    { once: true },
  );
})();
