/*
 * @Author: jly
 * @Date: 2021-10-21 15:27:07
 * @LastEditTime: 2021-10-21 15:27:25
 * @FilePath: \principles-Front-end\01-extends\03-extends.js
 */

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayMsg = function(){
    console.log('my name ' + this.name + ' and my age is ' +  this.age + ' years old');
}
var p = new Person();

// --------------------------------------分割线--------------------------------------

function Student(name,age,major){
    this.major = major;
    Person.call(this,name,age)
}
// Student的原型对象指向父构造函数Person的实例
Student.prototype = p;

// 但是Student.prototype.constructor指向了Person,使其指向Student,也可以通过Object.defineProperty方法:
// Object.defineProperty(Student.prototype,'constructor',{value:Student})指向Student构造函数
Student.prototype.constructor = Student;

// Student实例调用原型对象上的方法，找不到，但是 Student实例对象指向构造函数Person，
// 再找不到再继续找__proto__上的sayMsg方法,也就是Person的原型对象上的方法
var s = new Student('jly',18);

// sayMsg能够被调用到
s.sayMsg()