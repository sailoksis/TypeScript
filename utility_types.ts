//utility_types позволяют делать разные манипуляции Pick, Omit, Parial
interface ICar {
    id: number
    name:string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'> {} // выреазли id из ICar используя Omit 
interface ICarId extends Pick<ICar, 'id'> {} //Pick вытаскивает только id
interface IOptionalCar extends Partial<ICar> {} // Partial деалет все свойстива не обязательными
interface IReadonlyCar extends Readonly<ICar> {} // Partial деалет все поля доступными только для чтения, нельзя менять
// Record для создания своего нового типа, напимер ниже price может быть либо string либо number
type TypeCarRecord = Record<'name' | 'price', string | number>
//const car: TypeCarRecord = {
//    price
//}
interface IRequiredCar extends Required<ICar> {} //все поля становятся обязательными в ICar если они например были необязательными id?: number
//Что бы узнать что возвращает функция мы, полезно для большого проекта?  Если навести на Return, то увидим что возвращается тип string
type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

//extract вернется только одинаковые совпадения, то что дублируется, это andrey
//type Any = Extract <'max' | 'andrey', 'andrey' | 'misha'>

//Exclude исключает по первому параметру, если max, то все остальное исключает 
//type Any = Exclude <'max' | 'andrey', 'andrey' | 'misha'>

//NonNullable удалет все null and  undefined из типа 
type NotNull = NonNullable <string | number | null | undefined>