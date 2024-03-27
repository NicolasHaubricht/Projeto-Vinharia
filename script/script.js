const carrossel = document.querySelector('.carrossel');
const containerCarrossel = document.querySelector('.container-carrossel');
const imagens = document.querySelectorAll('.container-carrossel img');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');


let indiceImagemAtual = 0;

imagens.forEach((imagem, indice) => {
    if (indice !== indiceImagemAtual) {
        imagem.style.display = 'none';
    }
});

function mostrarProximaImagem() {
    imagens[indiceImagemAtual].style.display = 'none';
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length;
    imagens[indiceImagemAtual].style.display = 'block';
}

function mostrarImagemAnterior() {
    imagens[indiceImagemAtual].style.display = 'none';
    indiceImagemAtual = (indiceImagemAtual - 1 + imagens.length) % imagens.length;
    imagens[indiceImagemAtual].style.display = 'block';
}

btnProximo.addEventListener('click', mostrarProximaImagem);
btnAnterior.addEventListener('click', mostrarImagemAnterior);