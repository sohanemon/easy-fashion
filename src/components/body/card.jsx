import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../App";
import { addToLs } from "../../util/local-storage";
import "react-toastify/dist/ReactToastify.css";
const Card = (args) => {
  const { _id, picture, name, price, gender, index } = args;
  const { setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    setCart((p) => {
      let matchedProduct = p?.find((el) => el._id === _id);
      if (matchedProduct) {
        let quantity = matchedProduct.quantity + 1;
        let otherProducts = p?.filter((el) => el._id !== _id);
        addToLs([...otherProducts, { ...args, quantity }]);
        return [...otherProducts, { ...args, quantity }];
      } else {
        addToLs([...p, { ...args, quantity: 1 }]);
        return [...p, { ...args, quantity: 1 }];
      }
    });
    toast("added successfully");
  };

  return (
    <>
      <div className='max-w-[250px] mt-20 rounded-md shadow-md  text-gray-900'>
        <img
          src={picture}
          alt=''
          className=' object-cover w-full rounded-t-md h-52 '
        />
        <div className='flex flex-col justify-between p-6 space-y-2'>
          <div className='space-y-2'>
            <h2 className='text-xl font-semibold tracking-wide'>{name}</h2>
            <p className='text-gray-700'>Price: {price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            type='button'
            className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-gray-900'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
