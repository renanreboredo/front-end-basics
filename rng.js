const checkNumbersInRange = (numbers) => numbers >= 10 && numbers <= 100;

const genRandomNumbers = (numbers, numArr = [], i = 0) => {
    if (i != numbers) {
        const number = Math.round(Math.random() * 100);
        numArr = [ ...numArr, number ];
        return genRandomNumbers(numbers, numArr, ++i);
    } 
    return numArr;
};

const evenNumbers = (numArr) => numArr.filter( num => (num % 2) == 0 );
const oddNumbers = (numArr) => numArr.filter( num => (num % 2) != 0 );
const ascOrder = (numArr) => numArr.sort((a, b) => a - b);
const descOrder = (numArr) => numArr.sort((a, b) => b - a);

module.exports = {
    checkNumbersInRange,
    genRandomNumbers,
    ascOrder,
    descOrder,
    evenNumbers,
    oddNumbers
}