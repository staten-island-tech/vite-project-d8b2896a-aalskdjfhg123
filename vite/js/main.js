import '../styles/style.css'
import { button } from './theme.js'
import { dom } from './dom.js'
import { fumos } from './fumos.js'
import { noSort, sortV1, cheapest, sortV15, sortDeka, sortStrap } from './fumo-filter.js'
import { prices } from './fumo-filter-arrays.js'

noSort(fumos)
 
button(dom.buttonH, dom.buttonF)

 dom.buttonClear.addEventListener("click", function () {
    noSort(fumos);
})

dom.buttonV1.addEventListener("click", function(){
    sortV1(fumos);
})

dom.buttonCheap.addEventListener("click", function(){
    cheapest(prices);
})

dom.buttonV15.addEventListener("click",function(){
    sortV15(fumos)
})

dom.buttonDeka.addEventListener("click", function(){
    sortDeka(fumos)
})

dom.buttonStrap.addEventListener("click", function(){
    sortStrap(fumos)
})