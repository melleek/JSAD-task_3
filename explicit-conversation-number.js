function numberValue(num) {
    return Number(num)
}
console.log(numberValue("454"));
console.log(numberValue("azt"));
console.log(numberValue(null));
console.log(numberValue(0));
console.log(numberValue(false));
console.log(numberValue(""));
console.log(numberValue(true));
console.log(numberValue(undefined));