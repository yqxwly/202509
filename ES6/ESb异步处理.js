// 1、Promise  Async 同步和异步，常见的异步：定时器、Ajax
// 异步任务创建后会在任务队列里面等待
// 异步任务执行在所有同步任务执行之后执行
// 所以有些同步要写在定时器里面，会形成很多嵌套 -> Promise来了！

// Promise 本身是一个类 / 构造函数
// 类似同步的方式处理异步，避免代码嵌套
// 就是把嵌套的代码写成链式的，方便管理
const p1 = new Promise((resolve, reject) => {
    // resolve("任务1：得到的数据");
    // reject("失败的信息");
})
// console.log(p1);

// data 是 resolve 里传的信息
// 调用 resolve 就会触发 then
p1.then(data => {
    console.log(data);

    // 第一个触发后，分配第二个异步任务功能
    return new Promise((resolve, reject) => {
        resolve("任务2：得到的数据");
        // reject("失败的信息");
    })
}, err => {
    console.log("任务1失败了");
    // 失败了可以通过抛出异常终止任务，以下任务都失败
    throw new Error("任务1失败");


})
    .then(data => {
        console.log(data);

    }, err => {
        console.log("任务2失败了");

    })
// .catch(err => {
//     console.log(err);

// })    //没有第二个参数 err 时，错了会执行catch

// Async await
// 基于 Promise 的异步简化功能，不能替代 Promise
// 追求和同步写法完全一致的写法
// a. 准备一个返回 Promise 对象的函数
function asyncTasjk() {
    return new Promise((resolve, reject) => {
        // 假装有一些关键代码...
        const isSuccess = true;
        if (isSuccess) {
            resolve("任务2：...成功数据结果");
        } else {
            reject("任务2：失败的处理结果");
        }
    })
}

// b. 为使用 await 的函数添加 async
// 要使用异步功能就在函数前面加 async，可以用 await ，没有其他功能上的影响
async function main() {
    // 返回了 promise 对象的异步函数可以添加 await 处理
    // 会像同步代码一样执行
    console.log("任务1");
    const data = await asyncTasjk();
    console.log(data);
    console.log("任务3");

}
main();

// 请求必然是异步的