import React from 'react';
import Addcart from './Addcart';

const Nav = (props) => {
  return (
    <>
      <nav className="flex flex-col  sticky top-0 z-20 bg-white">
        <div className="flex sm:justify-around">
          <div className="flex  sm:h-5 sm:w-1/3 sm:relative left-11">
            <img src="/src/assets/32027446_7889361.jpg" className='h-14  pl-10 mt-1' alt="" />
          </div>
          <div className="invisible sm:visible sm:flex w-2/3 m-2 justify-around items-center ">
            <span className="sm:invisible sm:h-8 sm:w-4 sm:material-symbols-outlined">
              menu
            </span>
            <div className="hidden sm:flex items-start invisible sm:visible gap-16">
              <p >Home</p>
              <p >About</p>
              <p >Products</p>
              <p >Contact</p>
            </div>
            <div className="flex gap-7 font-Saira">
              <div className='relative flex  '>
                <span className="material-symbols-outlined hover:bg-gray-200 cursor-pointer hover:rounded-full visible"
                  onClick={() => {
                    const addcart = document.querySelector('.Addcart')

                    addcart.classList.contains("invisible") ? addcart.classList.remove("invisible") : addcart.classList.add("invisible")
                    { }
                  }}

                >
                  shopping_cart
                </span>
                <p className='absolute text-sm bottom-4 flex flex-col justify-center bg-green-400 left-3 border border-black rounded-full w-5 h-5 text-center'>{props.recivevalueAddcartquantity}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-12 sm:mt-4 sm:h-12 sm:z-0 bg-gradient-to-tr from-blue-500 from-15% via-violet-400 via-45% to-blue-400 to-90%">

        </div>
      </nav>




    </>
  );
};

export default Nav;