import * as React from 'react';
import CardWhirlpool from './CardWhirlpool';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import {PageTitle} from '../Title/PageTitle';
export default  function WhirlpoolBrands () {
  return (
<>
<PageTitle title="Whirlpool محصولات " description='همه ی محصولات با برند Whirlpool'/>
   <TopNav/> 
          <CardWhirlpool  itemsPerPage={25}/>
          <Footer/>
   </>
   );}    





  
  


