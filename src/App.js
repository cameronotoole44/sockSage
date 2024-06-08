import React, { useState } from 'react';
import RandomQuestion from './components/RandomQuestion';

function App() {
  const [sockColors, setSockColors] = useState(['Black', 'White', 'Multi-color/Pattern']);
  const [selectedColor, setSelectedColor] = useState('');
  const [animate, setAnimate] = useState(false);

  const pickSockColor = () => {
    const randomIndex = Math.floor(Math.random() * sockColors.length)
    setSelectedColor(sockColors[randomIndex])
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 20000)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-800 via-blue-700 to-blue-500 font-montserrat">
      <div className="text-center bg-gradient-to-b from-white to-gray-200 p-5 border-2 border-gray-600 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="font-press-start text-6xl font-normal mb-5 text-gray-800 shadow-lg">
          SOCK SAGE <img src={`${process.env.PUBLIC_URL}/sage.png`} alt="Sage" className={`inline-block w-16 h-16 ml-3 ${animate ? 'animate-bounce' : ''}`} />
        </h1>
        <RandomQuestion />
        <button
          onClick={pickSockColor}
          className="bg-gray-400 text-black border-2 border-gray-600 rounded cursor-pointer text-base px-5 py-2 shadow transition transform hover:scale-105 hover:bg-gray-500">
          Run it
        </button>
        {selectedColor && (
          <div className="mt-5 text-2xl text-gray-700 animate-pulse">
            You should wear: <strong>{selectedColor}</strong> socks today, homie!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// BOUNCE // 
// import React, { useState } from 'react';
// import RandomQuestion from './components/RandomQuestion';

// function App() {
//   const [sockColors, setSockColors] = useState(['Black', 'White', 'Multi-color/Pattern']);
//   const [selectedColor, setSelectedColor] = useState('');
//   const [animate, setAnimate] = useState(false);

//   const pickSockColor = () => {
//     const randomIndex = Math.floor(Math.random() * sockColors.length);
//     setSelectedColor(sockColors[randomIndex]);
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 1000);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-800 via-blue-700 to-blue-500 font-montserrat">
//       <div className="text-center bg-gradient-to-b from-white to-gray-200 p-5 border-2 border-gray-600 rounded-lg shadow-md max-w-lg w-full">
//         <h1 className="font-press-start text-6xl font-normal mb-5 text-gray-800 shadow-lg">
//           SOCK SAGE <img src={`${process.env.PUBLIC_URL}/sage.png`} alt="Sage" className="inline-block w-16 h-16 ml-3" />
//         </h1>
//         <RandomQuestion />
//         <button
//           onClick={pickSockColor}
//           className="bg-gray-400 text-black border-2 border-gray-600 rounded cursor-pointer text-base px-5 py-2 shadow transition transform hover:scale-105 hover:bg-gray-500">
//           Run it
//         </button>
//         {selectedColor && (
//           <div className={`mt-5 text-2xl text-gray-700 ${animate ? 'animate-bounce' : ''}`}>
//             You should wear: <strong>{selectedColor}</strong> socks today, homie!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
