// первый вариант 
//max number
function maxNum(...num) {
    return Math.max(...num)
}
console.log(maxNum(5,7,9,8,6,2));

//min number
function minNum(...num) {
    return Math.min(...num)
}
console.log(minNum(5,7,9,8,6,2));

//round number
function roundNum(num) {
    return Math.round(num)
}
console.log(roundNum(4.1));

//ceil number
function ceilNum(num) {
    return Math.ceil(num)
}
console.log(ceilNum(8.2));

//floor number
function floorNum(num) {
    return Math.floor(num)
}
console.log(floorNum(8.3));

//sqrt number
function sqrtNum(num) {
    return Math.sqrt(num)
}
console.log(sqrtNum(18));

//random number
function randomNum(a, z) {
    return Math.floor(Math.random() * (z - a + 1)) + a;
}
console.log(randomNum(10, 20));



//второй вариант 

//max, min number 
function maxAndMinNumber(...arr) {
    return `max:${Math.max(...arr)}  min:${Math.min(...arr)}`
}
console.log(maxAndMinNumber(4,98,9,3,5,6,700));

//round number 
function roundNumber(num) {
    return `round:${Math.round(num)} ceil:${Math.ceil(num)} floor:${Math.floor(num)}`
}
console.log(roundNumber(8.5));
