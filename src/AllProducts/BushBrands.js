import * as React from 'react';
import CardBush from './CardBush';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import {PageTitle} from '../Title/PageTitle';
export default  function  BushBrands() {
  return (
<>
<PageTitle title="محصولات بوش" description='همه ی محصولات با برند بوش'/>
   <TopNav/> 
          <CardBush  itemsPerPage={25}/>
          <Footer/>
   </>
   );}    





  
  


