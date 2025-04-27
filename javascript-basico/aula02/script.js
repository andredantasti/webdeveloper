
// // const listItems = document.querySelectorAll("li");
// // console.log(listItems);

// // function toggleDone(e){
// //     if(!e.target.className){
// //         e.target.className = "done";
// //     } else {
// //         e.target.className = "";
// //     }
// // }

// listItems.forEach(item => item.addEventListener("click", toggleDone));


const div = document.querySelector("img");

div.addEventListener("click", function(){
    const mySrc = div.getAttribute("src");
    if(mySrc === "images/imagem1.png"){
        div.setAttribute("src", "images/imagem2.png");
    } else if(mySrc === "images/imagem2.png"){
        div.setAttribute("src", "images/imagem3.png");
    } else {
        div.setAttribute("src", "images/imagem1.png");
    };
});