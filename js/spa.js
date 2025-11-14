console.log("SPA.js carregado");

window.navegar = function (pagina) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = templates[pagina] || "<h2>Página não encontrada</h2>";
};

// Carrega a página inicial automaticamente
window.addEventListener("load", () => navegar("inicio"));

