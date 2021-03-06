/**
 * Created by paul on 2017/1/18.
 */

var hello = "hello";
var msg = hello + "word";
console.log(msg)

var str = "abc"
console.log(str === "abc")
console.log(str.length)

var fruits = ["apple","banana"]
console.log(fruits[2] === undefined)

//function
function double(x) {
    return x*x;
}

var  numIndex = 2;
console.log(double(numIndex))


var map = function (func,x) {
    return func(x)
}
console.log(map(double,numIndex))


//Obj
var  language = new Object();
language.china = "chinese";
language.usa = "english";
language['japan'] = 'japanese';
console.log(language)
language.japan = "english";
console.log(language)


//Object.prototype
var adult = {age: 25};
var retrivedProperty = adult.age;
var stringRepresentation = adult.toString();
adult.toString = function () {
    return  "I\'m" + this.age;
};
console.log(retrivedProperty + "|"+ stringRepresentation +"|"+ adult.toString());

var child = Object.create(adult,{name:{configurable:false,value:"lee"}});
console.log(child.name)

var fruit = {apple:2,orange:5,pear:1};
for(var kindIndex in fruit){
    console.info(fruit[kindIndex])
}

var myProto = {
    isPropertyExists: function (name) {
        return name in  this;
    }
}

var myNumbers = {
    __proto__: myProto,
    array:[],
    add(items){
        this.array.push(items);
    },
};
myNumbers.isPropertyExists("");


var mammal = function (spec) {
    var that = {};
    that.get_name = function () {
        return spec.name;
    }
    that.says = function () {
        return spec.saying || '';
    }
    return that;
}

Object.method('',function (name) {

});
var  coolCat = function (spec) {
    const that = mammal(spec);
    let super_get_name = that.superior('get_name');
    that.get_name = function () {
        return 'like ' + super_get_name
    }
};