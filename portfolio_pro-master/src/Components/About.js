import { Divider } from '@mantine/core'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import {MdOutlineHorizontalRule} from 'react-icons/md';

const About = () => {
  return (
    <div className='lg:h-full md:pb-10 pb-8'>
      <div className='flex flex-col h-full sm:h-screen justify-center text-center sm:px-24 md:px-48 px-8 '>
        <div className='pt-10'>
          <p className='text-stone-600'>Let me Introduce myself</p>
          <h1 className='text-3xl font-sans font-semibold py-6 underline text-amber-300'>About Me</h1>
        </div>
        <div className='rounded-full flex justify-center'>
          <img className='rounded-full w-64' src='https://i.pinimg.com/originals/e6/fe/04/e6fe04e68f540ed7a8b3484cc617e3c6.jpg' alt='.' />
        </div>
        <div className='flex flex-col text-left p-2'>
          <p className='my-2 text-amber-300'>Nice to Meet You</p>
          <h3 className='my-2 text-xl font-medium'>Frontend Web Developer who creates amazing digital experiences!</h3>
          <p className='my-2'>My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.</p>
        </div>
        <Divider className='mt-3' size="sm" />
        <div className='px-3 mt-3 text-left'>
          <div>
            <p className='py-2'><span className='w-20 inline-block'>Name:</span>Mohsin Tariq</p>
            <p className='py-2'><span className='w-20 inline-block'>Email:</span>m.mohsintariq544@gmail.com</p>
            <p className='py-2'><span className='w-20 inline-block'>Location:</span>Islamabad, Pk</p>
            <p className='py-2'><span className='w-20 inline-block'>Availablity:</span>Open for Work</p>
          </div>
          <div className='flex justify-between'>
            <div>
              <button className='rounded-full bg-amber-300 text-gray-600 my-2 sm:p-4 p-2'>Download CV</button>
            </div>
            <div className='relative flex right-end text-2xl mt-7'>
              <MdOutlineHorizontalRule className=''/>
              <a className='hover:text-amber-300 px-2' href='https://github.com/mohsint123'><AiFillGithub /></a>
              <a className='hover:text-amber-300 px-2' href='https://www.instagram.com/m.mohsint/'><AiOutlineInstagram /></a>
              <a className='hover:text-amber-300 px-2' href='https://www.facebook.com/mohsin.tariq.986'><AiFillFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About