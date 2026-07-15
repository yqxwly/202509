// Map 的 key 可以是任何数据类型
const map1=map = new Map();
map1.set('name', '张三');
map1.set(1,'1');
map1.set(true,'true');

const map2 = new Map([['name','张三'],[1,'1'],[true,'true']]);

console.log(map1, map2);

// get(key)得到对于value
// has(key)、delete(key)...
console.log(map1.get('name')); //张三
console.log(map1.has(1)); //true
map1.delete(1);
console.log(map1.has(1)); //false


