import { useState } from "react";

const Card = ({ _id, picture, name, price, gender, index }) => {
  //   const [showImage, setShowImage] = useState(false);
  return (
    <>
      {/* {showImage ? (
        <div className='fixed grid place-content-center'>
          <img
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
            className='w-96 h-96 border rounded-lg '
            src={picture}
            alt={name}
          />
        </div>
      ) : null} */}
      <div className='max-w-[250px] mt-20 rounded-md shadow-md  text-gray-900'>
        <img
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
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
