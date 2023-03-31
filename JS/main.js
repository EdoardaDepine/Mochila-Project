const botaoAdicionar = document.querySelector(".cadastrar");
const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
  criaElemento(element);
});

form.addEventListener("submit", (evento) => {
  evento.preventoDefault();

  const nome = evento.target.elements["nome"].value;
  const quantidade = evento.target.elements["quantidade"].value;

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criaElemento(itemAtual);

  itens.push(itemAtual);
  localStorage.setItem("itens", JSON.stringify(itens));

  form.reset();
});

function criaElemento(objeto) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = objeto.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += objeto.nome;

  lista.appendChild(novoItem);
}
