import React, { useState } from 'react';
import RandomQuestion from './components/RandomQuestion';
import RainingSocks from './components/RainingSocks';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [sockColors, setSockColors] = useState(['Black', 'White', 'Multi-color/Pattern']);
  const [selectedColor, setSelectedColor] = useState('');
  const [animate, setAnimate] = useState(false);

  const pickSockColor = () => {
    const randomIndex = Math.floor(Math.random() * sockColors.length);
    setSelectedColor(sockColors[randomIndex])
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 20000)
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-b from-violet-800 via-violet-700 to-blue-500 to-teal-400 font-Press Start 2P">
      <div className="text-center bg-gradient-to-b from-white to-gray-200 p-5 border-2 border-gray-600 rounded-lg shadow-md max-w-lg w-full relative z-10">
        <h1 className="font-press-start text-6xl font-normal mb-5 text-gray-800 shadow-lg">
          SOCK SAGE <img src={`${process.env.PUBLIC_URL}/sage.png`} alt="Sage" className={`inline-block w-16 h-16 ml-3 ${animate ? 'animate-bounce' : ''}`} />
        </h1>
        <RandomQuestion />
        <button
          onClick={pickSockColor}
          className="bg-gray-400 text-black border-2 border-gray-600 rounded cursor-pointer text-base px-5 py-2 shadow transition transform hover:scale-105 hover:bg-gray-500">
          Reveal
        </button>
        {selectedColor && (
          <div className="mt-5 text-2xl text-gray-700 animate-pulse">
            You should wear: <strong>{selectedColor}</strong> socks today, wise one!
          </div>
        )}
      </div>
      <RainingSocks selectedColor={selectedColor} />
    </div>
  );
}

export default App;
