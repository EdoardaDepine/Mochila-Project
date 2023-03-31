const botaoAdicionar = document.querySelector(".cadastrar");
const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  criaElemento(
    event.target.elements["nome"].value,
    event.target.elements["quantidade"].value
  );

  form.reset();
});

function criaElemento(nome, quantidade) {
  console.log(nome);
  console.log(quantidade);

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(itens));
}
