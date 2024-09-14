import React from 'react';
import Banner from '../dashbord/Banner';
import SheetRefrigerator from '../dashbord/SheetRefrigerator';
import Sheet3 from '../dashbord/SheetGas';
import SheetWashingMachine from '../dashbord/SheetWashingMachine';
import SheetDishwasher from '../dashbord/SheetDishwasher';
import SheetOne from '../dashbord/SheetOne';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import './Products.css';

function Products() {
  return (
    <>
    <PageTitle title='سهیل / وب سایت لوازم خانگی' description=' سهیل '/>
    <TopNav />
    <Box sx={{width:'100%' ,height:{xs:'800px',lg:'600px'}, bgcolor:"white"}}>
      <Banner/>
    </Box>
    
    <Box className='logos' >

<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
</Box>
<Box sx={{width:'100%' }}>
      <SheetOne/>
    </Box>
    <Box sx={{width:'100%' }}>
      <SheetRefrigerator/>
    </Box>
    <Box sx={{width:'100%' }}>
      <SheetWashingMachine/>
    </Box>
    <Box sx={{width:'100%' }}>
      <Sheet3/>
    </Box>
    <Box sx={{width:'100%' }}>
      <SheetDishwasher/>
    </Box>
    <div class='logos' >

<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
<div  class='logos-slide' >

<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
<img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png"  alt='' />
<img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png"       alt='' />
<img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' />
</div>
</div>

    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default Products;
