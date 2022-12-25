const form = document.querySelector('.adicionar');
const lista = document.querySelector('.lista');

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

function criaElemento(nome, qunatidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = qunatidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

}