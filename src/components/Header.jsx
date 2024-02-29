import React, { forwardRef, useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = forwardRef((props, ref) => {

  
  // 스크롤에 따른 header 메뉴 바 변화
  const [scrollPosition, setScrollPosition] = useState(0);

  // pc가 아닌 기기의 경우 - 반응형
  const [menuState, setMenustate] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position) 
    }
    window.addEventListener('scroll', handleScroll, { passive: true });


  },[scrollPosition])

  const headerStyle = {
    backgroundColor: scrollPosition > 50 ? '#f9f9f9' : 'transparent',
    color : scrollPosition> 50 ?'black':'white',
    transition: 'background-color 0.5s ease',
  };

  // 이동하는 함수
  const nav_move = (move)=>{
    const yPosition = move.current.getBoundingClientRect().top + window.pageYOffset;

    // 반응형에 대한 처리 
    menuState ? 
    window.scrollTo({
      top: yPosition-200,
      behavior: 'smooth'
    })
    :
    window.scrollTo({
      top: yPosition-50,
      behavior: 'smooth'
    })
    ;
  }



  const menu_show = () => {
    menuState ? setMenustate(false) : setMenustate(true)
    console.log(menuState)
  }
  
  

  return (
    <div className='Header' style={headerStyle}>
        <div className='home_btn'>
            <div onClick={()=>nav_move(ref.homeRef)}>PORTFOLIO</div>
        </div>
        <div className='accordion' onClick={menu_show}> <IoReorderThreeOutline /> </div>
        
        {menuState ? 

        <div className='accordion_btn' style={headerStyle}>
          <div onClick={()=> nav_move(ref.aboutRef)}>About</div>
          <div onClick={()=> nav_move(ref.skillRef)}>Skill</div>
          <div onClick={()=> nav_move(ref.projectRef)}>Project</div>
        </div>

        : ""}

        <div className='menu_btn' >
          <div onClick={()=> nav_move(ref.aboutRef)}>About</div>
          <div onClick={()=> nav_move(ref.skillRef)}>Skill</div>
          <div onClick={()=> nav_move(ref.projectRef)}>Project</div>
        </div>
    
    </div>
  )
});

export default Header