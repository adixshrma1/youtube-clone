import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'

const Video = () => {
  return (
    <div className='flex px-[5%] pt-[2%]'>
      <PlayVideo/>
      <Recommended/>  
    </div>
  )
}

export default Video