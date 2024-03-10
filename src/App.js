import { useRef } from 'react';
import './App.css';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  // ref
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  // const titleRef3 = useRef(null)
  const refObj ={
    homeRef : homeRef,
    aboutRef: aboutRef, 
    skillRef:skillRef, 
    projectRef: projectRef
  }
  console.log("2024/03/11/03:00")

  return (
    <div>
      <Header ref={refObj} />
      <Contents ref={refObj}/>
      <Footer/>
    </div>
  );
}

export default App;
