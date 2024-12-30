import React, {useRef } from 'react';
import './Bannerus.css';
import { Box,Typography } from '@mui/material';
export default function Bannerus() {
  const refbox=useRef();
  const refbutton=useRef();
  const addstyle=()=>{
    refbox.current.className="cc";
    refbutton.current.className="refbutton";
  }
  return (
    <>
    <Box className='banner' sx={{height:{xs:"60vh",lg:"100vh"},mt:{xs:10,lg:0}}}>
    <svg width='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f2d7a2" fill-opacity="0.8" d="M0,0L720,256L1440,96L1440,0L720,0L0,0Z"></path>
        <text className='text' font-size="32"   x="1050" y="100" fill='#282828' > تفاوت خرید را در دستگاه های سهیل تجربه کنید</text>
        <text font-size="24" font-family="tahoma" text-decoration="underline" className='text' x="1002" y="140" fill='#282828' >________________________________________</text>
      </svg>  
    </Box>
<Box  ref={refbox}  sx={{display:'flex',justifyContent:'start',flexDirection:"column",alignSelf:"center",height:"200px",overflow:"hidden",mt:5,pt:{xs:1},px:10}}>
  <Typography variant='h4' color='black' sx={{my:2,textAlign:"center",fontWeight:"500"}}>داستان ما از کجا شروع شد؟</Typography>
  <Typography paragraph variant='body1' color='#585858' sx={{textAlign:'justify'}} >سهیل از ابتدا تا انتها، متعهد به شما

«ارکان ساختار نوین ایرانیان» عبارت طولانی اما مهمیه! و ما به طور مخفف صداش می‌زنیم سهیل. سهیل سیاره‌ایه که زمان توش حرف اول رو می‌زنه. هرکدوم از لوازم خونگی سهیل یه وظیفه‌ی مهم داره، اونم اینه که یه کاری کنه شما 
بتونین از زمان مفیدتون به بهترین شکل ممکن استفاده کنین. کارهای تکراری و خسته کننده رو لوازم خونگی‌ سهیل براتون انجام می‌ده تا شما بتونین به کارهای مهمتون برسین!
کل ماجرای سهیل از سال ۸۴ شروع شد، یه گروه از بهترین تولید‌کننده‌ها، مهندس‌ها و کارشناس‌ها ایرانی دست به دست هم دادن تا تولید ملی رنگ و روی تازه‌تری به خودش بگیره!
از اون موقع تا امروز، تعهد، کیفیت، هوشمندی و حمایت برای ما خلاصه شده در سهیل! برای همینه که می‌گیم، می‌تونید روی ما حساب کنید!</Typography>
<Typography variant="h5" sx={{pt:8,pb:0.3,textAlign:"justify"}}  >
چشم انداز سهیل
         </Typography>
         <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
         برند سهیل قصد دارد با ارائه سبد محصولات متناسب با فرهنگ ایرانی، تجربه مصرف‌کنندگان از محصولات را بهبود بخشد و به عنوان یک برند ملی آینده محور شناخته شود.
         </Typography>
         <Typography variant="h5" sx={{py:0.3}}  >
         ماموریت سهیل
         </Typography>
          <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}} >
          سهیل یک برند ملی در زمینه تولید لوازم خانگی می‌باشد که خلق 
          ارزش برای مصرف کننده را در آفرینش سبک زندگی منحصر به فرد از راه القای ریشه‌های فرهنگ ایرانی در ویژگی‌های محصولات و خدمات می‌داند. برند سهیل اعتقاد دارد بالاترین ارزش از طریق ارائه سبد محصول مدرن، بادوام و اصیل همراه با آمیخته تکنولوژی روز جهان ایجاد می‌شود.
         </Typography>
         <Typography variant="h5" sx={{py:0.3,textAlign:"justify"}}  >
فرهنگ ایرانی
         </Typography>
         <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
         سهیل 
         هم‌راستا با ‌فرهنگ ‌ایرانی است. جامعه ایرانی مشتریان اصلی سهیل هستند که پیشینه اصیل و پرافتخاری همراه خود دارند.
          سهیل به فرهنگ ایرانی و حفظ آن اهمیت می‌دهد و براساس نیازهای این فرهنگ محصولات و خدمات خود را طراحی و تولید می‌کند.
          </Typography>
         <Typography variant="h5" sx={{py:0.3,textAlign:"justify"}}  >
         مسئولیت پذیری
         </Typography>
         <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
         سهیل خود را در برابر اهداف، ارزش‌ها و وعده‌هایی که تعریف کرده است مسئول می‌داند و این اهداف را با ذی‌نفعان خود به اشتراک می‌گذارد تا همواره در مسیر اهداف خود ثابت‌قدم و مسئولیت‌پذیر باشد.
          </Typography>
         <Typography variant="h5" sx={{py:0.3,textAlign:"justify"}}  >
         کارآمدی
         </Typography>
         <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
         سهیل به وقت کاربران خود اهمیت می‌دهد و برای ساده کردن امور زندگی مشتریانش و مراقبت از آن‌ها تلاش می‌کند. 
         سهیل در تولید و طراحی محصولات و خدماتش سادگی استفاده و کاربردی بودن را الگو قرار می‌دهد.
          </Typography>
         <Typography variant="h5" sx={{py:0.3,textAlign:"justify"}}  >
         مشتری مداری
         </Typography>
         <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
         سهیل تلاش خواهد کرد نیاز مشتریان خود را اولویت قرار دهد و براساس آن عمل کند. 
         سهیل به دنبال کسب رضایت مشتریان خود و ایجاد رابطه طولانی مدت با آن‌هاست.
          ارائه محصولات براساس نیاز مشتریان می‌تواند از آن‌ها مراقبت کند و زندگی روزمره را برای کاربران خود ساده و راحت کند.
          </Typography>
          <Typography  variant="h5" sx={{py:0.3,textAlign:"justify"}} >
          قابل اعتماد بودن
          </Typography>
          <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
          سرمایه مهم سهیل اعتماد افرادی است که محصولات و خدماتش را انتخاب کرده‌اند. سهیل
           دائما تلاش می‌کند محصولات و خدمات خود را بهبود بخشد و پاسخی شایسته به اعتماد مشتریانش دهد.
          </Typography>
          <Typography  variant="h5" sx={{py:0.3,textAlign:"justify"}} >
         تلاشگری
          </Typography>
          <Typography  paragraph  sx={{color:"#828282",textAlign:"justify"}}>
          تاریخچه سهیل نمایان‌گر تلاش‌ها و مسیر طی شده
           برای بهتر شدن و پیشرفت است. تلاش و کار سخت از مهم‌ترین دلایل بقا
            و پایداری برند سهیل است. اسنوا می‌داند مسیر پیشرفت و تعالی بی انتهاست و از تلاش دست نخواهد کشید.
          </Typography>
</Box>
<Box ref={refbutton} onClick={addstyle}  sx={{display:"flex",justifyContent:"center",alignSelf:"center",my:0.5}} >
<button >  <span className='formbutton'>   مطالب بیشتر </span></button>
        </Box>
    </>
  );
}
