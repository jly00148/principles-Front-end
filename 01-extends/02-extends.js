/*
 * @Author: jly
 * @Date: 2021-10-21 15:26:24
 * @LastEditTime: 2021-10-21 15:26:25
 * @FilePath: \principles-Front-end\01-extends\02-extends.js
 */


function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor:Person,
    showName:function(){

    },
    showAge:function(){
        console.log('my name ' + this.name + ' and my age is ' +  this.age + ' years old')
    },
}
// Object.defineProperty(Person.prototype,'constructor',{
//     value:Person,

//     // 不可枚举
//     enumerable:true
// })

// 属性的继承
function Student(name,age,major){
    this.major = major;
    Person.call(this,name,age)
}
// var s = new Student('jly',28,'computer')

// ------------------------------------------分割线------------------------------------------

// 方法的继承
// for ... in ...遍历循环父构造函数原型对象上的方法

for(var attr in Person.prototype){
    // if(attr == 'Person'){
    //     continue;
    // }
    Student.prototype[attr] = Person.prototype[attr]
}

// =========================================分割线===============================================

// 问题：遍历后子构造函数Student的constructor指向了Person,改变一下指向即可
// 解决方法1：改变指向自身即可
Student.prototype.constructor = Student;

// 解决方法2：在上述for in 循环中执行 continue就不会被遍历进去
if(attr == 'Person'){
    continue;
}

//  解决方法3：
Object.defineProperty(Person.prototype,'constructor',{
    value:Person,

    // 不可枚举，就不会被遍历到
    enumerable:true
})
// =========================================分割线===============================================

// 能调用父构造函数原型对象上的方法
var s = new Student('jly',28,'computer')
s.showAge()