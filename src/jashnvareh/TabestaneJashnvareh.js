import * as React from 'react';
import  {useEffect,useState,useContext} from 'react';
import {CartContext} from "../Shared/Cart-Context";
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import Box from '@mui/material/Box';
import TopNav from '../dashbord/TopNav';
import Divider from '@mui/material/Divider';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import './jashnvareh.css';
export default function TabestaneJashnvareh() {
  const [cartItems,setCartItems]=useContext(CartContext);
  const [datajashnvareh,setDatajashnvareh]=useState([]);
  const [datajashnvarehshow,setDatajashnvarehshow]=useState([]);
  return (
    <>
    <PageTitle  title=' جشنواره تابستانه  '  description=' جشنواره / جشنواره تابستانه  '/>
   <TopNav/>

   <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>

    <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       backgroundImage: 'url("https://rtaoutdoorliving.com/wp-content/uploads/2022/07/an-rta-outdoor-kitchen-in-the-snow-with-coyote-fridge.jpg")',
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'100%',
       height:"80vh",
       
       }} >
           <Box  sx={{ display:"flex",flexDirection:"row",mx:5,width:"50%",alignSelf:"end",justifyContent:"center",
         height:'250px',bgcolor:'black',backgroundImage:"linear-gradient(to bottom ,#E0AA3E,#282828)",mb:5,px:0,py:0}}>
          
          <Box sx={{
            position:"relative",
             display:'flex',
             justifyContent:'center',
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjANFHB5m1dN649xDPWyaDexJn4GdozfK8aQ&s")',
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            width:'200px',
            height:"150px",
            overflow:"hidden",
            borderRadius:"10px",
            p:3,
            m:3
          }}>
               <Box className="gerdali"><NavLink className="linkj" to={'/ProductOff'} > <Typography variant='body1' sx={{textAlign:"center",color:"#E0AA3E"}}>  کالاهای تخفیف دار </Typography>
        </NavLink></Box>
          </Box>
          <Box sx={{
            position:"relative",
             display:'flex',
             justifyContent:'center',
             backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbGRnc8-rwroUctgT4wigrWhJ9it5xcGDtA&s")',
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
            width:'200px',
            height:"150px",
            overflow:"hidden",
            borderRadius:"10px",
            p:3,
            m:3
          }}>
            <Box className="gerdali"><NavLink className="linkj" to={'/ProductJashnvareh'} > <Typography variant='body1' sx={{textAlign:"center",color:"#E0AA3E"}}>  محصولات جشنواره</Typography>
        </NavLink></Box></Box>

         </Box>
         </Box>



         <Box sx={{ backgroundColor:"white",mx:5,my:2 ,mx:5,px:5,py:1,bgcolor:"white",borderRadius:'10px',display:"flex",flexDirection:"column"}}> 
      <Box     
       sx={{boxShadow:"10px 10px 10px #E0AA3E ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}
       >
        <Typography  sx={{fontSize:{xs:"16px",lg:"20px"},textAlign:"center",color:"black",py:1}}>
        جشنواره زمستانه ی سهیل
        </Typography>
        </Box>
        <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
        جشنواره فروش زمستانه برند سهیل و دوو (ویژه مصرف کنندگان) از روز یکشنبه 15 مهر ماه 1403 در سراسر کشور اجرا 
        و تا اطلاع ثانوی ادامه خواهد داشت. این جشنواره به مصرف کنندگانی تعلق می‌گیرد که محصولات مشمول جشنواره را از پانزدهم مهر ماه تا پایان زمان جشنواره ، 
        خریداری و نصب نمایند.
         در طرح جشنواره زمستانه محصولات تلویزیون، ساید بای ساید، یخچال فریزر،
          ظرفشویی و لباسشویی های دوو دارای هدیه نقدی و غیر نقدی هستند
           و با خرید هر یک از محصولات جشنواره تا سقف 50,000,000 ریال هدیه نقدی و محصولات هدیه ای چون جاروبرقی و چای ساز برای مشتریان در نظر گرفته شده.
           فروشگاه انتخاب سنتر به عنوان نمایندگی رسمی برند دوو و سهیل تمامی محصولات این دو
         برند را با بهترین قیمت روز بازار و ضمانت نامه 24
         ماهه رسمی انتخاب الکترونیک عرضه می کند.
✔️لیست کد مدل های مشمول جشنواره و مبالغ هدیه آن به صورت (مناطق عادی و ویژه) مشخص شده است.
✔️منظور از مناطق ویژه، استان‌های : ایلام ، آذربایجان غربی ، بوشهر، خراسان جنوبی ، 
خراسان شمالی، خوزستان ، سیستان و بلوچستان ، فارس ،کردستان، کرمان ،کرمانشاه و هرمزگان می‌باشد. 
(مبالغی که در محصولات درج شده، برای مناطق عادی می‌باشد، اما این استان هایی که نام برده شد، شامل هدیه بیشتری می‌باشند)
            </Typography>

            <Box     
       sx={{boxShadow:"10px 10px 10px #E0AA3E ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}
       >
        <Typography  sx={{fontSize:{xs:"16px",lg:"20px"},fontWeight:"500",textAlign:"center",color:"black",py:1}}>
        نحوه شرکت در جشنواره سهیل
        </Typography>
        </Box>
        <Typography sx={{fontSize:{xs:"14px",lg:"18px"},textAlign:"start",color:"black",py:1,px:5}} >
        1- نصب محصول:
        </Typography>
        <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
        پس از انتخاب و خرید کالای مورد نظر، سفارش خود را تحویل گرفته و جهت نصب محصول و بهره مندی از مزایای گارانتی محصول، با شماره 1699 بدون پیش شماره تماس بگیرید.
        </Typography>
        <Typography sx={{fontSize:{xs:"14px",lg:"18px"},textAlign:"start",color:"black",py:1,px:5}} >
        2- دریافت کد تخفیف: 
          </Typography>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          پس از نصب محصول و مشاهده فاکتور توسط نماینده مجاز خدمات پس از فروش، به ازای هر محصول خریداری شده، یک عدد کد تخفیف به شماره پذیرش خریدار اختصاص داده خواهد شد. این کد تخفیف شامل یک کد شش رقمی است که از طریق پیامک برای خریدار ارسال خواهد شد.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",lg:"18px"},textAlign:"start",color:"black",py:1,px:5}} >
            3- فعال سازی کد تخفیف:
          </Typography>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          پس از دریافت کد تخفیف به منظور فعالسازی آن، با مراجعه به صفحه فعالسازی کد تخفیف جشنواره (لینک در همین صفحه)، اطلاعات درخواست شده را ثبت نمایید. این اطلاعات شامل : کد تخفیف، شماره پذیرش، شماره شبا و شماره همراه است. پس از ثبت اطلاعات و دریافت کد تایید، جهت فعالسازی کد تخفیف گزینه ثبت نهایی را انتخاب نمایید.
            </Typography>
            <Typography sx={{fontSize:{xs:"14px",lg:"18px"},textAlign:"start",color:"black",py:1,px:5}} >
            4- نحوه دریافت هدیه نقدی جشنواره: 
          </Typography>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          پس از تایید شماره شبا مبلغ هدیه جشنواره ، حداکثر ظرف مدت یک ماه واریز و از طریق پیامک اطلاع رسانی خواهد شد.
            </Typography>
            <Box  sx={{boxShadow:"10px 10px 10px #E0AA3E ",display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}>
        <Typography  sx={{fontSize:{xs:"16px",lg:"20px"},fontWeight:"500",textAlign:"center",color:"black",py:1}}>
        نکات مهم:
          </Typography>
          </Box>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          1- فعال‌سازی فقط از طریق شماره موبایلی که به مرکز ارتباط با مشتریان سهیل اعلام کرده اید امکان پذیر است .
            </Typography>
            <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
            1- فعال‌سازی فقط از طریق شماره موبایلی که به مرکز ارتباط با مشتریان سهیل اعلام کرده اید امکان پذیر است .
            </Typography>
            <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
            3- شماره پذیرش خود را پس از درخواست نصب محصول ، از طریق پیامک دریافت نموده اید .
            </Typography>
            <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
            4-این جشنواره به مصرف کنندگانی تعلق می‌گیرد که محصولات مشمول جشنواره را از پانزدهم مهر ماه تا پایان زمان جشنواره ، خریداری و نصب نمایند.
            </Typography>
            <Box  sx={{boxShadow:"10px 10px 10px #E0AA3E ",display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}>
        <Typography  sx={{fontSize:{xs:"16px",lg:"20px"},fontWeight:"500",textAlign:"center",color:"black",py:1}}>
        نصب محصول
          </Typography>
          </Box>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          به منظور بهره مندی از شرایط جشنواره خرید زمستانه سهیل با مرکز تماس مشتریان گروه انتخاب از طریق شماره ۱۶۹۹ (بدون پیش شماره از سراسر کشور) تماس حاصل کنید و درخواست نصب محصول خریداری شده خود را اعلام نمایید. در این مرحله یک کد پذیرش نصب برای شما پیامک می‌شود. شایان ذکرست، فعالسازی این جشنواره تنها برای شماره تلفن همراهی خواهد بود که به این مرکز اعلام می‌کنید.
        </Typography> 
        <Box  sx={{boxShadow:"10px 10px 10px #E0AA3E ",display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}>
        <Typography  sx={{fontSize:{xs:"16px",lg:"20px"},fontWeight:"500",textAlign:"center",color:"black",py:1}}>
        دریافت کد تخفیف جشنواره
          </Typography>
          </Box>
          <Typography  paragraph sx={{color:"#585858",px:5,textAlign:"justify"}}>
          نحوه دریافت کد تخفیف جشنواره و مراحل آن
            </Typography>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",lg:"row"},mx:10,my:5}}>
            <Box  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}> 
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <BuildOutlinedIcon sx={{color:"#E0AA3E",fontSize:"60px"}}/>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   در زمان نصب محصول  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>پس از درخواست نصب محصول و مشاهده فاکتور خرید، تاریخ خرید توسط نماینده مجاز خدمات پس از خرید ثبت می گردد.</Typography>
            </Box>
            <Divider  orientation="vertical" variant="fullWidth"  flexItem sx={{display:{xs:"none",lg:"flex",color:"#E0AA3E"}}} />
            <Box  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <MarkAsUnreadIcon  sx={{color:"#E0AA3E",fontSize:"60px"}}/>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>  دریافت کد شش حرفی جشنواره  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>به ازای هر محصول درج شده در جدول فوق، یک کد شش حرفی به شماره پذیرش مصرف کننده اختصاص داده می شود</Typography>
            </Box>
            <Divider  orientation="vertical" variant="fullWidth"  flexItem sx={{display:{xs:"none",lg:"flex",color:"#E0AA3E"}}}  />
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
           
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <InsertLinkIcon  sx={{color:"#E0AA3E",fontSize:"60px"}}/>
            </Typography>
           
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}> دریافت لینک فعالسازی </Typography>
               
               
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>لینک فعالسازی از طریق پیامک برای مصرف کننده ارسال خواهد شد که با کلیک بر روی این گزینه فعالسازی صورت می‌گیرد.</Typography>
            </Box>
        </Box>
        </Box>
</Box>
    <Footer/>
    </>
  );
}







  

   
