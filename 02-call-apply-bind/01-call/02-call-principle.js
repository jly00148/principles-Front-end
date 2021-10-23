/*
 * @Author: jly
 * @Date: 2021-10-21 16:11:06
 * @LastEditTime: 2021-10-23 16:52:23
 * @FilePath: \principles-Front-end\02-call-apply-bind\01-call\02-call-principle.js
 */

var obj = {name:"jly",age:18}

function Foo (age,major){
    console.log(this);
    console.log(age);
    console.log(major);
}

Function.prototype.newCall = function (){
    let [_this,...rest] = arguments;

    // 如果没传第一个参数，判断this指向
    if(!_this){
        // 如果成立说明_this是global(node非严格环境)，否则是window；
        _this = typeof window === 'undefined' ? global : window;
    }
    
    (_this.fn = this) && _this.fn(...rest);

    // 调用完没用了，删除属性
    delete _this.fn;
}

Foo.newCall(obj,18,'computer')
