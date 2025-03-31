// // js operators
// var num1=10;
// var num2=50;
// var sum=num1+num2;
// console.log(sum);

// // short hand operators
//  var a=2;
//  var b=4;

//  console.log(a+b);
//  a+=b;
//  console.log(a);


// //  functions
// var obj1={
//     bikename:function(){
//         console.log("we have a bike name");
//     } 
// }
// obj1.bikename();


// named functions

// function sum(a ,b){
//     console.log(a+b);
// }

// sum(2,3);


// anonymous function

// var sum =function(a,b){
    // console.log(a+b);
// };
// sum(5,3);


// arrow function 
// var sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(4,5)

// // Array methods
   
// var arr=[1,2,3,4,5];
// console.log(arr);   


// 1 Map
// var newarr=arr.map((data)=>data*2);
// console.log("newaArray=>with map=>",newarr);


// 2. filter
// const newArr=arr.filter((data)=>data<=3);
// console.log(newArr);


// 3. find

// var newArr3=arr.find((data)=>data>2);
// console.log(newArr3); 

// 4. reduce

// var newArr=arr.reduce((data,index)=>{
//     return data+index;

// });


// console.log(newArr);

// var Flipkart=[
//     {
//         price:200,
//         quantity:2
//     },
//     {
//         price:200,
//         quantity:2
//     } ,
//     {
//         price:400,
//         quantity:4
//     } ,
//     {
//         price:500,
//         quantity:2
//     }, 
//     {
//         price:200,
//         quantity:2
//     }
// ];
//  var tc=Flipkart.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue.price*currentValue.quantity;
//  },0);

// console.log(tc);



// promises

// it is an object that returns a value that we hope to recieve in the future but not   immediately
// 1.pending state 
// 2.fulffill(playing)
// 13.reject
var myPromise=new Promise(function(resolve,reject){
   setTimeout(function(){ resolve("success")
    // reject("error occured");
    },3000);
});

myPromise
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)});