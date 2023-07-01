import React from 'react'
/* Import Icon */
import rent from '../assets/001-rent.png'
import buy from '../assets/002-buy.png'
import sale from '../assets/003-sale.png'
import renov from '../assets/004-house.png'

const Service = () => {
  return (
    <div className='w-full py-[7rem] bg-bg/10 mobile:px-2'>
      <div className='containers'>
        <div className='text-center mb-10'>
          <h1 className='font-bold text-3xl text-black/90'>Service</h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ducimus.
          </h1>
        </div>
        <div className='flex desktop:space-x-4 py-16 mobile:py-5 mobile:flex-col mobile:items-center mobile:gap-y-8'>
          <div className='w-[300px] rounded-xl bg-white shadow-md p-4 flex flex-col items-center text-center'>
            <img src={sale} alt='' className='w-[100px] mb-2' />
            <h1 className='font-semibold text-xl text-black/90 mb-2'>
              Sale Propery
            </h1>
            <h1 className='text-black/70 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              tempore modi repellendus quaerat reprehenderit aperiam minima
              dicta quibusdam alias eos.
            </h1>
          </div>
          <div className='w-[300px] rounded-xl bg-white shadow-md p-4 flex flex-col items-center text-center'>
            <img src={rent} alt='' className='w-[100px] mb-2' />
            <h1 className='font-semibold text-xl text-black/90 mb-2'>
              Rent Propery
            </h1>
            <h1 className='text-black/70 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              tempore modi repellendus quaerat reprehenderit aperiam minima
              dicta quibusdam alias eos.
            </h1>
          </div>
          <div className='w-[300px] rounded-xl bg-white shadow-md p-4 flex flex-col items-center text-center'>
            <img src={buy} alt='' className='w-[100px] mb-2' />
            <h1 className='font-semibold text-xl text-black/90 mb-2'>
              Buy Propery
            </h1>
            <h1 className='text-black/70 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              tempore modi repellendus quaerat reprehenderit aperiam minima
              dicta quibusdam alias eos.
            </h1>
          </div>
          <div className='w-[300px] rounded-xl bg-white shadow-md p-4 flex flex-col items-center text-center'>
            <img src={renov} alt='' className='w-[100px] mb-2' />
            <h1 className='font-semibold text-xl text-black/90 mb-2'>
              Renovasi Propery
            </h1>
            <h1 className='text-black/70 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              tempore modi repellendus quaerat reprehenderit aperiam minima
              dicta quibusdam alias eos.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
