const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

// som.addEventListener("input", ()=> {
// const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load", () =>{
//         console.log(request.response)
//         const data = JSON.parse(request.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
// })

const convert = (elem, target, isTrue) =>{
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (isTrue){
                target.value = (elem.value/data.usd).toFixed(2)
            }else{
                target.value = (elem.value*data.usd).toFixed(2)
            }
            elem.value=== "" ? (target.value="") : null
        })
    })
}
convert(som,usd,42)
convert(som,usd)
