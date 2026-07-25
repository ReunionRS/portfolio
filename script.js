document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Language Translations ---------- */
  const translations = {
    ru: {
      nav_work: "Портфолио",
      nav_about: "О себе",
      nav_clients: "Клиенты",
      nav_services: "Услуги",
      nav_contact: "Контакты",
      hero_eyebrow: "Привет, меня зовут",
      hero_title: "Илья",
      hero_spec2: "Разработка игр",
      hero_spec3: "Веб-разработка",
      hero_spec4: "ИИ решения",
      hero_spec5: "Продуктовый дизайн",
      hero_desc: "Создаем цифровые продукты и графику, которые вдохновляют и приносят результат.",
      hero_btn: "Смотреть Портфолио",
      hero_gdrive: "Google Drive Портфолио",
      scroll_down: "Прокрутите вниз",
      about_eyebrow: "О себе",
      about_title: "Я создаю<br>цифровые<br>продукты.",
      about_lead: "От кинематографичного VFX и компьютерной графики до мобильных приложений и ИИ-решений.",
      about_hello: "Привет",
      about_name: "Я Илья Смирнов.",
      about_role: "Креативный разработчик и автор портфолио.",
      about_text: "Я объединяю креатив и технологии для создания глубоких цифровых продуктов — от веб-платформ и игр до CGI, интерактивного реквизита и ИИ-инструментов.",
      about_resume: "Скачать Резюме",
      work_eyebrow: "Проекты и кейсы",
      work_title: "Портфолио",
      work_view_all: "Все проекты на GitHub",
      p1_title: "VPRussia",
      p1_sub: "Технологический портал о виртуальном продакшене",
      p1_desc: "Технологический портал о виртуальном продакшене: новости, каталог, статьи, образовательные материалы и биржа.",
      p2_title: "28Q Videostudio",
      p2_sub: "Сайт видеостудии с позиционированием и портфолио",
      p2_desc: "Сайт видеостудии с позиционированием, услугами, примерами работ, контактами и выразительным первым экраном.",
      p3_title: "Lumen Group",
      p3_sub: "Fullstack-приложение на Flutter и Node.js",
      p3_desc: "Fullstack-приложение: Flutter-клиент и Node.js/Express API для управления пользовательскими сценариями.",
      p4_title: "МартСтрой CRM",
      p4_sub: "Flutter CRM для строительной команды",
      p4_desc: "Flutter CRM для строительной команды: авторизация, рабочий интерфейс и база для внутренних бизнес-процессов.",
      clients_eyebrow: "Опыт взаимодействия и доверие",
      clients_title: "Компании, которые мне доверились",
      client_1: "E-Commerce & Tech",
      client_2: "Creative Digital Studio",
      client_3: "Virtual Production Platform",
      client_4: "HR Tech Integrations",
      services_eyebrow: "· Чем я занимаюсь ·",
      s_game: "Разработка<br>Игр",
      s_web: "Веб<br>Разработка",
      s_ai: "ИИ<br>Приложения",
      s_ui: "UI/UX<br>Дизайн",
      s_auto: "Автоматизация<br>и Системы",
      tech_eyebrow: "Технологии и стек",
      stats_eyebrow: "Опыт в цифрах",
      st_projects: "Проектов",
      st_years: "Года",
      st_passion: "Страсть",
      st_ideas: "Идеи",
      contact_eyebrow: "Давайте работать вместе",
      contact_title: "Давайте создадим<br>что-то потрясающее."
    },
    en: {
      nav_work: "Portfolio",
      nav_about: "About",
      nav_clients: "Clients",
      nav_services: "Services",
      nav_contact: "Contact",
      hero_eyebrow: "Hello, I'm",
      hero_title: "Ilya",
      hero_spec2: "Game Development",
      hero_spec3: "Web Development",
      hero_spec4: "AI Solutions",
      hero_spec5: "Product Design",
      hero_desc: "We create digital experiences and graphics that inspire, engage and deliver real impact.",
      hero_btn: "Explore Portfolio",
      hero_gdrive: "Google Drive Portfolio",
      scroll_down: "Scroll down",
      about_eyebrow: "About Me",
      about_title: "I create<br>digital<br>experiences.",
      about_lead: "From cinematic VFX and 3D graphics to mobile apps and AI-powered software.",
      about_hello: "Hello",
      about_name: "I'm Ilya Smirnov.",
      about_role: "Creative developer and portfolio author.",
      about_text: "I combine creativity with technology to build immersive digital products — from web platforms and games to CGI, props crafting, and AI tools.",
      about_resume: "Download Resume",
      work_eyebrow: "Selected Works",
      work_title: "Portfolio",
      work_view_all: "View all on GitHub",
      p1_title: "VPRussia",
      p1_sub: "Technological portal about virtual production",
      p1_desc: "A portal for virtual production: news, catalog, articles, educational materials and a marketplace.",
      p2_title: "28Q Videostudio",
      p2_sub: "Video studio website with positioning and portfolio",
      p2_desc: "A video studio website with services, portfolio, contacts and an expressive hero section.",
      p3_title: "Lumen Group",
      p3_sub: "Fullstack app with Flutter and Node.js",
      p3_desc: "A fullstack product with Flutter client and Node.js/Express API for project scenario management.",
      p4_title: "MartStroy CRM",
      p4_sub: "Flutter CRM for a construction team",
      p4_desc: "A Flutter CRM for construction teams: authorization, work interface and a business process database.",
      clients_eyebrow: "Experience & Collaboration",
      clients_title: "Trusted By",
      client_1: "E-Commerce & Tech",
      client_2: "Creative Digital Studio",
      client_3: "Virtual Production Platform",
      client_4: "HR Tech Integrations",
      services_eyebrow: "· What I Do ·",
      s_game: "Game<br>Development",
      s_web: "Web<br>Development",
      s_ai: "AI<br>Applications",
      s_ui: "UI/UX<br>Design",
      s_auto: "Automation<br>& Systems",
      tech_eyebrow: "Tech Stack",
      stats_eyebrow: "Experience by Numbers",
      st_projects: "Projects",
      st_years: "Years",
      st_passion: "Passion",
      st_ideas: "Ideas",
      contact_eyebrow: "Let's Work Together",
      contact_title: "Let's create<br>something amazing."
    }
  };

  // Русский язык установлен по умолчанию
  let currentLang = 'ru';
  const langToggle = document.getElementById('langToggle');

  const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    if (lang === 'ru') {
      langToggle.innerHTML = '<span class="lang-toggle__active">RU</span> / <span class="lang-toggle__inactive">EN</span>';
      document.documentElement.lang = 'ru';
    } else {
      langToggle.innerHTML = '<span class="lang-toggle__inactive">RU</span> / <span class="lang-toggle__active">EN</span>';
      document.documentElement.lang = 'en';
    }
  };

  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
  });

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 250);
  });
  setTimeout(() => loader.classList.add('hide'), 1800);

  /* ---------- Header on scroll ---------- */
  const header = document.getElementById('header');
  const toTop = document.getElementById('toTop');

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 500);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Mobile menu overlay ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');
  const body = document.body;

  const openMenu = () => {
    menuOverlay.classList.add('open');
    body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menuOverlay.classList.remove('open');
    body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('open')) closeMenu();
  });

  /* ---------- Smooth anchor scroll with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Marquee: duplicate content for seamless loop ---------- */
  const track = document.getElementById('marqueeTrack');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* ---------- Stat counters ---------- */
  const statNums = document.querySelectorAll('.stat__num[data-count]');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statNums.forEach(el => statObserver.observe(el));

});