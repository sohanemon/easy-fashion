import { useContext } from "react";
import { CartContext } from "../../App";
import Products from "./Products";

const ProductPage = () => {
  const { cart } = useContext(CartContext);
  const addedProduct = cart.reduce((p, c) => p + c.quantity, 0);
  const totalPrice = cart.reduce((p, c) => p + c.quantity * c.price, 0);
  const tax = (totalPrice * 0.1).toFixed(2);

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <Products />
      </div>
      <div className='col-span-3 bg-gray-200 text-gray-900 '>
        <div className='sticky top-0'>
          <h1 className='text-center text-2xl font-semibold mt-5 '>Summary</h1>
          <div className='grid grid-cols-2 p-10 text-gray-700 '>
            <p>Product added</p>
            <p className='justify-self-end text-gray-900 font-semibold'>
              {addedProduct}
            </p>
            <p>Total price</p>
            <p className='justify-self-end text-gray-900 font-semibold'>
              {totalPrice}$
            </p>
            <p>TAX</p>
            <p className='justify-self-end text-gray-900 font-semibold'>
              {tax}$
            </p>
            <p className='text-xl'>Grand total</p>
            <p className='justify-self-end text-gray-900 font-semibold text-xl'>
              {totalPrice + tax}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
