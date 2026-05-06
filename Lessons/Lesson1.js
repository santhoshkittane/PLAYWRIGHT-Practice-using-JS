console.log("Hello World");
var firstName = "John"
let LastName = "Smith"
console.log(firstName)
console.log(LastName)
var age,DOB,sex
age = '30'
sex = 'Male'
console.log(age)
const occupation = "Software Engineer"
console.log(occupation)
var Name = 'Santhosh1'
if (Name == 'Santhosh'){
    console.log("Welcome Santhosh")
}
else{
    console.log("Name not found")
}
var now = new Date()
var houroftheday = now.getHours()
if (houroftheday < 12){
    console.log("Good Morning")
}else if (houroftheday < 18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}
for(let i=0; i<5; i++){
    console.log("Hello World "+i)
}
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
// for(city of cities){
//     console.log(city)
// }
cities.forEach( city => {
    console.log(city)
})