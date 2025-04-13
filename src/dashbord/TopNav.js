import React,{useContext,useState,useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";
import { RiRoadMapLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import {CartBuyContext} from '../Shared/Cart-Context';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';

import InputBase from '@mui/material/InputBase';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { ModalDialog } from '@mui/joy';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavigationMenu from './NavigationMenu';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import SearchButton from './SearchButton';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import "./E.css";
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

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
function TopNav(props) {



const convertToEnglish=(str)=> {
  let englishNumber =str
  .replace(/۰/g, '0')
  .replace(/۱/g, '1')
  .replace(/۲/g, '2')
  .replace(/۳/g, '3')
  .replace(/۴/g, '4')
  .replace(/۵/g, '5')
  .replace(/۶/g, '6')
  .replace(/۷/g, '7')
  .replace(/۸/g, '8')
  .replace(/۹/g, '9');
return(englishNumber);
}
const convertToPersian=(str)=> {
  let persianNumber =str
  .replace(/0/g, '۰')
  .replace(/1/g, '۱')
  .replace(/2/g, '۲')
  .replace(/3/g, '۳')
  .replace(/4/g, '۴')
  .replace(/5/g, '۵')
  .replace(/6/g, '۶')
  .replace(/7/g, '۷')
  .replace(/8/g, '۸')
  .replace(/9/g, '۹');
return(persianNumber);
}
const addCommas=(nStr)=>{
  if(nStr.length === 6){
    return   nStr.substring(0, 3) + "," + nStr.substring(3, 6);
  }
  if(nStr.length === 7){
    return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
  }
  if(nStr.length === 8){
    return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
  }
  if(nStr.length === 9){
    return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
}
}

const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
const [cartItems,setCartItems]=useContext(CartContext);
const [open, setOpen] = React.useState(false);
const [data,setData]=useContext(CardData);
const [searchItem, setSearchItem] = useState('');
const [filteredUsers, setFilteredUsers] = useState([]);
const getData=()=>{
fetch('https://servers-nahall.onrender.com/Allproductsnahall')
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
     <HideOnScroll {...props}>
      {/*
    <AppBar position="fixed" className='nav' sx={{mt:0 ,mb:0,bgcolor:'black',px:"0.5em",color:'white'}}>
    <Box sx={{ flexGrow: 1,py:0, display:'flex',justifyContent:'space-between',marginLeft:{md:0},marginRight:{md:0} }}>
        <Grid  sx={{mt:"0.2em", display:'flex', boxShadow:'10px 10px 50px #674e06' }}>
        <img className='imgsohil' width={60} alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s'/>
               <Typography
     noWrap
     component="a"
     href="/"
     sx={{
       mr:{sx:0,md:2} ,
       mt:{xs:2,md:1},
       display: 'flex',
       flexGrow: 0,
       fontFamily: 'monospace',
       fontWeight: 300,
       fontStyle:'italic',
       letterSpacing: '.1em',
       color: '#f2b705',
       textDecoration: 'none',
       fontSize:"3em"
     }}
   >
     S O H I L
   </Typography>
   </Grid>

   <Box sx={{px:"1em",mt:"0.2em", py:"0.5em",mr:"2em", display: { xs: 'flex', lg: 'none' } ,justifyContent:'center',direction:"ltr"}}> 
<Box sx={{m:"auto", display: 'flex',flexDirection:"row",justifyContent:"space-around"}}>

      <Buy sx={{display:'flex',justifyContent:'center',direction:'ltr'}}>
            <NavLink to={'/buybasket'} >
              <ShoppingCartIcon  sx={{mr:"0.5em",ml:0,mt:"0.4em",color:'gray',fontSize:'2.5em'}}/>
            </NavLink>
              <Typography sx={{fontSize:"1.6em",mt:"0.6em"}}>  ( {cartItemsBuy.length} )</Typography>
          </Buy>
      </Box>       
          </Box>
        
 <SearchButton/>

</Box>
    </AppBar>
    */}
    
<nav dir='rtl' className=' md:sticky top-0 flex justify-between w-[100%] bg-black h-[60px]  drop-shadow-lg pt-1  pl-1  mx-auto '>
<div dir='ltr' className="w-2/3 flex flex-row justify-end mt-0">

      
	<form className="flex items-center mx-4">   
        <label for="simple-search" className="sr-only">Search</label>
        <div dir='rtl' className="relative w-full ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-10 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input  onChange={() => setOpen(true)} type="text" id="simple-search" className=" bg-black border border-yellow-600
             text-gray-700 text-sm rounded-lg
             hover:border-2 hover:border-yellow-600 block w-full pl-10 p-2.5" placeholder="جستجو ..." required />
        </div>
      
    </form>
    <div dir='rtl' className="flex justify-center w-[220px]">
        <img className='imgsohil' width={50} height={30} alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s'/>
             <NavLink to={"/"} style={{textDecoration: "none"}}>  <p className="flex italic font-mono text-yellow-600 text-2xl space-x-2 mt-2"
   >
     S O H I L
   </p>
   </NavLink>
   </div>  
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
<ModalClose  />
<div className='flex justify-between self-center bg-neutral-200 w-[80%] px-1 my-6'
 >
<IconButton type="button" sx={{ p: '10px' }}  >
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
  </IconButton> 
  <InputBase
    sx={{direction:"rtl", ml: 1, flex: 1 }}
    type="text"
    placeholder="جستجوی محصولات نهال شاپ"
    inputProps={{ 'aria-label': 'جستجوی محصولات نهال شاپ' }}
    value={searchItem}
    onChange={
      handleInputChange
    }
  />
</div>


<div className='overflow-y-scroll '>
{filteredUsers.map((item) => (
<NavLink to={'/buy'}  className={"linksearch"}>  

<div  onClick={()=>{
  setCartItems([item]);
  setOpen(false);}}
 dir='rtl' className='hidden md:flex md:flex-wrap md:flex-row md:justify-around md:self-center w-[92%] h-[260px] bg-white my-2  border-2 border-gray-200 mx-auto  '>

 <div 
 className='shh relative w-[250px] h-[250px] rounded-sm 
 bg-cover bg-center bg-no-repeat
   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
 ' style={{
  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
}} >  
  </div>

<div className=' inline-flex justify-start self-center items-center py-1 w-[250px] '>
<div className='w-full py-1'> <p className='text-xl text-center flex-nowrap '>{item.title1}</p></div>

</div>
<div className='w-[150px]   inline-flex justify-start self-center items-center'  > 
<p className='text-[20px] text-gray-500  text-right font-bold'   >
{addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
</p>
</div>
</div> 
<div  onClick={()=>{
setCartItems([item]);
setOpen(false);}}
dir='rtl' className='flex flex-row justify-around self-center md:hidden w-full h-[150px] bg-white my-2  border-2 border-gray-200 mx-auto  '>

<div 
 className='px-2 shh relative w-1/3 h-[120px] rounded-sm 
 bg-cover bg-center bg-no-repeat
   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
 ' style={{
  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
}} >  
  </div>

<div className=' inline-flex justify-start self-center items-center py-1  w-1/3 px-2 '>
<div className='w-full py-1'> <p className='text-sm text-center flex-nowrap '>{item.title1}</p></div>

</div>
<div className=' w-1/3   inline-flex justify-start self-center items-center px-2'  > 
<p className='text-[16px] text-gray-500  text-right font-bold'   >
{addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
</p>
</div>
</div> 

</NavLink>
))}

</div>








</ModalDialog>
</Modal>


</div>
<div className=" flex  justify-between pt-2 mt-2 pl-6 py-0 h-8 ">
<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<RiRoadMapLine className='font-black w-7 h-7 text-yellow-600 hover:text-white mx-6 ' />
</NavLink>
<Badge color='warning' badgeContent={cartItemsBuy.length} sx={{color:"white"}}>
<NavLink to={"/endbuy"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<RiShoppingCartLine className='font-black w-7 h-7  text-yellow-600 hover:text-white ' />
</NavLink>
</Badge>
</div>
</nav>
    </HideOnScroll>
    <AppBar position='sticky' className='nav' sx={{display:{xs:'none',lg:'flex'},px:"0.5em",
      mt:"5.6em" ,mb:0,bgcolor:'black',py:0,color:'white',}}>
          <Box sx={{ flexGrow: 1, display:{ xs:'none',lg: 'flex'}, justifyContent:'space-between',marginLeft:{md:0},marginRight:{md:0} }}>
             <NavigationMenu/> 
              <NavLink className="signup"  to={'/signup'}>
                 <Box sx={{my:2,py:1,px:2,mx:"0.5em",display: { xs: 'none', lg: 'flex' },justifyContent:'space-between',border:'1px solid  #f2b705','&:hover': {
    backgroundColor:'black',
    border:'1px solid  #fff',
  },borderRadius:1}}>
                   <Typography  sx={{mt:0.5,color:"#eeeeee",fontSize:"1.2em"}}>ورود یا عضویت </Typography>
           <PermIdentityOutlinedIcon  sx={{mr:2,fontSize:'2em',color:'white'}} />
          
       </Box> 
       </NavLink>
            </Box>
    </AppBar>



    
    </>
  );
}
export default TopNav;       


{/*


  import React,{useContext,useState,useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";
import NavbarMenuItem from './NavbarMenuItem';
import { RiAdminLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Collaps from './Collaps';
import Badge from '@mui/material/Badge';
import {CartBuyContext} from '../Shared/Cart-Context';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';

import InputBase from '@mui/material/InputBase';
import { Grid } from '@mui/material';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { ModalDialog } from '@mui/joy';
import IconButton from '@mui/material/IconButton';
function TopNavbar() {


  const convertToEnglish=(str)=> {
    let englishNumber =str
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');
 return(englishNumber);
  }
  const convertToPersian=(str)=> {
    let persianNumber =str
    .replace(/0/g, '۰')
    .replace(/1/g, '۱')
    .replace(/2/g, '۲')
    .replace(/3/g, '۳')
    .replace(/4/g, '۴')
    .replace(/5/g, '۵')
    .replace(/6/g, '۶')
    .replace(/7/g, '۷')
    .replace(/8/g, '۸')
    .replace(/9/g, '۹');
return(persianNumber);
  }
  const addCommas=(nStr)=>{
    if(nStr.length === 6){
      return   nStr.substring(0, 3) + "," + nStr.substring(3, 6);
    }
    if(nStr.length === 7){
      return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
    }
    if(nStr.length === 8){
      return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
    }
    if(nStr.length === 9){
      return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
  }
  }

  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
  const [cartItems,setCartItems]=useContext(CartContext);
const [open, setOpen] = React.useState(false);
const [data,setData]=useContext(CardData);
const [searchItem, setSearchItem] = useState('');
const [filteredUsers, setFilteredUsers] = useState([]);
const getData=()=>{
fetch('https://servers-nahall.onrender.com/Allproductsnahall')
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
  

<nav dir='rtl' className=' md:sticky top-0 flex justify-between w-[98%] bg-transparent h-[60px]  drop-shadow-lg pt-3  px-1  mx-auto '>
<div dir='ltr' className="w-2/3">
        <div className="flex justify-center w-[130px]">
        <img className='imgsohil' width={60} alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s'/>
             <NavLink to={"/"} style={{textDecoration: "none"}}>  <p className="flex italic font-mono text-yellow-600 text-2xl space-x-2 mt-2"
   >
     S O H I L
   </p>
   </NavLink>
   </div>
	<form className="flex items-center">   
        <label for="simple-search" className="sr-only">Search</label>
        <div dir='rtl' className="relative w-full ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-10 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input  onChange={() => setOpen(true)} type="text" id="simple-search" className=" bg-neutral-200 border border-gray-100
             text-gray-900 text-sm rounded-lg
             hover:border-2 hover:border-orange-500 block w-full pl-10 p-2.5" placeholder="جستجو ..." required />
        </div>
        <button  onChange={() => setOpen(true)}  type="submit" class=" flex p-2.5 ml-2 text-sm font-medium text-gray-600 bg-neutral-200 rounded-lg  hover:bg-orange-500
        ">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg></button>
    </form>  



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
<ModalClose  />
<div className='flex justify-between self-center bg-neutral-200 w-[80%] px-1 my-6'
 >
<IconButton type="button" sx={{ p: '10px' }}  >
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
  </IconButton> 
  <InputBase
    sx={{direction:"rtl", ml: 1, flex: 1 }}
    type="text"
    placeholder="جستجوی محصولات نهال شاپ"
    inputProps={{ 'aria-label': 'جستجوی محصولات نهال شاپ' }}
    value={searchItem}
    onChange={
      handleInputChange
    }
  />
</div>


<div className='overflow-y-scroll '>
{filteredUsers.map((item) => (
<NavLink to={'/buy'}  className={"linksearch"}>  

<div  onClick={()=>{
  setCartItems([item]);
  setOpen(false);}}
 dir='rtl' className='hidden md:flex md:flex-wrap md:flex-row md:justify-around md:self-center w-[92%] h-[260px] bg-white my-2  border-2 border-gray-200 mx-auto  '>

 <div 
 className='shh relative w-[250px] h-[250px] rounded-sm 
 bg-cover bg-center bg-no-repeat
   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
 ' style={{
  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
}} >  
  </div>

<div className=' inline-flex justify-start self-center items-center py-1 w-[250px] '>
<div className='w-full py-1'> <p className='text-xl text-center flex-nowrap '>{item.title1}</p></div>

</div>
<div className='w-[150px]   inline-flex justify-start self-center items-center'  > 
<p className='text-[20px] text-gray-500  text-right font-bold'   >
{addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
</p>
</div>
</div> 
<div  onClick={()=>{
setCartItems([item]);
setOpen(false);}}
dir='rtl' className='flex flex-row justify-around self-center md:hidden w-full h-[150px] bg-white my-2  border-2 border-gray-200 mx-auto  '>

<div 
 className='px-2 shh relative w-1/3 h-[120px] rounded-sm 
 bg-cover bg-center bg-no-repeat
   before:absolute before:w-full before:h-[60px] before:bottom-[-12px] before:rounded-3xl before:bg-transparent
 ' style={{
  backgroundImage: `url(${item.img})`,borderRadius:"23% 77% 11% 89% / 66% 42% 58% 34% "
}} >  
  </div>

<div className=' inline-flex justify-start self-center items-center py-1  w-1/3 px-2 '>
<div className='w-full py-1'> <p className='text-sm text-center flex-nowrap '>{item.title1}</p></div>

</div>
<div className=' w-1/3   inline-flex justify-start self-center items-center px-2'  > 
<p className='text-[16px] text-gray-500  text-right font-bold'   >
{addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
</p>
</div>
</div> 

</NavLink>
))}

</div>








</ModalDialog>
</Modal>


</div>
<div className="flex  justify-between pr-4 py-0 h-8 ">
<NavLink to={"/signup"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<RiAdminLine className='font-black w-7 h-6 text-zinc-700  hover:text-orange-500 mx-4 ' />
</NavLink>
<Badge color='warning' badgeContent={cartItemsBuy.length} sx={{color:"white"}}>
<NavLink to={"/endbuy"}  style={{display:"flex",textAlign:"center", cursor:"pointer", alignItems:"center",fontWeight:600}}
>
<LuShoppingCart className='font-black w-7 h-6 text-zinc-700 hover:text-orange-500' />
</NavLink>
</Badge>
</div>
</nav>
<nav dir='ltr' className='sticky top-0 hidden md:flex   z-20 mt-0 w-screen bg-white h-[70px] mx-auto   '>
<NavbarMenuItem/>
</nav>
<nav dir="rtl" className= " flex  border-b-red-600 md:hidden w-screen bg-white h-[60px] px-10  justify-between items-center ">
<Collaps/>
</nav>
</>
)
}

export default TopNavbar
*/}
