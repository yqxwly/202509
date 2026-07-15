// 执行 async 函数时，返回都是 Promise 对象
async function test1() {
  return 1; //会自动包装成 Promise.resolve(1)
}

async function test2() {
  return Promise.resolve(2);
}

console.log("test1:", test1()); // Promise {<fulfilled>: 1}
console.log("test2:", test2()); // Promise {<fulfilled>: 2}


// Promise.then 成功的情况对于 await
// await 通常后面的三种情况：await Promise.resolve(data) 、await data、await function()
async function test3() {
  const p3 = Promise.resolve(3);
  // then
  p3.then((data3) => {
    console.log("data3", data3); // data3 3
  });
  // await
  const data3 = await p3;
  console.log("data3", data3); // data3 3
}

test3();

async function test4() {
  const data4 = await 4; //相当于 await Promise.resolve(4);
  console.log("data4", data4); // data4 4
}

test4();

async function test5() {
  const data5 = await test1();
  console.log("data5", data5); // data5 1
}

test5();


// Promise.catch 异常情况，对于 try...catch
async function test6() {
  const p6 = Promise.reject(6);

  try {
    const data6 = await p6;
    console.log("data6", data6);
  } catch (error) {
    console.log("error6", error); // error6 6
  }
}

test6();
