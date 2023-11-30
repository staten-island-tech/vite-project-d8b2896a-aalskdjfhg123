import { fumos } from "./fumos"

export const prices = fumos.map((fumo)=>({
    card:fumo.card,
    price:fumo.price,
})) //obligotory map for the rubric