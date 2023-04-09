import { getStoredCart } from "../utilities/fakeDb";
export const ProductAndCartData = async () => {
    const productData = await fetch('products.json');
    const products =await productData.json();
    const saveCart = getStoredCart()
    let cartArray = [];

    for (const id in saveCart) {
        const foundProduct = products.find(product => product.id === id);
        if (foundProduct) {
            foundProduct.quantity = saveCart[id];
            cartArray.push(foundProduct);

        }
    }
    return {cartArray,products};

}