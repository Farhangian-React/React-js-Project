import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import './Sheet.css';
import { NavLink } from 'react-router-dom';



export default function SheetRefrigerator() {
  return (
    <>
    
       <Grid container  spacing={2} columns={12} sx={{mx:5,my:1,p:5,bgcolor:'#eeeeee',borderRadius:'10px'}}> 
       <Grid container xs={12} md={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",my:2}}>
         <Grid xs={12}>
          <Typography variant="h4" sx={{py:4}}  >
          یخچال و فریزر
         </Typography>
          <Typography variant="body1" paragraph>
وقتی همه‌چی تازگی داره
</Typography>
<Typography paragraph>
یخچال و فریزر دو یار همیشگی و همراه آشپزخونه‌ن که اگه یه روز نباشن کارا پیش نمی‌ره و حتی نمی‌شه آشپزی کرد.
</Typography>

   <Typography>
برای پیدا کردن یخچال و فریزر دلخواهتون فقط کافیه یه سر به سرزمین سهیل بزنین و با مقایسه‌ و بررسی ویژگی‌ها، یخچال و فریزر دلخواهتون رو پیدا کنین.
          </Typography>
       
        
        </Grid>
                  <Grid  xs={12}  sx={{display:{xs:'flex',sm:'flex'},justifyContent:{xs:'center',sm:'center',md:'start'}}}>
       <Button variant='contained'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',m:3,
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>  <NavLink className='link' to={"/allrefriderators" }>  مشاهده همه ی یخچال و فریزرها </NavLink></Button>
        </Grid>
        </Grid>
        <Grid xs={12} md={6}  sx={{display:{sm:'flex'},flexDirection:"column",justifyContent:'center',my:2}}>
        <Grid xs={12} md={12} 
          sx={{
            display:{xs:"none",sm:"flex"},

            borderRadius:1,
            backgroundImage:'url("https://www.subzero-wolf.com/sub-zero/full-size-refrigeration/refrigeration/-/media/images/united-states/widen/web-2/sm_648prog_d5628xxls_slg_62215.jpg?h=875&width=2000&udi=1&cropregion=0,510,5000,2700")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'300px',
           
            m:2,
            
            }}
        >
       
        </Grid>
        <Grid  xs={12} sm={12}  sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row'}
       , justifyContent:"center"}}>
           <Grid  sx={{
               p:2,
               borderRadius:1,
               backgroundImage:'url("https://food.unl.edu/newsletters/images/kitchen-refrigerator.png")',
               backgroundPosition: 'center',
            
               backgroundRepeat: 'no-repeat',
               height:'250px',
               width:{xs:"250px",sm:"300px",md:"350px"},
               m:2,
              
          }}>
       
        </Grid>
        <Grid  sx={{
          p:2,
          borderRadius:1,
               backgroundImage:'url("https://www.ikea.com/ca/en/images/products/vaelgrundad-bottom-freezer-refrigerator-stainless-steel__0956612_pe804793_s5.jpg?f=s")',
               backgroundPosition: 'center',
               width:{xs:"250px",sm:"300px",md:"350px"},
               backgroundRepeat: 'no-repeat',
               height:'250px',
             
               m:2,
          }}>
       
        </Grid>
        </Grid>
        </Grid>
    
       
       
      </Grid>
    </>
           

  );
}
