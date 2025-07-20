const imagens = [
    {
        src: "./Imagens/Show.JPG",
        titulo: "Nosso primeiro show",
        texto: "./Textos/Texto_show.txt"
    },
    {
        src: "./Imagens/Stich.jpg",
        titulo: "Presente inesquecível",
        texto: "./Textos/Texto_stich.txt"
    },
    {
        src: "./Imagens/Experiência.jpg",
        titulo: "Carregando o sofá pela escada",
        texto: "./Textos/Texto_sofa.txt"
    }
];

let indiceAtual = 0;

function atualizarGaleria() {
    const imagemAtual = imagens[indiceAtual];

    document.getElementById("galeria-imagem").src = imagemAtual.src;
    document.getElementById("galeria-titulo").textContent = imagemAtual.titulo;


    fetch(imagemAtual.texto)
        .then(resposta => {
            if (!resposta.ok) throw new Error("Erro ao carregar o texto");
            return resposta.text();
        })
        .then(texto => {
            document.getElementById("galeria-texto").textContent = texto;
        })
        .catch(erro => {
            document.getElementById("galeria-texto").textContent = "Texto indisponível.";
            console.error("Erro:", erro);
        });
}

function MudarImagem(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    atualizarGaleria();
}


window.addEventListener('load', atualizarGaleria);

