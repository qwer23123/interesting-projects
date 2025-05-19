
function divide(numerator, denominator) {
    // 3. Валідація
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи мають бути числами');
    }
    if (denominator === 0) {
        throw new Error('Ділення на 0 неможливе');
    }
    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [5, 0],
    ['a', 3],
    [8, 'b'],
    [20, 5]
];


for (let [a, b] of testCases) {
    try {
        const result = divide(a, b);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(`Помилка: ${error.message}`);
    } finally {
        console.log('Робота завершена');
    }
}