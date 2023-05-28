//Типизация массивов
let array:string[]
array = ['1', '2'] // объявление массива


const numbers:ReadonlyArray<number> = [0, 1, 2, 3]//массив с numbers и они будут неизменяемы из вне. <number> явялется дженериком

//Кортежи - когда мы четко знаем количество эллементов в нашем массиве
type TypeArray = [number, string, null]
const newArray:TypeArray = [1, '2', null]
