let amigos = [];

let input_amigo = document.getElementById("amigo");
let lista_de_amigos = document.getElementById("listaAmigos");

function adicionarAmigo() {
    let nome = input_amigo.value;

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);

        let elemento_lista = document.createElement("li");
        elemento_lista.textContent = nome;
        lista_de_amigos.appendChild(elemento_lista);

        input_amigo.value = "";
    } else 
        alert("Nome inválido ou já adicionado!");
    
}
