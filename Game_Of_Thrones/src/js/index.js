const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
botoesCarrosel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");

    const ImagemAtiva = document.querySelector(".ativa.imagem");
    desativarImagem(ImagemAtiva);
    ativarImagem(indice);

    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");

    informacoes[indice].classList.add("ativa");
  });
});

function ativarImagem(indice) {
    imagens[indice].classList.add("ativa");
}

function desativarImagem(ImagemAtiva) {
    ImagemAtiva.classList.remove("ativa");
}

