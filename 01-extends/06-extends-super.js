/*
 * @Author: jly
 * @Date: 2021-10-21 15:31:51
 * @LastEditTime: 2021-10-21 15:31:52
 * @FilePath: \principles-Front-end\01-extends\06-extends-super.js
 */

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayMsg(){
        console.log('sayMsg...')
    }
}



// super既能当作方法调用也能当对象使用,当做方法调用时只有是在子类构造函数constructor方法内；当做对象使用时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。 

class Student extends Person{
    constructor(name,age,major){
        
        /*
         *注意点：
         * 1. super代表了父类Person的构造函数，但是返回的是子类Student的实例，即super内部的this指的是Student实例，
         * 2. super()在这里相当于Person.prototype.constructor.call(this，参数1，...)。相当于Person.prototype.constructor.call(this)/Person.call(this，参数1，...)，
         * 3. this是子类new出的实例，如果子类没有定义constructor方法，constructor方法会被默认创建，并默认调用super函数
         * 4. 在class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor( )调用 super( )方法，否则新建实例时会报错。
            报错的原因是：子类是没有自己的 this 对象的，它只能继承自父类的 this 对象，然后对其进行加工，而super( )就是将父类中的this对象继承给子类的。没有 super，子类就得不到 this 对象。
        */

        //  当作方法调用
        super(name,age)
        this.major = major;
    }
}

var s = new Student('jly',18,'computer');
console.log(s);// Student { name: 'jly', age: 18, major: 'computer' }
