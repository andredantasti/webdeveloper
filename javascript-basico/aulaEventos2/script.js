
let t = document.getElementById("titulo");
console.log(t);

//t.onclick = mudarTexto;

t.addEventListener("mouseover", mudarTexto)

t.addEventListener("mouseout", outroTexto)

function mudarTexto(){
    t.innerHTML = "Mudança de texto";
}

function outroTexto(){
    t.innerHTML = "Aula Eventos DOM JS"
}