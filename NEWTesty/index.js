// let para=document.getElementById('fpara');
// let originalText= para.textContent;
// function changetext()

// {
//     if (para.textContent === originalText) {
//     para.textContent = "Hello Anmol"; // Change to new text
// } else {
//   para.textContent = originalText; // Revert back to the original text
// }

// }

// para.addEventListener('click',changetext,true);

////to remove event listner
//fpara.removeEventListener('click',changetext);

// //to change the default behaviour of any element inthis case anchor tags
// let anc=document.getElementById('fa');
// function cc(event)
// {
//     event.preventDefault();
//     anc.textContent='Kaam ho gya';
// }

// anc.addEventListener('click',cc)



////

// let ww=document.querySelectorAll('p');

// function alertmsg()
// {
//     alert("Bro what are you doing: "+event.target.textContent);
// }
// for(let i=1;i<ww.length;i++)
// {
//     let p=ww[i];
//      p.addEventListener('click',alertmsg);
// }

// //or we can also use this instead of using diffrent referance of para we just addeevent listner on the wrapper or parent div

// let ww=document.getElementById('wrapper')

// function alertmsg(event)
// {   
//     if(event.target.nodeName==='SPAN')
//     {
//         alert("Bhai Only SPAN content::"+event.target.textContent);
//     }
//     //target will identify the where the cursor click
//     alert("Bro what are you doing: "+event.target.textContent);
// }
// ww.addEventListener('click',alertmsg);



// let c=document.addEventListener("DOMContentLoaded", function () {
//     // Create a script element
//     const script = document.createElement("script");
    
//     // Set the source of the script
//     script.src = "https://example.com/script.js"; // Replace with the actual URL of the script
    
//     // Optional: Set script attributes
//     script.type = "text/javascript";
//     script.async = true; // Load asynchronously to not block rendering
    
//     // Append the script to the document
//     document.body.appendChild(script);
  
//     console.log("Script added dynamically after DOM is fully loaded.");
//   });






// ////performance improvemnt

// //code1
// let t1=performance.now();

// for(let i=1;i<10;i++)
// {
//     let hh=document.createElement('p');
//     hh.textContent="This is paragraph"+i;
//     document.body.appendChild(hh);

// }
// let t2=performance.now();
// console.log("this is total time taken by code 1:: "+(t2-t1));



// //code 2
// let t3=performance.now();
// let ff=document.createElement('div');
// for(let i=1;i<10;i++)
// {
//     let ppp=document.createElement('p');
//     ppp.textContent="This is paragarph of 2::"+i;
//     ff.appendChild(ppp);

// }
// document.body.appendChild(ff);
// let t4=performance.now();
// console.log("this is total time taken by code 2:: "+(t4-t3));

// ////optimal code
// let t5=performance.now();
// let oo=document.createDocumentFragment();
// for(let i=1;i<10;i++){
//     let pp=document.createElement('p');
//     pp.textContent='this is fragment para'+i;
//     oo.appendChild(pp)
// }
// //this take 1 reflow and 1 repaint
// document.body.appendChild(oo);
// let t6=performance.now();
// console.log("this is total time taken by code 3:: "+(t6-t5));


//use of promise to handle the asyn code for instant exceution 
//promise is obj that return promise to supply the value at some pint in the future

// console.log('jiiis');
// let fpromise=new Promise ((resolve,rejected)=>{
//     setTimeout(() => {
//         console.log("Anmol");

//     }, 5000);
//     resolve();//random value 
//     return 1;//after the operation we have to mark the operation is resolve or rejectted  otherwise it's show pending state 
// });
// //then is used when if the promise fullfilled the condition and you want additional condition after complition
// // multiple then block can use  that process called promise channing
// fpromise.then((message)=>{

//     console.log("The Promise run successfully"+message);
// });

// //catch is used when promise rejected or some error occur
// fpromise.catch((error)=>{
// console.log('here eror occur'+error);
// });

//async code and await and fetch api

async function getdata() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Fetching data from the URL
    let getlink =  await fetch(url);

    // Parsing the response as JSON
    let data = await getlink.json();

    // Logging the fetched data
    console.log("GET data::",data);
}

async function postdata() {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'Post',
            headers:{'Content-type':'Apllication/json'},
            body:JSON.stringify({
                tittle:"Anmol RAy",userID:4,
            })
            
        }
    )
    let data=await response.json();
    console.log('POST DatA ::',data);
}




async function processdata()
{
   postdata();
    
    getdata();

}
processdata();


