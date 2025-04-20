import React, { useEffect, useState } from 'react';
import { getPhones } from '../../PhoneLocalStore';
import Phone from '../Phone';

const Favorites = () => {
    const [AllPhones ,setAllPhones ]= useState([])
    useEffect(()=>{
         const savePhone = getPhones()
         setAllPhones(savePhone)
    },[]);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-3'>
            {
                AllPhones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }

             
        </div>
    );
};

export default Favorites;