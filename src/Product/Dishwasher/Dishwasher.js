import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardDishwasher from './CardDishwasher';
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import {PageTitle} from '../../Title/PageTitle';
import "./Dishwasher.css";
export default  function Dishwasher() {
  return (
<>
<PageTitle title='ماشین ظرفشویی' description=' ماشین ظرفشویی '/>
   <TopNav/> 
   <Box sx={{display:"flex",justifyContent:"end",mb:{xs:1,md:1} ,mt:{xs:8,lg:0.7} ,mx:0.5 }} >
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
              <ListItem role="none">
               <NavLink className=' navlinks'  to={'/shop-dishwasher'} >ماشین ظرفشویی</NavLink>    
            </ListItem>
            <ListItem  role="none">
            <NavLink className='navlinkin' to={'/shop-washing-machine'}>ماشین لباسشویی</NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className=' navlinkin'  to={'/allrefriderators'} > یخجال و فریزر</NavLink>    
            </ListItem>
            <ListItem  role="none">
            <NavLink className='navlinkin' to={'/allgas'}>پخت و پز  </NavLink>
            </ListItem>
          </List>
        </Box>
        
        
          <CardDishwasher  itemsPerPage={6}/>
          <Footer/>
   </>
   );}    
  


