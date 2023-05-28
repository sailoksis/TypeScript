// conditional types

type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

// литтералы это ``
type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '$1000' | '$2000' | '$4000'

type TypeCar = `${TypeBrand} ${TypePrice}`

const car1: TypeCar = 'bmw $1000'
//Теперь необходимо писать только значения указанные в типах и у каждлго значения своя цена
