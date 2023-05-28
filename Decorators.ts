// декораторы функция по факту которая накладывает сверх функционал
// на наш класс метод свойсто, аргументы, накладывает функционал сверху
function logClass(constructor: Function) {
    console.log(constructor.name)
}

function LogMethod(target: Object, key:string, descriptor:
    PropertyDecorator){
        console.log(key)
    }

@logClass
class Plane {
    private id: number
    constructor(id: number) {
        this.id= id
    }
    @LogMethod
    getId(){
        return this.id
    }
}
//@LogMethod декоратор можно повесить на любые значения
