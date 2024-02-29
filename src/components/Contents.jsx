import React, { forwardRef, useEffect, useState } from 'react'
import About_detail from './About_detail'

// icon
import { FaRegUser, FaRegAddressCard     } from "react-icons/fa";
import { BsCake2  } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import Skill_detail from './Skill_detail';
import Project_detail from './Project_detail';

// data.json


const Contents = forwardRef((props, ref) => {

    const [my_about, setMyabout] = useState([])
    const [my_skill,setMyskill] = useState([])
    const [my_project, setMyproject] = useState([])

    // tag 는 json 파일에 안들어감 
    let about_icon = [<FaRegUser />,<BsCake2  />, <FaRegAddressCard />, <IoMdPhonePortrait/>, <MdOutlineMail />, <IoSchoolOutline />]

    // useEffect 사용하여 fetch 1회만 하도록 함   -> 5초정도 읽어오는데 시간이 소요됨
    useEffect(()=>{
        fetch('./mydata.json')
        .then(response => response.json())
        .then(data => {
            let temp_ = data.my_about
            setMyabout(temp_.map((item, idx)=> {
                return [about_icon[idx], item]
            }))
            setMyskill(data.my_skill)
            setMyproject(data.my_project)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    },[])
    
    // 변수에서 외부의 json 파일로 대체 
    // const my_about = [
    //     [<FaRegUser />,"이름","이진솔"],
    //     [<BsCake2  />,"생년월일", "1993.06.26"],
    //     [<FaRegAddressCard />, "주소","광주광역시 서구"],
    //     [<IoMdPhonePortrait/>, "전화번호","010-7223-1449"],
    //     [<MdOutlineMail />, "이메일", "wjr4262@naver.com"],
    //     [<IoSchoolOutline />, "학력", "전남대학교","(화학/전기공학)"]
    // ]

    // const my_skill = [
    //     ["Frontend", "./img/skill_1.png"],
    //     ["Backend", "./img/skill_2.png"],
    //     ["Database", "./img/skill_3.png"],
    //     ["AI", "./img/skill_4.png"],
    //     ["ETC", "./img/skill_5.png"],
    // ]

    // const my_project = [
    //     {
    //         pd_title:["Ai-GOODS", "AI 그림을 활용한 개인 굿즈 제작 서비스"],
    //         pd_text : ["생성형 AI를 활용하여 이미지를 생성하고 굿즈를 제작하는 웹 사이트입니다." 
    //                     , " 굿즈를 제작할때 원하는 이미지가 없거나 마음에 드는 이미지를 활용할 방법이 없는 상황을 해결하고자 만들었습니다. "
    //                     , " 첫 프로젝트로 기획, 설계, 구현까지 일련의 과정에 따라 진행하여 전체적인 개발 흐름을 배웠으며 wbs 작성과 github를 사용하여 팀원과의 협업과 소통을 경험해 보았습니다."
    //                 ],
    //         pd_myjob : "Database 설계 및 구현과 Backend 연결 그리고 Frontend 의 일부 페이지를 담당하였습니다.",
    //         pd_setting : [

    //                       ["Frontend", "HTML, CSS, JavaScript"],
    //                       ["Backend", "Node.js, Express.js, Flask"],
    //                       ["Database","MySQL"],
    //                       ["기타", "Karlo API, 아임포트 API, 우편주소 API"],
                          
    //                       ["개발 인원", "5명"],
    //                       ["수행 기간", "2023.07.12 ~ 2023.08.17"],
                          
    //                     ],
    //         pd_btn_more : ["ai-goods", 12], // 폴더이름, 이미지 갯수 
    //         pd_video_path : './img/ai-goods/video.mp4',
    //         pd_github : "https://github.com/js0616/Ai_Goods"
    //     }
    //     ,

    //     {
    //         pd_title:["EYES ON", "열화상 카메라를 활용한 전기설비 이상 예측 시스템"],
    //         pd_text : ["열화상 카메라를 통해 전기설비의 상태를 수집하고 AI로 분석 및 예측하여 이상을 알려주는 웹 사이트입니다." 
    //                     , " 산업시설에서 발생하는 전기설비 사고를 예방하기 위해서 AI 딥러닝 모델을 활용하여 이상 유무 판단 및 상태를 예측하고 웹 페이지에 3D 건물과 그래프를 이용하여 시각화하며 이상 상황 시 페이지 내 알림과 SMS 알림을 통해 신속하게 대처할 수 있는 프로세스를 개발하였습니다."
    //                     , " 기존의 웹 서비스에 추가로 AI 모델을 활용하기 위해서 AI 모델 선정, 데이터 수집, 모델 학습, 검증 등의 과정을 진행하였으며 실시간 영상 딜레이 문제를 해결하기 위해 알고리즘을 개선해 보았습니다.  "
    //                 ],
    //         pd_myjob : "AI 딥러닝 모델 학습 및 Backend 연결을 통해 웹 페이지에 구현 그리고 프로젝트 일정관리와 발표를 하였습니다.",
    //         pd_setting : [["Frontend", "React, three.js"],
    //                       ["Backend", "Node.js, Flask"],
    //                       ["Database","MySQL"],
    //                       ["AI", "Yolov5, LSTM"],
    //                       ["그외 활용", "Tesseract OCR, SOLAPI, SketchUp, blender,"],    

    //                       ["개발 인원", "5명 (팀장)"],
    //                       ["수행 기간", "2023.10.10 ~ 2023.12.03"],                    
    //                     ],
    //         pd_btn_more : ["eyes-on",8],
    //         pd_video_path : './img/eyes-on/video.mp4',
    //         pd_github : "https://github.com/js0616/eyes_on"

    //     } 
    //     ,
    //     {
    //         pd_title:["PORTFOLIO", "개인 포트폴리오"],
    //         pd_text : ["포트폴리오 제작 및 복습하는 의미에서 개인 프로젝트를 진행하였습니다. " 
    //                     , " Github page 를 통해 배포하기 위해서 React 를 사용하여 Frontend 만 구성하였습니다. "
    //                     , " React 의 특징을 살리기 위해서 컴포넌트를 반복하여 사용할 수 있도록 하였으며, state 를 활용하여 동적인 느낌을 주었고, useRef 를 props 로 전달하기 위해서 forwardRef 에 대해서도 알게 되었습니다. 또한 다른 기기에서 볼 수 있도록 반응형 처리를 하였습니다. "
    //                 ],
    //         pd_myjob : "",
    //         pd_setting : [["Frontend", "React"],
    //                       ["그외 활용", "github page"],    

    //                       ["개발 인원", "1명"],
    //                       ["수행 기간", "2024.2.19 ~ 2024.2.29"],                    
    //                     ],
    //         pd_btn_more : ["my-portfolio",6],
    //         pd_video_path : '',
    //         pd_github : "github_url"

    //     } 


    // ]
  

  return (
    <div className='contents' ref={ref.homeRef}>
        <div className='intro'>
            <div className='intro_text'>
            노력하는 개발자
            <br/>
            이진솔 입니다.
            </div>
            
        </div>
        <div className='about' ref={ref.aboutRef}>
            <div className='contents_title'>About</div>
            <div className='about_contain'>
                {my_about.map((item, idx) => (
                    <About_detail info={item} key={idx}></About_detail>
                ))}
            </div>
        </div>
        <div className='skill' ref={ref.skillRef}>
            <div className='contents_title'>Skill</div>
            <div className='skill_contain'>
                {my_skill.map((item, idx) => (
                    <Skill_detail info={item} key={idx}/>

                ))}

            </div>
        </div>
        <div className='project' ref={ref.projectRef}>
            <div className='contents_title' style={{color:'white'}}>Project</div>
            <div className='project_contain'>
                {my_project?.map((item,idx)=>(
                    <Project_detail info={item} key={idx}/>
                ))}

            </div>
        </div>

    </div>
  )
});

export default Contents