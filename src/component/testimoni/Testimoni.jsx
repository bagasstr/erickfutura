import React from 'react'
import CardTestimoni from './CardTestimoni'

const Testimoni = () => {
  return (
    <div className='w-full py-[7rem]'>
      <div className='containers'>
        <div className='mb-[5rem]'>
          <h1 className='text-center font-bold text-2xl text-black/90'>
            Testimoni Client
          </h1>
          <h1 className='text-center text-black/60 mt-3 text-sm'>
            Testimoni client yang sudah beli property dari kami
          </h1>
        </div>
        <CardTestimoni />
      </div>
    </div>
  )
}

export default Testimoni
