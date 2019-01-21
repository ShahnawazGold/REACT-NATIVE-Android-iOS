// let a= 2;
// console.log(a);
// let b :number= 5;
// console.log(b);
// let c : string = "shah";
// console.log(c);
// let arr : number[] = [2,6,7];
// console.log(arr[0]);
// let d :any ='khan';
// console.log(d);
// class Numbers { 
//     num_val = 13;             //class variable 
//     static sval = 10;         //static field 
//     storeNum():void { 
//        var local_num = 14;    //local variable 
//     } 
//  } 
//  console.log(Numbers.sval)   //static variable  
//  var obj = new Numbers(); 
//  console.log("Global num: "+obj.num_val)
// var a : number =2;
// var b : number = 4;
// if (a ==b) {
//     console.log("true");
// } else {
//     console.log("false"); 
// }
// var num1:number = 10 
// var num2:number = 2
// var res:number = 0
// res = num1 + num2 
// console.log("Sum:        "+res); 
// for (let index = 0; index <10; index++) {
//    console.log("lopp " +index);
// }
// function test() { 
//     console.log("function called"); 
//  } 
//  test();    // function invocation
// function greet():string { //the function returns a string 
//     return "Hello World" 
//  } 
//  function myName() :string{
//      return "shah"
//  }
//  function caller() { 
//     var msg = myName() //function greet() invoked 
//     console.log(msg) 
//  } 
//  //invoke function 
//  caller()
//========
// var abc = function () {
// console.log("heloo");
// }
// abc()
// var msg = function() { 
//     return "hello world";  
//  } 
//  console.log(msg())
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
