import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography } from '@mui/material';
import './Sheet.css';
import { NavLink } from 'react-router-dom';



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
<Grid sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},mx:10,my:5}}>
            <Box  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3}}> 
            <Typography variant='h5' sx={{mt:0,textAlign:"center"}}>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   در زمان نصب محصول  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>پس از درخواست نصب محصول و مشاهده فاکتور خرید، تاریخ خرید توسط نماینده مجاز خدمات پس از خرید ثبت می گردد.</Typography>
                <Box sx={{mx:5,p:0,mt:1,width:"90%",alignSelf:"center",display:"flex",justifyContent:"center",border:"1px solid #65512a"}}>
                <Box  sx={{width:"100%",px:15,py:0,my:0.5,color:"black",bgcolor:"white",border:'1px solid #E0AA3E'}}> 
                <Typography sx={{fontSize:{xs:'14px',sm:'16px',md:'18px'}}}>
                اطلاعات بیشتر </Typography></Box>
            </Box>
            </Box>
            <Box className='linevertical' sx={{display:{xs:"none",md:"flex"},alignSelf:"center"}}> </Box>
            <Box className='linehorizental' sx={{display:{xs:"flex",md:"none"},alignSelf:"center"}}> </Box>
            <Box  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3}}>
            <Typography variant='h5' sx={{mt:0,textAlign:"center"}}>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>  دریافت کد شش حرفی جشنواره  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>به ازای هر محصول درج شده در جدول فوق، یک کد شش حرفی به شماره پذیرش مصرف کننده اختصاص داده می شود</Typography>
                <Box sx={{mx:5,p:0,mt:1,width:"80%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{px:{xs:5,lg:15},py:0,my:0.5,color:"black",bgcolor:"white",border:{xs:'1px solid #65512a',md:'1px solid #E0AA3E'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Box>
            <Box className='linevertical' sx={{display:{xs:"none",md:"flex"},alignSelf:"center"}}> </Box>
            <Box className='linehorizental' sx={{display:{xs:"flex",md:"none"},alignSelf:"center"}}> </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3}}>
            <Typography variant='h5' sx={{mt:0,textAlign:"center"}}>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}> دریافت لینک فعالسازی </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>لینک فعالسازی از طریق پیامک برای مصرف کننده ارسال خواهد شد که با کلیک بر روی این گزینه فعالسازی صورت می‌گیرد.</Typography>
                <Box sx={{mx:5,p:0,mt:1,width:"80%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{px:{xs:5,lg:15},py:0,my:0.5,color:"black",bgcolor:"white",border:{xs:'1px solid #65512a',md:'1px solid #E0AA3E'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Box>
        </Grid>
    
    
    </>
  );
}