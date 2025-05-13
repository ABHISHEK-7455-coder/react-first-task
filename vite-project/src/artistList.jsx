import { useState } from "react";

let nextId = 0;
export default function List(){
    const [artists, setArtists] = useState([]);
    const [name, setName] = useState('');

    return (
        <>
            <div className="artist-container">
                <h1>Artists List</h1>

                <input type="text" onChange={
                    (e) => setName(e.target.value)
                }/>

                <button onClick={
                    ()=>{
                        setArtists([
                            ...artists,
                            {id:nextId++, name:name}
                        ])
                    }
                }>Add</button>

                <ul>
                    {artists.map((artist) => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}