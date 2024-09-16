function booleanValue(num) {
    return Boolean(num);
}
console.log(booleanValue([]));
console.log(booleanValue({}));
console.log(booleanValue(null));
console.log(booleanValue(!!null));
console.log(booleanValue(NaN));
console.log(booleanValue(!!NaN));
console.log(booleanValue("Salom"));
console.log(booleanValue(!!undefined));
console.log(booleanValue(undefined));
console.log(booleanValue(!!"Salom"));
console.log(booleanValue(!!1));
console.log(booleanValue(1));
console.log(booleanValue(0));
console.log(booleanValue(!!0));



