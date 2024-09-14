import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography } from '@mui/material';
import './Sheet.css';
import { Slide } from 'react-slideshow-image';

const message= [ "jhgjdtga","jhfyjmhdytsxdg","kguyfdyuds"];

export default function SheetOne() {
  return (

    <>
    <Box sx={{alignSelf: "center",mx:{xs:5,md:20,lg:30}}}>
        <Typography variant='h5' sx={{color:"#b6882a",textAlign:"center",my:1}}>
به سهیل خوش آمدید
        </Typography>
        <Typography variant='h6' sx={{color:"#b6882a",textAlign:"center",fontStyle:"italic",m:1}}>
        WELCOME TO SOHIL HIGH APPLIANCE
        </Typography>
        <Typography  sx={{fontSize:"18px",color:"#3a3a3a",textAlign:"center"}}>

        ما کامل ترین فروشگاه لوازم خانگی ایران با شعب مختلف در شهرهای بزرگ هستیم.با ارایه هر برند اصلی لوازم خانگی از جمله whirlpool ,LG ,Samsung ,Bush ,.... 
از خدمات تحویل در خانه، نصب حرفه ای و نمایشگاه مدرن ما با 250 وسیله زنده در بیش از 20 آشپزخانه الهام بخش بهره ببرید.
        </Typography>
    </Box>
    <Grid xs={10} md={6}  
   
   sx={{
    mx:{xs:5,md:28},
    borderRadius:3,
     my:4,
     backgroundImage: 'url("https://www.mountainhighappliance.com/uploads/files/homepage-video-image.jpg")',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     height:'400px',
     }} >
  
</Grid>
<Grid xs={12} container    sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},my:5}}>
            <Grid xs={12} md={3}  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3,mx:2}}> 
          <Box sx={{height:"130px",mx:6}}>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   با سهیل... </Typography>
                <Typography sx={{my:2,textAlign:"center",color:"gray"}}>نمایشگاه های زیبا و با موقعیت مناسب خبره ترین کارشناسان لوازم خانگی ما آنچه را که شما می خواهید قیمت مورد نظر شما را داریم</Typography>
                </Box>
                <Box sx={{mx:5,p:0,mt:{xs:3,sm:8,md:3},width:"90%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{':hover':{backgroundImage:{xs:"linear-gradient(to right ,#eeeeee,#282828)",md:"linear-gradient(to right ,#E0AA3E,#282828)"},color:'white'},px:{xs:5,lg:15},py:0,my:0.5,color:{xs:"white",md:"black"},
                border:{xs:'none',md:'1px solid #E0AA3E'},backgroundImage:{xs:"linear-gradient(to right ,#E0AA3E,#282828)",md:'none'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Grid>
       
            <Box className='linevertical' sx={{display:{xs:"none",md:"flex"},alignSelf:"center"}}> </Box>
            <Box className='linehorizental' sx={{display:{xs:"flex",md:"none"},alignSelf:"center"}}> </Box>
            <Grid xs={12} md={3}   sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3,mx:2}}>
       <Box sx={{height:"130px",mx:6}}>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>خرید شما </Typography>
                <Typography sx={{my:2,textAlign:"center",color:"gray"}}>بسیاری از آشپزخانه‌های خیره‌کننده الهام‌بخش طراحی هستند.
لوازم خانگی متصل شده به صورت زنده دستگاه های جدید خود را در فروشگاه آزمایش کنید</Typography>
               </Box>
                <Box sx={{mx:5,p:0,mt:{xs:3,sm:8,md:3},width:"90%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{':hover':{backgroundImage:{xs:"linear-gradient(to right ,#eeeeee,#282828)",md:"linear-gradient(to right ,#E0AA3E,#282828)"},color:'white'},px:{xs:5,lg:15},py:0,my:0.5,color:{xs:"white",md:"black"},
                border:{xs:'none',md:'1px solid #E0AA3E'},backgroundImage:{xs:"linear-gradient(to right ,#E0AA3E,#282828)",md:'none'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Grid>
        
            <Box className='linevertical' sx={{display:{xs:"none",md:"flex"},alignSelf:"center"}}> </Box>
            <Box className='linehorizental' sx={{display:{xs:"flex",md:"none"},alignSelf:"center"}}> </Box>
            <Grid xs={12} md={3}   sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3,mx:2}}>
           <Box sx={{height:"130px",mx:6}}>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>تحویل متخصص</Typography>
                <Typography sx={{my:2,textAlign:"center",color:"gray"}}>   این شرکت متخصصانی را آموزش داده و با دانش ترین خدمه لوازم خانگی سهیل به کار گرفته است</Typography>
              </Box>
                <Box sx={{mx:5,p:0,mt:{xs:3,sm:8,md:3},width:"90%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{':hover':{backgroundImage:{xs:"linear-gradient(to right ,#eeeeee,#282828)",md:"linear-gradient(to right ,#E0AA3E,#282828)"},color:'white'},px:{xs:5,lg:15},py:0,my:0.5,color:{xs:"white",md:"black"},
                border:{xs:'none',md:'1px solid #E0AA3E'},backgroundImage:{xs:"linear-gradient(to right ,#E0AA3E,#282828)",md:'none'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Grid>
           
        </Grid>
        <Grid>
        <Slide slidesToScroll={1} slidesToShow={4} indicators={true} sx={{ display: { xs: 'none', md: 'flex' } }}  >
{message.map(i=>
<Box>
  <Typography>
    
  </Typography>
</Box>
)}
        </Slide>
        </Grid>
    
    
    </>
  );
}