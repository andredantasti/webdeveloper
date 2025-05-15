
let btn = document.querySelector("button");
let titulo = document.querySelector("h1")
let container = document.querySelector("div");
let pessoas = ["André", "Maria Julia", "Sarah", "Bob", "Raquel"];
console.log(btn)
console.log(pessoas)
container.style.display = "flex";
container.style.justifyContent = "center"
btn.style.backgroundColor = "Green";
btn.style.color = "white";

btn.addEventListener("click", function(){
    let numeroPessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);
    titulo.textContent = "Número Sorteado foi: " + pessoas[numeroSorteado];
    console.log(numeroSorteado);

})

