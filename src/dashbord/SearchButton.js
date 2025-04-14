import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';
import {CartBuyContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CollapsNavigationMenu from './CollapsNavigationMenu';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { ModalDialog } from '@mui/joy';
import IconButton from '@mui/material/IconButton';
import { RiRoadMapLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import "./E.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'black',
  border:'1px solid  #f2b705',
  '&:hover': {
    backgroundColor:'black',
    border:'1px solid  #fff',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '400px',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft:'1px',
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Buy = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'black',
  border:'1px solid  #f2b705',
  '&:hover': {
    backgroundColor:'black',
    border:'1px solid  #fff',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '150px',
  },
}));
export default function SearchButton() {
const [cartItems,setCartItems]=useContext(CartContext);
const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
const [open, setOpen] = React.useState(false);
const [data,setData]=useContext(CardData);
const [searchItem, setSearchItem] = useState('');
const [filteredUsers, setFilteredUsers] = useState([]);
const getData=()=>{
fetch('https://serverjson-project.onrender.com/Allproducts')
.then(res => res.json())
.then((result)=> {
  setData(result);
  console.log(cartItems);
  console.log(setCartItemsBuy(cartItemsBuy));
},
(error) => {
  alert('error');
}
)
}
useEffect( ()=>{
  getData();
},[])
const handleInputChange = (e) => { 
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)
  const filteredItems = data.filter((user) =>
  user.title1.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredUsers(filteredItems);
}
   return (
<> 

<div dir='ltr' className='mt-1 flex md:hidden justify-start'>  <CollapsNavigationMenu />   
          </div>
         
        <div className='hidden md:flex justify-between mx-5 py-1 mt-0'>  
           <div className='mt-4'   >
          <NavLink className="signup"  to={'/signup'}>
                       
                       
                 <RiRoadMapLine className='w-6 h-6 text-yellow-600'   />
                
           
             </NavLink>
             
             </div>
             <div    className='mt-3 ' >
             <p className='text-yellow-200 px-2 text-2xl '>/</p>
            </div>
            <div  className='mt-4' >
          <NavLink className="signup"  to={'/signup'}>
                       
                       
                 <RiShoppingCartLine className='w-6 h-6 text-yellow-600'   />
                
           
             </NavLink>
             
             </div>
         
  </div>
  
  </>
    );
}
  