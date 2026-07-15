// 引用类型的深拷贝不会相互影响，是在栈里面开辟了新的内存地址

// 扩展运算符只复制了一层
// 仅限于原数组的内容都是基本数据类型 时是深拷贝（只有一层）
// 若原数组有引用数据类型，引用数据类型的内存地址会被复制到新数组中，指向同一块堆内存
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; //相当于 let arr2 = [] 先开辟了内存空间，然后通过循环把arr1的值赋给arr2
arr1[0] = 100;
console.log(arr1, arr2); //[100, 2, 3] [1, 2, 3]

// 深拷贝函数
// 函数深拷贝没有意义
function deepClone(obj, hash = new WeakMap()) {
  // 基本类型、函数直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 处理循环引用
  // 拷贝过的对象直接返回值
  if (hash.has(obj)) return hash.get(obj);

  // 处理日期
  if (obj instanceof Date) {
    return new Date(obj);
  }
  // 处理正则
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }
  // 处理 Map
  if (obj instanceof Map) {
    const newMap = new Map();
    hash.set(obj, newMap); //防止死循环
    obj.forEach((val, key) => {
      newMap.set(deepClone(key, hash), deepClone(val, hash));
    });
    return newMap;
  }
  // 处理 Set
  if (obj instanceof Set) {
    const newSet = new Set();
    hash.set(obj, newSet);
    obj.forEach((val) => {
      newSet.add(deepClone(val, hash));
    });
    return newSet;
  }

  // 普通对象和数组
  const newObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, newObj);

  // 使用 Reflect.ownKeys 获取所有键，包括 Symbol
  Reflect.ownKeys(obj).forEach((key) => {
    newObj[key] = deepClone(obj[key], hash);
  });

  return newObj;
}
