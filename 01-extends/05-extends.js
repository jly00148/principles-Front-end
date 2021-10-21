/*
 * @Author: jly
 * @Date: 2021-10-21 15:29:49
 * @LastEditTime: 2021-10-21 15:29:50
 * @FilePath: \principles-Front-end\01-extends\05-extends.js
 */

class Person{
    // 每调用一次Person或者new一次实例都会调用constructor，相当于在es5语法中执行构造函数Person
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayMsg(){
        console.log('my name is ' + this.name + ' and my age is ' + this.age)
    }

    static sayStatic(){
        console.log('sayStatic...')
    }
}

var p = new Person('amy',28)

// ----------------------------------------------分割线----------------------------------------------

// 通过extends关键字实现对Person的继承
class Student extends Person{
    /*  *注意点：
        1.子类必须在constructor方法中调用super方法，该super方法实际调用了父类的constructor
        2.子类如果没有定义constructor方法，系统会默认添加一个空的constructor，并且在这个方法会默认添加一个空的super方法
        3.在子类额构造函数中只有调用了super之后才可以使用this关键字
     */

    // 属性继承：
    constructor(name,age,major){
        super(name,age)
        this.major = major;
    }
    sayHello(){
        console.log('hello...')
    }
}

var s = new Student('jly',18,'computer')
// console.log(s); Student { name: 'jly', age: 18, major: 'computer' }

//方法继承：直接调用父类的方法
s.sayMsg()

// 子类自身的方法
s.sayHello()

// 父类实例不能调用子类方法
// p.sayHello() p.sayHello is not a function

// 父类的静态方法可以被子类继承
Student.sayStatic()

// console.log('!!',s.__proto__) Person {}指向父类的一个实例，参考03-constructor-extends3文件