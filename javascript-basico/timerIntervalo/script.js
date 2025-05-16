let btnIniciar = document.getElementById("iniciar");
console.log(btnIniciar)

let btnParar = document.getElementById("parar");
console.log(btnParar);

let h = document.querySelector("h1");
console.log(h);

var numero = 0;

var interval;

function atualizarTexto(){
   h.innerHTML += " " +  numero;
   numero++;
}

btnIniciar.addEventListener("click", function(){
    
   // setTimeout(mudarCor, 3000);

    interval = setTimeout(atualizarTexto, 3000);
})

btnParar.addEventListener("click", function(){
    clearInterval(interval);
})
