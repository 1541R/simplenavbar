import React, { useState } from 'react'


export default function ItemCount({ stock, initial, onAdd }) {
    const [stateCounter, setstateCounter] = useState(initial);

    return (
        <div className="card-action col m12">
            <button 
                className="btn btn-quantity btn-sm mr-1"
                onClick={() =>{ 
                    stateCounter > initial &&
                    setstateCounter(stateCounter - 1)
                }}                
            >
                -
            </button>
            <span>
                {stateCounter}
            </span>
            <button 
                className="btn btn-quantity btn-sm mr-1"
                onClick={() =>{ 
                    stateCounter < stock &&
                    setstateCounter(stateCounter + 1)
                }}  
                >
                +
            </button>
            {
                stateCounter > 0 &&
                <button 
                    className="btn"
                    onClick={
                        () => onAdd(stateCounter)
                    }
                >
                    Agregar al carrito
                </button>
            }
        </div>
    )
}
