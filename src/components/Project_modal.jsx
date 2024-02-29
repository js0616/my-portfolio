import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew  , MdArrowForwardIos  } from "react-icons/md";

const Project_modal = ({modal, video_url}) => {
    
    let imgList = []
    const [imgArray, setImgarray] = useState([])

    const [number, setNumber] = useState(0)

    const handleLeft = ()=> {
        video_url.length === 0 
        ? number == 0 ? setNumber(modal[1]-1) : setNumber(number-1)
        : number == 0 ? setNumber(modal[1]) : setNumber(number-1)
    }
    const handleRight = () => {
        video_url.length === 0 
        ? number == modal[1]-1 ? setNumber(0) : setNumber(number+1)   
        : number == modal[1] ? setNumber(0) : setNumber(number+1)   
    }


    useEffect(()=>{
        imgList = []
        if (video_url.length !==0) {
            imgList.push(video_url)
        }
        
        for (let i = 1 ; i <= modal[1] ; i++){
            imgList.push("./img/"+ modal[0] + "/" + i + ".png")
        }
        setImgarray(imgList)
        
    },[])

        
  return (
    
    <div className='project_modal'>
        <div className='modal_contain'>
            <button onClick={handleLeft} className='arrow'> <MdArrowBackIosNew  /> </button>
            {video_url.length === 0 ? <img src={imgArray[number]} ></img> :            
            number === 0 
            ?   <video controls={true} muted>
                    <source src={video_url} type="video/mp4" />
                </video>
            : <img src={imgArray[number]} ></img> }
            
            <button onClick={handleRight} className='arrow'><MdArrowForwardIos /></button>
        </div>
        {video_url.length === 0 ? <div className='modal_page_number'> {number+1} / {imgArray.length} </div> : <div className='modal_page_number'>  {number+1} / {imgArray.length} </div> }

    </div>
  )
}

export default Project_modal