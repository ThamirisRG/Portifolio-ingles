// =======================
// i18n dictionary
// =======================
const translations = {
  en: {
    "meta.title": "Thamiris Gonçalves — Front-End Developer",
    "meta.description": "Portfolio of Thamiris Gonçalves, front-end developer: projects, skills and contact.",
    "meta.ogTitle": "Thamiris Gonçalves — Front-End Developer",
    "meta.ogDescription": "Projects, skills and contact.",
    "a11y.skip": "Skip to content",
    "a11y.home": "Home",
    "a11y.chooseLang": "Choose language",
    "nav.primary": "Primary",
    "nav.open": "Open menu",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.portfolio": "Portfolio",
    "banner.text": "We noticed your browser is in Portuguese. Switch to Portuguese (Brazil)?",
    "banner.yes": "Yes, switch to PT-BR",
    "banner.no": "Keep English",
    "hero.subtitle": "Front-End Developer focused on responsive, accessible and high-performance interfaces. Wrapping up React and starting Back-End.",
    "hero.cta1": "See projects",
    "hero.cta2": "Contact me",
    "about.title": "About me",
    "about.p1": "I’m a front-end developer with a strong foundation in HTML, CSS and JavaScript. I’m finishing my React track and getting started with Back-End fundamentals. I love turning ideas into accessible, delightful digital products.",
    "about.p2": "I also bring team leadership and customer-facing experience, which strengthens communication and collaboration in multicultural teams.",
    "projects.title": "Projects",
    "projects.demo": "Demo",
    "projects.code": "Code",
    "projects.items.0.title": "Portfolio Website",
    "projects.items.0.desc": "Personal responsive site with a11y and on-page SEO.",
    "projects.items.1.title": "Task Manager",
    "projects.items.1.desc": "To-Do app with LocalStorage and reusable components.",
    "projects.items.2.title": "E-Commerce UI",
    "projects.items.2.desc": "UI exploration with reusable components and interactive states.",
    "skills.title": "Skills",
    "skills.a11y": "Accessibility",
    "contact.title": "Contact",
    "contact.intro": "Interested in a project or opportunity? Send me a message:",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.top": "Back to top ↑",
  },
  pt: {
    "meta.title": "Thamiris Gonçalves — Desenvolvedora Front-End",
    "meta.description": "Portfólio de Thamiris Gonçalves, desenvolvedora front-end: projetos, habilidades e contato.",
    "meta.ogTitle": "Thamiris Gonçalves — Desenvolvedora Front-End",
    "meta.ogDescription": "Projetos, habilidades e contato.",
    "a11y.skip": "Pular para o conteúdo",
    "a11y.home": "Página inicial",
    "a11y.chooseLang": "Escolher idioma",
    "nav.primary": "Principal",
    "nav.open": "Abrir menu",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "nav.portfolio": "Portfólio",
    "banner.text": "Notamos que seu navegador está em Português. Deseja mudar para Português (Brasil)?",
    "banner.yes": "Sim, mudar para PT-BR",
    "banner.no": "Manter em inglês",
    "hero.subtitle": "Desenvolvedora Front-End focada em interfaces responsivas, acessíveis e de alta performance. Finalizando React e iniciando Back-End.",
    "hero.cta1": "Ver projetos",
    "hero.cta2": "Fale comigo",
    "about.title": "Sobre mim",
    "about.p1": "Sou desenvolvedora front-end com base sólida em HTML, CSS e JavaScript. Estou concluindo React e iniciando fundamentos de Back-End. Adoro transformar ideias em produtos digitais acessíveis e agradáveis.",
    "about.p2": "Trago também experiência em liderança e atendimento, fortalecendo comunicação e colaboração em equipes multiculturais.",
    "projects.title": "Projetos",
    "projects.demo": "Demo",
    "projects.code": "Código",
    "projects.items.0.title": "Portfolio Website",
    "projects.items.0.desc": "Site pessoal responsivo com acessibilidade e SEO on-page.",
    "projects.items.1.title": "Task Manager",
    "projects.items.1.desc": "App de tarefas com LocalStorage e componentes reutilizáveis.",
    "projects.items.2.title": "E-Commerce UI",
    "projects.items.2.desc": "Exploração de UI com componentes reutilizáveis e estados interativos.",
    "skills.title": "Habilidades",
    "skills.a11y": "Acessibilidade",
    "contact.title": "Contato",
    "contact.intro": "Interessado em um projeto ou oportunidade? Envie uma mensagem:",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar",
    "footer.top": "Voltar ao topo ↑",
  }
};

// =======================
// Language helpers
// =======================
const LANG_KEY = "preferred_lang";

function getPreferredLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}
function setPreferredLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function applyLang(lang) {
  const dict = translations[lang] || translations.en;

  // <html lang="">
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  // texts
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // attributes e.g. data-i18n-attr="aria-label:a11y.home"
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (dict[key]) el.setAttribute(attr, dict[key]);
    });
  });

  // meta/title
  const pageTitle = document.querySelector("title[data-i18n='meta.title']");
  if (pageTitle && dict["meta.title"]) pageTitle.textContent = dict["meta.title"];
  const metaDesc = document.querySelector("meta[data-i18n='meta.description']");
  if (metaDesc && dict["meta.description"]) metaDesc.setAttribute("content", dict["meta.description"]);
  const ogTitle = document.querySelector("meta[data-i18n='meta.ogTitle']");
  if (ogTitle && dict["meta.ogTitle"]) ogTitle.setAttribute("content", dict["meta.ogTitle"]);
  const ogDesc = document.querySelector("meta[data-i18n='meta.ogDescription']");
  if (ogDesc && dict["meta.ogDescription"]) ogDesc.setAttribute("content", dict["meta.ogDescription"]);

  // sync select
  const select = document.getElementById("lang-select");
  if (select) select.value = lang;
}

// =======================
// Backdrop-filter support (CSS hook)
// =======================
const hasBackdrop =
  CSS.supports('backdrop-filter: blur(10px)') ||
  CSS.supports('-webkit-backdrop-filter: blur(10px)');
document.documentElement.classList.toggle('has-backdrop', hasBackdrop);

// =======================
// Mobile nav
// =======================
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// =======================
// Footer year
// =======================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =======================
// Smooth scroll with header offset
// =======================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')?.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    e.preventDefault();
    const header = document.querySelector('.site-header');
    const offset = (header?.offsetHeight || 0) + 8;
    const y = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    // close mobile menu
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');

    history.replaceState(null, '', `#${id}`);
  });
});

// =======================
// Simple form validation (demo only)
// =======================
const form = document.forms['contact'];
const statusEl = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const lang = getPreferredLang();
    if (!name || !email || !message) {
      if (statusEl) {
        statusEl.textContent = lang === 'pt'
          ? 'Por favor, preencha todos os campos.'
          : 'Please fill out all fields.';
        statusEl.style.color = '#fca5a5';
      }
      return;
    }
    if (statusEl) {
      statusEl.textContent = lang === 'pt'
        ? 'Mensagem enviada! (demonstração)'
        : 'Message sent! (demo)';
      statusEl.style.color = '#22c55e';
    }
    form.reset();
  });
}

// =======================
// Reveal on view
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.will-reveal').forEach(el => observer.observe(el));

// =======================
// Language init + banner
// =======================
const select = document.getElementById('lang-select');
if (select) {
  select.addEventListener('change', () => {
    const lang = select.value;
    setPreferredLang(lang);
    applyLang(lang);
  });
}

(function initLanguage() {
  const saved = getPreferredLang();
  if (saved) {
    applyLang(saved);
    return;
  }
  // default EN
  applyLang("en");

  // Offer PT if browser language is PT*
  const isPt = (navigator.language || navigator.userLanguage || "").toLowerCase().startsWith("pt");
  if (!isPt) return;

  const banner = document.getElementById('lang-banner');
  const yes = document.getElementById('banner-yes');
  const no = document.getElementById('banner-no');
  if (banner && yes && no) {
    banner.hidden = false;
    yes.addEventListener('click', () => {
      setPreferredLang("pt");
      applyLang("pt");
      banner.hidden = true;
    });
    no.addEventListener('click', () => {
      setPreferredLang("en");
      applyLang("en");
      banner.hidden = true;
    });
  }
})();
