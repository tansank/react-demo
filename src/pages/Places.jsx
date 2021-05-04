import {useState} from 'react'
import React from 'react';

const Places = () => 
{
    const [addedPlace, setAddedPlace] = useState("")
    const [places, setPlaces] = useState(["New York", "Japan", "Toronto"])
    return (
        <div className='Places'>
        {
            places.map(p =>
            (
                <h1>{p}</h1>
            ))
        }
        <input onChange =
        {
            (e) =>
            {
                e.preventDefault()
                setAddedPlace(e.target.value)
            }
        }/>
        <button onClick=
        {
            () =>
            {
                let tmp = addedPlace
                let tmpArray = places
                tmpArray.push(tmp)
                setAddedPlace(tmpArray)
            }
        }>Add Place</button>
        </div>
    )
}

export default Places;
