import { Input } from '@mantine/core'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { MdOutlineHorizontalRule } from 'react-icons/md'
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='md:h-[91vh] px-5 sm:px-20 md:px-10 '>
      <div className='text-center'>
        <p className='text-stone-600'>Get in Touch</p>
        <h1 className='text-3xl font-semibold text-amber-300 underline py-3'>Contact</h1>
      </div>
      <div className='md:flex'>
        <div className='py-12 md:w-2/4 px-6'>
          <p className='text-lg font-bold'>Message Me</p>
          <Input className='py-2' placeholder='Name'></Input>
          <Input className='py-2' placeholder='Email'></Input>
          <Input className='py-2' placeholder='Subject'></Input>
          <Input className='py-2' placeholder='Message'></Input>
          <button className='px-4 my-2 py-2 text-gray-500 on bg-amber-300 rounded-full'>
            Send Message
          </button>
        </div>
        <div className='pt-10 flex flex-col'>
          <div>
            <h3 className='text-white font-medium text-xl py-2'>Contact Information</h3>
            <p className=''>Open for opportunities. Let's connect and build something awesome together!</p>
          </div>
          <div className='flex'>
            <div className='text-2xl py-2 pr-6 text-amber-300'>
              <FaUserAlt className='my-8' />
              <ImLocation className='my-8' />
              <GrMail className='my-8' />
            </div>
            <div>
              <div className='border-l-2 border-neutral-600 h-5/6'>
                <h1 className='text-white pl-6 mt-6 text-xl font-medium'>Name:</h1>
                <p className='pl-6'>Mohsin Tariq</p>
                <h1 className='text-white pl-6 text-xl mt-2 font-medium'>Location:</h1>
                <p className='pl-6'>Islamabad,PK</p>
                <h1 className='text-white pl-6 text-xl mt-2 font-medium'>Mail:</h1>
                <p className='pl-6'>m.mohsintariq544@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex text-2xl text-center w-full justify-center mt-6 pb-4'>
        <MdOutlineHorizontalRule />
        <a className='hover:text-amber-300 px-2' href='https://github.com/mohsint123'><AiFillGithub /></a>
        <a className='hover:text-amber-300 px-2' href='https://www.instagram.com/m.mohsint/'><AiOutlineInstagram /></a>
        <a className='hover:text-amber-300 px-2' href='https://www.facebook.com/mohsin.tariq.986'><AiFillFacebook /></a>
        <MdOutlineHorizontalRule />
      </div>

    </div>
  )
}

export default Contact