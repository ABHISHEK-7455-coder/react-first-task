import { tasksData } from "./data";
import Button from "./button";
import { useState } from "react";

const FILTERS = ["all", "incomplete", "in-progress", "completed"];

export default function Card() {
    const [index, setIndex] = useState(0);
    const [filter, setFilter] = useState(0);
    const filteredData = tasksData.filter((task) => {
        if(FILTERS[filter] == 'all'){
            return true;
        }
        return task.status == FILTERS[filter];
    })

    function handleNextClick(){
        if(filteredData.length==0){
            return;
        }
        setIndex((index)=> (index + 1) % filteredData.length);
    }

    function handlePrevClick(){
        if(filteredData.length==0){
            return;
        }
        setIndex((index) => (index - 1 + filteredData.length) % filteredData.length)
    }

    function handleFilterClick(){
        setIndex(0);
        setFilter((filter) => (filter + 1)% FILTERS.length)
    }
    return (
        <>
            <Button classGiven="nextBtn" label="NEXT" onSmash ={handleNextClick}/>
            <Button classGiven="prevBtn" label="PREVIOUS" onSmash ={handlePrevClick}/>
            <Button classGiven="filterBtn" label={`FILTER: ${FILTERS[filter]}`} onSmash ={handleFilterClick}/>
            <div>
                <h3>{filteredData[index].text}</h3>
                <p>{filteredData[index].status}</p>
            </div>
        </>
    );
}