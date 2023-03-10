console.log("---------Promises.js --------");

const myPromise = new Promise((resolved, reject) => {
  const user = { name: "Dinku", age: 111 };
  //   const user = null;
  if (!user) {
    reject("Rejected hoise");
  } else {
    setTimeout(() => {
      resolved(user);
    }, 3000);
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => {
    // console.table({err, name: err.name, message: err.message, stack: err.stack });
  });

let useData = [];
const userId = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < userId.length; i++) {
  const userIDs = userId[i];
  // console.log(userIDs)
  useData.push(myPromise);
}
// console.log(useData,"useData");

Promise.all(useData).then((res) => {
  console.log(res);
});
