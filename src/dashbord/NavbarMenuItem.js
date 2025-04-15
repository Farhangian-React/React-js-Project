import React,{useState} from "react";
import {
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

  
} from "@material-tailwind/react";
import lego from "../img/brndlg.png";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { styled, useTheme } from '@mui/material/styles';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const drawerWidth = 240;
const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];


function NavbarMenuItem() {

  const [isMenuOpen1, setIsMenuOpen1] =useState(false);
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] =useState(false);
 
  const [isMenuOpen2, setIsMenuOpen2] =useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] =useState(false);
 
  const [isMenuOpen3, setIsMenuOpen3] =useState(false);
  const [isMobileMenuOpen3, setIsMobileMenuOpen3] =useState(false);
 
  return (
    <>
 
      
      <div dir="rtl" className="hidden md:flex  self-start bg-black my-0 px-8   ">
       



          <ul className="hidden md:flex uppercase font-bold w-[100%]">
    
            <Menu
        open={isMenuOpen1}
        handler={setIsMenuOpen1}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 font-medium rounded-none
               text-white
               transition delay-150 duration-300 ease-in-out
    "
              selected={isMenuOpen1 || isMobileMenuOpen1}
              onClick={() => setIsMobileMenuOpen1((cur) => !cur)}
            >
              محصولات 
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen1 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen1 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/7 h-auto p-3 -mt-5  bg-slate-400">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allbag"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
         یخچال فریزر
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/dastib"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
             پخت و پز
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/doshib"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           ماشین لباس شویی
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/kolehb"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           ماشین ظرفشویی
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>


      <Menu
        open={isMenuOpen2}
        handler={setIsMenuOpen2}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 rounded-none
               font-medium text-white
               transition delay-150 duration-300 ease-in-out
              "
              selected={isMenuOpen2 || isMobileMenuOpen2}
              onClick={() => setIsMobileMenuOpen2((cur) => !cur)}
            >
             جشنواره ها
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen2 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen2 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/7 h-auto p-3  -mt-5">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allshose"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           جشنواره زمستانه
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/kalezhsh"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           فعال سازی کارت تخفیف
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>

         
           

      <Menu
        open={isMenuOpen3}
        handler={setIsMenuOpen3}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 mr-5 font-medium rounded-none
               text-white
               transition delay-150 duration-300 ease-in-out
"
              selected={isMenuOpen3 || isMobileMenuOpen3}
              onClick={() => setIsMobileMenuOpen3((cur) => !cur)}
            >
             خدمات
              <FaChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen3 ? "rotate-180" : ""
                }`}
              />
              <FaChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen3 ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block w-1/7 h-auto p-3  -mt-5">
          <ul className=" flex flex-col items-end outline-none outline-0">
          <NavLink to={"/allack"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
      خدمات پس از فروش
            </Typography>
        </MenuItem>
      </NavLink>
          <NavLink to={"/glassa"}  >
        <MenuItem className="flex items-center pb-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
         فرم تماس با ما
            </Typography>
        </MenuItem>
      </NavLink>
      <NavLink to={"/atra"} >
        <MenuItem className="flex items-center py-2 rounded-lg">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold hover:text-orange-500"
            >
           سوالات متداول
            </Typography>
        </MenuItem>
      </NavLink>
          </ul>
        </MenuList>
      </Menu>
      <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="flex lg:text-sm text-xs items-center gap-2 py-2  mr-5 px-2
               text-white
               transition delay-150 duration-300 ease-in-out
               hover:border-b-2  hover:border-white ">
              فروشگاه
              </li>
            </NavLink>
            <NavLink
              to="/pageshegeft"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
             <li className="flex lg:text-sm text-xs items-center gap-2 py-2  mr-5 px-2
               text-white
               transition delay-150 duration-300 ease-in-out
               hover:border-b-2  hover:border-white ">
                چرا سهیل
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="flex lg:text-sm text-xs items-center gap-2 py-2  mr-5 px-2
               text-white
               transition delay-150 duration-300 ease-in-out
               hover:border-b-2  hover:border-white ">
                سبک زندگس
              </li>
            </NavLink>
          </ul>
     
       
      </div>
 
   
   
</>
  );
}

export default NavbarMenuItem;
