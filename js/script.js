// PLUGIN SIMPLE-ANIME
if (window.SimpleAnime) {
  new SimpleAnime();
}

// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITEMS DO ORÇAMENTO
const paramentro = new URLSearchParams(location.search);
paramentro.forEach((paramentro) => {
  const elemento = document.querySelector("#" + paramentro);
  if (elemento) {
    elemento.checked = true;
  }
});

// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const perguntas = e.currentTarget;
    const controls = perguntas.getAttribute("aria-controls");
    const ddElement = document.querySelector("#" + controls);
    ddElement.classList.toggle("ativa");
    if (ddElement.classList.contains("ativa")) {
      perguntas.ariaExpanded = true;
    } else {
      perguntas.ariaExpanded = false;
    }
  });
});

// GALERIA DE BICICLETAS

const galeria = document.querySelectorAll(".bicicletas-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", (e) => {
    const img = e.currentTarget;
    const media = matchMedia("(min-width:1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  });
});
