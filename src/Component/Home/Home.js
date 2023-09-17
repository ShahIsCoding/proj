import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { HomeBody } from '../HomeBody/HomeBody';
export const Home = () =>{
    return(
        <div className='home'>
            <Navbar />
            <HomeBody />
        </div>
    );
}