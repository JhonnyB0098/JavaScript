let a=null
let b=357
let c=true
let d=BigInt("567")
let e="Jhonny"
let f =Symbol("Nice symbol")
let g //undefined

console.log(a,b,c,d,e,f,g)

console.log(typeof g,typeof e,typeof d,typeof c,typeof b,typeof a)

//Non Primitive Data Type - Objects in JS
const item={
    Jhonny : true,
    Bro : false,
    Eloc : 67,
    Fun : undefined
}
item['friend']="Yo"

console.log(item["Eloc"],item["Bro"],item["Fun"],item.Jhonny)
