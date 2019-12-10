const checkNumbersRange = (numbers) => numbers >= 10 && numbers <= 100;

const genRandomNumbers = (numbers, numArr = [], i = 0) => {
    if (i != numbers) {
        const number = Math.round(Math.random() * 100);
        numArr = [ ...numArr, number ];
        return genRandomNumbers(numbers, numArr, ++i);
    } 
    return numArr;
};

const ascOrder = (numArr) => numArr.sort((a, b) => a >= b);
const descOrder = (numArr) => numArr.sort((a, b) => a <= b);
const evenNumbers = (numArr) => numArr.filter( num => (num % 2) == 0 );
const oddNumbers = (numArr) => numArr.filter( num => (num % 2) != 0 );

module.exports = {
    checkNumbersRange,
    genRandomNumbers,
    ascOrder,
    descOrder,
    evenNumbers,
    oddNumbers
}