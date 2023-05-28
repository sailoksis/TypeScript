//Создаем класс с явным указанием типов данных
class Car {
    name: string
    price: number

    constructor(name: string, price: number) {
this.name = name
this.price = price
    }
     getInfo(): string {
        return `${this.name} - ${this.price}`
    }
}

new Car('BMW', 100000).getInfo()

// Модификаторы в ts private, public and protected
// public - доступна откуда угодно ее обычно не пишут, пример код выше 
//ну или вот   public getInfo(): string {
       // return `${this.name} - ${this.price}`}
  //  private приватную переменную можно объявить используя # или private
//private например функция доступна только внутри класса    #getInfo() //  private getInfo
//protected функция доступна только внутри класса но при этом его еще можно вызывать 
//внутри другого класса который экстендится от текущего класса class Bus extends Car 
    /*Пример protected:
class Bus extends Car {
    constructor(name: string, price: number) {
       super(name,price)
    }
test(){
    return this.getInfo()
}
}
    */



