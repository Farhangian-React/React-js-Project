import * as React from 'react';
import CardLg from './CardLg';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import {PageTitle} from '../Title/PageTitle';
export default  function LgBrands () {
  return (
<>
<PageTitle title="محصولات LG" description='همه ی محصولات با برند LG'/>
   <TopNav/> 

          <CardLg  itemsPerPage={25}/>
          <Footer/>
   </>
   );}    





  
  


