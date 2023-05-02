
import React, {useState, useEffect} from 'react';
import { bringLocations } from '../../services/apiCalls';
 
export const Locations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(()=>{

        if(locations.length === 0){
            bringLocations()
                .then(respuesta => {
                    console.log(respuesta.data.results);
                })
                .catch(error => console.log(error));
        };
    }, [locations]);

    return (
        <div className=''>these are the locations</div>
    )
}