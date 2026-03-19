// 2、Proxy 代理对象
const obj = {
    name: "pzy",
    age: 20
}

const container =document.getElementById("container");
container.textContent=obj.name;

// 希望在改了 obj.name 后可以自动更新在页面上
const p1 = new Proxy(obj, {
    // target 数据对象，property 属性名
    // obj 属性获取时触发
    get(target, property) {
        return obj[property];
    },
    // obj 属性更改时触发
    set(target, property, value) {
        // 对应 p1.name="zsy";
        obj[property] = value;
        // obj 被代理改过了
        container.textContent=obj.name;
    }
})

console.log(p1.name);
// 所有对 p1 的操作都会返回给 obj
p1.age = 21;
p1.name="zsy";