import React, { useState } from 'react';

const ColorsF = () => {
    const colors = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]
    // Setteo el useState
    const [colores, setColores] = useState(colors);

    const shuffle = () => {
        return colors.sort(() => Math.random() - 0.5);
    };
    const eventHandler = () => {
        setColores(shuffle());
    };
    return (
        <div className="container">
            <div className="panel">
                {colores.map((color) => (
                    <div key={color} className={color}>
                        {color}
                    </div>
                ))}
            </div>
            <button className="glow-on-hover" onClick={eventHandler}>
                Get Random
            </button>
        </div>
    );
}

export default ColorsF;






