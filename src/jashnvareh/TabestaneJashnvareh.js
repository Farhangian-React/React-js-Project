import * as React from 'react';
import  {useEffect,useState,useContext} from 'react';
import {CartContext} from "../Shared/Cart-Context";
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid,Typography,Button } from '@mui/material';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import Box from '@mui/material/Box';
import TopNav from '../dashbord/TopNav';
import Divider from '@mui/material/Divider';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import './jashnvareh.css';



export default function TabestaneJashnvareh() {
  const [cartItems,setCartItems]=useContext(CartContext);



  const [datajashnvareh,setDatajashnvareh]=useState([]);
  const [datajashnvarehshow,setDatajashnvarehshow]=useState([]);

 const getData=()=>{
  fetch('http://localhost:3000/jashnvarehProducts')
  .then(res => res.json())
  .then((result)=> {
    setDatajashnvareh(result);
    setDatajashnvarehshow(result);
  },
  (error) => {
    alert('error');
  }
  )
 }

  useEffect( ()=>{
    getData();

  
  },[])





  const handelclick1=()=>{
   
    setDatajashnvarehshow(datajashnvareh.filter(q=> q.idp ==="1"))
  }
  const handelclick2=()=>{
    
    setDatajashnvarehshow(datajashnvareh.filter(q=> q.idp ==="2"))
  }
  const handelclick3=()=>{
   
    setDatajashnvarehshow(datajashnvareh.filter(q=> q.idp ==="3"))
  }
  const handelclick4=()=>{
    
    setDatajashnvarehshow(datajashnvareh.filter(q=> q.idp ==="4"))
  }

const [index, setIndex] = React.useState(null);
 
  return (
    <>
    <PageTitle  title=' جشنواره تابستانه  '  description=' جشنواره / جشنواره تابستانه  '/>
   <TopNav/>

   <Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:1,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid 
          
       sx={{ backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
        display:'flex',flexDirection:'column',mr:10,ml:{xs:10,sm:20,md:30,lg:100},mt:{xs:15,md:5}}}
       >
        <Typography  sx={{fontSize:{xs:"14px",sm:"16px",md:"20px"},pr:2,my:{xs:1,md:0},color:"white"}}>
            ۱. خرید از لیست محصولات مشمول جشنواره
        </Typography>
        
        </Grid>
        <Grid  sx={{bgcolor:"white",display:'flex',flexDirection:'column',mx:10}}>
        <Typography  sx={{fontSize:"18px",pr:2,mt:2,color:"#282828"}}>
            مشخصات محصولات جشنواره به همراه میزان هدایا
        </Typography>
        </Grid>
        </Box>

<Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:0,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid 
          
       sx={{display:'flex',flexDirection:'column',mx:10}}
       >
       
      <Accordion sx={{mt:0}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          handelclick1();
          setIndex(expanded ? 0 : null);
          
        }}
      >
        <AccordionSummary  sx={{color:"white",fontSize:'22px',  backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}  expandIcon={<ArrowDropDownOutlinedIcon />}>  یخچال فریزر </AccordionSummary>
        <AccordionDetails sx={{bgcolor:"#eeeeee"}}>
     
        <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>



 {datajashnvarehshow.map((item) => (
    <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}> 
   
<Card className='cards' sx={{width:{xs:"200px",sm:'350px',lg:'250px'},height:{xs:'460px',sm:"600px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
  component="img"
  onClick={()=>{
    setCartItems([item]);
   }}
 image={item.img}
  alt=""
/>
    <CardContent sx={{height:'75px',direction:"rtl"}}>
  <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
    {item.title1}
  </Typography>
  <Typography variant="h6" color="black" sx={{textAlign:'center'}}>
    {item.title2}
  </Typography>
</CardContent>
<Divider/>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
   <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
   <Typography  variant="h6" color="gray" sx={{textAlign:'center'}}>{item.price}</Typography>
</Box>
<CardActions sx={{display:'flex',justifyContent:'center'}}>
<NavLink to={'/cartbuywashingmachine'}>  <Button size="large"
    fullWidth
    variant="contained"
    sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
    onClick={()=>{
      setCartItems([item]);
     }}>خرید </Button></NavLink>
  
</CardActions>

</Card>
</NavLink>
    
  ))}
  </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mt:2}}
        expanded={index === 1}
        onChange={(event, expanded) => {
          handelclick2();
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary  sx={{color:"white",fontSize:'22px', backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}  expandIcon={<ArrowDropDownOutlinedIcon />}> ماشین لباسشویی  </AccordionSummary>
        <AccordionDetails sx={{bgcolor:"#eeeeee"}}> 
        <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>



{datajashnvarehshow.map((item) => (
    <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}> 
  
<Card className='cards' sx={{width:{xs:"200px",sm:'350px',lg:'250px'},height:{xs:'460px',sm:"600px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
 component="img"
 onClick={()=>{
  setCartItems([item]);
 }}
image={item.img}
 alt=""
/>
   <CardContent sx={{height:'75px',direction:"rtl"}}>
 <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
   {item.title1}
 </Typography>
 <Typography variant="h6" color="black" sx={{textAlign:'center'}}>
   {item.title2}
 </Typography>
</CardContent>
<Divider/>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
  <Typography  variant="h6" color="gray" sx={{textAlign:'center'}}>{item.price}</Typography>
</Box>
<CardActions sx={{display:'flex',justifyContent:'center'}}>
<NavLink to={'/cartbuywashingmachine'}>  <Button size="large"
   fullWidth
   variant="contained"
   sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
   onClick={()=>{
     setCartItems([item]);
    }}>خرید </Button></NavLink>
 
</CardActions>

</Card>
</NavLink>
   
 ))}
 </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{mt:2}}
        expanded={index === 2}
        onChange={(event, expanded) => {
          handelclick3();
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary  sx={{color:"white",fontSize:'22px', backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}} expandIcon={<ArrowDropDownOutlinedIcon />}>  اجاق گاز</AccordionSummary>
        <AccordionDetails sx={{bgcolor:"#eeeeee"}}>
        <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>



{datajashnvarehshow.map((item) => (
   <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>  
  
<Card className='cards' sx={{width:{xs:"200px",sm:'350px',lg:'250px'},height:{xs:'460px',sm:"600px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
 component="img"
 onClick={()=>{
  setCartItems([item]);
 }}
image={item.img}
 alt=""
/>
   <CardContent sx={{height:'75px',direction:"rtl"}}>
 <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
   {item.title1}
 </Typography>
 <Typography variant="h6" color="black" sx={{textAlign:'center'}}>
   {item.title2}
 </Typography>
</CardContent>
<Divider/>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
  <Typography  variant="h6" color="gray" sx={{textAlign:'center'}}>{item.price}</Typography>
</Box>
<CardActions sx={{display:'flex',justifyContent:'center'}}>
<NavLink to={'/cartbuywashingmachine'}>  <Button size="large"
   fullWidth
   variant="contained"
   sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
   onClick={()=>{
     setCartItems([item]);
    }}>خرید </Button></NavLink>
 
</CardActions>
</Card>
</NavLink>

   
 ))}
 </Box>
    
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{mt:2}}
        expanded={index === 3}
        onChange={(event, expanded) => {
          handelclick4();
          setIndex(expanded ? 3 : null);
        }}
      >
        <AccordionSummary  sx={{color:"white",fontSize:'22px', backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}  expandIcon={<ArrowDropDownOutlinedIcon />}>  ماشین ظرفشویی  </AccordionSummary>
        <AccordionDetails sx={{bgcolor:"#eeeeee"}}>
        <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>



{datajashnvarehshow.map((item) => (
    <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}> 
  
<Card className='cards' sx={{width:{xs:"200px",sm:'350px',lg:'250px'},height:{xs:'460px',sm:"600px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
 component="img"
 onClick={()=>{
  setCartItems([item]);
 }}
image={item.img}
 alt=""
/>
   <CardContent sx={{height:'75px',direction:"rtl"}}>
 <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
   {item.title1}
 </Typography>
 <Typography variant="h6" color="black" sx={{textAlign:'center'}}>
   {item.title2}
 </Typography>
</CardContent>
<Divider/>
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
  <Typography  variant="h6" color="gray" sx={{textAlign:'center'}}>{item.price}</Typography>
</Box>
<CardActions sx={{display:'flex',justifyContent:'center'}}>
<NavLink to={'/cartbuywashingmachine'}>  <Button size="large"
   fullWidth
   variant="contained"
   sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
   onClick={()=>{
     setCartItems([item]);
    }}>خرید </Button></NavLink>
 
</CardActions>

</Card>
</NavLink>
   
 ))}
 </Box>
        </AccordionDetails>
      </Accordion>
   
        </Grid>
</Box>
 
<Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:1,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid 
          
       sx={{  backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
        display:'flex',flexDirection:'column',mr:10,ml:{xs:10,sm:20,md:30,lg:100},mt:{xs:15,md:5}}}
       >
         <Typography  sx={{fontSize:{xs:"14px",sm:"16px",md:"20px"},pr:2,my:{xs:1,md:0},color:"white"}}>
           ۲.  نصب محصول
        </Typography>
        
        </Grid>
        <Grid  sx={{bgcolor:"white",display:'flex',flexDirection:'column',mx:10}}>
        <Typography  sx={{fontSize:"18px",pr:2,my:5,color:"#282828"}}>
        به منظور بهره مندی از شرایط جشنواره خرید تابستانه اسنوا با مرکز تماس مشتریان گروه انتخاب از طریق شماره ۱۶۹۹ (بدون پیش شماره از سراسر کشور) تماس حاصل کنید و درخواست نصب محصول خریداری شده خود را اعلام نمایید. در این مرحله یک کد پذیرش نصب برای شما پیامک می‌شود. شایان ذکرست، فعالسازی این جشنواره تنها برای شماره تلفن همراهی خواهد بود که به این مرکز اعلام می‌کنید.
        </Typography>
        </Grid>
        </Box>
        <Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:1,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid 
          
       sx={{  backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
        display:'flex',flexDirection:'column',mr:10,ml:{xs:10,sm:20,md:30,lg:100},mt:{xs:15,md:5}}}
       >
         <Typography  sx={{fontSize:{xs:"14px",sm:"16px",md:"20px"},pr:2,my:{xs:1,md:0},color:"white"}}>
           ۳. دریافت کد تخفیف جشنواره
        </Typography>
        
        </Grid>
        <Grid  sx={{bgcolor:"white",display:'flex',flexDirection:'column',mx:10}}>
        <Typography  sx={{fontSize:"18px",pr:2,mt:2,color:"#282828"}}>
        نحوه دریافت کد تخفیف جشنواره و مراحل آن
        </Typography>
        </Grid>
        <Grid sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},mx:10,my:5}}>
            <Grid  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}> 
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <BuildOutlinedIcon color='disabled' fontSize='large'/>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   در زمان نصب محصول  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>پس از درخواست نصب محصول و مشاهده فاکتور خرید، تاریخ خرید توسط نماینده مجاز خدمات پس از خرید ثبت می گردد.</Typography>
            </Grid>
            <Divider  orientation="vertical" variant="fullWidth"  flexItem  />
            <Grid  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <MarkAsUnreadIcon  color='disabled' fontSize='large'/>
            </Typography>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>  دریافت کد شش حرفی جشنواره  </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>به ازای هر محصول درج شده در جدول فوق، یک کد شش حرفی به شماره پذیرش مصرف کننده اختصاص داده می شود</Typography>
            </Grid>
            <Divider  orientation="vertical" variant="fullWidth"  flexItem  />
            <Grid sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
           
            <Typography variant='h5' sx={{mt:3,textAlign:"center"}}>
                 <InsertLinkIcon  color='disabled' fontSize='large'/>
            </Typography>
           
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}> دریافت لینک فعالسازی </Typography>
               
               
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>لینک فعالسازی از طریق پیامک برای مصرف کننده ارسال خواهد شد که با کلیک بر روی این گزینه فعالسازی صورت می‌گیرد.</Typography>
            </Grid>
        </Grid>
        </Box>



        <Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:1,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid 
          
       sx={{  backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
        display:'flex',flexDirection:'column',mr:10,ml:{xs:10,sm:20,md:30,lg:100},mt:{xs:15,md:5}}}
       >
         <Typography  sx={{fontSize:{xs:"14px",sm:"16px",md:"20px"},pr:2,my:{xs:1,md:0},color:"white"}}>
           ۴. فعال‌سازی کد تخفیف جشنواره
        </Typography>
        
        </Grid>
        <Grid  sx={{bgcolor:"white",display:'flex',flexDirection:'column',mx:10}}>
        <Typography  sx={{fontSize:"18px",pr:2,mt:2,color:"#282828"}}>
        با انتخاب گزینه فعالسازی، اطلاعات خود را ثبت کنید
        </Typography>
        </Grid>
        <Grid    sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},mx:10,my:5}}>
          <Grid   sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},mx:10,my:5}}>
            <Box   sx={{width:"300px",height:"200px",display:"flex",justifyContent:"center",flexDirection:"column",py:2,border:"1px solid black"}}>
           
           
           
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   قدم اول  </Typography>
               
               
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>کد جشنواره، شماره پذیرش و شماره همراه را وارد کنید</Typography>
            </Box>
            <Box className='line' sx={{alignSelf:"center"}}> </Box>
            <Box  sx={{width:"300px",height:"200px",display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",py:2,border:"1px solid black"}}>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>  قدم دوم   </Typography>
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>در میان دو گزینه هدیه نقدی یا خرید آنلاین یکی را انتخاب نمایید. </Typography>
                </Box>
                </Grid>
                <Grid  sx={{bgcolor:"gold",display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"column"},mx:10,my:5}}>
            <Grid  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
           
           
           
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>   قدم اول  </Typography>
               
               
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>کد جشنواره، شماره پذیرش و شماره همراه را وارد کنید</Typography>
            </Grid>
            
            <Divider  orientation="vertical" variant="fullWidth"  flexItem  />
            <Grid  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:2}}>
           
           
           
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>  قدم دوم   </Typography>
               
               
                <Typography sx={{mx:7,textAlign:"center",color:"gray"}}>در میان دو گزینه هدیه نقدی یا خرید آنلاین یکی را انتخاب نمایید. </Typography>
                </Grid>
                </Grid>
        </Grid>
        </Box>

    <Footer/>
    </>
  );
}







  

   
