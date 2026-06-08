
// // promise
// //     .then((result) => {
// //         console.log('success:', result)
// //     })
// //     .catch((error) => {
// //         console.log('error:', error)
// //     })
// //     .finally(() => {
// //         console.log('finished')
// //     })

// // console.log(promise)

// // console.log('start')

// // console.log('end')

// // setTimeout(() => {
// //     console.log('this runs after 2 seconds')
// // }, 2000);


// // const waitTwoSeconds = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve('two seconds passed')
// //     }, 2000)
// // })

// // waitTwoSeconds.then((message) => {
// //     console.log(message)
// // })


// // function getUser() {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve({ id: 1, name: 'ali'})
// //         }, 1000)
// //     })
// // }

// // getUser().then((user) => {
// //     console.log(user)
// // })

// //the new way

// async function sayHello1() {
//     return 'hello'
// }

// console.log(sayHello1())


// async function sayHello2() {
//     return 'hello from async function'
// }

// sayHello2().then((message) => {
//     console.log(message)
// })

// async function sayHello3() {
//     return 'hello'
// }

// async function run() {
//     const message = await sayHello3()
//     console.log(message)
// }

// run()

// function getNumber() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     })
// }

// async function run2() {
//     const number = await getNumber()
//     console.log(number)
// }

// run2()

// function riskyTask() {
//     return new Promise((resolve, reject) => {
//         const success = false

//         if(success) {
//             resolve('task completed')
//         } else {
//             reject(new Error('task failed'))
//         }
//     })
// }

// async function run3 () {
//     try{
//         const result = await riskyTask()
//         console.log(result)
//     }
//     catch(error){
//         console.log('error:', error.message)
//     }
// }

// run3()

// //fetch
// const posts = fetch("https://jsonplaceholder.typicode.com/posts")

// console.log(posts)

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })

// //fetch using async and await
// async function getPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const posts = await response.json()

//     console.log(posts)
// }

// getPosts()

// async function getPosts2() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const posts = await response.json()

//         console.log(posts)
//     } catch (error) {
//         console.log('error: ', error.message)
//     }
// }

// getPosts2()

// async function getPosts () {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        

//         if(!response.ok) {
//             throw new Error(`failed to fetch posts. status: ${response.status}`)
//         }

//         const posts = await response.json()

//         posts.forEach((post) => {
//             console.log("title: ", post.title)
//             console.log("Body: ", post.body)
//             console.log("---------------------------")
//         });
//     } catch (error) {
//         console.error("something went wrong", error.message)
//     }
// }

// getPosts()

// // exercise
// const myPromise = new Promise((resolve) => {
//     resolve('hello from promise')
// })

// myPromise.then((message) => {
//     console.log(message)
// })


// const success = false
// const task = new Promise((resolve, reject) => {
//     if(success) {
//         resolve('task compelet')
//     } else {
//         reject('task failed')
//     }
// })

// task
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// function waitOneSeconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('this task ran after one seconds')
//         }, 1000);
//     })
// }

// waitOneSeconds().then((message) => {
//     console.log(message)
// })


function waitOneSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('this task ran after two seconds')
        }, 2000);
    })
}

async function run() {
    const message = await waitOneSeconds()
    console.log(message)
}

run()


async function getPost() {
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1")
        if(!response.ok) {
            throw new Error(`failed to fetch data: status ${response.status}`)
        }

        const post = await response.json()

        console.log("title:", post.title)
        console.log("body: ", post.body)
    } catch (error) {
        console.log('Error: ', error.message)
    }
}

getPost()


async function getPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!response.ok) {
            throw new Error(`failed to fetch data. status: ${response.status}`)
        }

        const posts = await response.json()

        posts.forEach((post) => {
            console.log("ID: ", post.id)
            console.log("Title: ", post.title)
            console.log("Body: ", post.body)
            console.log("-----------------")
        });
    } catch (error) {
        console.error("Error:", error.message)
    }
}

getPosts()

async function failGetPost () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/wrong-url")

        if(!response.ok) {
            throw new Error (`error while fetching data: ${response.status}`)
        }

        const posts = await response.json()

        console.log(posts)
    } catch (error) {
        console.log("error: ", error)
    }
}

failGetPost()


async function postById() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!response.ok) {
            throw new Error(`error while fetching data: ${response.status}`)
        }

        const posts = await response.json()
        console.log(posts)

        console.log('the number of posts: ', posts.length)

        const userIdPosts = posts.map((post) => {
            if (post.userId === 1) {
                console.log(post)
            }
        })


        posts.forEach((post) => {
            console.log('user Id is: ', post.userId)
            console.log('title is: ', post.title)
            console.log('body is: ', post.body)
        })

    } catch(error) {
        console.error('Error:', error)
    }
}

postById()