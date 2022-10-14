import { useContext } from "react";
import { CartContext } from "../../App";
import cartCalculation from "../../util/cart-calculation";
import Products from "./Products";

const ProductPage = () => {
  const { cart } = useContext(CartContext);
  const { totalPrice, tax, addedProduct, grandTotal } = cartCalculation(cart);

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
              {grandTotal}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
