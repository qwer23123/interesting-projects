const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log(sum);
