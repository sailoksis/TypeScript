// generic это как аргументы функции, это то что вы можете передать только как 
// определенный тип, который в дальнейшем можем легко использовать
// можно предать в функцию, в класс, в интерфейс
//пример  мы не знаем какой будет name стока или число, можем передать в этом случае будет строка, а в этом число 
// generic на примере функции,generic обычно вкалыдвается в <> и указываем одну большую буку T
function entity <T>(args: T):T{
    return args
}

entity<number>(1)
entity<string>('1')
// generic используется везде особенно в компонентах
//пример  для class с generic
class Channel<T> {
    private name: T

    constructor(name: T){
    this.name = name
    }
    getName():T {
        return this.name
    }
}

new Channel<string>('Red group')
new Channel<number>(1)
// стрелочная функция  с generic
const entity2 = <T>(args: T):T => {
    return args
}
entity2<number>(1)
entity2<string>('1')

// Интерфейсы с generic
interface IPair<K, V> {
    key: K
    value: V
}

const pair1:IPair<string, number> = {
key: '1',
value: 1,    
}
const pair2:IPair<string, string> = {
    key: '1',
    value: 'st',    
    }
    // Как мы можем конкретно задать тип дженерика уже по умолчанию, что бы у нас был доступ к методам и функциям и тд
   type TypeLength = {
    length: number
    
   }

   function getNameLength<T extends TypeLength>(entity: T):number{
    return entity.length
        }  
  
    getNameLength('Good day')
    getNameLength([0,1,2,3])

