import { dom } from "./dom"



export function noSort(array){
    dom.container.innerHTML = ""
    array.forEach((fumo) => dom.container.insertAdjacentHTML('beforeend', fumo.card))
}

export function sortV1(array){
    dom.container.innerHTML = ""
    array.filter((fumo)=>fumo.version == 1).forEach((fumo)=> dom.container.insertAdjacentHTML('beforeend',fumo.card) )
}

export function cheapest(array){
    dom.container.innerHTML = ""
    array.sort((p1,p2)=>p1.price - p2.price).forEach((fumo)=>dom.container.insertAdjacentHTML('beforeend',fumo.card))
}