//Задали интерфейс, разница типов и интерфейсов зависит от компании
interface IUser {
    name: string 
    email: string
}

const userone: IUser = {
    email: '8231823@rg.er',
    name: 'Max',
}
 //Что бы приплюсовать один тип к другому типу нужно
 // В примере ниже const userone: является и  TypeUser и TypePerson все ключи и значения доступны в const userone
// Мы использовали &
// функции можно описать с помощью типов, а интерфейсы невозможно описать
//интерфейс испрлльзуют для чего то масштабного когда нуно сделать интерфейс товара, юзера 
//пропсы в реакте можно описывать с помощью интерфейсов  
 
type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

// можем указать сколько угодно юзеров
//const users: IUser[] = [user, {
//    age: number
// }]