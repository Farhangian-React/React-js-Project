import * as React from 'react';
import CardSamsung from './CardSamsung';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import {PageTitle} from '../Title/PageTitle';
export default  function SamsungBrands () {
  return (
<>
<PageTitle title="محصولات سامسونگ" description='همه ی محصولات با برند سامسونگ'/>
   <TopNav/>
   <CardSamsung  itemsPerPage={25}/>
          <Footer/>
   </>
   );}    





  
  


