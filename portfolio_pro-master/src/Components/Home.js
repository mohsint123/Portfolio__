import React from 'react'
import {AiFillFacebook, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='h-[91vh] flex justify-center text-center self-center'>
      <div className='self-center'>
        <h1 className='text-4xl font-bold font-sans py-10'>Mohsin Tariq</h1>
        <p className='text-xl font-medium'>I'm A Developer</p>
      </div>
      <div className='absolute flex text-center sm:block bottom-12 left-12 text-3xl'>
        <a className='hover:text-amber-300 px-2' href='https://github.com/mohsint123'><AiFillGithub/></a>
        <a className='hover:text-amber-300 px-2' href='https://www.instagram.com/m.mohsint/'><AiOutlineInstagram/></a>
        <a className='hover:text-amber-300 px-2' href='https://www.facebook.com/mohsin.tariq.986'><AiFillFacebook/></a>
      </div>
    </div>
  )
}

export default Home