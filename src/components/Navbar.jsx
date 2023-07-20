import React from "react";
import logo from '../assets/logo.svg'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
 
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        className="p-1   "
      >
        <a href="#home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"       
        className="p-1 font-normal"
      >
        <a href="#room" className="flex items-center">
          Room & Rates
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 text-base "
      >
        <a href="#feartures" className="flex items-center">
          Hotel Feartures
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal"
      >
        <a href="#gallery" className="flex items-center">
          Gallery
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 "
      >
        <a href="#contact" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky top  h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 Navbar">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium flex flex-inline"
          >
            <img src={logo} style={{width : "70px"}}/>
            <span className="mt-6 text-orange-400">LuxeStay</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto mr-4 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
              viewBox="0 0 24 24"
                stroke="currentColor"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          
        </MobileNav>
      </Navbar>
      
      
    </>
  );
}
