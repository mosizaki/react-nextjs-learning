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


const products = ['bag', 'glasses', 'pants']
const homeProducts = ['milk', 'kale']

const shoppingList = [...products, ...homeProducts]

console.log(shoppingList)

const userInfo = {
    name: 'mosi',
    isAdmin: true,
    id: 35,
    interests: ['lego', 'anime', 'f1', 'kpop']
}

const userPerInfo = {
    hasCar: false,
    legoSets: 5
}

const userInfoPer = {...userInfo, ...userPerInfo}
console.log(userInfoPer)

const webCover = {
    logo: 'hero',
    ...userPerInfo
}

console.log(webCover)

const updatedUserInfo = {
    ...userInfo,
    name: 'kilroy'
}

console.log(updatedUserInfo)

const userObj2 = {
  name: "Ali",
  age: 25,
  email: "ali@example.com",
  location: "Montreal",
  skills: ["HTML", "CSS", "JavaScript"]
};

const updatedUserObj2 = {
    ...userObj2,
    skills: [...userObj2.skills, 'react']
}

console.log(updatedUserObj2)


function showSkills(...skills) {
    console.log(skills)
}

showSkills('html', 'css', 'react', 'nextjs')

function createUser (name, age, ...skills) {
    return {
        name,
        age,
        skills
    }
}

const newUser = createUser('sara', 25, 'html', 'javascript', 'three.js')
console.log(newUser)


//exercise
const profile = {
  username: "mosiisyou",
  city: "berlin",
  age: 30,
  hobbies: ["gym", "coding", "gaming"]
};

const {username, city} = profile
console.log(username)
console.log(city)
const [firsthoby, secondhoby] = profile.hobbies
console.log(firsthoby)
console.log(secondhoby)

const updatedProfile = {
    ...profile,
    city: 'paris'
}
console.log(updatedProfile)

const addHobby = {
    ...profile,
    skills: [...profile.hobbies, 'writing']
}
console.log(addHobby)