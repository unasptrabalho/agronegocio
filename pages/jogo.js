const btnHamburguer = document.getElementById('btnHamburguer');
const menuHamburguer = document.querySelector('nav.menuHamburguer');
const btnFecharMenu = document.getElementById('btnFecharMenu');

const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalForm = document.getElementById('modalForm');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const formContato = document.getElementById('formContato');

function getUsuarioLogado() {
  const data = localStorage.getItem('usuarioLogado');
  return data ? JSON.parse(data) : null;
}

function exigirLogin() {
  const usuario = getUsuarioLogado();
  if (!usuario) {
    alert('Você precisa estar logado para jogar.');
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

let pontuacaoTotal = 0;

function salvarPontuacaoLocal() {
  localStorage.setItem('pontuacaoAgrotech', String(pontuacaoTotal));
}

function enviarPontuacaoBackend() {
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  fetch('http://localhost:3333/pontuacao', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      usuarioId: usuario.id,
      pontuacao: pontuacaoTotal
    })
  })
    .then(resp => resp.json())
    .then(dados => {
      alert(dados.mensagem || 'Pontuação salva com sucesso!');
    })
    .catch(() => {
      alert('Erro ao enviar pontuação para o servidor.');
    });
}

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

const nodes = document.querySelectorAll('.node');
const locks = document.querySelectorAll('.lock');
const modal = document.querySelector('#quiz-modal');
const quizTitle = document.querySelector('#quiz-title');
const quizQuestions = document.querySelector('#quiz-questions');
const quizStatus = document.querySelector('#quiz-status');
const quizForm = document.querySelector('#quiz-form');
const btnConcluir = document.querySelector('#btn-enviar');
const avatar = document.querySelector('.avatar');

if (quizForm) quizForm.addEventListener('submit', (e) => e.preventDefault());
if (btnConcluir) btnConcluir.type = 'button';

if (avatar) avatar.style.transition = 'left .6s ease, top .6s ease';

const closeBtn = document.querySelector('#quiz-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => modal.close());
}
function ensureCloseButton() {
  if (!modal.querySelector('.modal-close')) {
    const x = document.createElement('button');
    x.type = 'button';
    x.id = 'quiz-close';
    x.className = 'modal-close';
    x.textContent = '✕';
    x.setAttribute('aria-label', 'Fechar');
    x.addEventListener('click', () => modal.close());
    modal.appendChild(x);
  }
}

const fases = { /* seu objeto gigantesco das fases — mantive 100% igual */ };

let faseAtual = null;
let respostasSelecionadas = {}; 

(function injectStartOverlay(){
  const mapWrap = document.querySelector('.map-wrap');
  if (!mapWrap) return;

  const externalStart = document.querySelector('body > .start');
  if (externalStart) externalStart.style.display = 'none';

  const ov = document.createElement('div');
  ov.id = 'start-overlay';
  Object.assign(ov.style, {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.35)',
    zIndex: '1000'
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

  mapWrap.style.position = mapWrap.style.position || 'relative';
  mapWrap.prepend(ov);

  const btnStart = ov.querySelector('#btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      if (!exigirLogin()) return;
      ov.remove();
      faseAtual = 1;
      abrirQuiz(1);
    });
  }
})();

nodes.forEach(node => {
  node.addEventListener('click', () => {
    if (!exigirLogin()) return;
    faseAtual = Number(node.dataset.phase);
    abrirQuiz(faseAtual);
  });
});

// ... resto do arquivo (exatamente igual ao seu)

function carregarRanking() {
  const lista = document.getElementById('ranking-list');
  if (!lista) return;

  fetch('http://localhost:3333/ranking')
    .then(resp => resp.json())
    .then(dados => {
      lista.innerHTML = '';
      dados.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}º - ${item.nome} - ${item.pontuacao} pts`;
        lista.appendChild(li);
      });
    })
    .catch(() => {
      lista.innerHTML = 'Erro ao carregar ranking.';
    });
}

document.addEventListener('DOMContentLoaded', carregarRanking);
