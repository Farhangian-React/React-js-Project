import React from 'react';
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
function TopNav(props) {
  return (
    <>
     <HideOnScroll {...props}>
    <AppBar position="fixed" className='nav' sx={{mt:0 ,mb:0,bgcolor:'black',px:1,color:'white'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ my:0, display:"flex",justifyContent:'space-between'}} >
      <Grid container spacing={4} sx={{display:'flex',justifyContent:'space-between'}}>
        <Grid  sx={{mt:3, display:'flex', boxShadow:'10px 10px 50px #674e06' }}>
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
       letterSpacing: '.1rem',
       color: '#f2b705',
       textDecoration: 'none',
       fontSize:{xs:"18px",md:"28px "}
     }}
   >
     S O H I L
   </Typography>
   </Grid>
  
 <SearchButton/>
   </Grid>
      </Toolbar>
      </Container>
    </AppBar>
    </HideOnScroll>
    <AppBar position='sticky' className='nav' sx={{display:{xs:'none',lg:'flex'},
      mt:8 ,mb:0,bgcolor:'black',px:1,py:0,color:'white',}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{my:0 ,display:{xs:'flex',sm:'flex'},justifyContent:{xs:'end',sm:'space-around'}}}>
          <Box sx={{ flexGrow: 1, display:{ xs:'none',lg: 'flex'}, justifyContent:'space-around',marginLeft:{md:0},marginRight:{md:0} }}>
             <NavigationMenu/> 
              <NavLink className="signup"  to={'/signup'}>
                 <Box sx={{my:2,py:1,px:2,display: { xs: 'none', lg: 'flex' },justifyContent:'space-between',border:'1px solid  #f2b705','&:hover': {
    backgroundColor:'black',
    border:'1px solid  #fff',
  },borderRadius:1}}>
                   <Typography variant='body2' sx={{mt:0.5,color:"#eeeeee"}}>ورود یا عضویت </Typography>
           <PermIdentityOutlinedIcon  sx={{mr:2,fontSize:'26px',color:'white'}} />
          
       </Box> 
       </NavLink>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>



    
    </>
  );
}
export default TopNav;       



