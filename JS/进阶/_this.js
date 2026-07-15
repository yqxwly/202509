// this 的值是在 函数调用时确定的，而不是在函数定义时确定的
function test() {
  console.log("this", this);
}

test(); // this window
test.call({ name: "pzy" }); // this {name: 'pzy'}
test.apply({ name: "pzy" }); // this {name: 'pzy'}

const boundTest = test.bind({ name: "pzy" });
boundTest(); // this {name: 'pzy'}


// 对象
class Person {
  constructor(name, age) {
    console.log("constructor 里面的 this", this);
    this.name = name;
    this.age = age;
  }

  test() {
    console.log("对象方法里的this", this);
  }

  asyncTest() {
    console.log("this", this);
    setTimeout(function () {
      console.log("异步函数里的this", this);  // this window，这不是对象里面的，是在定时器结束后执行的异步，是在全局环境
    }, 1000);
  }
}

const p1 = new Person("pzy", 21);
p1.test();
p1.asyncTest();