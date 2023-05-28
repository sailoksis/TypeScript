// base types 
let someNumber:number
let someStr:string
let someBoo:boolean
let someObj:object
let someUnd:undefined
let someNull:null
let someAny:any // редко используется можем прописать любой тип
let someUnk:unknown // что-то неизвестное
let someVoi:void // просто пустота

type TypeUser = {
    name:string
    age:number
    address: string
} //Объявлили переменную и добавили фиксированные типы данных

let user: TypeUser

user = {
address: 'SPB',
age: 24,
name: 'Max'
}
//оператор spread ... с помощью которого можем развернуть один объектв в нутри другого и тем самым расширить объект

type TypeUser1 = {
    name:string
    age:number
}

type TypeAddress = {
    city:string
    country:string
}
const user1: TypeUser1 = {
    age: 24,
    name: 'Max'
}

const address: TypeAddress = {
    city:'SPB',
    country: 'Russia',
}

let common:TypeUser1 & TypeAddress

common = {
...user, ...address
}