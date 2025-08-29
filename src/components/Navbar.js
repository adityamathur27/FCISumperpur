import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavbar from './Navbar/DestopNavbar';
import MobileNavbar from './Navbar/MobileNavbar';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 }); // 900px breakpoint

  return (
    <>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  );
};

export default Navbar;
