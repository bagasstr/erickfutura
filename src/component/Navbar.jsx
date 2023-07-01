import { nav_link } from '../data/data'
import { Link } from 'react-router-dom'
import { LuMenu } from 'react-icons/lu'
import { useState } from 'react'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='w-full fixed top-0 z-10 bg-white shadow-md'>
      <div className='desktop:max-w-[1024px] desktop:mx-auto py-6 mobile:px-4 tablet:px-8 flex justify-between items-center'>
        <div className='logo'>
          <a href='/'>
            <img
              src='/logo.png'
              alt=''
              className='w-[300px] mobile:w-[170px] tablet:w-[250px]'
            />
          </a>
        </div>
        <div className='cursor-pointer' onClick={() => setMenu(!menu)}>
          <LuMenu className='ml-9 text-xl desktop:hidden' />
        </div>
        <div
          className={`desktop:flex justify-between items-center mobile:absolute mobile:w-full mobile:bg-primary mobile:left-0 mobile:top-[4.2rem] mobile:p-4 ${
            menu ? 'block' : 'hidden'
          }`}>
          <ul className='desktop:flex desktop:gap-x-10 '>
            {nav_link.map((result, index) => (
              <li key={index} className=''>
                <Link
                  onClick={() => setMenu(!menu)}
                  to={result.path}
                  className=' mobile:text-white  font-medium hover:text-primary'>
                  {result.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
