import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Links from '../Links/Links';
const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 4, name: 'Reviews', link: '/reviews' },
        { id: 7, name: 'DashBoard', link: '/dashBoard' },
        { id: 9, name: 'Blogs', link: '/blogs' },
        { id: 9, name: 'About', link: '/about' },
    ]
    return (
        <div>
            <nav className='bg-blue-500 py-3 font-semibold text-white'>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <div className={`md:flex justify-center absolute md:static duration-500 ease-in bg-blue-500 w-full ${open ? 'top-8' : 'top-[-150px]'} sm:bg-blue-500`} >
                    {
                        routes.map(route => <Links routes={route} key={route.id}></Links>)
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;