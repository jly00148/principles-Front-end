/*
 * @Author: jly
 * @Date: 2021-10-22 04:10:27
 * @LastEditTime: 2021-10-24 03:00:25
 * @FilePath: \principles-Front-end\02-call-apply-bind\02-apply\02-apply-principle.js
 */
var obj = {name:'jly'}

function Foo (age,major){
    console.log(this);
    console.log(age);
    console.log(major);
}

Function.prototype.newApply = function (){

    let [_this,rest] = arguments;
    
    // 如果没传第一个参数，判断this指向
    if(!_this){
        // 如果成立说明_this是global(node非严格环境)，否则是window；
        _this = typeof window === 'undefined' ? global : window;
    }
    
    (_this.fn = this) && _this.fn(...rest);

    // 调用完没用了，删除属性
    delete _this.fn;

}

Foo.newApply(obj,[18,'computer'])