import React from 'react'

const Skill_detail = ({info}) => {
  return (
    <div className='skill_detail'>
        <div className='sd_title'>{info[0]}</div>
        <hr></hr>
        <div className='sd_img'>
            <img src={info[1]}></img>
        </div>

    </div>
  )
}

export default Skill_detail