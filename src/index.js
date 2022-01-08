function toReadable(number) {
    const names = [
        ['zero', 'one', 'two', 'three',
            'four', 'five', 'six', 'seven', 'eight', 'nine']
        ,
        ['', 'ten', 'twenty', 'thirty', 'forty',
            'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        ,
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    ];

    const N = number.toString().split('').reverse().map(v => parseInt(v))
    // Количество сотен
    const h = N[2] ? names[0][N[2]] + ' hundred' : '';
    // Двузначное число
    let d = N[1] === 1 ? names[2][N[0]] : N[1] > 1 ? names[1][N[1]] : '';
    // Целые числа
    const w = N[1] > 1 && N[0] !== 0 || N[1] === undefined || N[1] === 0 && N[0] !== 0 ? names[0][N[0]] : '';
    // Удаляем лишние пробелы
    return `${h} ${d} ${w}`.trim().replace(/\s+/g, ' ');
}

module.exports = toReadable;
