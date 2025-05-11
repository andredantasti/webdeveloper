
let pessoa = {
    nome: "Andre Alexandre",
    nota: 9.5
}

console.log(pessoa);

let outraPessoa = JSON.stringify(pessoa);

console.log(outraPessoa);

let objetoOutraPessoa = JSON.parse(outraPessoa);
console.log(objetoOutraPessoa);