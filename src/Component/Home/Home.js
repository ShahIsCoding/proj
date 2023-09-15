import React from 'react';
import { useAuth } from '../context/authContext';
export const Home = () =>{
    const auth = useAuth();
    return(
        <div className=''>
            {auth.user}
        </div>
    );
}