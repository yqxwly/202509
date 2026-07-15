// 两种创建 Set 的方式
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

let set2 = new Set([1, 2, 3]);

console.log(set1, set2); //Set(3) { 1, 2, 3 } Set(3) { 1, 2, 3 }

// has, delete, size...
console.log(set1.size); //3
console.log(set1.has(2)); //true
set1.delete(2);
console.log(set1.has(2)); //false

// 转数组
let arr1 = [...set2];
let arr2 = Array.from(set2);
console.log("arr1", arr1); //[ 1, 2, 3 ]
console.log("arr2", arr2); //[ 1, 2, 3 ]

// 数组去重
let arr3 = [1, 2, 3, 1, 2, 3];
console.log([...new Set(arr3)]); //[ 1, 2, 3 ]
// 要注意NaN, 引用类型
// NaN 是原始类型 number 的值，规定NaN !== NaN
// Set 内部使用 SameValueZero 算法判断两个值是否相等，NaN 被认为是相等的
// 引用类型在栈里存的是不同的地址，不会被去重
let arr4 = [1, NaN, NaN, {}, {}, 2];
console.log([...new Set(arr4)]);
