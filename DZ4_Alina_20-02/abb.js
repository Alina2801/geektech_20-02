// * Написать функцию переворота строки (стандартную функцию reverse НЕ ИСПОЛЬЗОВАТЬ).
// Например: "привет" -> "тевирп" и т.д.
// *
function reverseString(str){
    var reverse = "";
    for (i = 0; i < str.length; i++){
        reverse += str[(str.length - 1) - i];
    }
    return reverse;
}
console.log(reverseString("привет"));
console.log(reverseString("ваше имя"));


// * Написать функцию которая вычисляет строку палиндром
// Например: "потоп" -> true, "action" -> false, "madam" -> true и т.д.
// *

function toDoPalindrome(str) {
    return str === Array.from(str).reverse().join('');
}
console.log(toDoPalindrome("шалаш"));
console.log(toDoPalindrome("привет"));
console.log(toDoPalindrome("доход"));
console.log(toDoPalindrome("12345"));
console.log(toDoPalindrome("радар"));

// * Написать функцию которая принимает неограниченное количество аргументов
// и возвращает их среднее арифметическое.
// Например: func(1,2,3,4) -> 2.5, func(1,2,3,4,5,6,7,8,9,10) -> 5.5
// *

function  meanAverage(arr)
{
    if(arr.length === 0)
        return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let numbers = [1, 2, 3, 4];
let numbers1 = [1,2,3,4,5,6,7,8,9,10];
console.log(meanAverage(numbers));
console.log(meanAverage(numbers1));

// * Написать функцию транслитерации строки с кириллицы на латиницу
// Например: "Евгений" -> "Evgeniy", "Киселев" -> "Kiselev", "Евгений Киселев" -> "Evgeniy Kiselev".
// Обратите внимание что символы которые на входят в алфавит надо сохранить как есть.
// *

function doTransliteRuEn (str){
    var arrayLits = [ ["а","a"], ["б","b"], ["в","v"], ["г","g"], ["д","d"], ["е","e"], ["ё","yo"],
        ["ж","zh"], ["з","z"], ["и","i"], ["й","j"], ["к","k"], ["л","l"], ["м","m"], ["н","n"],
        ["о","o"], ["п","p"], ["р","r"], ["с","s"], ["т","t"], ["у","u"], ["ф","f"], ["х","h"],
        ["ц","c"], ["ч","ch"], ["ш","w"], ["щ","sh"], ["ъ","''"], ["ы","y"], ["ь","'"], ["э","e"],
        ["ю","yu"], ["я","ya"],
        ["А","A"], ["Б","B"], ["В","V"], ["Г","G"], ["Д","D"], ["Е","E"], ["Ё","YO"],
        ["Ж","ZH"], ["З","Z"], ["И","I"], ["Й","J"], ["К","K"], ["Л","L"], ["М","M"], ["Н","N"], ["О","O"],
        ["П","P"], ["Р","R"], ["С","S"], ["Т","T"], ["У","U"], ["Ф","F"], ["Х","H"], ["Ц","C"], ["Ч","CH"],
        ["Ш","W"], ["Щ","SH"], ["Ъ",""], ["Ы","Y"], ["Ь",""], ["Э","E"], ["Ю","YU"], ["Я","YA"],];
    function getEnLit(lit){
        var s = arrayLits.find(i=>i[0]===lit)
        return s !== undefined ? s [1] : "*"
    }
    return [...str].map(getEnLit).join("")
}
console.log( doTransliteRuEn("Алина"));
console.log( doTransliteRuEn("Тращеева"));

// // * Дописать функцию validateInn начатую на уроке.
// // Добавить проверку что все символы в строке являются цифрами.
// // А то сейчас если я введу вот так(скриншот) то получу что это правильный ИНН))
// // *

function validateInn(inn) {
    var firstNumber = Number(inn && inn[0])

    return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber) && typeof (Number(inn)) === "number" && ! isNaN(Number(inn));
}
console.log( !!validateInn("qwertyuiopasd") ? "INN VALID" : "INN ERROR")

console.log( !!validateInn("12345678911111") ? "INN VALID" : "INN ERROR")