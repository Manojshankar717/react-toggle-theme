import React, {useState} from 'react';
import './App.css';

function App() {
  const [isBlack,setIsBlack]=useState(false);
  const toggleTransition = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div className="App">
      {/* White section to black section transition */}
      <div className={`section ${isBlack ? 'black' : 'white'}`}>
        <h1>{isBlack ? 'Black Section' : 'White Section'}</h1>
      </div>

      {/* Button to trigger transition */}
      <button onClick={toggleTransition}>
        Toggle Transition
      </button>
    </div>
  );
}
export default App;
