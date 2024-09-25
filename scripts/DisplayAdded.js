

export function DisplayAded(productsId){
  let addedEL= document.querySelectorAll(`.js-added-${productsId}`);
   addedEL.forEach((addedItem)=>{
     addedItem.classList.add('js-added-to-cart')
     });
 setTimeout(()=>{
  addedEL.forEach((addedItem)=>{
     addedItem.classList.remove('js-added-to-cart')
     })
 },2000)
 
 };