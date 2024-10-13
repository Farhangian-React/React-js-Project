import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography } from '@mui/material';
import './Sheet.css';
import { Slide } from 'react-slideshow-image';
import { NavLink } from 'react-router-dom';
import CallReceivedIcon from '@mui/icons-material/CallReceived';


export default function SheetOne() {

    const responsiveSettings = [
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
  

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
<Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}}>
<Box  sx={{position:"absolute",display:"flex",justifyContent:"start",alignItems:"flex-end",bgcolor:"bisque",width:"500px",height:"300px"}}>
   <Button sx={{borderRadius:"10px",bgcolor:"white",m:1}}> nnnnnn</Button>
   <Button sx={{borderRadius:"10px",bgcolor:"white",m:1}}> nnnnnn</Button>
   <Button sx={{borderRadius:"10px",bgcolor:"white",m:1}}> nnnnnn</Button>
</Box>
<Box className="box" sx={{position:"relative",bottom:"1px",display:"flex",justifyContent:"center",alignSelf:"center",bgcolor:"blue",width:"500px",height:"300px"}}>
<Typography variant='h4' sx={{textAlign:"center"}}>فروش فوق العاده ی سهیل</Typography>
</Box>
</Box>
<Grid xs={12} container    sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",sm:"row"},my:5}}>
            <Grid xs={12} md={3}  sx={{display:"flex",justifyContent:"center",flexDirection:"column",py:3,mx:2}}> 
            <Box sx={{height:{xs:"120px",sm:"160px"},mx:{xs:10,sm:3}}}>
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
            <Box sx={{height:{xs:"120px",sm:"160px"},mx:{xs:10,sm:3}}}>
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
           <Box sx={{height:{xs:"120px",sm:"160px"},mx:{xs:10,sm:3}}}>
                <Typography sx={{mt:1,mb:2,textAlign:"center",fontSize:"24px",color:"#282828"}}>تحویل متخصص</Typography>
                <Typography sx={{my:2,textAlign:"center",color:"gray"}}>   این شرکت متخصصانی را آموزش داده و با دانش ترین خدمه لوازم خانگی سهیل به کار گرفته است</Typography>
              </Box>
                <Box sx={{mx:5,p:0,mt:{xs:3,sm:8,md:3},width:"90%",alignSelf:"center",display:"flex",justifyContent:"center",border:{xs:"none",md:"1px solid #65512a"}}}>
                <Button size='large' sx={{':hover':{backgroundImage:{xs:"linear-gradient(to right ,#eeeeee,#282828)",md:"linear-gradient(to right ,#E0AA3E,#282828)"},color:'white'},px:{xs:5,lg:15},py:0,my:0.5,color:{xs:"white",md:"black"},
                border:{xs:'none',md:'1px solid #E0AA3E'},backgroundImage:{xs:"linear-gradient(to right ,#E0AA3E,#282828)",md:'none'},fontSize:{xs:'14px',sm:'16px',md:'18px'}}}> اطلاعات بیشتر</Button>
            </Box>
            </Grid>
           
        </Grid>
        





          <Grid  sx={{borderTop:"4px solid #E0AA3E",borderBottom:"4px solid #E0AA3E",backgroundImage:"linear-gradient(to top right, rgba(0,0,0,0),  #E0AA3E)",px:1,mx:{xs:0,md:8},my:2,py:3}} >
          <Grid xs={12}  sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",direction:"rtl",px:5,mt:0,mx:{xs:2,md:5}}}>
         <Grid xs={8} sx={{display:"flex",flexDirection:"row",justifyContent:"start",direction:"rtl",px:1,mt:0,mx:1}}>
          <Grid  sx={{display:{xs:"none",md:"flex"},alignSelf:"center",my:1,mx:{xs:6,md:4}}}>
           <Box  sx={{backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #352913),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC_EWvczwtEpbLYz3XmeXHzU7rzTHmsUdKQ&s")',
            display:"flex",justifyContent:"center",alignItems:"center",height:{xs:"70px",md:"110px"},width: {xs:"70px",md:"110px"},backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"50%"}}>
           </Box>
           </Grid>
<Grid className="animat" sx={{display:"flex",alignSelf:"center",mx:{xs:0,md:0}}} >
           <Typography  sx={{fontSize:{xs:"16px",md:"28px"},color:"#4d4d4d"}}>
پیشنهاد شگفت انگیز  
           </Typography>
          
           </Grid>
         </Grid>
         <Grid xs={4}  sx={{alignSelf:"center"}} >
         <Button variant='contained'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'}, fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',m:3,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>  <NavLink className='link' to={"/allproducts" }> همه ی محصولات </NavLink></Button>
         </Grid>
        </Grid>

        <Slide cssClass="slide" slidesToScroll={1} slidesToShow={2} indicators={false} responsive={responsiveSettings}  >
      
        <Box  sx={{backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #352913),url("https://dkstatics-public.digikala.com/digikala-products/3613174.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90")',
        display:"flex",justifyContent:"end",alignItems:"end",height:{xs:"400px",sm:"550",md:"400px"} ,backgroundSize:"cover",backgroundRepeat:"no-repeat",p:0,mt:2,mx:{xs:0,md:1},borderRadius:"5px"}}>
                <Box sx={{display:"flex",flexDirection:"column",p:3,textAlign:"center",color:"#e4e4e4"}} >
                    <Typography variant='h5' >انتخاب پاکیزگی</Typography>
                    <Typography variant='body2'>از میان برترین های لباس شویی </Typography>
                  <NavLink to={'/shop-washing-machine'}>  <Button  sx={{mt:2,p:0,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",fontSize:"16px",color:"white",width:"30px",alignSelf:"center",borderBottomLeftRadius:"15px"}}>خرید</Button></NavLink>
                </Box>
            </Box>
            <Box  sx={{backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #352913),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERqwMEec6wyGTttP8XksshlgWiMZ4nTxPiA&s")',
            display:"flex",justifyContent:"end",alignItems:"end",height:{xs:"400px",sm:"550",md:"400px"} ,backgroundSize:"cover",backgroundRepeat:"no-repeat",mt:2,mx:1,borderRadius:"5px"}}>
                <Box sx={{display:"flex",flexDirection:"column",p:3,textAlign:"center",color:"#e4e4e4"}} >
                    <Typography variant='h5' >انتخاب تازگی</Typography>
                    <Typography variant='body2'>از میان برترین های یخچال و فریزر </Typography>
                    <NavLink to={"/allrefriderators"}> <Button  sx={{mt:2,p:0,backgroundImage:"linear-gradient(to right ,#E0AA3E,#352913)",fontSize:"16px",color:"white",width:"30px",alignSelf:"center",borderBottomLeftRadius:"15px"}}>خرید</Button>
               </NavLink> </Box>
            </Box>
            <Box  sx={{backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),#352913),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8rgDD5hIGMNgtCBmHIiFEOKS2LwBchvL7g&s")',
            display:"flex",justifyContent:"end",alignItems:"end",height:{xs:"400px",sm:"550",md:"400px"} ,backgroundSize:"cover",backgroundRepeat:"no-repeat",mt:2,mx:1,borderRadius:"5px"}}>
                <Box sx={{display:"flex",flexDirection:"column",p:3,textAlign:"center",color:"#e4e4e4"}} >
                    <Typography variant='h5' >انتخاب راحتی</Typography>
                    <Typography variant='body2'>از میان برترین های ماشین لباس شویی </Typography>
                  <NavLink to={'/shop-dishwasher' }>  <Button  sx={{mt:2,p:0,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",fontSize:"16px",color:"white",width:"30px",alignSelf:"center",borderBottomLeftRadius:"15px"}}>خرید</Button>
              </NavLink>  </Box>
            </Box>
            <Box  sx={{backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #352913),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSBWkRSgllj9CdUa984-XIVrZDaHd766MYQ&s")',
            display:"flex",justifyContent:"end",alignItems:"end",height:{xs:"400px",sm:"550",md:"400px"} ,backgroundSize:"cover",backgroundRepeat:"no-repeat",mt:2,mx:1,borderRadius:"5px"}}>
                <Box sx={{display:"flex",flexDirection:"column",p:3,textAlign:"center",color:"#e4e4e4"}} >
                    <Typography variant='h5' >انتخاب خوشمزگی</Typography>
                    <Typography variant='body2'>از میان برترین های اجاق گاز </Typography>
                    <NavLink to={"/allgas"}><Button  sx={{mt:2,p:0,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",fontSize:"16px",color:"white",width:"30px",alignSelf:"center",borderBottomLeftRadius:"15px"}}>خرید</Button>
              </NavLink>  </Box>
            </Box>
        </Slide>
        </Grid>
       
         
     
       
       
    
       
    
    </>
  );
}