import React from 'react'
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {


  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className='container'>
        <h1>Test to Speech converter</h1>
        <div className='main-content'>

        </div>
        <div className='text'>
          <p>{transcript}</p>
        </div>
        <div>
          <button className='btn' onClick={startListening}>Start Listening</button>
          <button className='btn' onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  )
}

export default App