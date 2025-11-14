document.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  e.target.reset();
});
