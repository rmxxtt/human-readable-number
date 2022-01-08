function toReadable (number) {
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

    const names2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    number.toString().split('').reverse().map((value, index, array) => {
        const n = parseInt(value);
        if (index >= 2) {
            result = `${names[0][n]} ${names[index][0]} ${result}`.trim();
        } else {
            if (n === 1 && index === 1) {
                const prev = parseInt(array[index - 1]);
                result = `${names2[prev]} ${result}`.trim();
            } else if (n === 0 && index === 1){
                const prev = parseInt(array[index - 1]);
                if (prev !== 0) {
                    result = `${names[0][prev]} ${result}`.trim();
                }
            } else if (n > 1 && index === 1) {
                const prev = parseInt(array[index - 1]);
                if (prev === 0){
                    result = `${names[index][n]} ${result}`.trim();
                } else {
                    result = `${names[index][n]} ${names[0][prev]} ${result}`.trim();
                }
            } else if (array.length === 1) {
                result = `${names[index][n]}`.trim();
            }
        }
    });

    return result;
}

//console.log(toReadable(0))

module.exports = toReadable;
