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
    } 
    else 
        alert("Nome inválido ou já adicionado!");
    
}

let resultado_sorteio = document.getElementById("resultado");

function sortearAmigo(){
    const indice_sorteado = Math.floor(Math.random() * amigos.length);
    
    let amigo_sorteado = document.createElement("li");
    
    amigo_sorteado.textContent = `O amigo sorteado é ${amigos[indice_sorteado]}`;

    resultado_sorteio.appendChild(amigo_sorteado);

    lista_de_amigos.replaceChildren();
}
