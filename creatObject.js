/* 
!LIST AND DESCRIBE THREE DIFFERENT WAYS OF CREATING AN OBJEDT IN JS: 
*/

//* Object literal syntax
const aboutMe = { //define object
  name: 'ayanna', //define all the properties and methods inside of it
  age: 27
}

console.log(aboutMe)

let moreInfo = Object.create(aboutMe, {favCultClassic: {value: 'Evil Dead'}})

console.log(moreInfo.name)

let person = {

}

person.__proto__ = aboutMe
console.log(person.age)

//*Another way is by using new keyword and object constructor.
const student = new Object();

student.grade = 12; 
student.gpa = 3.7; 
student.classes = ['English', 'Math', 'Science']

student.getClasses = function() {
  return this.classes
}

//*Constructor function
//* A function that creates an object class. Allows you to create multiple instances of that class.
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand; 
  this.year = year;
}

//this method will be avaible for all of our car objects to use.
Car.prototype.getColor = function() {
  return this.color
}

const carlysCar = new Car('blue', 'ferarri', 2015)
console.log(carlysCar)
console.log(carlysCar.getColor())

class User {
  constructor(firstName, lastName, age, gender){
    this.firstName = firstName //this refers to the object it will create by the constructor function
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
}

const newUser = new User('Ayanna', 'Miller', 27, 'female')
console.log(newUser)

