//var 全局
//let 局部
// 1、块级、变量和常量
{
    let count = 0;
    // console.log(count);

    // 常量一般大写
    const BASE_URL = "http://..."
}
// console.log(count);


// 2、模板字符串
//传统
const str1 = "123";

//反斜杠可以引入、换行
const str2 = `hhh${str1}
这也是内容`;
// console.log(str2);


// 3、解构赋值
// 数组
const [a, b, c] = [1, 2, 3];
// console.log(a,b,c);

// 对象
// 剩余项只能在最后
const { username, age: userAge, ...otherInfo } = {
    username: "pzy",
    age: 20,
    gender: "女",
    classRoom: 2
}
// console.log(username, userAge, otherInfo);


// 4、数组与对象的扩展
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [4, ...arr1, ...arr2, 5]
// console.log(arr3);

const obj1 = {
    a: 1
}

const obj2 = {
    b: 2
}

// 对象是无序的
const obj3 = {
    c: 3,
    ...obj1,
    ...obj2
}
// console.log(obj3);

// 伪数组转化  Array.from()
function fn() {
    // console.log(arguments);
    Array.from(arguments).forEach(function (item) {
        // console.log(item);
    });
}
fn(1, 2, 3, 4);

// 对象潜拷贝\合并 Object.assign()
const objA = {
    username: "pzy",
    age: 20
}

const objB = Object.assign({}, objA);
objB.username = "zsy";
const objC = Object.assign({}, objA, obj1);
// console.log(objA, objB, objC);


// 5、Class
class A {
    // 构造
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    intruduce() {
        console.log(`大家好，我叫${this.name},我的年龄是${this.age}。`);

    }
}

// 继承
class B extends A {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
}

const a1 = new A("pzy", 20);
// console.log(a1);
// a1.intruduce();

const b1 = new B("zsy", 19, "女");
// console.log(b1);


// 6、箭头函数（函数简写）
// 参数 => 操作
const getSum1 = n => n + 3;
const getSum2 = (n1, n2) => n1 + n2;
const getSum3 = (n1, n2, ...other) => console.log(n1, n2, other);
// getSum3(3, 5, 39, 7, 9);

const getResult = arr => {
    let sum = 0;
    arr.forEach(item => sum += item);
    return sum;
}
// console.log(getResult([1,2,3]));

