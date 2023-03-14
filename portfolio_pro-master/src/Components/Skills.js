import { Progress } from '@mantine/core'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineHorizontalRule } from 'react-icons/md'

const Skills = () => {
  return (
    <div className='md:h-[91vh] h-full px-8'>
      <div className='text-center'>
        <p className='text-stone-600'>See my Skills</p>
        <h1 className='text-3xl sm:text-4xl font-semibold underline text-amber-300'>
          Skills & Experience
        </h1>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col sm:flex-row justify-center pt-24  text-left'>
          <div className='sm:w-2/5 pt-4 sm:-ml-5'>

            <p className='my-2'>
              Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
            </p>
            <p className='my-2'>
              I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
            </p>
            <p className='my-2'>
              I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
            </p>

          </div>
          <div className='sm:w-2/4 w-full'>
            <div className='pb-6'>
              <h3 className='text-xl font-medium text-center text-white my-1'>HTML</h3>
              <Progress color="yellow" size="xs" value={75} />
              <h3 className='text-xl font-medium text-center text-white my-1'>React</h3>
              <Progress color="yellow" size="xs" value={80} />
              <h3 className='text-xl font-medium text-center text-white my-1'>CSS</h3>
              <Progress color="yellow" size="xs" value={85} />
              <h3 className='text-xl font-medium text-center text-white my-1'>Tailwind</h3>
              <Progress color="yellow" size="xs" value={90} />
            </div>
            <div className='gap-2 pb-10 lg:flex'>
              <div className='w-full bg-zinc-800 rounded-md lg:w-2/4 my-2'>
                <h1 className='p-4 text-xl text-white'>Frontend developer</h1>
                <p className='px-4 pb-4'>Award-winning Content Marketing Agency specialises in creating and sharing engaging content.</p>
              </div>
              <div className='w-full bg-zinc-800 rounded-md lg:w-2/4 my-2'>
                <h1 className='p-4 text-xl text-white'>Full stack developer</h1>
                <p className='px-4 pb-4'>Creative brand, website design and development studio that can bring your online business dreams to life</p>
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

export default Skills