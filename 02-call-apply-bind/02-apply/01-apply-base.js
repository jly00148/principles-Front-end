/*
 * @Author: jly
 * @Date: 2021-10-21 21:13:39
 * @LastEditTime: 2021-10-22 04:09:30
 * @FilePath: \principles-Front-end\02-call-apply-bind\02-apply\01-apply-base.js
 */


var obj = {name:'jly'}

function Foo(para1,para2){
    console.log(this,para1,para2);//{ name: 'jly' }，18。obj为null时this为window
}

Foo.apply(obj,[11,22])