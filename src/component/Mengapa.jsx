import React from 'react'
import { BsFillHousesFill, BsShieldFillCheck } from 'react-icons/bs'
import { IoPricetags } from 'react-icons/io5'
import { GiReceiveMoney } from 'react-icons/gi'

const Mengapa = () => {
  return (
    <div className='w-full py-[7rem] bg-bg/10 mobile:px-4 mobile:py-16'>
      <div className='containers'>
        <div className='flex justify-between items-center mobile:flex-col'>
          <div className='desktop:w-[25rem]'>
            <h1 className='text-3xl mobile:text-2xl font-bold text-primary/90'>
              Why Choose Us
            </h1>
            <p className='text-black/70 mt-4 text-base mobile:text-sm'>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href='/product'>
              <button className='bg-primary mobile:text-base hover:bg-secc px-4 py-2 text-white text-lg font-medium rounded-md mt-9'>
                Buy Now
              </button>
            </a>
          </div>
          <div className='grid desktop:grid-cols-desktop desktop:gap-8 mobile:gap-y-8 mobile:mt-10 mobile:grid-cols-1 mobile:justify-items-center mobile:text-center'>
            <div className='w-[250px] h-fit rounded-lg desktop:p-4 card '>
              <div className='p-3 bg-bg w-fit rounded-md text-white text-xl mobile:mx-auto'>
                <BsFillHousesFill />
              </div>
              <h1 className='font-bold text-lg text-primary/90 my-2'>
                01.Property Insurance
              </h1>
              <p className='text-black/70 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                esse est ipsum vitae quos fugiat! Quo doloribus molestiae
                officiis ipsam iusto repudiandae sapiente mollitia aliquam.
              </p>
            </div>
            <div className='w-[250px] h-fit rounded-lg desktop:p-4 card '>
              <div className='p-3 bg-bg w-fit rounded-md text-white text-xl mobile:mx-auto'>
                <IoPricetags />
              </div>
              <h1 className='font-bold text-lg text-primary my-2'>
                02.Tax Advancement
              </h1>
              <p className='text-black/70 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                esse est ipsum vitae quos fugiat! Quo doloribus molestiae
                officiis ipsam iusto repudiandae sapiente mollitia aliquam.
              </p>
            </div>
            <div className='w-[250px] h-fit rounded-lg desktop:p-4 card '>
              <div className='p-3 bg-bg w-fit rounded-md text-white text-xl mobile:mx-auto'>
                <GiReceiveMoney />
              </div>
              <h1 className='font-bold text-lg text-primary my-2'>
                03.Lowest Commission
              </h1>
              <p className='text-black/70 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                esse est ipsum vitae quos fugiat! Quo doloribus molestiae
                officiis ipsam iusto repudiandae sapiente mollitia aliquam.
              </p>
            </div>
            <div className='w-[250px] h-fit rounded-lg desktop:p-4 card '>
              <div className='p-3 bg-bg w-fit rounded-md text-white text-xl mobile:mx-auto'>
                <BsShieldFillCheck />
              </div>
              <h1 className='font-bold text-lg text-primary my-2'>
                04.Most Trusted Service
              </h1>
              <p className='text-black/70 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                esse est ipsum vitae quos fugiat! Quo doloribus molestiae
                officiis ipsam iusto repudiandae sapiente mollitia aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mengapa
