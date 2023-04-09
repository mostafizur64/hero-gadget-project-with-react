import React, { useContext, useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../utilities/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';

const Cart = () => {
    // const {cartArray}  = useLoaderData()
    const [cart,setCart] = useContext(CartContext)
    console.log(cart);
    let  total =0;
    // if(cartArray.length>0){
    //     cartArray.map(item=>{
    //         total+=item.price*item.quantity
    //     });
    // }
    if(cart.length>0){
        for(const product of cart){
            total += product.price*product.quantity;
        } 
    }
    // remove a specific item form shopping cart
const handleToRemoveFromCart = (id) =>{
    const remaining = cart.filter(product=>product.id !== id);
    setCart(remaining);
    removeFromDb(id)
    return toast.error('Remove From Cart! 🔥')
}
    
    // place order button handler
    const orderHandler = ()=>{
        if(cart.length>0){
            setCart([]);
            deleteShoppingCart();
            return toast.success('Order successfully 👍')
        }
        return toast.error('Cart is empty 🔥')
    }
    // delete/clear shoppin cart 
    const deleteCart = ()=>{
        if(cart.length>0){
            setCart([]);
            deleteShoppingCart();
            return toast.success('Order Placed! 👍')
        }
        return toast.error('Cart is empty 🔥')
    }
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold '>
                    {cart.length?'Review Cart Item' : 'Cart is EMPTY!!'} 
                  
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {cart.map(product=><CartItem
                    key={product.id}
                    product={product}
                    handleToRemoveFromCart={handleToRemoveFromCart}
                    ></CartItem>)}
                </ul>
                <div className='space-y-1 text-right'>
                    <p>Total Amount: <span className='font-semibold'>${total}</span> </p>
                    <p className='text-sm text-gray-400'>Not including taxes and shipping costs</p>
                </div>
                <div className='flex justify-end space-x-4'>
                  {
                    cart.length>0 ? <button onClick={deleteCart} className='btn-primary'>Clear Cart</button>
                    : <Link to='/shop'><button className='btn-primary'>Back To Shop</button></Link>
                  }
                    <button onClick={orderHandler} className='btn-outlined'>Place Order</button>
                </div>
            </div>
       
        </div>
    );
};

export default Cart;