const tabela = document.querySelector("#lista");

tabela.addEventListener("dblclick", function (event) {
  event.target.classList.add("transicaoExclusao");

  setTimeout(function () {
    event.target.remove();
  }, 500);

  localStorage.removeItem(event.target.remove());
});
