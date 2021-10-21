/*
 * @Author: jly
 * @Date: 2021-10-21 15:24:58
 * @LastEditTime: 2021-10-21 15:25:02
 * @FilePath: \principles-Front-end\01-extends\01-extends.js
 */


// 父构造函数
function Person(name,age){
    this.name = name;
    this.age = age;
    Person.prototype.intro = function(){
        console.log('my name ' + this.name + ' and my age is ' +  this.age + ' years old')
    }
}

// 子构造函数实例对父函数的属性继承：call
function Student(name,age){
    // 子构造函数实例上自己的属性
    this.major = 'computer';

    // 用call继承
    Person.call(this,name,age)
}

// var s = new Student('Johnny',28);  //{ major: 'computer', name: 'Johnny', age: 28 }

// ---------------------------------------------分割线---------------------------------------------

// 子构造函数实例对父函数的方法继承:Student.prototype = Person.prototype
Student.prototype = Person.prototype;

var s = new Student('Johnny',28);

// 实例s能够调用Person构造函数的原型对象上的方法
// s.intro() my name Johnny and my age is 28 years old

// ---------------------------------------------分割线---------------------------------------------

/*
 * @description: 弊端
 * @result:如果子构造函数原型对象添加方法的话，父构造函数出来的实例也能够调用
 * @reason：因为Student.prototype = Person.prototype;指向同一个原型对象
 */
Student.prototype.fn = function(){
    console.log('xxxx')
}

var p = new Person();

p.fn()