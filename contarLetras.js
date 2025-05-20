
function contarLetras(palabra) {
  const cantidad = palabra.length;
  return cantidad;
}


const palabra = process.argv[2]; 

if (!palabra) {
  console.log("Por favor, ingresa una palabra.");
} else {
  const resultado = contarLetras(palabra);
  console.log(`La palabra "${palabra}" tiene ${resultado} letras.`);
}
