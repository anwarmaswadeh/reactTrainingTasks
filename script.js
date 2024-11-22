//////////// Task 2 //////////// 

function calculateSumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return { sum, average };
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbers);
console.log('Sum:', result.sum, 'Average:', result.average);


//////////// Task 3 //////////// 

function removeDuplicates(array) {
    return [...new Set(array)];
}

const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueStrings = removeDuplicates(strings);
console.log('Unique Values:', uniqueStrings);