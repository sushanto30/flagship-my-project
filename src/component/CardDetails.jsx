import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const phones = useLoaderData()
    const {id}=useParams()
    // console.log(phones ,id)
    const singlePhone = phones.find(phone => phone.id === parseInt(id))
    console.log(singlePhone)
    const {image ,name ,
        description }=singlePhone
    return (
         <div>
                <img src={image} alt="" />
                <h1>name : {name}</h1>
                <p>{description}</p>


         </div>
    );
};

export default CardDetails;