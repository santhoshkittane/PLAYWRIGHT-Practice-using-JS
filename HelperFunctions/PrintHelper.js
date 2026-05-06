export function printAge(age){
    console.log("Age is "+age)
}
export function printName(name){
    console.log("Name is "+name)
}
/**
 * This is a class to demonstrate export and import of classes in JavaScript
 */

export class Person{
    printName(name){
        console.log("Name is "+name+" from class")
    }
    printAge(age){
        console.log("Age is "+age+" from class")
    }   
}