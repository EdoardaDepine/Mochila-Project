const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

window.onload = createItemByLocalStorage();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    const item = {
        nome: nome.value,
        quantidade: quantidade.value,
    };
    criaElemento(item);

    setItemLocalStorage(item)

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function getItemLocalStorage() {
    return JSON.parse(localStorage.getItem("item")) || [];
}

function setItemLocalStorage(item) {
    if (localStorage.hasOwnProperty("item")) {
        return localStorage.setItem("item", JSON.stringify([...getItemLocalStorage(), item]))
    } else {
        localStorage.setItem("item", JSON.stringify([item]))
    }
}

function createItemByLocalStorage() {
    const itensLocalStorae = getItemLocalStorage();
    itensLocalStorae.map((item) => criaElemento(item))
}