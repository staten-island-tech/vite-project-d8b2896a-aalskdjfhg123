import { dom } from "./dom"

export function insert(array) {
    dom.container.innerHTML = ""
    array.forEach((fumo) => dom.container.insertAdjacentHTML('beforeend', fumo.card))
}//inserts the cards

export function sortV1(array) {
    const arr = array.filter((fumo) => fumo.version == 1)
    insert(arr)
} //filters for version 1s

export function cheapest(array) {
    const arr = array.sort((p1, p2) => p1.price - p2.price)
    insert(arr)
} //sorts by cheapest to most expensive

export function sortV15(array) {
    const arr = array.filter((fumo) => fumo.version == 1.5)
    insert(arr)
} //filters for only version 1.5s

export function sortDeka(array) {
    const arr = array.filter((fumo) => fumo.type == "deka")
    insert(arr)
} //filters for only dekas

export function sortStrap(array) {
    const arr = array.filter((fumo) => fumo.type == "strap")
    insert(arr)
} //filters for only plush straps

/* function filters(){
    const buttons = document.querySelectorAll('.button')
    buttons.forEach((button)=>button.addEventListener("click",function(){
        let condition = button.textContent.toLowerCase()
        let newArr = fumos.filter((fumo)=>fumo.)
    }))
}  */