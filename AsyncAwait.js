console.log("=====AsyncAwait.js====== connected>>>");

const myPromise = new Promise((solved, canceled) => {
  // console.log("sol");
  setTimeout(() => {
    solved("Success hoise");
  }, 3000);
});
// console.log(myPromise);


async function getUser(){
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const user = res1.json()
    // console.log(user,"user");
    const res2  = await fetch(`https://jsonplaceholder.typicode.com/users?id${user.id}
    `)
    const products = res2.json()
    console.log(products);
}


getUser()