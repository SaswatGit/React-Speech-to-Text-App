import React, { useEffect, useRef } from 'react'
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import gsap from 'gsap';

const App = () => {
  const boardRef = useRef(null);
  const instrRef = useRef(null);
  const textRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const board = boardRef.current;
    const instr = instrRef.current;
    const text = textRef.current;
    const btns = btnsRef.current;
    const tl = gsap.timeline();
    tl.fromTo(board, {y: 0 }, { y: '-100%', duration: 1, delay: 1 });
    tl.fromTo(instr, { opacity: 0, y: '100%' }, { opacity: 1, y: 0 });
    tl.fromTo(text, { opacity: 0, y: '100%' }, { opacity: 1, y: 0 });
    tl.fromTo(btns, { opacity: 0, y: '100%' }, { opacity: 1, y: 0 });
  }, []);
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className='container'>
        <h1 ref={instrRef}>Test to Speech converter</h1>
        <div className='main-content'>

        </div>
        <div className='text' ref={textRef}>
          <p>{transcript}</p>
        </div>
        <div ref={btnsRef}>
          <button className='btn' onClick={startListening}>Start Listening</button>
          <button className='btn' onClick={stopListening}>Stop Listening</button>
        </div>
        <div className='board' ref={boardRef}>
          <h1>Speech To Text App</h1>
        </div>
      </div>
    </>
  )
}

export default App