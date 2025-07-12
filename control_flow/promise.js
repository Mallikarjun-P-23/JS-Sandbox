//Creating a basic promise using the `new` keyword
const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('promise one resolved')
        resolve()
    },2000)
})
// Handling the resolved value of `promiseone`
promiseone.then(function(){
    console.log('promse resolved')
})


//Immediately invoked promise with a `.then()` chain
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



//Promise that resolves with data (an object) 
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"mallu",email:"abc@gmail.com"}
        
        )
    },1000)
})
promisethree.then(function(data){
    console.log(data.username)
})


// Promise with conditional resolve or reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "mallu", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// Chaining `.then()`, `.catch()`, and `.finally()` for full lifecycle handling
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//Handling promise using async/await inside a function
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// Consuming `promiseFive` using async/await with try-catch for error handling
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//Fetching GitHub API data using fetch and promises
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((dat) => { 
    console.log(dat);
})
.catch((eror) => console.log(eror))
