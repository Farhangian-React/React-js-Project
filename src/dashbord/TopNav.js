import React, {useContext} from 'react';

import {CartBuyContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);


  return (
    <>
     <HideOnScroll {...props}>
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



