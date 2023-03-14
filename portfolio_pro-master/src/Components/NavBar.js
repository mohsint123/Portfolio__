import React from 'react'
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
import { GrClose } from "react-icons/gr"
import { VscThreeBars } from 'react-icons/vsc';

const NavBar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='flex justify-between py-6 px-6 sticky top-0'>

      <div className='sm:flex hidden text-center w-screen'>
        <div className='text-white text-3xl font-medium font-serif'>
          <Link className=' hover:text-amber-300' to='/'>Mohsin</Link>
        </div>
        <div className='flex gap-2 justify-end w-full'>
          <Link to='/' className='hover:text-amber-300'>Home</Link>
          <Link to='/about' className='hover:text-amber-300'>About</Link>
          <Link to='/skills' className='hover:text-amber-300'>Skills</Link>
          <Link to='/portfolio' className='hover:text-amber-300'>Portfolio</Link>
          <Link to='/contact' className='hover:text-amber-300'>Contact</Link>
        </div>
      </div>

      <div className='text-gray-400 flex justify-center sm:hidden'>
        <div className='text-white text-xl ml-4 py-2 font-medium font-serif'>
          <Link to='/'>Mohsin</Link>
        </div>
        <Drawer
          opened={opened}
          onClose={close}
          // title={<GiMoebiusTriangle className='text-4xl ml-2' />}
          overlayProps={{ opacity: 0.4, blur: 3 }}
          padding={0}
          withCloseButton={false}
        >
          <div className='w-full flex flex-col h-screen bg-gray-500 m-0'>
            <div className='text-right mt-2 -mr-16'>
              <button className='p-3 text-white text-center w-32' onClick={close}><GrClose className='flex justify-end text-xl' /></button>
            </div>
            <div className='text-black text-center text-2xl py-2 font-medium font-serif'>
              <Link to='/'>Mohsin</Link>
            </div>
            <div className='flex flex-col text-center gap-2 '>
              <Link to='/' className='hover:text-amber-300'>Home</Link>
              <Link to='/about' className='hover:text-amber-300'>About</Link>
              <Link to='/skills' className='hover:text-amber-300'>Skills</Link>
              <Link to='/portfolio' className='hover:text-amber-300'>Portfolio</Link>
              <Link to='/contact' className='hover:text-amber-300'>Contact</Link>
            </div>
          </div>
        </Drawer>
      </div>
      <Group position="center">
        <Button className='sm:hidden flex justify-center' onClick={open}><VscThreeBars /></Button>
      </Group>

    </div>
  )
}

export default NavBar