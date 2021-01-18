import React, {useState } from 'react';
import FlipCard from 'react-flipcard-2'
import './Cartas.css'


const Card = ({pokemon}) => {
    
    const {image, name} = pokemon;
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(true)
    }

    return (
        <div className="carta" onClick={handleClick}>
            <FlipCard
                flipped={isFlipped}
                disabled={true}
            >
                <div className="front">{name}</div>
                <div className="back">
                    <img src={image} className="img" alt="nombre"/>
                </div>
            </FlipCard>
        </div>
    );
}
 
export default Card;