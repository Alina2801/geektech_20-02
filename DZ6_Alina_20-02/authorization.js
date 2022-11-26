const form = document.querySelector("form");
const inputs = form.elements;
const registeredUsers = [
    ["qwerty", "12345"],
    ["giraffe", "54321"],
    ["shoria1", "12211"],
];
function isValid(name, password) {
    for(let i = 0; i < registeredUsers.length; i++) {
        let temp = registeredUsers[i];
        if (temp[0] === name) {
            var currentPair = temp;
            break;
        }
    }
    if (currentPair && currentPair[1] === password) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = inputs["login"].value;
    let password = inputs["password"].value;
    if (!isValid(name, password)){
        alert("Неверный логин и/или пароль");
    } else {
        alert("Правильный логин и/или пароль");
    }
});































// const login = document.querySelector("input[name=login]");
// const password = document.querySelector("input[name=password]");
// const registeredUsers = [
//     ["admin", "KoI18"],
//     ["manager", "SuperMe108"],
//     ["editor", "12345"],
// ];
//
// function validate() {
//     let isValid = true;
//     registeredUsers.forEach((user) => {
//         if (user.includes(login.value) && user.includes(password.value)) {
//             return (isValid = true);
//         } else {
//             isValid = false;
//             console.log("Incorrect login or password");
//         }
//         return isValid;




// const form = document.getElementById("main-holder");
// // const btn = document.getElementById("check");
// const input = document.getElementById("login-form");
// // const login = document.getElementById("username-field");
// // const password = document.getElementById("password-field");
// const arrayUsers = [
//     ["qwerty", "12345"],
//     ["asdfg", "54321"]
// ];
// function isValid (username, password)
// {
//     for (var i = 0; i < arrayUsers.length; i++){
//         let temp = arrayUsers[i];
//         if (temp[0] === username){
//             let  currentPair = temp;
//             break;
//         }
//     }
//     if (currentPair && currentPair[1]===password){
//         return true;
//     }else {
//         return false;
//     }
// }
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     let username = input["login"].value;
//     let password = input["password"].value;
//     if (!isValid(username, password)){
//         alert("Неверный логин или пароль");
//     } else {
//         alert("Верные данные");
//     }
// });
//














// const registeredUsers = [
//     ["admin", "KoI18"],
//     ["manager", "SuperMe108"],
//     ["editor", "12345"],
// ];
