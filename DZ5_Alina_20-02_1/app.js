const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");


const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        fetch("data.json")
            .then(res=>res.json())
            .then(data=>{
                target.forEach(e => {
                    target2 === "som" ?
                        e.value = (elem.value / data[e.id]).toFixed(2)
                        : e === som ?
                            e.value = (elem.value * data[elem.id]).toFixed(2)
                            : e.value = ((elem.value * data[elem.id]) /data[e.id]).toFixed(2)
            })
            elem.value === "" ? (target.forEach(e=>e.value = "")) : null
        }).catch(error=>{
                console.error(error);
            })
            .finally(data=>{
                console.warn(data)
            })
     })
}

convert(som, [usd, euro], "som")
convert(usd, [som, euro])
convert(euro, [som, usd])



