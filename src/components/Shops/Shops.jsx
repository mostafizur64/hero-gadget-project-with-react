import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDb } from '../../utilities/fakeDb';
import { CartContext, ProductContext } from '../../App';
import { toast } from 'react-hot-toast';

const Shops = () => {
    
const products =useContext(ProductContext)
const [cart,setCart] = useContext(CartContext)

    // handle addToCard Button
   
    const handleAddToCard = product => {
        let newCart =[];
        const exists = cart.find(existsProduct=>existsProduct.id === product.id);

        if(!exists){
            product.quantity = 1;
            newCart=[...cart, product];
        }
        else{
            const rest =cart.filter(existsProduct=>existsProduct.id !== product.id);
            exists.quantity = exists.quantity + 1
            newCart=[...rest, exists];

        }
        setCart(newCart)
        // console.log(id);
        addToDb(product.id)
        return toast.success('Product added !!')
    }
    return (
        <div className='product-container'>
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCard={handleAddToCard}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shops;