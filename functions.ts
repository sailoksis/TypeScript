//Как типизировать функцию? Всегда нужно типизировать, должны быть входные параметры
//и выходные параметры name, так же создаем type и будет возвращаться именно имя с типом строки
type TypeChannelReturn = {
    name:string
}
function getChannel(name:string): TypeChannelReturn {
    return {name}
}
// Типизация стрелочной функции, выносим в отдельный type
type TypeChannelFunction = (name: string) =>TypeChannelReturn
const getChannelName: TypeChannelFunction = name => {
    return {name}
}
// используем Rest оператор
const getNumbers = (...numbers: number[]) => {
    return numbers
}

//Функциональные перегрузки это когда мы указываем сигнатуру функции
// до ее вызова и до ее реализации для принятия функицей разных аргументов
//Перегрузки пример
function getCar(name:string): string
function getCar(name:string, price: number): string 

function getCar(name:string, price?: number): string {
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}
    `
}

const car1 = getCar('bmv')
const car2 = getCar('bmw', 100000)