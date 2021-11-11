import React, { useState } from 'react'

export default function ItemCount({ stock, initial }) {
    const [stateCounter, setstateCounter] = useState(initial);

    return (
        <>
            <button 
                className="btn btn-outline-primary btn-sm mr-1"
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
                className="btn btn-outline-primary btn-sm mr-1"
                onClick={() =>{ 
                    stateCounter < stock &&
                    setstateCounter(stateCounter + 1)
                }}  
                >
                +
            </button>
        </>
    )
}
