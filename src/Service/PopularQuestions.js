import React from 'react';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import './service.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import  img2 from "../img/Questions-pana2.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import mass from "../img/mass2.png";
import { NavLink } from 'react-router-dom';
function PopularQuestions() {
    const [index, setIndex] = React.useState(null);

  return (
    <>
    <PageTitle title='سهیل / خدمات / سوالات متداول' description=' سهیل '/>
    <TopNav />



    <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       backgroundImage:"linear-gradient(to left ,#E0AA3E,#282828)",
       width:'100%',
       height:{xs:"25vh",lg:"35vh"},
       flexDirection:"row",
       alignItems:"center",
       alignSelf:"center",
   mt:{xs:9,lg:0}
       }} >
    <Box sx={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center"}}>    
<Typography variant='h4' sx={{textAlign:"center",color:"white",mt:2,mb:0.6}}>
سئوالات متداول
</Typography>
<Typography variant='body1' sx={{textAlign:"center",color:"white"}}>
پاسخ به مهم‌ترین سوالات و دغدغه‌های شما
</Typography>
<Box sx={{my:3,width:"40%",display:'flex',justifyContent:"center",bgcolor:"white",direction:"ltr",alignSelf:"center"}}>
   <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton> 
      <InputBase
        sx={{direction:"rtl", mr: 3, flex: 1 }}
        type="text"
        placeholder="در اینجا جستجو کنید"
        inputProps={{ 'aria-label': 'جستجوی محصولات سهیل' }}
      
      />
   </Box>
   </Box> 
   
       <Box sx={{
      display:"flex",
      borderRadius:1,
      alignSelf:"center",
      backgroundImage:`url(${img2})`,
      backgroundPosition: 'center',
      backgroundSize:"contained",
      backgroundRepeat: 'no-repeat',
      width:"90%",
      height:{xs:"20vh",lg:"30vh"},
     my:{xs:2},
     
      }}>
       </Box></Box>
       <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
      <Box sx={{   boxShadow:" 5px 5px 40px #E0AA3E ",height:"100px",width:"30%",alignSelf:"center",mt:8}}>
       <Typography variant='h4' sx={{color:" #282828",fontWeight:"500",textAlign:"center",mt:3}}>  متداول ترین سوالات </Typography>
</Box>
      <Box  sx={{display:'flex',flexDirection:'column',justifyContent:"start",mx:8,my:3}}
       >
       
      <Accordion sx={{mr:2,ml:6,mt:2}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
          
        }}
      >
        <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}> بازه ی زمانی برگزاری جشنواره چه مدت است؟ 
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}> بازه زمانی تعریف شده برای جشنواره های فروش محدود است. زمان پایان جشنواره متعاقباً در وب سایت اعلام می گردد.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}> کدام کد مدل ها مشمول جشنواره میگردد؟ 
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>کد مدل های مشمول جشنواره را از این صفحه مشاهده نمایید.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        منظور از مناطق ویژه چیست؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>منظور از مناطق ویژه، استان‌های: آذربایجان غربی، کردستان، کرمانشاه، همدان، ایلام، خوزستان، بوشهر، هرمزگان، سیستان و بلوچستان، کرمان، کهگیلویه و بویراحمد، فارس، لرستان و زنجان می‌باشد. گاهاً مبلغ جشنواره در این مناطق متفاوت می‌باشد. </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       جشنواره به چه صورت پرداخت میگردد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>مبلغ جشنواره بصورت نقدی و از طریق شماره شبای اعلام شده هنگام فعالسازی کد تخفیف پرداخت می‌شود. </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       ایا فقط خریدهای نقدی مشمول جشنواره میگردد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>خیر – خریدهای نقدی و اقساطی به شرط خرید در بازه اعلام شده، مشمول جشنواره می‌شود. </Typography>
        </AccordionDetails>
      </Accordion>
   
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 5}
        onChange={(event, expanded) => {
          setIndex(expanded ? 5 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       ایا قبل از نصب محصول میتوان کد تخفیف را فعال کرد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>خیر - برای فعالسازی کد تخیف حتماً بایستی نصب محصول انجام شده باشد. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 6}
        onChange={(event, expanded) => {
          setIndex(expanded ? 6 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        اعتبار کد تخفیف تا چه زمانی می باشد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>اعتبار کد تخفیف به مدت محدود می‌باشد. بنابراین بهتر است هر چه سریعتر نسبت به فعالسازی آن اقدام نمود.

شرکت اسنوا بعد از اتمام جشنواره هیچ مسئولیتی در قبال کد تخفیف غیر فعال ندارد. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        جشنواره به چه کسانی تعلق میگیرد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>کد تخفیف جهت خریدارانی ارسال می‌گردد که محصولات جشنواره را از تاریخ شروع جشنواره به مدّت محدود خریداری و نصب نمایند. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        شماره ی شبا بایستی مربوط به کدام بانک باشد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>
شماره شبا بایستی مربوط به بانکهای تلفیق شده و حساب های راکد نباشد. </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion sx={{mr:2,ml:6}}
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       منظور از کد جشنواره چیست؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>منظور همان کد تخفیفی است که از طریق پیامک به شماره پذیرش مصرف کننده اختصاص داده می‌شود. این کد حاوی یک کد شش حرفی به نام کد تخفیف می‌باشد. </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
</Box>
<Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       backgroundColor:"white",
       width:'100%',
       height:{xs:"20vh",lg:"30vh"},
       flexDirection:"row-reverse",
       alignItems:"center",
       alignSelf:"center"
       }} >
        
        <Box sx={{alignSelf:"center",
       display:"flex",
       borderRadius:1,
       backgroundImage:`url(${mass})`,
       backgroundPosition: 'center',
       backgroundSize:"contained",
       backgroundRepeat: 'no-repeat',
       width:"90%",
       height:{xs:"20vh",lg:"30vh"},
      my:{xs:2}
      }}>
        </Box>
          <Box sx={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center",my:1}}>    
<Typography variant='h4' sx={{textAlign:"center",color:"#414141",mt:1,mb:0.6}}>
پاسخ سوال خود را پیدا نکردید؟
</Typography>
<Typography variant='body1' sx={{textAlign:"center",color:"#414141"}}>
شما می‌توانید با پر کردن فرم تماس و پرسیدن سوال خود با ما در تماس باشید
</Typography>
<Box sx={{width:"30%",display:"flex",justifyContent:"center",alignSelf:"center",my:3}}>
  <NavLink to={'/ContactUsForm'}>
<button className='button1'  >  <span className='formbutton'>  تماس با ما</span>   </button></NavLink>
</Box>
   </Box> 
        </Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default PopularQuestions;
