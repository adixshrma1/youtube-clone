import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {categoryId, videoId} = useParams();
  return (
    <div className='flex px-[1%] xl:px-[5%] pt-[2%]'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>  
    </div>
  )
}

export default Video