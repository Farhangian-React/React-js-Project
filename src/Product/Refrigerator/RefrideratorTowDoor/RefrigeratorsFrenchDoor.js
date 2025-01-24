import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardRefrigeratorsFrenchDoor from './CardRefrigeratorsFrenchDoor';
import Footer from '../../../Footer/Footer';
import TopNav from '../../../dashbord/TopNav';
import { PageTitle } from '../../../Title/PageTitle';
import SlideOffProducts from "../../../Product/SlideOffProducts";
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../../Dishwasher/Dishwasher.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default  function RefrigeratorsFrenchDoor() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const opens1 = Boolean(anchorEl1);
  const handleClose1 = () => {
    setAnchorEl1(null);
  }
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  }
  return (
<>
<PageTitle title=' یخچال و فریزر / یخچال‌فریزرهای دو درب  ' description='   یخجال و فریزر '/>
   <TopNav/> 
   <Box sx={{display:"flex",justifyContent:"end",mb:"0.5em" ,mt:{xs:"4.7em",lg:"0.1em"} ,mx:"0.5em" }} >
      <List
            role="menu"
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{
              mt: 1,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '2px',
              '--ListDivider-gap': '2px',
              '--ListItemDecorator-size': '24px',
              width:'100%',
              backgroundColor:'#E0E1E3',
              alignItems:'center',
              
              
             
            }}
          >
                <ListItem role="none" sx={{mr:"0.5em"}}>
              
              <ListItemButton 
               onClick={handleClick1}
               sx={{color:"#E0AA3E",fontSize:"1.3em"}}
               >
                یخچال و فریزر 
               
              <ArrowDropDownIcon sx={{fontSize:"1.5em",mt:"0.3em"}} /></ListItemButton>
              <Menu
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'250px' } ,direction:'rtl'
            }
          }
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
       
        }}
        anchorEl={anchorEl1}
        open={opens1}
        onClose={handleClose1}
  
      >
        <MenuItem onClick={handleClose1} disableRipple>
        
        <NavLink  onClick={handleClose1}  disableRipple  to={'/shop-refrigeratorfrenchdoor' } 
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }} > 
         یخچال های دو در   </NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          <NavLink className='navlink' to={'/shop-refrigeratorsidbysid'}
          style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }} > 
           یخچال های ساید بای ساید </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink   to={'/shop-refrideratorbottomfreezer'} 
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }}>
        یخچال و فریزر پایین 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink  to={'/shop-refrideratortopfreezer'}
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }}>
        یخچال و فریزر بالا 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink  to={'/shop-refrideratorspecializedfreezer'}
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141"}}>
        یخچال و فریزر تخصصی 
        </NavLink></MenuItem>
      </Menu>
            </ListItem>
            <ListItem role="none" sx={{mr:"0.5em"}}>
            <NavLink  to={'/shop-washing-machine'} style={{ textDecoration: "none",fontSize:"1.1em",color:"#585858" }}>ماشین لباسشویی</NavLink>
            </ListItem>

            <ListItem role="none" sx={{mr:"0.5em"}}>
            <NavLink  to={'/allgas'} style={{ textDecoration: "none",fontSize:"1.1em",color:"#585858" }}>پخت و پز  </NavLink>
            </ListItem>
            <ListItem role="none" sx={{mr:"0.5em"}}>
               <NavLink to={'/shop-dishwasher'} style={{ textDecoration: "none",fontSize:"1.1em",color:"#585858" }} >ماشین ظرفشویی</NavLink>    
            </ListItem>
          </List>
        </Box>
        
   <CardRefrigeratorsFrenchDoor itemsPerPage={7}/>
   <SlideOffProducts/>
          <Footer/>
</>
  );
}


