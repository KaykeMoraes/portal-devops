const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formMatricula = document.querySelector("#formMatricula");
const resposta = document.querySelector("#resposta");
const inputNome = document.querySelector("#nome");

// Botão de Tema Escuro
const botaoTema = document.querySelector("#botaoTema");
if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro"); 
  });
}

if (botaoDestaque && servicos) {
  botaoDestaque.addEventListener("click", () => {
    servicos.scrollIntoView({ behavior: "smooth" });
  });
}

if (formMatricula) {
  const botaoEnviar = formMatricula.querySelector("button[type='submit']") || formMatricula.querySelector("button");

  formMatricula.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nome = inputNome.value.trim();

    if (nome === "") {
      resposta.style.color = "red";
      resposta.textContent = "Por favor, preencha o seu nome para iniciar a matrícula.";
      inputNome.focus();
      return;
    }

    const textoOriginal = botaoEnviar.textContent;
    botaoEnviar.disabled = true;
    botaoEnviar.textContent = "Processando matrícula...";

    setTimeout(() => {
      resposta.style.color = "green";
      resposta.textContent = `Matrícula solicitada com sucesso, ${nome}! Entraremos em contato com os próximos passos.`;
      formMatricula.reset();
      
      botaoEnviar.disabled = false;
      botaoEnviar.textContent = textoOriginal;
    }, 1000);
  });
}