function hello() {    
        console.log('This is my first function')
    }
    
    hello()
    var val = function(){
        console.log('This is an anonymous function')
    }
    val()

    var val2 = () => {
        console.log('This is an arrow ES6 function')
    }

val2()
// import {printAge} from '../HelperFunctions/PrintHelper.js'
// import {printName} from '../HelperFunctions/PrintHelper.js'
// printAge(30)
// printName("Santhosh")
import * as helper from '../HelperFunctions/PrintHelper.js'
helper.printAge(30)
helper.printName("Santhosh")


var person = new helper.Person()
person.printAge(30)
person.printName("Santhosh")



