import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { phoneSetLocalStore } from '../PhoneLocalStore';

const CardDetails = () => {
    const phones = useLoaderData()
    const {id}=useParams()
    // console.log(phones ,id)
    const singlePhone = phones.find(phone => phone.id === parseInt(id))
    // console.log(singlePhone)
    const {image ,name ,
        description }=singlePhone

        const handelAdd = ()=>{
            phoneSetLocalStore(singlePhone)
        }

    return (
         <div className='space-y-3'>
                <img src={image} alt="" />
                <h1>name : {name}</h1>
                <p>{description}</p>
                <button className='ml-3 btn' onClick={handelAdd}>favorite</button>
                <button >card</button>

         </div>
    );
};

export default CardDetails;