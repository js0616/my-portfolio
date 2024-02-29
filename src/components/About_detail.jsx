import React from 'react'

const About_detail = ({info}) => {

  return (
    <div className='about_detail'>
        <div className='ad_img'>{info[0]}</div>
        <div className='ad_content'>
            <div className='ad_title'>{info[1][0]}</div>
            <div className='ad_info'>{info[1][1]}</div>
            {info[1].length > 2 ? <div className='ad_info'>{info[1][2]}</div> : ""}
        </div>
    </div>
  )
}

export default About_detail