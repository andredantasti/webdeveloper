
let myButton = document.querySelector("button");

let myHeanding = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else
    localStorage.setItem("name", myName);
    myHeanding.textContent = `Mozilla is cool, ${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeanding.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

