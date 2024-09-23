import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Box from '@mui/material/Box';
import dishwashericon from '../img/dishwasher-icon.jpg';
import washingmachins from '../img/washingmachin-icon2.png';
import gasicon from '../img/gas-icon2.jpg';
import Refrigeratoricon from '../img/Refrigerator-icon1.png';
import { Typography } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {NavLink} from 'react-router-dom';
import './Footer.css';
import Divider from '@mui/material/Divider';
export default function Footer() {
  return (
    <Box sx={{ m:1, bgcolor:"#1c1c1c" ,display:'flex',flexDirection:'column'}} >
      <Grid container
           justifyContent={'start'}
        
       rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
       margin={0}
    sx={{mt:2,p:2}}
       >
        <Grid  xs={6} md={2}   >
        <List
            role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              mr:3,
              mt: 0,
              mb:0,
              border:'none',
              backgroundColor:'#fff',
              height:'400px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}   
          >
            <ListItem role="none">
            <ListItemDecorator>
              <img src={Refrigeratoricon} width={50} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem role="none">
           
            <NavLink  className='navlinkfooter' to={'/allrefriderators'}>  یخچال و فریزر </NavLink>
            </ListItem>
            <Divider component="li" />
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorsidbysid'}> ساید بای ساید </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-refrideratortopfreezer'}> فریزر بالا</NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className='navlinkwhite' to={'/shop-refrideratorbottomfreezer'} >فریزر پایین </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorfrenchdoor'} > فریزر دو در</NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className='navlinkwhite' to={'/shop-refrideratorspecializedfreezer'}>یخچال و فریزر تخصصی</NavLink>
            </ListItem>
          </List>
        </Grid>
         <Grid  xs={6}  md={2}>
        <List
            role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              mt:0,
              mb:0,
              mr:3,
              border:'none',
              backgroundColor:'#fff',
              height:'400px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}  
          >
            <ListItem role="none">
            <ListItemDecorator>
              <img src={washingmachins} width={50} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem role="none">
            <NavLink  className='navlinkfooter' to={'/shop-washing-machine'}>   ماشین لباسشویی  </NavLink>
            </ListItem>
            <Divider component="li" />
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-dishwasher'}> 7 کیلوگرم   </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-dishwasher'}> 8 کیلوگرم  </NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className='navlinkwhite' to={'/shop-dishwasher'} > 9 کیلوگرم  </NavLink>
            </ListItem>
          </List>
        </Grid>
        <Grid  xs={6} md={2}>
        <List
            role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              mt:0,
              mr:3,
              mb:0,
              border:'none',
              backgroundColor:'#fff',
              height:'400px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}  
          >
            <ListItem role="none">
            <ListItemDecorator>
              <img src={gasicon} width={50} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem role="none">
            <NavLink  className='navlinkfooter' to={'/allgas'}>   اجاق گاز   </NavLink>
            </ListItem>
      <Divider component="li" />
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-ranges'}>  اجاق گاز و فر </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-cooktop'}> گاز صفحه ای</NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className='navlinkwhite' to={'/shop-hood'} >هود </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-microwaves'}>مایکروویو</NavLink>
            </ListItem>
          </List>
        </Grid>
        <Grid  xs={6}  md={2} >
        <List
            role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              mt: 0,
              mb:0,
              mr:3,
              border:'none',
              backgroundColor:'#fff',
              height:'400px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}
          >
            <ListItem role="none">
            <ListItemDecorator>
              <img src={dishwashericon} width={50}  alt=''/>
              </ListItemDecorator>
            </ListItem>
            <ListItem role="none">
            <NavLink  className='navlinkfooter' to={'/shop-dishwasher'}>ماشین ظرفشویی </NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkwhite' to={'/shop-dishwasher'}  >  12 نفره  </NavLink>
            </ListItem>
          </List>
        </Grid>
        
     
          </Grid>
          <Grid  xs={12}  md={12} >
        <List
            role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              my: 0,
              border:'none',
              backgroundColor:'#1c1c1c',
              height:'90px',
              alignItems:'center',
              width:'100%',
            }}
             
            
          >
           
              <ListItem>
                <List  role="footer"
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{border:'none'}}
            >
                
                <NavLink  className='navicon'><Facebook fontSize="large" color="primary" className="icons"/></NavLink>
                <NavLink  className='navicon'><Instagram fontSize="large" color="error" className="icons"/></NavLink>
                <NavLink className='navicon'><Twitter fontSize="large" color="info" className="icons"/></NavLink>
              </List>
              </ListItem> 
              <ListItem>
              <Typography level='h5' sx={{color:'white'}}> سهیل در شبکه های اجتمایی</Typography>
              </ListItem>
            </List>
          </Grid>
      <Grid sx={{bgcolor:'#1c1c1c',mb:3,mt:0}}>
        <Typography sx={{textAlign:'center',color:'grey',mt:2}}>
           © 1384-1402 Copyright:سهیل -کلیه حقوق محفوظ است
        </Typography>
      </Grid>
     
    </Box>
  );
}
