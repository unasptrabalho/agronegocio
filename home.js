// --------------------------
// MENU HAMBÚRGUER E MODAIS
// --------------------------
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

// --------------------------
// LOGIN
// --------------------------
const btnLogin = document.getElementById("btnLogin");

if (btnLogin) {
  btnLogin.addEventListener("click", login);
}

async function login(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email === "" || password === "") {
    alert("Preencha todas as informações!");
    return;
  }

  const user = { email, password };

  const response = await fetch("http://localhost:3333/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user })
  }).then(res => res.json());

  if (response.message) {
    alert(response.message);
    window.location.reload();
    return;
  }

  const { id, name } = response;
  sessionStorage.setItem("user", JSON.stringify({ id, name }));
  
  alert("Login realizado com sucesso");
  window.location.href = "../index.html";
}

// --------------------------
// CADASTRO
// --------------------------
const btnCadastrar = document.getElementById("btnCadastrar");

if (btnCadastrar) {
  btnCadastrar.addEventListener("click", sendUser);
}

async function sendUser(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const age = document.querySelector("#age").value;

  if (name === "" || email === "" || password === "" || age === "") {
    alert("Preencha todas as informações!");
    return;
  }

  const user = { name, email, age, password };

  const response = await fetch("http://localhost:3333/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user })
  }).then(res => res.json());

  alert(response.message);
  window.location.href = "../index.html";
}
