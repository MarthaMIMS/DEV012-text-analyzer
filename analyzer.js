
const analyzer = {
  getWordCount: (text) => {
    const words = text.split(' ');
    let count = 0;
    const isnumero = /\d+$/;
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i].trim();
      if (!isnumero.test(palabra) && palabra !== '') {
        count++
      }

    }
    return count;
    // Devolver el recuento de palabras
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const character = text.length;
    return character;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[.,#!$%&;:{}=\-_`~()/¡!¿? ]/g, '').length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const words = text.split(/\s+/).filter(word => {
      // Filtra las palabras vacías, números y palabras que contienen signos de puntuación
      return word.trim() !== '' && !/\d+/.test(word) && !/[(){}[\]<>]/.test(word);
    });

    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
      const palabra = words[i].trim();
      totalLength += palabra.length;
    }

    // Calcula el promedio dividiendo la longitud total entre la cantidad de palabras válidas
    const promedio = words.length > 0 ? totalLength / words.length : 0;

    return parseFloat(promedio.toFixed(2));
    //  }

    // const espacio=text.split(' ');
    // const character = text.replace(/[.,#!$%&;:{}=\-_`~()/¡!¿?0-9 ]+/g, '').trim();
    // const words = character.split(' ').filter(word => word !== '');
    // let promedio = 0;
    //if (words.length===0 ) {
    //  promedio=0;
    //  }
    //  else{
    //  promedio = character.length / espacio.length;

    // }
    // return promedio;
  },
  getNumberCount: (text) => {
    const words = text.split(" "); // Divide el texto en palabras por espacios en blanco
    let palabranum = 0;

    for (let i = 0; i < words.length; i++) {
      const palabra = words[i].trim(); // Elimina espacios en blanco alrededor de la palabra
      //let conversion =parseFloat(palabra, 10);

      if (/^[0-9]+(\.[0-9]*)?\.?$/.test(palabra)) {
        palabranum++;
      }
    }

    return palabranum;
  },
  //const words= text.split(' ');
  // let palabranum=0;
  // for (let i=0; i<words.length; i++) {
  // const palabra =words[i];
  //   let conversion =parseFloat(palabra, 10);
  //  if (!isNaN(conversion)) {
  //palabranum++;
  // }
  // }
  // return palabranum;
  //},
  getNumberSum: (text) => {
    const words = text.split(' ');
    let total = 0;
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      if (/^[0-9]+(\.[0-9]*)?\.?$/.test(palabra)) {
        total = total + parseFloat(palabra);
      }
    }
    return total;
  }
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
};
export default analyzer;
