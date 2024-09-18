export let cart=[];


//ADD TO CART FUNCTION
export function addTocart(productsId){
    
  //select quantity of carts
  let selectEl= document.querySelector(`.js-quantity-${productsId}`);
  let selectvalue=Number(selectEl.value);

  let maching;
  cart.forEach((item)=>{
    if(productsId === item.productid){
      maching=item
    }
  })

  if(maching){
    maching.qountity++;
  }
  else if(!maching){

    cart.push({
      productid:productsId,
      qountity:selectvalue
    })
  }
  console.log(cart.qountity)
}