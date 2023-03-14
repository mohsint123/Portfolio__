import React from 'react'

const Portfolio = () => {
  return (
    <div className='h-full w-full px-10 pb-10 flex flex-col md:pb-32'>
      <div className='text-center'>
        <p className='py-2 text-stone-600'>View my Work</p>
        <h1 className='text-3xl pb-10 text-amber-300 font-medium underline'>Portfolio</h1>
      </div>
      <div className='flex flex-col md:flex-row md:py-2 py-4'>
        <img className="py-2 md:w-2/4 md:pr-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
        <img className="py-2 md:w-2/4 md:pl-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
      </div>
      <div className='flex flex-col md:flex-row md:py-2 py-4 '>
        <img className="py-2 md:w-2/4 md:pr-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
        <img className="py-2 md:w-2/4 md:pl-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
      </div>
      <div className='flex flex-col md:flex-row md:py-2 py-4'>
        <img className="py-2 md:w-2/4 md:pr-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
        <img className="py-2 md:w-2/4 md:pl-2" src='https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg' alt='' />
      </div>


    </div>
  )
}

export default Portfolio