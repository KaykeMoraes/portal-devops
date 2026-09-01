const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");
const inputNome = document.querySelector("#nome");

botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({ behavior: "smooth" });
});

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();
  
  const nome = inputNome.value.trim();

  if (nome === "") {
    resposta.style.color = "red";
    resposta.textContent = "Por favor, preencha o seu nome antes de enviar.";
    inputNome.focus();
    return;
  }

  resposta.style.color = ""; // Retorna à cor padrão
  resposta.textContent = `Obrigado pelo contato, ${nome}!`;
  formContato.reset();
});
