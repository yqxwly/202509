// 闭包：一个函数和它（定义的地方）周围状态的引用捆绑在一起的组合

// 1、函数作为返回值
function text() {
  let a = 1;
  return function () {
    console.log("a", a);
  };
}

const fn = text();
const a = 2;
fn(); // 1

// 2、函数作为参数传递
function text2(fn) {
  let b = 1;
  fn();
}

const b = 2;
const fn2 = function () {
  console.log("b", b);
};
text2(fn2); // 2
