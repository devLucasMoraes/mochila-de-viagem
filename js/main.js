const form = document.querySelector('.adicionar');
const lista = document.querySelector('.lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
    
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