

// *  написать программу: нужно запрашивать у пользователя его имя и фамилию
// (отдельным prompt) и выводит приветствие в виде: Здравствуйте, Имя Фамилия!
// *


var userName = prompt("Как вас зовут ?")
var lastName = prompt("Как  ваша фамилия ?")
console.log("Здравствуйте,  " + userName  + "  " + lastName );

// * Написать программу которая спрашивает у пользователя 2 числа(через prompt)
// и выводит в консоль какое больше.
// Если числа равны, то вывести что они равны.
// *

var numberOne = prompt("Введите первое число")
var numberTwo = prompt("Введите второе число")

if(numberOne.length < numberTwo.length){
    console.log("Первое число больше")
} else if(numberOne.length > numberTwo.length){
    console.log("Второе число больше")
} else {
    console.log("Числа равны")
}

// * написать программу "светофор": программа спрашивает у пользователя цвет в текстовом виде,
// и печатает в консоль действие согласно ПДД.
// Например: красный : стой! желтый : жди и т.д.
// *

var color = "traffic light"; // green // yellow // red

switch (color) {
    case "green":
        console.log("Зеленный свет, движение разрешено!!!");
        break;
    case "red":
        console.log("Красный свет, движение запрещено!!!");
        break;
    case "yellow":
        console.log("Желтый свет, переключение светофора!!!");
        break;
    default:
        console.log("неправильно указали цвет");
}
