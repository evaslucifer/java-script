// async and await in js
// setTimeout(function(){
    // console.log("1");

// },3000);
// console.log("2");
var myPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("success");   
     },5000);
    setTimeout(function(){
       reject("err"); 
    },4000);
});
var getourpromise=async()=>{
    try{
        let getourpromiseresult=await myPromise;
        console.log(getourpromiseresult);
    }
        catch(error){
        // throw new Error(error) 
        console.log(error);
        }

    
};
getourpromise(); 
