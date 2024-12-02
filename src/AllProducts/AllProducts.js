import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardAllProducts from './CardAllProducts';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import {PageTitle} from '../Title/PageTitle';
export default  function AllProducts() {
  return (
<>
<PageTitle title='همه ی محصولات سهیل' description=' همه ی محصولات   '/>
   <TopNav/> 
   <Box sx={{display:"flex",justifyContent:"end",my:{xs:8,md:1} ,mx:1 }} >
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
               <NavLink className=' navlinkin'  to={'/shop-dishwasher'} >ماشین ظرفشویی</NavLink>    
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
        
        
          <CardAllProducts  itemsPerPage={9}/>
          <Footer/>
   </>
   );}    
  


