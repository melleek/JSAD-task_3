function upperCase(str) {
  return str.toUpperCase();
}
console.log(upperCase("salom"));

function lowerCase(str) {
  return str.toLowerCase();
}
console.log(lowerCase("SALOM"));

function replace(str) {
  return str.replace("Hello", "Salom");
}
console.log(replace("Hello World!"));

function trim(str) {
  return str.trim();
}
console.log(trim("    salom world!      "));

function split(str) {
  return str.split(" ");
}
console.log(splitWorld("Salom means Hello"));


// upperCase - верхний регистр 
// lowerCase - нижний регистр
// replace - заменяет слова, буквы и.т.д
// trim - удаляет пробел в начале и в конце 
// split - разбивает строки на массив подстрок 