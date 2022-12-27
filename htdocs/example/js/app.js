const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
const tabContent2 = document.querySelector(".offer__action")


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()



tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                console.log(i)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
});


let currentSlide = 0;
function nextSlide() {
    currentSlide++
    if (currentSlide >= tabs.length) {
        currentSlide = 0
    }
    hideTabContent();
    showTabContent(currentSlide);
}
setInterval(nextSlide, 3000);

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")
const modal2 = document.querySelector(".btn_dark")
const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)



function openModalScroll() {
    const page = document.documentElement;
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", openModalScroll);
    }
}
window.addEventListener("scroll", openModalScroll);


const forms = document.querySelectorAll("form")
const message = {
    loading: "идет загрузка....",
    success: "спасибо, скоро свяжемся!!!",
    fail: "что-то пошло не так:((("
}

const postData = (form) => {
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        const messageBlock = document.createElement("div")
        messageBlock.textContent = message.loading
        form.append(messageBlock)

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content", "application/json")
        const formData = new FormData(form)
        const object = {}
        formData.forEach((item, i) => {

            object[i] = item
        })
        console.log(object)
        const json = JSON.stringify(object)
        request.send(json)
        request.addEventListener("load", ()=>{
            if(request.status===200){
                console.log(request.response)
                messageBlock.textContent = message.success
            }else {
                messageBlock.textContent = message.fail
            }
        })
    })
}
forms.forEach((item)=>{
    postData(item)
})
