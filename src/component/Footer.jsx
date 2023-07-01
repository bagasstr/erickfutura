import React from 'react'
import { HiPhone, HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <>
      <div className='bg-bg py-[7rem] mobile:px-2'>
        <div className='containers'>
          <div className='grid grid-cols-2 items-center mobile:grid-cols-1'>
            <dv className=''>
              <a href='#home'>
                <img
                  src='/logoPutih.png'
                  alt='logo footer'
                  className='w-[320px] mobile:w-[250px]'
                />
                <hr className='mobile:mt-8 desktop:mt-8 desktop:w-[320px]' />
              </a>
              <div className='mt-8 space-y-4'>
                <div className='flex items-center gap-x-2'>
                  <HiPhone className='text-white' />
                  <h1 className='text-white text-sm font-medium'>
                    (021)29032162
                  </h1>
                </div>
                <div className='flex items-center gap-x-2'>
                  <HiMail className='text-white' />
                  <h1 className='text-white text-sm font-medium'>
                    erickFutura@property.com
                  </h1>
                </div>
              </div>
            </dv>
            <div className='flex justify-around mt-8 mobile:flex-col mobile:space-y-7'>
              <div className='space-y-2'>
                <h1 className='font-semibold text-white text-xl'>About</h1>
                <ul className='space-y-4 mt-4'>
                  <li>
                    <a href='' className=''>
                      <h1 className='text-white text-sm font-medium'>
                        Profile Agent
                      </h1>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-semibold text-white text-xl'>Explorer</h1>
                <ul className='space-y-4 mobile:space-y-2 mt-4'>
                  <li>
                    <a href='' className=''>
                      <h1 className='text-white text-sm font-medium'>
                        Primary Property
                      </h1>
                    </a>
                  </li>
                  <li>
                    <a href='' className=''>
                      <h1 className='text-white text-sm font-medium'>
                        Secondary Property
                      </h1>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='containers text-center py-4 mobile:px-2'>
        <h1 className='text-black/75 mobile:text-sm'>
          © Copyright{' '}
          <a href='' className='text-primary'>
            Erick futura property
          </a>{' '}
          All rights reserved
        </h1>
      </div>
    </>
  )
}

export default Footer
