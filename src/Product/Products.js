import React  from 'react';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import SlideOffProducts from "./SlideOffProducts";
import BannerP from '../Home/BannerP';
import ProductP from '../Home/ProductP';
import SlidBrand from '../Home/SlidBrand';
function Products() {
       
  return (
    <>
    <PageTitle title=' وب سایت لوازم خانگی سهیل' description=' سهیل '/>
    <TopNav />
   <BannerP/>
<SlidBrand/>
   <ProductP/>
      <SlideOffProducts/>
      <SlidBrand/>
      <Footer/>

      </>
  );
}

export default Products;
