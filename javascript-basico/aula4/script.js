
let todosParagrafos = document.getElementsByTagName("p");

let paragrafo1 = document.getElementById("p1");
console.log(paragrafo1);

paragrafo1.innerHTML = "Novo Paragrafo";

paragrafo1.innerHTML = paragrafo1.innerHTML + " <p>Adicionando Paragrafo</p>";

console.log(todosParagrafos);

let paragrafo2 = document.querySelector(".paragrafo2");
console.log(paragrafo2);

paragrafo2.innerText = "Alterando conteudo!"

let paragrafo3 = document.querySelector(".paragrafo3");

paragrafo3.innerHTML = paragrafo3.innerHTML + "<h2> My Egss Bacon</h2>";

