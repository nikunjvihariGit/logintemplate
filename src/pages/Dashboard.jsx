import React from 'react'
import { replace, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const username = localStorage.getItem('username');

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('username');

        navigate('/login', { replace: true } );
    }

    return (
        <div className='dashboard-container w-full h-screen bg-lightbeige'>
            <nav className='bg-black h-[80px] flex justify-center items-center'>
                <h1 className='text-4xl font-semibold text-white'>Dashboard</h1>
            </nav>

            <h2 className='text-2xl font-semibold text-black m-3'>Welcome, {username}! You are Logged In</h2>
            <button
                type='button'
                id='logout'
                name='logout'
                className='bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full px-4 py-2 mx-3 my-3'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}
