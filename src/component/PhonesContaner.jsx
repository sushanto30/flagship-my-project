import React, { useEffect, useState } from 'react';
import Phone from '../component/Phone'
const PhonesContaner = ({phones}) => {

    const [AllPhones, setAllPhones] = useState([]);
    const [ShowAll, setShowAll] = useState(false)

    useEffect(() => {
        if (ShowAll) {
            setAllPhones(phones)
        }
        else {
            setAllPhones(phones.slice(0, 6))
        }
    }, [phones, ShowAll])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-3'>
            {
                AllPhones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }

            <button onClick={() => {
                setShowAll(prv => !prv)
                if (ShowAll) window.scrollTo(0, 0)
            }} className='btn btn-primary mt-5 mb-6'>{ShowAll ? 'Show Less' : 'Show All'}</button>
        </div>
    );
};

export default PhonesContaner;