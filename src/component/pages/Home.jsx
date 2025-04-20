
import { useLoaderData } from 'react-router';

import PhonesContaner from '../PhonesContaner';
import Hero from './Hero';
import { useState } from 'react';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)

    const [phones, setPhones] = useState(data);

    const handleSearch = (e, text) => {
        e.preventDefault();
        if(text === '')return setPhones(data)
        // console.log(text)
        const searchPhone = data.filter(phone =>
        // console.log(phone.name.toLowerCase())
        
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
       
        )
        setPhones(searchPhone)
    }


    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContaner phones={phones}></PhonesContaner>
        </div>

    );
};

export default Home;