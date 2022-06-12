const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#pergunta");
const botaoPerguntar = document.querySelector("#buttonPerguntar");
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function fazerPergunta() {
  if(inputPergunta.value == ""){
    alert("Digite uma pergunta");
    return;
  }
  
  botaoPerguntar.setAttribute("disabled", true);

  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
  
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  elementoResposta.style.opacity = 1;

  // sumir resposta depois de 3 segundos
  setTimeout(function() {
    inputPergunta.value = "";
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute("disabled");
  }, 3000);

}