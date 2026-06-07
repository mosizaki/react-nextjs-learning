const user = ['mosi', 'arbabi', 30]
const [firstName, lastName, userAge] = user

console.log(firstName)
console.log(lastName)
console.log(userAge)

const userObj = {
  name: "Ali",
  age: 25,
  email: "ali@example.com",
  location: "Montreal",
  skills: ["HTML", "CSS", "JavaScript"]
};


const {name, age, email, location: userLocation} = userObj
const [skill1, skill2, skill3] = userObj.skills

console.log(name)
console.log(age)
console.log(email)
console.log(userLocation)
console.log(skill1)
console.log(skill2)
console.log(skill3)
