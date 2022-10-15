import { useEffect, useState } from "react";

const InfoBox = () => {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsShown(false);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    isShown && (
      <>
        <div className='  shadow' role='alert'>
          {" "}
          <div className='flex max-w-xl w-full left-1/2 -translate-x-1/2 fixed bottom-0 border'>
            {" "}
            <div className='bg-blue-500 w-16 text-center p-2'>
              {" "}
              <div className='flex justify-center h-full items-center'>
                {" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {" "}
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />{" "}
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div className='bg-white border-r-4 border-blue-400 w-full p-4'>
              {" "}
              <div>
                {" "}
                <p className='text-gray-600 font-bold'>Limited Offer</p>{" "}
                <p className='text-gray-600 text-sm'>
                  Use "EmonMan" promo code to get 99% discount. 🚀🚀
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </>
    )
  );
};

export default InfoBox;
