function find(str, word) {
    return str.includes(word)
}
console.log(find("The best of the best", "mee"));

function subStr(str, start, end) {
    return str.substr(start, end);
}
console.log(subStr("something word in my language ", 4, 2))

function indexOf(str, word) {
    return str.indexOf(word)
}
console.log(indexOf("The best of the best", "e"));

function slice(str, start, end) {
    return str.slice(start, end);
}
console.log(slice("New words in my vocabulary", 4, 8));

// includes - проверяет, есть ли элемент в массиве или подстрока в строке. возвращает true or false
// subStr - возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки
// indexOf - возвращает индекс с отсчетом от нуля первого вхождения значения указанной строки в данном экземпляре.
// slice - возвращает подстроку из строки (исходная строка при этом не изменяется)