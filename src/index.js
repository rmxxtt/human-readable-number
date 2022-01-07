// module.exports = function toReadable (number) {
//
// }

//module.exports = function toReadable (number) {
function toReadable(number) {
    let result = '';

    const names = [
        ['zero', 'one', 'two', 'three',
            'four', 'five', 'six', 'seven', 'eight', 'nine']
        ,
        ['', 'ten', 'twenty', 'thirty', 'forty',
            'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        ,
        ['hundred']
    ];

    number.toString().split('').reverse().map((value, index, array) => {
        const n = parseInt(value);
        if (index >= 2) { // сотни
            result = `${names[0][n]} ${names[index][0]}${result ? ' ' + result : ''}`;
        } else {
            result = `${names[index][n]}${result ? ' ' + result : ''}`;
        }

        console.log("result", index, n, result)
    });

    // Удаляем лишние zero
    if (result.length > 1000) {
        result = result.replace(/zero/, '');
    }

    return result;
}

console.log(toReadable(101))
// 125 +
