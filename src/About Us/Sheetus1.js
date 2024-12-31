import * as React from 'react';
import './Bannerus.css';
import { Box, Typography } from '@mui/material';
export default function Sheetus1() {
  return (
    <>
    <Box className='bannersvg' sx={{mt:5}}>
    <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2d7a2" fill-opacity="1" d="M0,64L1440,288L1440,0L0,0Z">
      </path> <text className='text' font-size="32" font-family="tahoma"  x="1400" y="50" fill='#674e06' >  انچه ما ارایه میدهیم </text>
      <text font-size="24" font-family="tahoma" text-decoration="underline" className='text' x="1412" y="65" fill='#000000' >________________________</text>
      <text className='text' font-size="16" font-family="tahoma"  x="1400" y="100" fill='#000000' >_  ارسال بدون دردسر</text>
      <text className='text' font-size="16" font-family="tahoma"  x="1400" y="130" fill='#000000' > _  لوازم خانگی متمایز  </text>
      <text className='text' font-size="16" font-family="tahoma"  x="1400" y="160" fill='#000000' > _  نصب کننده های تایید شده </text>
      <text className='text' font-size="16" font-family="tahoma"  x="1400" y="190" fill='#000000' > _  محصولات دارای رتبه ستاره انرژی</text>
      <text className='text' font-size="16" font-family="tahoma"  x="1400" y="220" fill='#000000' > _  ارسال به سراسر کشور</text>
      </svg>
</Box>
<Box className="boxbanner" sx={{bgcolor:'black',mt:{xs:30,lg:10},mr:{xs:15,sm:25,md:40},overflow:'hidden',textOverflow: '---'
}}>
   <Typography variant='h5' sx={{my:0,pt:1,color:'#fff',textAlign:'center'}} >
 ملاقات با مدیریت
  <Typography variant='h6' sx={{py:0,my:0,color:'#E0AA3E',textAlign:'center',lineHeight:'0'}} > ________________________
    </Typography>
   </Typography>
   <Typography paragraph variant='body1' sx={{ py:1,my:2,px:6,color:'#f2d7a2',whiteSpace:'normal',textAlign:'justify'}}>
   از سال 1378 ، برد بارنت به ارائه قیمت های رقابتی ، آگاه ترین کارکنان و بهترین تیم های تحویل و نصب داخلی کلرادو اختصاص یافته است. وی قبل 
   از گسترش به چهار نمایشگاه لوازم جانبی شگفت انگیز با صدها دستگاه زنده برای یک آزمایش
    واقعی قبل از خرید تجربه ، فعالیت خود را از فروش لوازم استفاده شده از گاراژ خود آغاز کرد. با تیمی با بیش از 100 کارمند و در حال رشد ، برد متعهد
    است که راه های ابتکاری را برای ماندن از رقابت پیدا کند و sohil را انتخاب شماره یک لوازم در کل ایران کند.
   </Typography>
</Box>

      
     
      
    </>
           

  );
}
