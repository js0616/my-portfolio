import React, { useState } from 'react'
import Project_modal from './Project_modal'
import { MdKeyboardArrowDown  , MdKeyboardArrowUp   } from "react-icons/md";

const Project_detail = ({info}) => {
    // console.log(info)

    const [isOpen, setOpen] = useState(false)

    const modalTogle = ()=>{
      isOpen ? setOpen(false) : setOpen(true)
    }

    let img_title = './img/' + info.pd_btn_more[0] + '/main.png'
    
  return (
    <div className='project_detail'>
        <div className='pd_title'>
          <div style={{fontSize:'40px', fontWeight:'bold'}}>{info.pd_title[0]}</div>
          <div style={{fontSize:'16px', color:'gray'}}>{info.pd_title[1]} </div>
          
        </div>
        

        <div className='pd_contents'>

          {/* 프로젝트 이미지 */}
          <div className='pd_img'>
            <img src={img_title}></img>
          </div>

          {/* 프로젝트 설명 1 */}
          <div className='pd_text '>
            <span style={{fontWeight:'bold'}}>{info.pd_text[0]}</span>
            {info.pd_text[1]} <br /><br />
            {info.pd_text[2]} <br /><br />
            
            <span style={{fontWeight:'bold'}}> {info.pd_myjob}</span>
          </div>

          {/* 프로젝트 설명 2 */}
          <div className='pd_setting'>
            <table>
              <tbody>
              {info.pd_setting.map((item,idx)=>(
                <tr key={idx}>
                  <td>• {item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
              ))}
              </tbody>
            </table>

            {/* 상세 버튼 */}
          <div className='pd_btn'>
            <div className='pd_btn_more'><button onClick={modalTogle}> {isOpen ? <div>접기 <MdKeyboardArrowUp /> </div>  : <div> 펼치기 < MdKeyboardArrowDown  /></div>   }  </button></div>
            <div className='pd_github'><a href={info.pd_github} target='blank'><img src='./img/icon_github.png'></img></a></div>
          </div>
          </div>
        </div>
        
        {/*  모달 */}
        <div>
          {isOpen && <Project_modal modal = {info.pd_btn_more} video_url = {info.pd_video_path} />}

        </div>



    </div>
  )
}

export default Project_detail