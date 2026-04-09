(function bootstrapPortfolioPage() {
  const STARTED_SECTION_SELECTOR = '.section.started';
  const HEADER_SELECTOR = 'header';
  const MENU_BUTTON_SELECTOR = '.menu-btn';
  const MENU_LINK_SELECTOR = '.top-menu a[href^="#section-"]';
  const MOUSE_BUTTON_SELECTOR = '.mouse_btn';
  const DOTTED_SKILL_SELECTOR = '.skills.dotted .progress';

  function select(selector, root = document) {
    return root.querySelector(selector);
  }

  function selectAll(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
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

    window.addEventListener('resize', () => {
      setStartedHeight();
      initDottedSkills();
    });

    window.addEventListener('scroll', updateActiveMenuLink);
  }

  function init() {
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
