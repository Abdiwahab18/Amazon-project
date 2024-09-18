// const products=[{
//   image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//   name:' Black and Gray Athletic Cotton Socks - 6 Pairs',
//   rating:{
//     rate:4.5,
//     ratenum:87
//   },
//   priceCent:1090

// },{
//   image:'images/products/intermediate-composite-basketball.jpg',
//   name:'Intermediate Size Basketball',
//   rating:{
//     rate:4,
//     ratenum:127
//   }
  
// },{
//   image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//   name:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//   rating:{
//     rate:4.5,
//     ratenum:56
//   },
//   priceCent:799
  
// },


  
// ]

import { cart,addTocart } from "../data/Cart.js";
import { products } from "../data/products.js";


let productHtml='';
products.forEach((product)=>{
  let html=`
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${product.priceCents/100}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
         Added   
  </div>

          <button class="add-to-cart-button button-primary  js-add-to-cart"
           data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `
  productHtml+=html;

})
  document.querySelector('.js-products-grid').innerHTML=productHtml;



// CARTQUANTITY FUNCTION
 
function CartQuantityFUN(){
    let CartQuantity=0;
  cart.forEach((item)=>{
    CartQuantity+=item.qountity;
})
document.querySelector('.js-cart-quantity').innerHTML=CartQuantity;
  }

 let addTocartEL= document.querySelectorAll('.js-add-to-cart');

 addTocartEL.forEach((button)=>{
  button.addEventListener('click',()=>{
  let productsId=button.dataset.productId;
    addTocart(productsId);
    CartQuantityFUN();

  })
 })



 






 