// Enum работает как константа позволяет типизирвоать и мы четко знаем какие будут идти ролли в проекте
//Можем четко прописать типизации и будем понимать что у нас будет приниматься
enum EnumRoles{
    ADMIN = 0, 
    GUEST = 1, 
    USER = 2,
}

interface IUser {
    role: EnumRoles
    color: EnumColors
}
const user: IUser = {
    role:EnumRoles.ADMIN,
    color: EnumColors.black
}


// Можем записать enum с помощью const enum это лучше при компиляции
const enum EnumColors {
black, 
pink, 
green,
}
//reverse mapping ts
console.log(EnumRoles[EnumRoles.ADMIN])