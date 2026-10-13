// ===== LISTA DE PROJETOS =====
// Para adicionar um projeto novo, copie um bloco { ... } e mude os dados.
// categoria precisa ser: "jogos", "lojas" ou "pratica"
// Se não tiver link, deixe online ou codigo como "" (vazio)
var projetos = [
  {
    nome: "A.D.A.C.H.I Archive",
    categoria: "jogos",
    tipo: "Experiência interativa de enigmas",
    descricao: "Um jogo de enigmas, criptografia e investigação em que a própria interface faz parte do mistério. As fases avançam por chaves, e as pistas estão no texto, na estrutura e no código.",
    destaques: [
      "Introdução animada e interface bilíngue (PT/EN)",
      "Progressão por fases, cada uma liberada pela anterior",
      "Desafios que misturam códigos, referências históricas, matemática e criptografia"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    online: "https://paullo-marccos.github.io/adachi-archive/",
    codigo: "https://github.com/Paullo-Marccos/adachi-archive"
  },
  {
    nome: "A.D.A.C.H.I Registros",
    categoria: "jogos",
    tipo: "Diário narrativo interativo",
    descricao: "Acervo de histórias e registros ocultos que expande o universo do Archive. O visitante abre entradas, lê fragmentos e encontra um fórum de comentários corrompidos.",
    destaques: [
      "Sequência de boot com efeito de digitação e glitch no título",
      "Trilha ambiente gerada em tempo real com Web Audio API, sem arquivo de áudio",
      "Fundo animado em canvas, entradas acessíveis por teclado e suporte a prefers-reduced-motion"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Canvas"],
    online: "https://paullo-marccos.github.io/adachi-registros/",
    codigo: "https://github.com/Paullo-Marccos/adachi-registros"
  },
  {
    nome: "Loja Yorha Manga & Figures",
    categoria: "lojas",
    tipo: "Loja temática inspirada em NieR:Automata",
    descricao: "Terminal de vendas da YoRHa para navegar e comprar action figures e mangás, com carrinho funcional e uma experiência imersiva.",
    destaques: [
      "Carrinho em painel lateral, com total em tempo real e persistência via localStorage",
      "Assistente virtual (Pod 042), carrossel infinito e boot de terminal com async/await",
      "Efeitos sonoros sintéticos, linhas de varredura CRT, cursor personalizado e um easter egg com Konami Code"
    ],
    tags: ["HTML5", "CSS Grid", "Flexbox", "JavaScript ES6+", "localStorage"],
    online: "https://paullo-marccos.github.io/Loja-Yorha-Manga-Figures/",
    codigo: "https://github.com/Paullo-Marccos/Loja-Yorha-Manga-Figures"
  },
  {
    nome: "Café & Prosa",
    categoria: "lojas",
    tipo: "Site de cafeteria",
    descricao: "Site de uma cafeteria com cardápio online: o cliente escolhe os produtos, define a quantidade e acompanha o pedido com o subtotal em tempo real.",
    destaques: [
      "Cardápio dividido em Cafés & Bebidas, Salgados & Lanches e Doces & Sobremesas, com preço, quantidade e total",
      "Painel lateral Seu pedido com subtotal e botão de finalizar",
      "Seção Especiais com carrossel de 3 imagens",
      "Seção Sobre Nós com a história e os diferenciais da cafeteria"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    online: "https://paullo-marccos.github.io/cafe-prosa-cafeteria/",
    codigo: "https://github.com/Paullo-Marccos/cafe-prosa-cafeteria",
    // link da versão melhorada (pasta dentro do repositório Projetos)
    evolucao: "cafeteriaV2/index.html"
  },
  {
    nome: "Oficina de CSS",
    categoria: "pratica",
    tipo: "Guia interativo de estudo",
    descricao: "Guia de CSS com exercícios e um laboratório para testar o código. Criado para estudar e fixar o que aprendo nas aulas.",
    destaques: [
      "Exercícios e laboratório para praticar CSS",
      "Conteúdo bilíngue (PT-BR e EN)"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    online: "",
    codigo: ""
  },
  {
    nome: "Analisador de Cartas Steam",
    categoria: "pratica",
    tipo: "Ferramenta de análise",
    descricao: "Ferramenta para analisar cartas colecionáveis da Steam: encontra jogos baratos, calcula o valor total das cartas e simula cenários de alta e de queda.",
    destaques: [
      "Cálculo do valor total das cartas de cada jogo",
      "Cenários de alta e de queda",
      "Aba de tendência"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    online: "",
    codigo: ""
  },
  {
    nome: "Projetos",
    categoria: "pratica",
    tipo: "Portal de documentação",
    descricao: "Portal que reúne registros e documentação dos meus projetos web e experiências imersivas, com foco em design, código e narrativas ocultas. Cada projeto traz descrição, motivação e stack.",
    destaques: [
      "Cards de projeto com metadados, descrição e tecnologias",
      "Tipografia com Fraunces e IBM Plex Mono, carregada pelo Google Fonts"
    ],
    tags: ["HTML5", "CSS3"],
    online: "",
    codigo: "https://github.com/Paullo-Marccos/Projetos"
  }
];

// Nomes bonitos das categorias (aparecem no card)
var nomesCategorias = {
  jogos: "Jogo",
  lojas: "Loja",
  pratica: "Prática"
};

// ===== PEGAR ELEMENTOS DA PÁGINA =====
var grade = document.getElementById("grade");
var botoesFiltro = document.querySelectorAll(".filtro");

// ===== CRIAR O HTML DE UM CARD =====
function criarCard(projeto) {
  // lista de destaques (<li>)
  var itens = "";
  for (var i = 0; i < projeto.destaques.length; i++) {
    itens = itens + "<li>" + projeto.destaques[i] + "</li>";
  }

  // tags de tecnologia
  var tags = "";
  for (var j = 0; j < projeto.tags.length; j++) {
    tags = tags + "<span>" + projeto.tags[j] + "</span>";
  }

  // links: só aparecem se existirem
  var links = "";
  if (projeto.online !== "") {
    links = links + '<a href="' + projeto.online + '" target="_blank" rel="noopener">Ver online</a>';
  }
  if (projeto.codigo !== "") {
    links = links + '<a href="' + projeto.codigo + '" target="_blank" rel="noopener">Código</a>';
  }
  // evolucao é opcional: só aparece nos projetos que têm esse campo preenchido
  if (projeto.evolucao) {
    links = links + '<a href="' + projeto.evolucao + '" target="_blank" rel="noopener">Versão 2 (estudo)</a>';
  }
  if (links === "") {
    links = '<span class="sem-link">Link em breve</span>';
  }

  // monta o card completo
  var html = "";
  html = html + '<article class="card ' + projeto.categoria + '">';
  html = html + '  <span class="etiqueta">' + nomesCategorias[projeto.categoria] + "</span>";
  html = html + "  <h3>" + projeto.nome + "</h3>";
  html = html + '  <div class="kind">' + projeto.tipo + "</div>";
  html = html + "  <p>" + projeto.descricao + "</p>";
  html = html + '  <div class="detalhes"><ul>' + itens + "</ul></div>";
  html = html + '  <div class="tags">' + tags + "</div>";
  html = html + '  <div class="rodape-card">';
  html = html + '    <div class="links">' + links + "</div>";
  html = html + '    <button class="btn-detalhes" aria-expanded="false">Ver detalhes</button>';
  html = html + "  </div>";
  html = html + "</article>";
  return html;
}

// ===== MOSTRAR OS PROJETOS DE UMA CATEGORIA =====
function mostrarProjetos(categoria) {
  var html = "";

  for (var i = 0; i < projetos.length; i++) {
    // se for "todos", mostra tudo; senão só a categoria escolhida
    if (categoria === "todos" || projetos[i].categoria === categoria) {
      html = html + criarCard(projetos[i]);
    }
  }

  if (html === "") {
    html = '<p class="aviso">Nenhum projeto nesta categoria ainda.</p>';
  }

  grade.innerHTML = html;
}

// ===== CONTAR QUANTOS PROJETOS TEM EM CADA CATEGORIA =====
function contarProjetos(categoria) {
  if (categoria === "todos") {
    return projetos.length;
  }
  var total = 0;
  for (var i = 0; i < projetos.length; i++) {
    if (projetos[i].categoria === categoria) {
      total = total + 1;
    }
  }
  return total;
}

// ===== BOTÕES DE FILTRO =====
function escolherFiltro(botao) {
  // tira o destaque de todos os botões
  for (var i = 0; i < botoesFiltro.length; i++) {
    botoesFiltro[i].classList.remove("ativo");
    botoesFiltro[i].setAttribute("aria-pressed", "false");
  }
  // destaca o botão clicado
  botao.classList.add("ativo");
  botao.setAttribute("aria-pressed", "true");

  mostrarProjetos(botao.getAttribute("data-filtro"));
}

for (var i = 0; i < botoesFiltro.length; i++) {
  var botao = botoesFiltro[i];

  // escreve o número de projetos dentro do botão
  var categoria = botao.getAttribute("data-filtro");
  botao.querySelector(".contagem").textContent = contarProjetos(categoria);

  // quando clicar, filtra
  botao.addEventListener("click", function () {
    escolherFiltro(this);
  });
}

// ===== ABRIR / FECHAR DETALHES DO CARD =====
// Um só "ouvinte" na grade, porque os cards são recriados a cada filtro
grade.addEventListener("click", function (evento) {
  var alvo = evento.target;

  if (alvo.classList.contains("btn-detalhes")) {
    var card = alvo.closest(".card");
    card.classList.toggle("aberto");

    if (card.classList.contains("aberto")) {
      alvo.textContent = "Fechar detalhes";
      alvo.setAttribute("aria-expanded", "true");
    } else {
      alvo.textContent = "Ver detalhes";
      alvo.setAttribute("aria-expanded", "false");
    }
  }
});

// ===== COMEÇAR MOSTRANDO TODOS =====
mostrarProjetos("todos");

// ===== E-MAIL DE CONTATO =====
// O e-mail fica separado em partes para não aparecer inteiro no HTML.
// Isso ajuda a evitar robôs de spam que procuram endereços nas páginas.
function montarEmail() {
  var usuario = "paullo.marccos0401";
  var dominio = "gmail.com";
  var endereco = usuario + "@" + dominio;

  var botao = document.getElementById("botao-email");
  botao.href = "mailto:" + endereco;   // ao clicar, abre o programa de e-mail
  botao.textContent = endereco;        // mostra o endereço para a pessoa poder copiar
}

montarEmail();