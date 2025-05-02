import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';

const Layouts = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      {isHomePage && <Hero />}
      <Outlet />
    </div>
  );
};

export default Layouts;