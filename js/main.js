const form = document.querySelector('.adicionar');
const lista = document.querySelector('.lista');
const itens = [];

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    if(nome.value != "" && quantidade.value != ""){
        criaElemento(nome.value, quantidade.value);

        nome.value = "";
        quantidade.value = "";

    }
    
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual); 

    localStorage.setItem('itens', JSON.stringify(itens))

}