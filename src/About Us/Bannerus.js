import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import './Bannerus.css';

import { Box, Button, Typography } from '@mui/material';





export default function Bannerus() {
  return (
    <>
    <Box className='banner' sx={{mt:{xs:6,md:0}}}>
      
    <svg width='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f2" fill-opacity="0.8" d="M0,0L720,256L1440,96L1440,0L720,0L0,0Z">
     
      </path> <text className='text' font-size="32"   x="1050" y="100" fill='#000000' > تفاوت خرید را در دستگاه های سهیل تجربه کنید</text>
      <text font-size="32"  text-decoration="underline" className='text' x="1065" y="120" fill='#674e06' >_______________________________________________</text>
      </svg>
   
</Box>
<Grid container xs={12} md={12} sx={{display:'flex',justifyContent:'center',pt:{xs:1},px:10}}>
  <Typography variant='h6' color='black' textAlign='center'sx={{my:2}}>داستان ما از کجا شروع شد؟</Typography>
  <Typography variant='body1' color='gray' textAlign='center'>اسنوا از ابتدا تا انتها، متعهد به شما

«ارکان ساختار نوین ایرانیان» عبارت طولانی اما مهمیه! و ما به طور مخفف صداش می‌زنیم اسنوا. اسنوا سیاره‌ایه که زمان توش حرف اول رو می‌زنه. هرکدوم از لوازم خونگی اسنوایی یه وظیفه‌ی مهم داره، اونم اینه که یه کاری کنه شما بتونین از زمان مفیدتون به بهترین شکل ممکن استفاده کنین. کارهای تکراری و خسته کننده رو لوازم خونگی‌ اسنوا براتون انجام می‌ده تا شما بتونین به کارهای مهمتون برسین!

کل ماجرای اسنوا از سال ۸۴ شروع شد، یه گروه از بهترین تولید‌کننده‌ها، مهندس‌ها و کارشناس‌ها ایرانی دست به دست هم دادن تا تولید ملی رنگ و روی تازه‌تری به خودش بگیره!

از اون موقع تا امروز، تعهد، کیفیت، هوشمندی و حمایت برای ما خلاصه شده در اسنوا! برای همینه که می‌گیم، می‌تونید روی ما حساب کنید!</Typography>
<Button className='button' sx={{mb:2,fontSize:'16px',color:'#58585E',bgcolor:'#FFC412',mt:3,py:0}}>بیشتر بدانید</Button>
</Grid>

      
     
      
    </>
           

  );
}
