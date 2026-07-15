class Person{
    constructor(name){
        this.name = name;
    }

    drink(){
        console.log(`${this.name} is drinking water`);
    }
}

class Teacher extends Person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }

    teach(){
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}

const teacher = new Teacher("Mr. Smith", "Math");
console.log('teacher', teacher);
teacher.teach();
teacher.drink();

// 是否是对象本身的属性或方法，而不是继承自原型链
console.log(teacher.hasOwnProperty('name')); // true
console.log(teacher.hasOwnProperty('teach')); // false

console.log(teacher.__proto__ === Teacher.prototype); // true

// typeof 只能判断基本数据类型，不能判断对象的具体类型
console.log(typeof []); // object

// instanceof 判断对象是否是某个类的实例，只有在原型链上存在就会返回 true
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true，除了基本数据类型，其他都是对象，所有对象都继承自 Object.prototype

console.log(teacher instanceof Teacher); // true
console.log(teacher instanceof Person); // true
console.log(teacher instanceof Object); // true