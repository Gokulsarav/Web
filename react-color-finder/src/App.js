import { useState } from 'react';
import './App.css';

import Inhead from './Inhead';
import Types from './Types';

function App() {

  const [color,setcolor]=useState('')
  const [hexavlaue,sethexavalue]=useState('')
  const [isdark,setisdark]=useState(true)

  return (
    <div className="App">
      <Inhead
        color={color}
        hexavlaue={hexavlaue}
        isdark={isdark}
      />
      <Types 
        color={color}
        setcolor={setcolor}
        hexavlaue={hexavlaue}
        sethexavalue={sethexavalue}
        isdark={isdark}
        setisdark={setisdark}
      />
    </div>
  );
}

export default App;
