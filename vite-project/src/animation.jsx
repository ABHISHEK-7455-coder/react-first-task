import { useState } from "react"

export default function Animation(){
    const [position, setPosition] = useState({
        x:0,
        y:0
    })
    return (
        <div className="animationContainer">
            <div className="animationDot" onPointerMove={
                    (e) => {
                        setPosition({
                            x:e.clientX,
                            y:e.clientY
                        })
                    }
                } style={
                    {
                        color:'white',
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        border:'5px solid white',
                        borderRadius:'50%'
                    }
                }>

            </div>
        </div>
        
    )
    
}