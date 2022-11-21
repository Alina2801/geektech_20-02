// * Создать объект банковской карты со следующими полями:
// Номер карты(строка),
// Дата окончания(строка),
// Имя владельца(строка),
// Тип карты(строка),
// CVC(число).
// *
var customer = {
    numberCard: "4456698569832478",
    dateEnd: "06/2025",
    name: "Trasheeva Alina",
    type: "Elcart",
    CVC: 354,
}
console.log("typeof customer=>", typeof customer);

// * Создать объект банковского филиала: Код(число), Название(строка), График работы (строка),
//Работает ли точка вечером (логический),
//Адрес филиала (объект) со следующими полями:
//Город (строка), улица (строка), дом(строка)
// *

var castomerBank = {
    code: 109001,
    nameBank:"Demir Bank",
    schedule: "Monday - Saturday",
    workNight: true,
    address:{
        city:"Bishkek",
        street:"Kiev",
        num:"1"
    }
}
console.log("typeof customerBank=>", typeof castomerBank);

// *  У нас имеется 4 системы быстрых денежных переводов:
//Unistream, RIA, Contact, MoneyGram. По аналогии с карточными процессингами (писали на уроке)
//реализовать логику отправки денег (можно просто писать в консоли что деньги отправлены определенной системой)
// *

var customerTransferType = prompt("Выберите систему денежных переводов" +
    "\n UniStream\n RIA\n Contact\nMoneyGram");
switch (customerTransferType){
    case "Unistream":
        console.log("Sant amount via Unistream");
        break;
    case "RIA":
        console.log("Sant amount via RIA");
        break;
    case "Contact":
        console.log("Sant amount via Contact");
        break;
    case "MoneyGram":
        console.log("Sant amount via MoneyGram");
        break;
    default:
        console.log("invalid");
}

// * Написать программу конвертер арабских чисел (от 1 до 9) в римские.
//Например: пользователь вводит 4 -> IV, 9 -> IX  и т.д.
// *

var customerNumber = prompt("Введите число от 1 до 9")
switch (customerNumber) {
    case"1":
        console.log("I")
        break;
    case"2":
        console.log("II")
        break;
    case"3":
        console.log("III")
        break;
    case"4":
        console.log("IV")
        break;
    case"5":
        console.log("V")
        break;
    case"6":
        console.log("VI")
        break;
    case"7":
        console.log("VII")
        break;
    case"8":
        console.log("VIII")
        break;
    case"9":
        console.log("IX")
        break;
    default:
        alert("Неверное число!")
}
// * Создайте переменную customerType.
// В нее положите либо 1, либо 2.
// Тип клиента: 1 - физическое лицо,
// 2 - юридическое лицо.
//Попрактикуйтесь с тернарным оператором, выводить вместо числа текст.
// Например: customerType = 1 -> Физ. лицо
//условие? выражение1 : выражение2
// *

var customerType = 1;
customerType === 2 ? console.log("Юридическое лицо"): console.log("Физическое лицо")








