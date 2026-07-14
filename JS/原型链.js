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