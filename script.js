const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");
const inputNome = document.querySelector("#nome");
const botaoEnviar = formContato.querySelector("button[type='submit']") || formContato.querySelector("button");

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

  // Feedback visual de carregamento no botão
  const textoOriginal = botaoEnviar.textContent;
  botaoEnviar.disabled = true;
  botaoEnviar.textContent = "Enviando...";

  // Simula um envio assíncrono (como uma requisição de API)
  setTimeout(() => {
    resposta.style.color = ""; 
    resposta.textContent = `Obrigado pelo contato, ${nome}! Retornaremos em breve.`;
    formContato.reset();
    
    // Restaura o botão
    botaoEnviar.disabled = false;
    botaoEnviar.textContent = textoOriginal;
  }, 1000);
});
