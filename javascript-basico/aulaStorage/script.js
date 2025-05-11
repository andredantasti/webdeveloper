//localStorage.setItem("nome", "João");

let n = localStorage.getItem("nome");
console.log(n);

localStorage.removeItem("nome");

onload = function(){
    let nome = localStorage.getItem("nome");
    let h3 = document.getElementById("nome");
  console.log(valor);

  h3.innerHTML = nome;
}

function atualizar(element) {
  let valor = element.value;
  console.log(valor);

  let h2 = document.getElementById("nome");
  console.log(h2);

  h2.innerHTML = valor;

    localStorage.setItem("nome", valor);

}


