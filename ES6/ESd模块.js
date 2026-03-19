// 3、 Module 模块： ESM(比较新) 、 CommonJS(Node.js)
// 不同类型的功能放在不同模块里面

// ESM
// 引入默认的
// import moduleD1 from './d1.js'
// import moduleD2 from './d2.js'
// // 引入方法
// import { d1Title, d1Fn } from './d1.js'
// import d2, { d2Title, d2Fn as d2Function } from './d2.js'

// console.log(moduleD1);
// console.log(moduleD2);

// console.log(d1Title);
// console.log(d1Fn);
// console.log(d2Title);
// console.log(d2Function);


// CommonJS
const moduleD3 = require('./d3.js');
console.log(moduleD3);






