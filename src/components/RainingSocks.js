import React, { useEffect } from 'react';
import blackSock from '../images/black-sock.png';
import whiteSock from '../images/white-sock1.png';
import multiSock from '../images/multi-sock.png';

function RainingSocks({ selectedColor }) {
    useEffect(() => {
        if (selectedColor) {
            startRaining()
            return () => {
                stopRaining()
            }
        }
    }, [selectedColor]);

    const startRaining = () => {
        // STARTS RAIN //
    };

    const stopRaining = () => {
        // STOPS RAIN //
    };

    const getSockImage = () => {
        switch (selectedColor) {
            case 'Black':
                return blackSock;
            case 'White':
                return whiteSock;
            case 'Multi-color/Pattern':
                return multiSock;
            default:
                return null;
        }
    };

    const sockImage = getSockImage();

    const renderSocks = () => {
        const socks = [];
        for (let i = 0; i < 50; i++) { // +/- NUMBER OF SOCKS //
            socks.push(
                <img
                    key={i}
                    src={sockImage}
                    alt={`${selectedColor} Sock`}
                    className="sock absolute animate-rain"
                    style={{ left: `${Math.random() * 100}%`, top: `-${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}
                />
            );
        }
        return socks;
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {selectedColor && renderSocks()}
        </div>
    );
}

export default RainingSocks;



