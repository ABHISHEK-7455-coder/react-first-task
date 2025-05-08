import {tasksData} from "./data";
import Button from ".button";
import { useState } from "react";

export default function Card() {
    const [index, setIndex] = useState[0];
    function handleNextClick(){
        setIndex((index)=> (index + 1) % tasksData.length);
    }

    function handlePrevClick(){
        
    }
    return (
        <>
            <Button classGiven="nextBtn" label="NEXT" onSmash ={handleNextClick}/>
            <Button classGiven="prevBtn" label="PREVIOUS" onSmash ={handlePrevClick}/>
            <div>
                <h3>{tasksData[index].text}</h3>
                <p>{tasksData[index].status}</p>
            </div>
        </>
    );
}