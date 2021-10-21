/*
 * @Author: jly
 * @Date: 2021-10-21 00:44:30
 * @LastEditTime: 2021-10-21 21:12:29
 * @FilePath: \principles-Front-end\02-call-apply-bind\01-call\01-call-base.js
 */

var obj = {name:'jly'}

function Foo(age){
    console.log(this,age);//{ name: 'jly' }，18。obj为null时this为window
}

Foo.call(obj,18)
