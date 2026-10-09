(() => {
  "use strict";

  if (typeof siteContent === "undefined") return;

  const content = siteContent;
  const isFilled = (value) => typeof value === "string" && value.trim() !== "" && value.trim().toUpperCase() !== "EDITAR";
  const getContent = (path) => path.split(".").reduce((value, key) => value?.[key], content);

  function getAge(birthDate) {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(birthDate || "");
    if (!match) return "EDITAR";
    const [, day, month, year] = match.map(Number);
    const birthday = new Date(year, month - 1, day);
    if (birthday.getFullYear() !== year || birthday.getMonth() !== month - 1 || birthday.getDate() !== day) return "EDITAR";
    const now = new Date();
    let age = now.getFullYear() - year;
    if (now.getMonth() < month - 1 || (now.getMonth() === month - 1 && now.getDate() < day)) age--;
    return age >= 0 ? `${age} anos` : "EDITAR";
  }

  const person = content.sobreMim;
  const tokens = {
    nomes: [content.destinatarios.mae, content.destinatarios.pai].filter(isFilled).map((name) => name.trim()).join(" e ") || "sejam bem-vindos",
    nomeCompleto: person.nomeCompleto,
    idade: isFilled(person.idade) ? person.idade : getAge(person.nascimento),
    curso: person.curso,
    cidadeNascimento: person.cidadeNascimento,
    cidadeAtual: person.cidadeAtual,
    escola: person.escola,
    pais: [content.familia.pai.nome, content.familia.mae.nome].filter(isFilled).join(" e "),
  };

  function formatText(value) {
    return String(value ?? "")
      .replace(/\[([a-zA-Z]+)\]/g, (match, key) => tokens[key] ?? match)
      .replace(/[ \t]+([.,;!?])/g, "$1")
      .trim();
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = formatText(text);
    return node;
  }

  document.title = content.site.titulo;
  document.querySelector('meta[name="description"]').content = content.site.descricao;

  document.querySelectorAll("[data-text]").forEach((node) => {
    const value = getContent(node.dataset.text);
    if (value !== undefined) node.textContent = formatText(value);
  });

  document.querySelectorAll("[data-paragraphs]").forEach((node) => {
    const paragraphs = formatText(getContent(node.dataset.paragraphs)).split(/\n\s*\n/).filter(Boolean);
    node.replaceChildren(...paragraphs.map((text) => element("p", "", text)));
  });

  const details = document.getElementById("personal-details");
  [
    [person.cidadeNascimento, person.detalhes.origem],
    [person.cidadeAtual, person.detalhes.cidade],
  ].forEach(([value, text]) => {
    if (isFilled(value)) details.append(element("p", "", text));
  });

  document.querySelectorAll("[data-photo]").forEach((frame) => {
    const photo = getContent(frame.dataset.photo);
    const img = frame.querySelector("img");
    const placeholder = frame.querySelector(".photo-placeholder");
    img.alt = photo.alt;
    if (!isFilled(photo.caminho)) return;
    img.style.objectPosition = photo.posicao || "center";
    img.addEventListener("load", () => {
      img.hidden = false;
      placeholder.hidden = true;
    });
    img.addEventListener("error", () => {
      img.hidden = true;
      placeholder.hidden = false;
    });
    // A imagem precisa ocupar espaço para o carregamento lazy ser iniciado.
    img.hidden = false;
    img.src = photo.caminho;
  });

  const projects = document.getElementById("projects");
  content.projetos.forEach((project, index) => {
    const article = element("article", "project");
    const heading = element("div", "project-heading");
    const number = element("span", "project-number", String(index + 1).padStart(2, "0"));
    number.setAttribute("aria-hidden", "true");
    const title = element("div");
    title.append(element("h3", "", project.nome));
    if (isFilled(project.categoria)) title.append(element("p", "project-category", project.categoria));
    heading.append(number, title);
    const copy = element("div");
    copy.append(element("p", "project-description", project.descricao));
    // Somente URLs web completas. EDITAR nunca vira um link sem destino.
    if (isFilled(project.link)) {
      try {
        const url = new URL(project.link);
        if (["https:", "http:"].includes(url.protocol)) {
          const link = element("a", "text-link", content.interface.verProjeto);
          link.href = url.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute("aria-label", `${content.interface.verProjeto}: ${project.nome} (abre em nova aba)`);
          const arrow = element("span", "", "↗");
          arrow.setAttribute("aria-hidden", "true");
          link.append(arrow);
          copy.append(link);
        }
      } catch {
        // Um endereço incompleto permanece sem link até ser corrigido.
      }
    }
    article.append(heading, copy);
    projects.append(article);
  });

  const timeline = document.getElementById("timeline");
  content.futuro.forEach((step) => {
    const item = element("li");
    item.append(element("p", "eyebrow", step.periodo), element("h3", "", step.titulo), element("p", "timeline-description", step.descricao));
    timeline.append(item);
  });

  const commitments = document.getElementById("commitments");
  content.compromissos.forEach((commitment, index) => {
    const item = element("li");
    const number = element("span", "commitment-number", String(index + 1).padStart(2, "0"));
    number.setAttribute("aria-hidden", "true");
    const copy = element("div");
    copy.append(element("h3", "", commitment.titulo), element("p", "", commitment.descricao));
    item.append(number, copy);
    commitments.append(item);
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("navigation");
  const menuLabel = menuButton.querySelector("[data-text]");
  const mobile = window.matchMedia("(max-width: 46rem)");
  menuButton.hidden = false;

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuLabel.textContent = content.interface.menu;
  }

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuLabel.textContent = open ? content.interface.fecharMenu : content.interface.menu;
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || !mobile.matches) return;
    closeMenu();
    // Mantém o foco na leitura, em vez de deixá-lo em um link que foi ocultado.
    const section = document.querySelector(link.hash);
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  mobile.addEventListener("change", closeMenu);

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if ("IntersectionObserver" in window && !motionPreference.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.replace("reveal-pending", "reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    document.querySelectorAll("[data-reveal]").forEach((node) => {
      node.classList.add("reveal-pending");
      observer.observe(node);
    });
    motionPreference.addEventListener("change", (event) => {
      if (!event.matches) return;
      observer.disconnect();
      document.querySelectorAll(".reveal-pending").forEach((node) => node.classList.remove("reveal-pending"));
    });
  }

  const progress = document.getElementById("reading-progress");
  const links = [...navigation.querySelectorAll("a")];
  const sections = links.map((link) => document.querySelector(link.hash));
  let scrollQueued = false;

  function updateReadingPosition() {
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = maximum > 0 ? Math.max(0, Math.min(1, window.scrollY / maximum)) : 0;
    progress.style.transform = `scaleX(${fraction})`;
    let current = -1;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollQueued = false;
  }

  function queueReadingUpdate() {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(updateReadingPosition);
  }

  window.addEventListener("scroll", queueReadingUpdate, { passive: true });
  window.addEventListener("resize", queueReadingUpdate);
  window.addEventListener("load", queueReadingUpdate);
  updateReadingPosition();
})();
