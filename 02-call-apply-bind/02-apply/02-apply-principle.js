/*
 * @Author: jly
 * @Date: 2021-10-22 04:10:27
 * @LastEditTime: 2021-10-22 04:33:28
 * @FilePath: \principles-Front-end\02-call-apply-bind\02-apply\02-apply-principle.js
 */
var obj = {name:'jly'}

function Foo (age,major){
    console.log(this);
    console.log(age);
    console.log(major);
}

Function.prototype.newApply = function (_this,rest){
    
    if(!_this) _this = window;//在浏览器中是window，在node环境不是window而是空对象
    // console.log(_this,this);// obj/window,Foo

    (_this.fn = this) && _this.fn(...rest);

    // 调用完没用了，删除属性
    delete _this.fn;

}

Foo.newApply(obj,[18,'computer'])