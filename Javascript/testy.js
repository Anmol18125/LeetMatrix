//let arr=new Array(5,2,6,8,21,12,"Anmol","ray",true,null);
// arr.push("ray");
// arr.pop();
// console.log(arr);
// arr.shift(2,4);
// arr.unshift(true);
// console.log(arr.slice(2,5));
// console.log(arr);
// arr.splice(1,2,"Bhumihar");

// let ans=arr.map((number)=>{
//     return number*number;
// })
// //console.log(ans);
// let filter1=arr.filter((value)=>{
//     if(typeof(value)==="string")
//     {
//         return true;
//     }
//     else return false;
// })
// console.log(filter1);





// let arrredce=arr.reduce((acc,curr)=>{
// return acc+curr;
// },0)
// // console.log( arrredce);
// let arr1=[3,6,1,9,4,7];
// arr1.sort();
// console.log(arr1);
// console.log(arr.indexOf(6)); 







    // let arr1 = [33, 7, 20, 30, 10, 5];
    // console.log(Math.sqrt(5));
    

    // let getsum = (arr1) => {
        
    //     let sum = 0;
    //     arr1.forEach((values)=>{
    //         sum=sum+values;
    //     })
    //     return sum;
    // };
    // console.log(getsum(arr1));
    
    
//    // return function

    // function solve(number){
    //     return function(number)
    //     {
    //         return number*number;
    //     }
    // }
    // let ans=solve(5);
    // let finalans=ans(10);
    // console.log(finalans);


////funtion as a datatype

// const arr11=[
//     function (a, b) { return a + b; },
//     function (a,b) {return a - b; },
//     function (a,b){return a*b;}
// ];
        
// let a=arr11[1];

// console.log(a(4,5));



////funtion as object

// let obj={
//     age:20,
//     name:'Anmol ray'
//     ,salary:2599090,
//     hight :182
//     ,
//     greet:()=>{
//         console.log('Hello JI ');
//     }

// }
// console.log(obj.age);
// obj.greet();

// let src={
//     age:18,
//     height:182,
//     weight:80
// };
// let dec1={...src};
// let dec2=Object.assign({},src);

// let dec={};
// for(let key in src)
// {
//     let Nkv=key;
//     let kv=src[key];
//     dec[key]=src[key];
    
// }
// console.log(dec);src.age=20;
// console.log(src);
let numberInput = parseInt(prompt("Enter an integer number:"), 10); // Parse as an integer
console.log("Integer Input:", numberInput);