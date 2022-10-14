import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className='p-4 bg-gray-800 text-gray-100'>
        <div className='container flex justify-between h-10 mx-auto'>
          <Link
            rel='noopener noreferrer'
            to={"/"}
            aria-label='Back to homepage'
            className='flex items-center p-2'
          >
            <img
              className='w-44'
              src='https://easyfashion.com.bd/wp-content/uploads/2021/04/Easy-Logo-Vertical-web-2.png'
              alt=''
            />
          </Link>
          <ul className='items-stretch hidden space-x-3 lg:flex'>
            {data.map((el) => (
              <li key={el} className='flex'>
                <Link
                  rel='noopener noreferrer'
                  to={el === "home" ? "" : el}
                  className={`${
                    pathname === `/${el}` || (pathname === "/" && el === "home")
                      ? "border-b-2"
                      : ""
                  } flex items-center px-4 -mb-1  border-transparent text-blue-400 border-blue-400 capitalize`}
                >
                  {el}
                </Link>
              </li>
            ))}
          </ul>
          <div className='items-center flex-shrink-0 hidden lg:flex'>
            <button className='self-center px-8 py-3 rounded'>Sign in</button>
            <button className='self-center px-8 py-3 font-semibold rounded bg-blue-400 text-gray-900'>
              Sign up
            </button>
          </div>
          <button className='p-4 lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6 text-gray-100'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const data = ["home", "products", "cart", "contact", "about"];
