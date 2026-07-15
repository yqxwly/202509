async function test1() {
  console.log("test1 start"); //2

  //这里看成两步，立即执行test2() 和 等待test2()返回的Promise对象状态变化
  // await 相当于 Promise.then
  const result = await test2();

  // await 会阻塞后续代码的执行，相当于加了一个定时器
  //   setTimeout(() => {
  //     console.log("result:", result);
  //     console.log("test1 end");
  //   }, 1000);
  console.log("result:", result); //5
  console.log("test1 end"); //6
}

async function test2() {
  console.log("test2"); //3
  return Promise.resolve(2);
}

console.log("script start"); //1
test1();
console.log("script end"); //4
