const addToDb = id =>{
   let shoppingCart = {};
//    get previous data form localStorage 
   const storedCart =localStorage.getItem('shopping-cart');
   if(storedCart){
    shoppingCart=JSON.parse(storedCart);
   }
//    add quantity 
let quantity = shoppingCart[id];
if(quantity){
     quantity = quantity+1;
    shoppingCart[id] =quantity
}
else{
    shoppingCart[id]=1;
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));


}




// get stored data form cart 
const getStoredCart = () =>{
    let shoppingCart={};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);

    }
    return shoppingCart;

}


// remove a specific element from local storage 
const removeFromDb = id =>{
// get previous data form localStorage
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    }
}
}
// clear all data form localStorage 
const deleteShoppingCart =()=>{
    localStorage.removeItem('shopping-cart');

}

    export{addToDb, getStoredCart,removeFromDb,deleteShoppingCart}