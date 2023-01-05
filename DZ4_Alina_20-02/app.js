// const btn = document.querySelector("button")
// btn.addEventListener("click",() =>{
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()
//     request.addEventListener("load", ()=>{
//     const data = JSON.parse(request.response)
//     console.log(data)
//     document.querySelector(".name").innerHTML = data.name
//         document.querySelector(".age").innerHTML = data.surname
//     })
//
// })

fetch('http://localhost:63342/DZ4_Alina_20-02/data.json', {
    method: 'POST',
    body: JSON.parse,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(()=>console.error("error"))
    .finally(()=>console.warn("finally"))
