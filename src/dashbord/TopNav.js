import React, {useContext} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavigationMenu from './NavigationMenu';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import SearchButton from './SearchButton';
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
    <AppBar position="fixed" className='nav' sx={{mt:0 ,bgcolor:'black',px:1,color:'white'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ my:0, display:{xs:'flex',sm:'flex',},justifyContent:{xs:'space-between'}}} >
      <Grid container spacing={4} sx={{display:'flex',justifyContent:'space-between'}}>
        <Grid  xs={5} md={3} sx={{mt:3, display:'flex', boxShadow:'10px 10px 50px #674e06' }}>
        <img className='imgsohil' width={60}  src='https://png.pngtree.com/png-clipart/20230817/original/pngtree-mountains-logo-design-sky-high-vector-picture-image_10974603.png'/>
               <Typography
     variant="h5"
     noWrap
     component="a"
     href="/"
     sx={{
       mr:{sx:0,md:2} ,
       mt:1,
       display: 'flex',
       flexGrow: 0,
       fontFamily: 'monospace',
       fontWeight: 300,
       fontStyle:'italic',
       letterSpacing: '.1rem',
       color: '#f2b705',
       textDecoration: 'none',
     }}
   >
     S O H I L
   </Typography>
   </Grid>
   <Grid  xs={3} sx={{mt:3,display:{xs:'flex',md:'none'},justifyContent:'center'}}>
   <Buy sx={{py:0,my:1,display:'flex',justifyContent:'center',direction:'ltr'}}>
              <NavLink to={'/buybasket'} >
              <ShoppingCartIcon  sx={{mr:2,ml:0,mt:1,color:'white',fontSize:'22px'}}/>
            </NavLink>
            <Typography sx={{mt:1}}>( {cartItemsBuy.length} )</Typography>
          </Buy>
   </Grid>
 <SearchButton/>
   </Grid>
        </Toolbar>
      </Container>
    </AppBar>
    </HideOnScroll>
    <AppBar position='sticky' className='nav' sx={{display:{xs:'none',md:'flex'},
      mt:8 ,bgcolor:'black',px:1,py:0,color:'white',}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{my:0 ,display:{xs:'flex',sm:'flex'},justifyContent:{xs:'end',sm:'space-around'}}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'center', },marginLeft:{md:0},marginRight:{md:0} }}>
             <NavigationMenu/> 
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default TopNav;       


