const respostadoHtml = document.querySelector("#resposta")
const perguntasdoHtml = document.querySelector("#pergunta")
const botaoperguntar = document.querySelector("#botao")
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

function fazerPergunta(){
if(perguntasdoHtml.value == ""){
alert("Digite sua pergunta!")
return
}
botaoperguntar.setAttribute("disabled", true)
const pergunta = "<div>" + "🤔: "+ perguntasdoHtml.value + "</div>"
//GERAR NUMERO ALEATORIO
const numeroaleatorio = Math.floor(Math.random() * respostas.length)

respostadoHtml.innerHTML =pergunta + "🔮: " + respostas[numeroaleatorio]

respostadoHtml.style.opacity = 1

setTimeout(function() {
respostadoHtml.style.opacity = 0
botaoperguntar.removeAttribute("disabled")
}, 3000)
}
