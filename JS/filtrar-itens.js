const filtrarItens = document.querySelector("#filtrar-itens");

filtrarItens.addEventListener("input", function () {
  const itensLista = document.querySelectorAll(".item");

  if (this.value.length > 0) {
    for (let i = 0; i < itensLista.length; i++) {
      const item = itensLista[i];
      const nomeItem = item.textContent;

      const expressao = new RegExp(this.value, "i");

      if (!expressao.test(nomeItem)) {
        item.classList.add("invisivel");
      } else {
        item.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; 0 < itensLista.length; i++) {
      const item = itensLista[i];
      item.classList.remove("invisivel");
    }
  }
});
