import React, { useState } from 'react';

const Hero = ({handleSearch}) => {
    const [searchText , setSearchText]=useState('')
    return (
        <div>
            <form onSubmit={e =>handleSearch(e, searchText)} className='text-center mt-5 mb-5 '>
                <input
                    defaultValue={searchText}
                    onChange={(e)=>setSearchText( e.target.value)}
                 placeholder='search name' type="text" className='w-1/3 border border-amber-300 p-2 '/>
                    <input className='btn' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Hero;