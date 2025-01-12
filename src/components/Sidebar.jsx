import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`bg-white w-[15%] h-screen fixed top-0 pt-20 pl-[2%] ${sidebar? '': 'w-[5%]'}`}>
      <div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.homeIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Home</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.game_icon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Gaming</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.automobilesIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Automobiles</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.sportsIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Sports</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.entertainmentIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Entertainment</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.techIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Technology</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.musicIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Music</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.blogsIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>Blogs</p>
        </div>
        <div className='flex items-center gap-3 mb-5'>
          <img src={assets.newsIcon} className='w-5'/>
          <p className={`${sidebar? '':'hidden'}`}>News</p>
        </div>
        <hr className={`w-[85%] ${sidebar? '':'mb-5 w-1/2'}`} />
      </div>
      <div>
        <h1 className={`${sidebar? '':'hidden'} font-semibold my-5`}>Subscriptions</h1>
        <div className='flex gap-3 mb-3'>
          <img src={assets.jackIcon} className='w-6 rounded-full'/>
          <p className={`${sidebar? '': 'hidden'}`}>Carry</p>
        </div>
        <div className='flex gap-3 mb-3'>
          <img src={assets.simonIcon} className='w-6 rounded-full'/>
          <p className={`${sidebar? '': 'hidden'}`}>MrBeast</p>
        </div>
        <div className='flex gap-3 mb-3'>
          <img src={assets.tomIcon} className='w-6 rounded-full'/>
          <p className={`${sidebar? '': 'hidden'}`}>Flying Beast</p>
        </div>
        <div className='flex gap-3 mb-3'>
          <img src={assets.meganIcon} className='w-6 rounded-full'/>
          <p className={`${sidebar? '': 'hidden'}`}>5-Minutes Crafts</p>
        </div>
        <div className='flex gap-3 mb-3'>
          <img src={assets.cameronIcon} className='w-6 rounded-full'/>
          <p className={`${sidebar? '': 'hidden'}`}>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar