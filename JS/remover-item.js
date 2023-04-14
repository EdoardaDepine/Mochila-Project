const tabela = document.querySelector("#lista");
const lis = document.querySelectorAll(".item");

tabela.addEventListener("dblclick", function (event) {
  event.target.classList.add("transicaoExclusao");
  console.log(event.target);

  setTimeout(function () {
    event.target.remove();
  }, 500);

  const itens = localStorage.getItem("itens");
});
