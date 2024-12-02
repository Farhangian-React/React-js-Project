import * as React from 'react';
import './Bannerus.css';
import { Box, Grid, Typography } from '@mui/material';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
export default function Sheetus2() {
  return (
    <>
    <Box className='boxmain'>
       <Grid container spacing={2} sx={{mt:0,height:'50%',display:'flex',bgcolor:'white'}}>
        <Grid  xs={12} md={6} sx={{pb:3,pt:2,px:15,mt:0, display:'flex' ,flexDirection:'column',justifyContent:'center',bgcolor:'#464541'}}>
           <QrCodeOutlinedIcon sx={{mt:1,mb:0,fontSize:{sx:'55px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <Typography  sx={{fontSize:{xs:'16px',sm:'24px'}, mb:1,textAlign:'right',color:'white'}}>هویت یکپارچه</Typography>
            <Typography variant='body2'sx={{mb:1,textAlign:'right',color:'gray'}}>
ما به استانداردهای اخلاقی پایبندیم و تلاش می‌کنیم تا از این راه به هویت 
یکپارچه برسیم. یکپارچگی حرفه‌ای از برنامه‌ریزی تا اجرا، از نقاط قوت ماست و برای حفظ و نگهداری‌ش، 
همه‌ی تلاشمون رو می‌کنیم.</Typography>
        </Grid>
        <Grid  xs={12} md={6} sx={{pb:3,pt:2,px:15,mt:0, display:'flex',flexDirection:'column',justifyContent:"center",bgcolor:'#292826' }}>
        <HandshakeOutlinedIcon sx={{mt:1,mb:0,fontSize:{sx:'55px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <Typography  sx={{fontSize:{xs:'16px',sm:'24px'},mb:1,textAlign:'right',color:'white'}}> مشارکت واقعی</Typography>
            <Typography variant='body2'sx={{mb:1,textAlign:'right',color:'gray'}}>
            تاکید ما اینه که با کسب‌وکارهای منطقه‌ای مشارکت قوی داشته باشیم. عنصر اصلی موفقیت ما تعهد
             به شرکاست و همیشه برای رشد و پیشرفت فکری‌مون، به اعتماد متقابل و شیوه‌های کاری منضبط، اصرار داریم</Typography>
        </Grid>
    </Grid>
    <Grid container spacing={2} sx={{mt:0,heights:'50%',display:'flex',bgcolor:'white'}}>
        <Grid  xs={12} md={6} sx={{pb:3,px:15,mt:0, display:'flex' ,flexDirection:'column',justifyContent:'center',bgcolor:'#464541'}}>
           <ModelTrainingOutlinedIcon sx={{mt:1,mb:0,fontSize:{sx:'55px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <Typography  sx={{fontSize:{xs:'16px',sm:'24px'},mb:1,textAlign:'right',color:'white'}}>رهبری فکری </Typography>
            <Typography variant='body2'sx={{mb:1,textAlign:'right',color:'gray'}}>
            رهبری فکری، عنصر اصلی برای موفقیت اقتصادیه!
             گروه‌های متخصص اسنوا به دلیل داشتن رهبری فکری، در زمینه‌ی تولید، توسعه و طرح‌های نوآورانه همیشه پیش‌تاز بوده و هستن!</Typography>
        </Grid>
      
        <Grid  xs={12} md={6} sx={{pb:3,px:15,mt:0, display:'flex',flexDirection:'column',justifyContent:"center",bgcolor:'#292826' }}>
        <AdsClickOutlinedIcon sx={{mt:1,mb:0,fontSize:{sx:'55px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <Typography  sx={{fontSize:{xs:'16px',sm:'24px'},mb:1,textAlign:'right',color:'white'}}> تمرکز بر مردم</Typography>
            <Typography variant='body2'sx={{mb:1,textAlign:'right',color:'gray'}}>

            جهان بدون مردم معنایی نداره و ما اسنوایی‌ها متعهد به مردم و تعالی جهانی هستیم.
             جهانی که در اون کار و زندگی می‌کنیم، جهانی که مردمش لایق بهترین‌هان</Typography>
        </Grid>
    </Grid>
    <Box className='boxheader'>
    <Typography  sx={{fontSize:{xs:'18px',lg:'24px'},mt:0.5,textAlign:'center',color:'#282828',fontWeight:"500"}}> ارزش های ما   </Typography>
    </Box>
    </Box>
    
   
     
    </>
  )}