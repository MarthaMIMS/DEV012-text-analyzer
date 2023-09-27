import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textareabox = document.querySelector('textarea[name="user-input"]');
const contadorpalabras = document.querySelector('[data-testid="word-count"]');
const contadorcaracteres = document.querySelector('[data-testid="character-count"]');
const contadorsinEspacios = document.querySelector('[data-testid="character-no-spaces-count"]');
const contadorNumeros = document.querySelector('[data-testid="number-count"]');
const contadorSumaNumeros = document.querySelector('[data-testid="number-sum"]');
const contadorLongitudPromedio = document.querySelector('[data-testid="word-length-average"]');

//contador de palabras

textareabox.addEventListener("input", function () {
  const usuario = textareabox.value;

  const recuento = analyzer.getWordCount(usuario);
  contadorpalabras.textContent = "Recuento de palabras:" +recuento;
  /////////////////////////////////////////////////////////
  const caracteres = analyzer.getCharacterCount(usuario);
  contadorcaracteres.textContent = "Recuento de Caracteres:" +caracteres;
  ////
  const caracteresin = analyzer.getCharacterCountExcludingSpaces(usuario);
  contadorsinEspacios.textContent = "Caracteres sin espacio:" +caracteresin;
  ////////
  const sumanum = analyzer.getNumberSum(usuario);
  contadorSumaNumeros.textContent ="Suma total de números:" +sumanum;
  //console.log(sumanum);
  const totaldenum =analyzer.getNumberCount(usuario);
  contadorNumeros.textContent="Recuento de numeros:" +totaldenum;
  //console.log("no se convierte");
  const media=analyzer.getAverageWordLength(usuario);
  contadorLongitudPromedio.textContent="Longitud media de palabras:" +media;
});
//function Borrar(){
//}

//Borrar///////////////////////////////////////////////////////
const reset = document.getElementById("reset-button");
reset.addEventListener("click", function () {
  console.log(textareabox.value);
  textareabox.value = "";
  contadorpalabras.textContent = "Recuento de palabras: 0 ";
  contadorcaracteres.textContent = "Recuento de Caracteres: 0";
  contadorsinEspacios.textContent = "Caracteres sin espacio:0 ";
  contadorSumaNumeros.textContent = "Suma total de números: 0";
  contadorNumeros.textContent="Recuento de números:0 ";
  contadorLongitudPromedio.textContent="Longitud media de palabras:0 ";
}); 
