var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// function increment() {
//   currentNumber = currentNumber + 1;
//   currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//   currentNumber = currentNumber - 1;
//   currentNumberWrapper.innerHTML = currentNumber;
// }


//fazer funcionar o mesmo mecanismo porém usando addEvenListener e mudar a cor do texto para vermelho caso o contador esteja negativo

var textoContador = document.getElementById("currentNumber");

var adiciona = document.getElementById("botaoSoma").addEventListener("click", function() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber < 0) {
    textoContador.style.color = "red"
  } else {
    textoContador.style.color = "gray"
  }

})

var diminui = document.getElementById("botaoSubtrai").addEventListener("click", function() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber < 0) {
    textoContador.style.color = "red"
  } else {
    textoContador.style.color = "gray"
  }
  
})