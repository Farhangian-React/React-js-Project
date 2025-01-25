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

<Box sx={{mt:"0.5em", display: { xs: 'flex', lg: 'none' } ,justifyContent:'start',direction:"ltr"}}>  <CollapsNavigationMenu />   
          </Box>
         
        <Box sx={{mt: 0,py:1,display: { xs: 'none', lg: 'flex' },justifyContent:'space-between'}}>  
              <Buy sx={{display:'flex',justifyContent:'center',direction:'ltr'}}>
            <NavLink to={'/buybasket'} >
              <ShoppingCartIcon  sx={{mr:2,ml:0,mt:"0.5em",color:'gray',fontSize:'2em'}}/>
            </NavLink>
              <Typography sx={{mt:"1em"}}>  ( {cartItemsBuy.length} )</Typography>
          </Buy>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
    
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{pl:2,direction:'ltr',fontSize:"1.5em"}}
              onChange={() => setOpen(true)}
            />
          </Search>
          <Modal
       
           aria-labelledby="modal-title"
           aria-describedby="modal-desc"
           open={open}
           onClose={() => setOpen(false)}
           sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
  <ModalDialog sx={{bgcolor:"#ececec"}}
    layout="fullscreen"
    size="lg"
  >
    <ModalClose />
    <Box sx={{my:7,px:1,width:"80%",display:'flex',justifyContent:"space-between",alignSelf:"center",bgcolor:"white"}}>
   <IconButton type="button" sx={{ p: '10px' }}  >
        <SearchIcon />
      </IconButton> 
      <InputBase
        sx={{direction:"rtl", ml: 1, flex: 1 }}
        type="text"
        placeholder="جستجوی محصولات سهیل"
        inputProps={{ 'aria-label': 'جستجوی محصولات سهیل' }}
        value={searchItem}
        onChange={
          handleInputChange
        }
      />
   </Box>
   <Box  sx={{bgcolor:"#f1f1f1",display:'flex' ,flexWrap:'wrap' ,overflowY:"scroll",overflowX:"hidden",justifyContent:'center',flexDirection:"row",mx:3,pb:3}}>
  
   
   {filteredUsers.map((item) => (
    <NavLink to={'/cartsearch'}  className={"linksearch"}>  
   <Box  onClick={()=>{
      setCartItems([item]);
      setOpen(false);

     }}  sx={{width:"95%",direction:"rtl",bgcolor:"white",display:"flex",flexDirection:"row",justifyContent:"space-around",m:1,p:1}} >
    <Grid xs={4} sx={{width:"200px",alignSelf:"center"}} >
    <img src={item.img} width={120} alt=''/>
    </Grid>
        <Grid xs={4} sx={{width:"100px",alignSelf:"center"}}>
            <Typography  sx={{fontSize:"14px"}}>
            {item.title1}
            </Typography>
        </Grid>
        <Grid xs={4} sx={{width:"100%",direction:"rtl",display:"flex",flexDirection:"column",alignSelf:"center",mr:1}}>

            <Typography  sx={{mt:1,fontSize:"12px",textAlign:"center",alignSelf:"center",color:"#E0AA3E"}}>{item.pricenum} تومان</Typography>
        </Grid>
    </Box>
    </NavLink>
))}
  
  </Box>
  </ModalDialog>
  </Modal>
  </Box>
  
  </>
    );
}
  