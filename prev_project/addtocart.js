const product = [
   {
    id: 0,
    image:'image/Mens Collection.jpg',
    title:'Men Collection ',
    price:3465,
   },{
    id: 1,
    image:'image/watches.jpg',
    title:'Watches ',
    price:3465,
   },


   {
    id: 2,
    image:'image/Shoes.jpg',
    title:'Shoes ',
    price:3999,
   },
   {
    id: 3,
    image:'image/t-shirt.jpg',
    title:'Mens Wear ',
    price:1369,
   },
   {
    id: 4,
    image:'image/jeans.jpg',
    title:'Jeans',
    price:1409,
   },
   {
    id: 5,
    image:'image/Best_Smartphones_US_2022.jpg',
    title:'Smart Phone',
    price:10999,
   },
   {
    id: 6,
    image:'image/television.jpg',
    title:'Television ',
    price:39999,
   },
   {
    id: 7,
    image:'image/hoodies.webp',
    title:'Hoodies',
    price:1499,
   },
   {
    id: 8,
    image:'image/dinnet set orginal.webp',
    title:' Dinner Set',
    price:469,
   },
   {
    id: 9,
    image:'image/laptop set.jpg',
    title:'Laptop ',
    price:49999,
   },
   {
    id: 10,
    image:'image/BBOKS.avif',
    title:'Books ',
    price:499,
   },

];
const categories =[...new Set(product.map((item)=>
   { return item}))]
   let i=0;
   document.getElementById('root').innerHTML= categories.map((item)=>
   {
    var{image, title, price}=item;
    return(
        `<div class ='box'>
       <div class='img-box'>
       <img class='images'  src=${image}></img >
       </div>
       
       <div class='buttom'>
       <p>${title}</p>
       <h2>₹ ${price}.00<h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
    )


   }).join('')


   var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


function delElement(a){
    cart.splice(a,1);
    displaycart();
}


   function displaycart(){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty";
        
    }
    else{
        document.getElementById("total").innerHTML ="₹ "+0+".00";
        document.getElementById('cartItem').innerHTML= cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="₹ "+total+".00";
            return(
                `<div class 'cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${image}>
                </div>
                <p style='font-size;12px;'>${title}</p>
                <div style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash'onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
   }