//assertions утверждени - задаем сами типы . пример тип переменной неизвестен и мы принудиьтельно его задаем
// два варианта
const inputElement = document.querySelector('input')
const value1= (inputElement as HTMLInputElement).value // ВАРИАНТ 1
const value2= (<HTMLInputElement>inputElement).value // ВАРИАНТ 2

// ВОСКЛИЦАЛЬЕНЫЙ ЗНАК Non-null assertion , тот или иной возвращаемыц тип не является null или undefined
// exemple
const getLength = (text: string | null): number => {
    return text!.length 
}
getLength('werger')
getLength(null)