
function h1click(){
    let h2 = document.getElementsByTagName("h2");
    console.log(h2);

    h2[0].style.color = "red";
}

function changeH1(){
    let input = document.getElementById("texto");
    let h1 = document. getElementsByTagName("h1")[0];
    console.log(h1)
    h1.innerText = input.value;
}

function hideH1(){
    let texto = document.getElementsByTagName("div")[0];
    console.log(texto)
     texto.style.backgroundColor = "red";
   
}

function corInicial(){
    let texto = document.getElementsByTagName("div")[0];

    texto.style.backgroundColor = "pink"
}
