//Código do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [7, 5.5, 4.7, 4.0, 8, 6.5];
let comprimentoCarro = 50;
let alturaCarro = 40


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}


function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
     if (passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros) {
  return xCarros < -43;
}
