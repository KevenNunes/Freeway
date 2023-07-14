function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//tela de visualização dos itens
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


