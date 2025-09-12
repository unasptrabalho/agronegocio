
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

btnFecharMenu.addEventListener('click', voltarPaginaInicial);

btnAbrirModal.addEventListener('click', () => {
  menuHamburguer.classList.remove('aberto');
  btnHamburguer.style.display = 'block';
  modalForm.showModal();
});

document.querySelectorAll('dialog .fechar').forEach(btn => {
  btn.addEventListener('click', voltarPaginaInicial);
});

formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  modalForm.close();
  modalConfirmacao.showModal();
  formContato.reset();
});
