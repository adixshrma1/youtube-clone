import React from 'react'
import { assets } from '../assets/assets'
import video1 from '../assets/video.mp4'

const PlayVideo = () => {
  return (
    <div className='basis-[69%] px-2'>
        <video className='w-full rounded-2xl' src={video1} controls autoPlay muted></video>
        <h3 className='text-2xl font-semibold my-3'>Best Youtube Channel to Learn Web Development</h3>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img className='w-12 rounded-full' src={assets.jackIcon} />
                <div>
                    <p className='text-lg font-semibold'>GreatStack</p>
                    <p className='text-sm text-[#5a5a5a]'>1M subscribers</p>
                </div>
                <button className='bg-black text-white font-semibold py-2 px-3.5 rounded-full ml-7'>Subscribe</button>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2 bg-[#f2f2f2] py-2 px-4 rounded-full'>
                    <img className='w-6' src={assets.likeIcon} />
                    <p>17K</p>
                    <div className='w-[1px] h-5 bg-gray-700'></div>
                    <img className='w-6' src={assets.dislikeIcon} />
                </div>
                <button className='flex items-center bg-[#f2f2f2] py-2 px-4 rounded-full'><img className='w-6' src={assets.shareIcon} /> Share</button>
                <button className='flex items-center bg-[#f2f2f2] py-2 px-4 rounded-full'><img className='w-6' src={assets.saveIcon} /> Save</button>
            </div>
        </div>
        <div className='my-3 bg-[#f2f2f2] p-2 rounded-xl'>
            <h1 className='font-semibold'>123891 views 2 hours ago</h1><br />
            <p className='text-[#2d2d2d]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta consequuntur porro culpa, qui esse repudiandae atque quis maiores laudantium!</p>
        </div>

        {/* video comments */}
        <div>
            <h4 className='text-2xl font-semibold'>1,140 comments</h4>
            <div className='mt-5 flex items-center gap-3'>
                <img className='w-12 rounded-full' src={assets.user_profile} />
                <div className=''>
                    <h3 className='font-semibold'>Jack Nichole <span className='text-gray-700 text-xs font-light'>1 day ago</span></h3>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quis dolorum dolor dolores, maxime suscipit!</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img className='w-6' src={assets.likeIcon} />
                        <p className='text-sm'>23</p>
                        <img className='w-6' src={assets.dislikeIcon} />
                    </div>
                </div>
            </div>
            <div className='mt-5 flex items-center gap-3'>
                <img className='w-12 rounded-full' src={assets.user_profile} />
                <div className=''>
                    <h3 className='font-semibold'>Jack Nichole <span className='text-gray-500 text-sm'>1 day ago</span></h3>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quis dolorum dolor dolores, maxime suscipit!</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img className='w-6' src={assets.likeIcon} />
                        <p className='text-sm'>23</p>
                        <img className='w-6' src={assets.dislikeIcon} />
                    </div>
                </div>
            </div>
            <div className='mt-5 flex items-center gap-3'>
                <img className='w-12 rounded-full' src={assets.user_profile} />
                <div className=''>
                    <h3 className='font-semibold'>Jack Nichole <span className='text-gray-500 text-sm'>1 day ago</span></h3>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quis dolorum dolor dolores, maxime suscipit!</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img className='w-6' src={assets.likeIcon} />
                        <p className='text-sm'>23</p>
                        <img className='w-6' src={assets.dislikeIcon} />
                    </div>
                </div>
            </div>
            <div className='mt-5 flex items-center gap-3'>
                <img className='w-12 rounded-full' src={assets.user_profile} />
                <div className=''>
                    <h3 className='font-semibold'>Jack Nichole <span className='text-gray-500 text-sm'>1 day ago</span></h3>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quis dolorum dolor dolores, maxime suscipit!</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <img className='w-6' src={assets.likeIcon} />
                        <p className='text-sm'>23</p>
                        <img className='w-6' src={assets.dislikeIcon} />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PlayVideo