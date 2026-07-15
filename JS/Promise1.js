// Promise 的三种状态：pending（等待）、fulfilled（已完成）、rejected（已拒绝）
const promise1 = new Promise((resolve, reject) => {});
console.log("promise1:", promise1); // Promise {<pending>}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise2 resolve 前", promise2); // Promise {<pending>}
    resolve("成功");
    console.log("promise2 resolve 后", promise2); // Promise {<fulfilled>: '成功'}
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise3 reject 前", promise3); // Promise {<pending>}
    reject("失败");
    console.log("promise3 reject 后", promise3); // Promise {<rejected>: '失败'}
  }, 5000);
});

// resolve 传值执行 then 的回调函数，reject 传值执行 catch 的回调函数
// then 和 catch 都会返回一个新的 promise 对象
const promise4 = Promise.resolve("promise4 data");
console.log("promise4:", promise4); // Promise {<fulfilled>: 'promise4 data'}
promise4
  .then((data) => {
    console.log("promise4 then:", data); // promise4 then: promise4 data
  })
  .catch((error) => {
    console.log("promise4 catch:", error);
  });

const promise5 = Promise.reject("promise5 error");
console.log("promise5:", promise5); // Promise {<rejected>: 'promise5 error'}
promise5
  .then((data) => {
    console.log("promise5 then:", data);
  })
  .catch((error) => {
    console.log("promise5 catch:", error); // promise5 catch: promise5 error
  });


// then 正常返回时，返回的Promise对象状态为 fulfilled
//      报错时，返回的Promise对象状态为 rejected

// catch 正常返回时，返回的Promise对象状态为 fulfilled
//       报错时，返回的Promise对象状态为 rejected

// fulfilled 状态的 Promise 对象，会执行 then 的回调函数
// rejected 状态的 Promise 对象，会执行 catch 的回调函数