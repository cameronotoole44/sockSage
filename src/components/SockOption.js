import React from 'react';

const SockOption = ({ color }) => {
    return (
        <div className="text-xl font-bold text-gray-800 bg-gray-200 px-3 py-2 rounded shadow-inner hover:bg-gray-300 transition">
            {color}
        </div>
    );
};

export default SockOption;


