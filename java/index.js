
var usuario = "paullo.marccos0401";
var dominio = "gmail.com";
var endereco = usuario + "@" + dominio;

var botaoEmail = document.getElementById("botao-email");
var botaoCopiar = document.getElementById("botao-copiar");
var avisoCopia = document.getElementById("aviso-copia");


botaoEmail.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + endereco;
botaoEmail.textContent = "Enviar e-mail";

// Botão "Copiar e-mail": copia o endereço e avisa na tela
botaoCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(endereco).then(function () {
    avisoCopia.textContent = "E-mail copiado: " + endereco;
  }).catch(function () {
    // se o navegador bloquear a cópia, mostra o endereço para a pessoa copiar na mão
    avisoCopia.textContent = "Meu e-mail: " + endereco;
  });
});







//FILTRO DE PROJETOS (Todos, Jogos, Lojas, Prática)
var botoesFiltro = document.querySelectorAll(".filtro");
var cards = document.querySelectorAll(".card");

// mostra só os cards da categoria escolhida ("todos" mostra tudo)
function filtrar(categoria) {
  for (var i = 0; i < cards.length; i++) {
    var daCategoria = cards[i].getAttribute("data-categoria") === categoria;
    cards[i].hidden = !(categoria === "todos" || daCategoria);
  }
}

for (var i = 0; i < botoesFiltro.length; i++) {
  var botao = botoesFiltro[i];
  var categoria = botao.getAttribute("data-filtro");

  // escreve quantos projetos tem em cada categoria
  var total = 0;
  for (var j = 0; j < cards.length; j++) {
    if (categoria === "todos" || cards[j].getAttribute("data-categoria") === categoria) {
      total = total + 1;
    }
  }
  botao.querySelector(".contagem").textContent = total;

  // ao clicar: destaca o botão e filtra os cards
  botao.addEventListener("click", function () {
    for (var k = 0; k < botoesFiltro.length; k++) {
      botoesFiltro[k].classList.remove("ativo");
      botoesFiltro[k].setAttribute("aria-pressed", "false");
    }
    this.classList.add("ativo");
    this.setAttribute("aria-pressed", "true");
    filtrar(this.getAttribute("data-filtro"));
  });
}