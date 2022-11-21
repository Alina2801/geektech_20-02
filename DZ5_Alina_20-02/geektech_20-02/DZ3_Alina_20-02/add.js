// * Написать программу "Треугольник в цикле".
// Программа должна в консоль нарисовать следующую фигуру:
// *
function triangle (length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        for (var b = 0; b < i; b++) {
            line += "*";
        }
        line += '\n';
    }
    return line;
}
console.log(triangle(7));

// * Написать программу FizzBuzz:
// программа должны вывести числа от 1 до 100 по следующим правилам.
// Если число делится на 3 то вывести Fizz,
// если число делится на 5 вывести Buzz,
// если делится и на 3 и на 5, то вывести FizzBuzz,
// иначе вывести просто число. Например: 1 2 Fizz 4 Buzz и т.д.
// *

for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else
        console.log(i);
}

// // * Написать функцию, которая подсчитывает вхождение определенного символа в строке.
//     Например: CountChar("Abrakadabra", "a") -> 5,
//     CountChar("Hello world", "o") -> 2 и т.д.
//     Причем считаются как маленькие, так и большие буквы.
// // *

function CountChar (str, letter)
{
    var letterCount = 0;
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) === letter)
        {
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(CountChar("Abracadabra", "a"));
console.log(CountChar("Hello world", "o"));

// * Напишите функцию капитализации строк.
// CapitalizeString("еВГЕНИЙ") -> "Евгений", CapitalizeString("КиСеЛеВ") -> "Киселев".
// Очень частый алгоритм для обработки клиентских данных
// *

function CapitalizeString(text){
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
console.log(CapitalizeString("aLINA"));
console.log(CapitalizeString("TrAsHeEvA"));















