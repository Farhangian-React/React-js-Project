import React, { useState,useEffect,useRef } from 'react';
import {Box} from '@mui/material';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import '../Product/Products.css';
import {useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
function AfterSalesService() {
  const navigate=useNavigate();
  useEffect(()=>{
let username=sessionStorage.getItem("id");
if(username===""|| username===null){
navigate("/signin");
}
  },[]);

 const sheet1 =useRef();
 const sheet2 =useRef();
 const sheet3 =useRef();
 const sheet4 =useRef();
 const sheet5 =useRef();
 const sheet6 =useRef();
 const sheet7 =useRef();
 const sheet8 =useRef();

 const scrollToElement1 = () => {
  sheet1.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement2 = () => {
  sheet2.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement3 = () => {
  sheet3.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement4 = () => {
  sheet4.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement5 = () => {
  sheet5.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement6 = () => {
  sheet6.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement7 = () => {
  sheet7.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement8 = () => {
  sheet8.current.scrollIntoView({ behavior: "smooth" });
}
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return 'https://www.smartsinga.com/wp-content/uploads/2022/12/5-Best-Oven-Repair-Services-in-Singapore.jpg';
            case 2: return 'https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1724048007182-appliance-installation.jpg';
            case 3: return 'https://mobileimages.lowes.com/marketingimages/d37b41ad-aa2f-41af-a38c-fa1d5df6368d/appliance-installation-services-og.png';
            case 4: return 'https://www.smartappliance.co.za/wp-content/uploads/2024/02/repair-a-fridge-freezer-1024x768.webp';
            default: return null;
          }
       
        }; 

  return (
    <>
    <PageTitle title='سهیل / خدمات / خدمات پس از فروش   ' description=' سهیل '/>
    <TopNav />

    <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>

    <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       backgroundImage: `url(${returnPhotoURL()})`,
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'100%',
       height:{xs:"50vh",lg:"90vh"}
       }} >
    
         <Box  sx={{ display:"flex",flexDirection:"row",mx:5,width:{xs:"100%",lg:"80%"},alignSelf:"end",justifyContent:"space-between",
         height:'170px',bgcolor:"#fff",mb:5,px:0,py:0}}>
        <Button onClick={scrollToElement1} sx={{width:"10%",mr:0.5,ml:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/1-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
             ۳۰ روز ضمانت تعویض
          </Typography>
         </Button>
         <Button onClick={scrollToElement2} sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/2-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
           سه ماه تعویض راﯾﮕﺎن
          </Typography>
         </Button>
         <Button onClick={scrollToElement3} sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/3-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
            ضمانت کمپرسور
          </Typography>
         </Button>
         <Button onClick={scrollToElement4} sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/4-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
           تعویض مادام العمر
          </Typography>
         </Button>
         <Button onClick={scrollToElement5}sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/5-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
            خدمات ۷ روز هفته
          </Typography>
         </Button>
         <Button onClick={scrollToElement6} sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/6-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
           تضمین ارائه خدمات
          </Typography>
         </Button>
         <Button onClick={scrollToElement7} sx={{width:"10%",m:0.2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/7-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >

         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
            ۶ ماه ضمانت تعمیر
          </Typography>
         </Button>
     
         <Button onClick={scrollToElement8} sx={{width:"10%",mr:0.2,ml:0.5,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/03/8-sla.svg")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'90px',
             height:"90px"
             }}
          >
         </Box>
          <Typography variant='body2' sx={{px:{xs:0.2,lg:2},textAlign:"center",color:"#585858"}}>
             تحویل محصول جایگزین هنگام تعمیر
          </Typography>
         </Button> 
          
         </Box>
      </Box>      
    <Box ref={sheet1} sx={{my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column",lg:"row"}}}> 
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#282828",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          ضمانت تعویض ۳۰ روز
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         یک ماه تعویض محصول یا بازگشت وجه بدون قید و شرط
         </Typography>
         <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>ضمانت ۳۰ روز تعویض یا بازگشت وجه دستگاه از زمان فروش، به مصرف کنندگان عزیز این امکان را می دهد تا هر زمان از این دوره، احساس کنند که محصول انتظارات ایشان را برآورده نمی کند حق عودت وجه یا تعویض آن با محصول دیگر محفوظ می گردد.
         </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <List
sx = {{
    px:3,
 listStyleType: 'disc',
 pl: 2,
 '& .MuiListItem-root': {
  display: 'list-item',
 },
}}>
      <ListItem>  ثبت سفارش و فروش اشتباه شامل این طرح نمی گردد</ListItem>
      <ListItem>امکان عودت وجه برای خرید اقساطی امکان پذیر نمی باشد </ListItem>
      <ListItem>  دستگاه نباید توسط مصرف کننده دچار آسیب شده باشد</ListItem>
      <ListItem>  از مخدوش کردن اطلاعات روی محصول خودداری نمائید</ListItem>
      <ListItem>در صورتی که درخواست عودت محصول آکبند دارید به بسته بندی محصول آسیب نرسانید </ListItem>
      <ListItem>  در فرآیند تعویض بی قید و شرط، محصول باید در بسته بندی و بهمراه متعلقات عودت گردد</ListItem>
      <ListItem> بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت انتخاب سرویس انجام شده باشد</ListItem>
      <ListItem>هزینه حمل و نقل عودت محصول ، در صورت درخواست مصرف کننده به عهده ایشان است </ListItem>
      <ListItem> مابه التفاوت تغییر مدل محصول بر اساس قیمت درب کارخانه محاسبه می گردد (تغییر مدل در شرایط نادر و در صورت عدم وجود عین محصول مقدور است)</ListItem>
      <ListItem>عودت وجه بر اساس قیمت فاکتورفروش مصرف کننده می باشد و ارائه اصل فاکتور فروش، الزامی است </ListItem>
      <ListItem> مبلغ جشنواره ( پرداخت شده ) از مبلغ فاکتور فروش کسر می گردد</ListItem>
    </List>
        </Box>   
        </Box>
        <Box
          ref={sheet2}
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12015.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </Box>
        <Box ref={sheet2} sx={{ backgroundImage:{xs:"linear-gradient(to top ,#E0AA3E,#282828)",lg:"linear-gradient(to left ,#E0AA3E,#282828)"},my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column-reverse",lg:"row"}}}> 
        <Box
         
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Asset1.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:"#cecece",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          ﺳﻪ ﻣﺎه ﺗﻌﻮﯾﺾ راﯾﮕﺎن ﻣﺤﺼﻮل
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         در ﺻﻮرت ﺑﺮوز ﺧﺮاﺑﯽ از زﻣﺎن ﻧﺼﺐ
         </Typography>
         <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>
در صورتیکه محصول نصب شده طی دوره سه ماهه اول دچار خرابی ذاتی شود حق تعویض یا عودت وجه برای مصرف کننده محفوظ است. خرابی ذاتی به عیوبی اطلاق می گردد که خود یا پتانسیل آن عیب، ناشی از فرآیند تولید یا عملیات لجستیک باشد
            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>
        بازه ۳ ماهه از تاریخ نصب محصول محاسبه می گردد
دستگاه نباید بدلیل استفاده نادرست مصرف کننده دچار آسیب شده باشد
بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت
کلیه هزینه های نقل و انتقال دستگاه در صورت تایید خرابی ذاتی به عهده شرکت انتخاب سرویس است
            </Typography>
        </Box>   
        </Box>
      
        </Box>


        <Box ref={sheet3} sx={{my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column",lg:"row"}}}> 
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#282828",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          ۱۲۰ ماه ضمانت کمپرسور
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         ﻣﺤﺼﻮﻻت ﺑﺮودﺗﯽ و ﻣﻮﺗﻮرﻫﺎی داﯾﺮﮐﺖ دراﯾﻮ
         </Typography>
         <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
         در صورتیکه محصول نصب شده طی دوره سه ماهه اول دچار خرابی ذاتی شود حق تعویض یا عودت وجه برای مصرف کننده محفوظ است. خرابی ذاتی به عیوبی اطلاق می گردد که خود یا پتانسیل آن عیب، ناشی از فرآیند تولید یا عملیات لجستیک باشد
            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
        بازه ۳ ماهه از تاریخ نصب محصول محاسبه می گردد
دستگاه نباید بدلیل استفاده نادرست مصرف کننده دچار آسیب شده باشد
بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت انتخاب سرویس انجام شده باشد
کلیه هزینه های نقل و انتقال دستگاه در صورت تایید خرابی ذاتی به عهده شرکت انتخاب سرویس است
            </Typography>
        </Box>   
        </Box>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12017.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </Box>

        <Box ref={sheet4} sx={{ backgroundImage:{xs:"linear-gradient(to top ,#E0AA3E,#282828)",lg:"linear-gradient(to left ,#E0AA3E,#282828)"},my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column-reverse",lg:"row"}}}> 
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12026.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:"#cecece",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          اراﺋﻪ ﭘﺸﺘﯿﺒﺎﻧﯽ
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         ﯾﺎ ﺗﺴﻬﯿﻼت ﺗﻌﻮﯾﺾ ﻣﺎدام اﻟﻌﻤﺮ ﻣﺤﺼﻮﻻت
         </Typography>
         <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>
         عهد مادام العمر تامین قطعات محصولات گروه انتخاب به مصرف کنندگان این فرصت را می دهد تا زمانی که امکان تعمیر برای محصول وجود داشته باشد از دستگاه استفاده نمایند . در صورت عدم تامین قطعه یا عدم تعمیر محصول فرصت تعویض دستگاه با دستگاه های موجود، بهمراه تسهیلات خرید برای مصرف کننده محفوظ می گردد
            </Typography>  
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>  
افت قیمت محصول در دوره گارانتی محاسبه نمی گردد
در دوره خارج از گارانتی ، به ازای هر ماه کارکرد محصول از زمان نصب ، ۱% از قیمت روز دستگاه کسر می گردد
تسهیلات ارائه شده بر اساس طرحهای فروش روز به مصرف کننده ارائه می گردد
        </Typography>
        </Box>   
        </Box>
        </Box>
   
   
        <Box ref={sheet5} sx={{my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column",lg:"row"}}}> 
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#282828",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          ارائه خدمات در ۷ روز هفته
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         و ۲۴ ساعت شبانه روز
         </Typography>
         <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
         پاسخگویی ۲۴ ساعته و مراجعه در ۷ روز هفته حتی روزهای تعطیل، تعهدی است که شرکت انتخاب سرویس را در قبال اعتماد مصرف کنندگان به انتخاب الکترونیک ، برای خود ایجاد کرده است .
            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
        شماره ۴ رقمی رایگان ۱۶۹۹ با امکان پاسخگویی به تماس هم زمان مشتریان ، از سراسر ایران آماده پاسخگویی به نیاز مشتریان است
هماهنگی و قرار ملاقات طی همان روز توسط نزدیکترین تکنسین با مصرف کننده انجام می شود
خدمات گارانتی در همه ساعات شبانه روز ، هیچ هزینه اضافی به مصرف کننده تحمیل نمی کند
              </Typography>
        </Box>   
        </Box>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12009.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </Box>


        <Box ref={sheet6} sx={{ backgroundImage:{xs:"linear-gradient(to top ,#E0AA3E,#282828)",lg:"linear-gradient(to left ,#E0AA3E,#282828)"},my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column-reverse",lg:"row"}}}> 
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12012.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:"#cecece",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          تضمین ارائه خدمات به هنگام
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         یک ماه گارانتی رایگان به ازای هر روز تأخیر
         </Typography>
         <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>
         زمان قرار ملاقات جهت انجام خدمت در اولین ساعات روز توسط سرویسکار انجام می شود . سرویسکار به جهت اثبات خوشقولی، زمانها خالی را به مصرف کننده پیشنهاد داده و ایشان بهترین انتخاب را انجام می دهد

            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>  

        انتخاب خدمت در ۳ شیفت ( صبح ، عصر یا شب ) امکان پذیر است .
جبران خسارت تاخیر در مراجعه هماهنگ شده ، ۱ ماه گارانتی اضافه به ازای هر روز تاخیر است
ملاک محاسبه انحراف، از روز مقرر (در توافق با مصرف کننده) تا پایان روز مراجعه محاسبه می گردد و به ازای هر روز تأخیر، ۱ ماه گارانتی به مدت زمان دوره گارانتی اضافه می گردد
در صورتیکه درفرآیند تعمیر، مصرف کننده نتواند از محصول خود یا محصول جایگزین استفاده نماید با تخصیص گارانتی اضافه به محصول جبران خسارت می گردد
به ازای هر روز خرابی محصول از روز ششم به بعد،( عدم استفاده مطلوب ) ۱ ماه گارانتی به ازای هر روز تأخیر در رفع مشکل به مدت زمان گارانتی محصول اضافه می شود
        </Typography>
        </Box>   
        </Box>
        </Box>
   
   
        <Box ref={sheet7} sx={{my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column",lg:"row"}}}> 
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#282828",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          شش ماه ضمانت تعمیر
         </Typography>
         </Box>
         <Typography variant="h5" sx={{py:1}}  >
         غیر گارانتی
         </Typography>
         <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
         پاسخگویی ۲۴ ساعته و مراجعه در ۷ روز هفته حتی روزهای تعطیل، تعهدی است که شرکت انتخاب الکترونیک را در قبال اعتماد مصرف کنندگان به انتخاب الکترونیک ، برای خود ایجاد کرده است .
            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#828282",textAlign:"justify"}}>
        شماره ۴ رقمی رایگان ۱۶۹۹ با امکان پاسخگویی به تماس هم زمان مشتریان ، از سراسر ایران آماده پاسخگویی به نیاز مشتریان است
هماهنگی و قرار ملاقات طی همان روز توسط نزدیکترین تکنسین با مصرف کننده انجام می شود
خدمات گارانتی در همه ساعات شبانه روز ، هیچ هزینه اضافی به مصرف کننده تحمیل نمی کند
            </Typography>
        </Box>   
        </Box>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12028.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </Box>

        <Box ref={sheet8} sx={{ backgroundImage:{xs:"linear-gradient(to top ,#E0AA3E,#282828)",lg:"linear-gradient(to left ,#E0AA3E,#282828)"},my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:{xs:"column-reverse",lg:"row"}}}> 
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12027.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
       <Box  sx={{display:"flex",justifyContent:"start",flexDirection:"column",my:{xs:2,lg:10},width:{xs:"100%",lg:"100%"}}}>
       <Box  sx={{mx:{xs:2,lg:5},height:"auto"}} >
         <Box sx={{ my:3,borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:"#cecece",width:"auto"}}>
          <Typography variant="h5" sx={{py:1,textAlign:"justify",px:3}}  >
          ﺗﺤﻮﯾﻞ ﻣﺤﺼﻮل ﺟﺎﯾﮕﺰﯾﻦ
         </Typography>
         </Box>
           <Typography variant="h5" sx={{py:1}}  >
        ﺗﺤﻮﯾﻞ ﻣﺤﺼﻮل ﺟﺎﯾﮕﺰﯾﻦ ﻫﻨﮕﺎم ﺗﻌﻤﯿﺮ و ﺗﻌﻮﯾﺾ ﻣﺤﺼﻮﻻت
         </Typography>
         <Typography variant="h5" sx={{py:1}}  >
       
         </Typography>
         <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>
         هدف از اجرای این طرح،‌ افزایش رضایت مشتریانی است که خرابی محصول مانع استفاده مطلوب از لوازم خانگی ایشان شده و تحویل محصول امانی میتواند نیاز مصرف کننده را طی دوره تعمیرات یا مدت زمان تحویل محصول جایگزین فراهم نماید
            </Typography>
         <Typography variant="h5" sx={{py:1,textAlign:"justify"}}  >
         نکات قابل توجه:
        </Typography>
        <Typography  paragraph sx={{color:"#ececec",textAlign:"justify"}}>  
        پیشنهاد محصول جایگزین به مصرف کنندگانی که طی دوره کوتاه مدت ۱ روز به بالا به علت تعمیر یا عدم کارایی محصول امکان استفاده مطلوب از محصول خود را ندارند، داده می شود
محصول امانی جایگزین محصولی است که حداقل نیازهای مشتری را پاسخگو باشد
نصب و راه اندازی و جابجایی محصول جایگزین به صورت رایگان توسط شرکت انتخاب سرویس داده می شود
</Typography>
        </Box>   
        </Box>
        </Box>
</Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default AfterSalesService;
