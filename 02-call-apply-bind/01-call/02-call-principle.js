/*
 * @Author: jly
 * @Date: 2021-10-21 16:11:06
 * @LastEditTime: 2021-10-21 21:12:51
 * @FilePath: \principles-Front-end\02-call-apply-bind\01-call\02-call-principle.js
 */

var obj = {name:'jly'}

function Foo (age,major){
    console.log(this);
    console.log(age);
    console.log(major);
}

Function.prototype.newCall = function (_this,...rest){
    if(!_this) _this = window;//在浏览器中是window，在node环境不是window而是空对象
    // console.log(_this,this);obj/window,Foo

    (_this.fn = this) && _this.fn(...rest);

    // 调用完没用了，删除属性
    delete _this.fn;

}

Foo.newCall(obj,18,'computer')
