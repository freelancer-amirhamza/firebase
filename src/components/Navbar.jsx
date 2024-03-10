import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logOut = () => {
        localStorage.clear("user")
        navigate("/login")
    }
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">E-NoteBook</div>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to={'/productTable'}>
                        <li className='cursor-pointer'>Dashboard</li>
                    </Link>
                    {user && <li onClick={logOut} className='cursor-pointer'>Logout</li>}
                    
                </ul>
                    
            </div>
        </div>
    )
}

export default Navbar