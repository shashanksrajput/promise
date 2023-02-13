//Exercise 1
let mypromise1 = new Promise((resolve, reject) => {
  resolve("value");

 

})

 

mypromise1.then((value) => {
  console.log(3)
})

 

 

//Exercise 2

 

let mypromise2 = new Promise((resolve, reject) => {
  reject('error');

 

})

 

 

mypromise2.catch((error) => {
  console.log('boo!')
})

 


//Exercise 3 if itshouldresolve resolve truthy else reject

 

let mypromise = new Promise((resolve, reject) => {
  if ("itshouldresolve") {
    resolve("truthy")
  }
  else {
    reject("falsy")
  }
});

 

mypromise.then((itshouldresolve) => {
  console.log("truthy")
})
mypromise.catch((itshouldresolve) => {
  console.log("falsy")
})

 


//Exercise 4  //using settimeout method to delay in diplay the value.

 

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('digikull');
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hey everyone")
  }, 5000);
});
promise2.catch((value) => {
  console.log(value);
});
promise1.then((value) => {
  console.log(value);
});
console.log(promise1);