
const btnHamburguer = document.getElementById('btnHamburguer');
const menuHamburguer = document.querySelector('nav.menuHamburguer');
const btnFecharMenu = document.getElementById('btnFecharMenu');

const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalForm = document.getElementById('modalForm');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const formContato = document.getElementById('formContato');


function voltarPaginaInicial() {
  menuHamburguer.classList.remove('aberto'); 
  btnHamburguer.style.display = 'block'; 
  if (modalForm.open) modalForm.close(); 
  if (modalConfirmacao.open) modalConfirmacao.close();
}


btnHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.add('aberto');
  btnHamburguer.style.display = 'none';
});

const nodes = document.querySelectorAll(".node");
const locks = document.querySelectorAll(".lock");
const modal = document.querySelector("#quiz-modal");
const quizTitle = document.querySelector("#quiz-title");
const quizQuestions = document.querySelector("#quiz-questions");
const quizStatus = document.querySelector("#quiz-status");
const quizForm = document.querySelector("#quiz-form");
const btnConcluir = document.querySelector("#btn-enviar");
const avatar = document.querySelector(".avatar");

if (quizForm) quizForm.addEventListener("submit", (e) => e.preventDefault());
if (btnConcluir) btnConcluir.type = "button";


if (avatar) avatar.style.transition = "left .6s ease, top .6s ease";


const closeBtn = document.querySelector("#quiz-close");
if (closeBtn) {
  closeBtn.addEventListener("click", () => modal.close());
}
function ensureCloseButton() {
  if (!modal.querySelector(".modal-close")) {
    const x = document.createElement("button");
    x.type = "button";
    x.id = "quiz-close";
    x.className = "modal-close";
    x.textContent = "✕";
    x.setAttribute("aria-label", "Fechar");
    x.addEventListener("click", () => modal.close());
    modal.appendChild(x);
  }
}


const fases = {
  1: [
    { pergunta: "Qual é o principal cereal cultivado no Brasil?", opcoes: ["Arroz", "Milho", "Trigo"], correta: "Milho" },
    { pergunta: "A soja é um cultivo de qual estação?", opcoes: ["Verão", "Inverno", "Primavera"], correta: "Verão" },
    { pergunta: "Qual animal é criado em granjas?", opcoes: ["Porco", "Cavalo", "Boi"], correta: "Porco" },
  ],
  2: [
    { pergunta: "O café é típico de qual região do Brasil?", opcoes: ["Sul", "Sudeste", "Norte"], correta: "Sudeste" },
    { pergunta: "Qual fruta é conhecida como 'ouro verde'?", opcoes: ["Banana", "Abacate", "Uva"], correta: "Abacate" },
    { pergunta: "A cana-de-açúcar é usada para produzir?", opcoes: ["Açúcar e etanol", "Trigo e pão", "Leite e queijo"], correta: "Açúcar e etanol" },
  ],
  3: [
    { pergunta: "Qual é um dos objetivos da agricultura sustentável?", opcoes: ["Reduzir impactos ambientais", "Aumentar os preços dos produtos", "Eliminar o uso de tecnologias", "Reduzir a produção"], correta: "Reduzir impactos ambientais" },
    { pergunta: "Qual prática ajuda a reduzir emissão de gases do efeito estufa?", opcoes: ["Queima de resíduos", "Uso de fertilizantes químicos", "Digestão anaeróbica com dejetos animais", "Plantio de monoculturas"], correta: "Digestão anaeróbica com dejetos animais" },
    { pergunta: "O que o uso de sistemas de captação de chuva permite?", opcoes: ["Irrigação sustentável", "Aumento de fertilizantes", "Redução da produção", "Aumento de pragas"], correta: "Irrigação sustentável" },
  ],
  4: [
    { pergunta: "Qual suplemento pode reduzir a produção de metano por bovinos?", opcoes: ["Sal mineral", "Suplementos alimentares específicos", "Água potável", "Ração tradicional"], correta: "Suplementos alimentares específicos" },
    { pergunta: "O que é um desafio na implementação da sustentabilidade?", opcoes: ["Falta de solo fértil", "Ausência de interesse dos produtores", "Exigências do mercado", "Proibição de exportações"], correta: "Exigências do mercado" },
    { pergunta: "Como o agro ajuda a proteger o meio ambiente?", opcoes: ["Por meio da agropecuária extensiva", "Ao reduzir o uso de adubos químicos", "Usando mais herbicidas", "Mantendo técnicas antigas"], correta: "Ao reduzir o uso de adubos químicos" },
  ],
  5: [
    { pergunta: "Qual é um problema do transporte rodoviário no Brasil?", opcoes: ["Baixa produção rural", "Pouca exportação", "Estradas mal conservadas", "Falta de veículos"], correta: "Estradas mal conservadas" },
    { pergunta: "O que o monitoramento em tempo real ajuda a melhorar?", opcoes: ["Preço de produtos", "Eficiência da logística", "Estoque de sementes", "Crescimento de plantas"], correta: "Eficiência da logística" },
    { pergunta: "Qual é o papel das ferrovias e portos no agronegócio?", opcoes: ["Armazenar fertilizantes", "Reduzir impostos", "Otimizar o escoamento da produção", "Reflorestar áreas urbanas"], correta: "Otimizar o escoamento da produção" },
  ],
  6: [
    { pergunta: "Quanto o Brasil exportou no agronegócio entre jan-mar de 2024?", opcoes: ["US$ 15,22 bilhões", "US$ 28,13 bilhões", "US$ 37,44 bilhões", "US$ 50 bilhões"], correta: "US$ 37,44 bilhões" },
    { pergunta: "Qual feira acontece em Ribeirão Preto e é uma das maiores do mundo?", opcoes: ["Agrishow", "ExpoAgro", "Fenatran", "Expointer"], correta: "Agrishow" },
    { pergunta: "A Expointer destaca principalmente:", opcoes: ["Robótica internacional", "Produção rural do sul do Brasil", "Comércio de fertilizantes", "Agricultura urbana"], correta: "Produção rural do sul do Brasil" },
  ],
  7: [
    { pergunta: "A Fenatran tem foco em:", opcoes: ["Pecuária familiar", "Transporte rodoviário de cargas", "Irrigação rural", "Vendas de sementes"], correta: "Transporte rodoviário de cargas" },
    { pergunta: "Qual empresa é a maior exportadora de carne do Brasil?", opcoes: ["Ambev", "JBS", "Natura", "Raízen"], correta: "JBS" },
    { pergunta: "Quem é conhecido por atuar na agricultura sustentável e é cofundador da Natura?", opcoes: ["Gilberto Tomazoni", "Guilherme Leal", "Ricardo Dell Aquila", "André Maggi"], correta: "Guilherme Leal" },
  ],
  8: [
    { pergunta: "O Grupo André Maggi se destaca principalmente na produção de:", opcoes: ["Soja", "Cana-de-açúcar", "Leite", "Arroz"], correta: "Soja" },
    { pergunta: "A Ambev investe na produção de:", opcoes: ["Leite e carne", "Cacau e milho", "Cevada e bebidas", "Maçã e trigo"], correta: "Cevada e bebidas" },
    { pergunta: "A Raízen é conhecida por:", opcoes: ["Exportar carne", "Plantar soja em grande escala", "Produzir etanol e exportar açúcar", "Criar gado no sul do Brasil"], correta: "Produzir etanol e exportar açúcar" },
  ],
};


let faseAtual = null;
let respostasSelecionadas = {}; 


(function injectStartOverlay(){
  const mapWrap = document.querySelector(".map-wrap");
  if (!mapWrap) return;


  const externalStart = document.querySelector("body > .start");
  if (externalStart) externalStart.style.display = "none";


  const ov = document.createElement("div");
  ov.id = "start-overlay";
  Object.assign(ov.style, {
    position: "absolute",
    inset: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.35)",
    zIndex: "1000"
  });

  
  ov.innerHTML = `
    <section class="start" style="margin:0;">
      <h2>📜 Instruções do Jogo</h2>
      <p>Bem-vindo ao Quiz da Fazenda! Mostre que você entende tudo sobre agronegócio.</p>
      <ol>
        <li>Você terá três perguntas por rodada.</li>
        <li>Escolha a alternativa correta entre as opções.</li>
        <li>A cada fase concluída, um cadeado será desbloqueado.</li>
        <li>Se passar por todas as fases, você recebe uma premiação especial!</li>
      </ol>
      <div style="margin-top:1rem;">
        <button id="btn-start" class="btn" type="button">Iniciar</button>
      </div>
    </section>
  `;

 
  mapWrap.style.position = mapWrap.style.position || "relative";
  mapWrap.prepend(ov);

  
  const btnStart = ov.querySelector("#btn-start");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      ov.remove();
      faseAtual = 1;
      abrirQuiz(1);
    });
  }
})();


nodes.forEach(node => {
  node.addEventListener("click", () => {
    faseAtual = Number(node.dataset.phase);
    abrirQuiz(faseAtual);
  });
});


function abrirQuiz(fase) {
  quizTitle.textContent = `Fase ${fase}`;
  quizQuestions.innerHTML = "";
  respostasSelecionadas = {};
  quizStatus.textContent = `0/${fases[fase].length} respondidas`;

  fases[fase].forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <h3>Questão ${index + 1}</h3>
      <p>${q.pergunta}</p>
      ${q.opcoes.map(op => `
        <button type="button" class="alt" data-index="${index}" data-resposta="${op}">${op}</button>
      `).join("")}
    `;
    quizQuestions.appendChild(div);
  });

  
  quizQuestions.querySelectorAll(".alt").forEach(btn => {
    btn.addEventListener("click", () => selecionarAlternativa(btn));
  });

  
  if (btnConcluir) {
    btnConcluir.onclick = () => concluirFase();
  }

  ensureCloseButton();
  modal.showModal();
}

function selecionarAlternativa(botao) {
  const index = Number(botao.dataset.index);

  
  const questao = botao.closest(".question");
  questao.querySelectorAll(".alt").forEach(b => {
    b.classList.remove("selecionada", "correto", "errado");
  });

 
  botao.classList.add("selecionada");


  respostasSelecionadas[index] = botao.dataset.resposta;

  quizStatus.textContent = `${Object.keys(respostasSelecionadas).length}/${fases[faseAtual].length} respondidas`;
}


function concluirFase() {
  const total = fases[faseAtual].length;
  const respondidas = Object.keys(respostasSelecionadas).length;

  if (respondidas < total) {
    alert("Responda todas as perguntas antes de concluir.");
    return;
  }

 
  quizQuestions.querySelectorAll(".alt").forEach(b => b.classList.remove("correto", "errado"));

  
  let corretas = 0;

  fases[faseAtual].forEach((q, index) => {
    const questao = quizQuestions.querySelectorAll(".question")[index];
    const resposta = respostasSelecionadas[index];

    
    questao.querySelectorAll(".alt").forEach(b => {
      const val = b.dataset.resposta;
      if (val === resposta && resposta === q.correta) {
        b.classList.add("correto");
      } else if (val === resposta && resposta !== q.correta) {
        b.classList.add("errado");
      }
     
      if (resposta !== q.correta && val === q.correta) {
        b.classList.add("correto");
      }
    });

    if (resposta === q.correta) corretas++;
  });

  quizStatus.textContent = `${corretas}/${total} corretas`;

  if (corretas === total) {
   
    desbloquearFase(faseAtual);
    moverAvatarParaFase(faseAtual + 1);
    setTimeout(() => modal.close(), 1200);
    faseAtual = Math.min(faseAtual + 1, Object.keys(fases).length);
  } else {
    
    alert("Tem respostas incorretas. Ajuste e clique em Concluir novamente.");
  }
}


function desbloquearFase(fase) {
  const lock = document.querySelector(`.lock[data-lock="${fase}"]`);
  if (lock) {
    lock.classList.remove("locked");
    lock.style.display = "none";
  }
}


function moverAvatarParaFase(faseDestino) {
  const node = document.querySelector(`.node[data-phase="${faseDestino}"]`);
  const container = document.querySelector(".map-container");
  if (!avatar || !node || !container) return;

  const nr = node.getBoundingClientRect();
  const cr = container.getBoundingClientRect();
  const cx = nr.left + nr.width / 2 - cr.left;
  const cy = nr.top + nr.height / 2 - cr.top;

  const leftPct = (cx / cr.width) * 100;
  const topPct  = (cy / cr.height) * 100;

  avatar.style.left = `${leftPct}%`;
  avatar.style.top  = `${topPct}%`;
}


window.addEventListener("resize", () => {
  if (faseAtual != null) moverAvatarParaFase(faseAtual);
});