import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardWashingMachine from './CardWashingMachine';
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import { PageTitle } from '../../Title/PageTitle';
export default  function WashingMachine() {
  return (
<>

<PageTitle title='ماشین لباس شویی' description=' ماشین لباس شویی '/>
   <TopNav/> 
   <Box sx={{display:"flex",justifyContent:"end",mb:{xs:1,md:1} ,mt:{xs:8,md:0.7} ,mx:0.5 }} >
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
               <NavLink className=' navlinks'  to={'/shop-washing-machine'} >ماشین لباسشویی</NavLink>    
            </ListItem>
            <ListItem  role="none">
            <NavLink className='navlinkin' to={'/shop-dishwasher'}>ماشین ظرفشویی</NavLink>
            </ListItem>
            <ListItem role="none">
               <NavLink className=' navlinkin'  to={'/allrefriderators'} > یخجال و فریزر</NavLink>    
            </ListItem>
            <ListItem  role="none">
            <NavLink className='navlinkin' to={'/allgas'}>پخت و پز  </NavLink>
            </ListItem>
          </List>
        </Box>
          <CardWashingMachine itemsPerPage={6}/>
          <Footer/>
   </>
   );}    
  


