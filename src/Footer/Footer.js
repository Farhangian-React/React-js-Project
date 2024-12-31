import * as React from 'react';
import { Facebook, Instagram,  Telegram ,LinkedIn ,WhatsApp} from "@mui/icons-material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import dishwashericon from '../img/dishwasher-icon.jpg';
import washingmachins from '../img/washingmachin-icon2.png';
import gasicon from '../img/gas-icon2.jpg';
import Refrigeratoricon from '../img/Refrigerator-icon1.png';
import {  Typography } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {NavLink} from 'react-router-dom';
import './Footer.css';
import Divider from '@mui/material/Divider';
export default function Footer() {
  return (
    <Box sx={{ m:1, px:5,bgcolor:"#1c1c1c" ,display:'flex',flexDirection:'column'}} >
       <Box  sx={{ mx:1,my:2, bgcolor:"#1c1c1c" ,display:'flex',flexDirection:'row'}} >
        <Box sx={{m:"auto", bgcolor:"#1c1c1c" ,display:'flex',flexDirection:'row',width:"65%"}}>
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
             m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}   
          >
            <ListItem >
            <ListItemDecorator>
              <img src={Refrigeratoricon} width={30} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem >
           
            <NavLink  className='navlinkfooter' to={'/allrefriderators'}>  یخچال و فریزر </NavLink>
            </ListItem>
            <Divider component="li" />
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorsidbysid'}> ساید بای ساید </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrideratortopfreezer'}> فریزر بالا</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-refrideratorbottomfreezer'} >فریزر پایین </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorfrenchdoor'} > فریزر دو در</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-refrideratorspecializedfreezer'}>یخچال و فریزر تخصصی</NavLink>
            </ListItem>
          </List>
    
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}  
          >
            <ListItem >
            <ListItemDecorator>
              <img src={gasicon} width={30} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem>
            <NavLink  className='navlinkfooter' to={'/allgas'}>   اجاق گاز   </NavLink>
            </ListItem>
      <Divider component="li" />
            <ListItem>
            <NavLink className='navlinkwhite' to={'/shop-ranges'}>  اجاق گاز و فر </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-cooktop'}> گاز صفحه ای</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-hood'} >هود </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-microwaves'}>مایکروویو</NavLink>
            </ListItem>
          </List>
   
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}  
          >
            <ListItem >
            <ListItemDecorator>
              <img src={washingmachins} width={30} alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem >
            <NavLink  className='navlinkfooter' to={'/shop-washing-machine'}>   ماشین لباسشویی  </NavLink>
            </ListItem>
            <Divider component="li" />
            
          </List>
     
       
       
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"#1c1c1c"
            }}
          >
            <ListItem >
            <ListItemDecorator>
              <img src={dishwashericon} width={30}  alt=''/>
              </ListItemDecorator>
            </ListItem>
            <ListItem >
            <NavLink  className='navlinkfooter' to={'/shop-dishwasher'}>ماشین ظرفشویی </NavLink>
            </ListItem>
          </List>
          </Box>
          <Box sx={{m:1,display:'flex',flexDirection:'column',width:"35%",px:2,py:7}}>
            <Typography variant='body2'  sx={{color:"#8a8a8a",textAlign:"justify",mb:3}}>
            در فروشگاه 
          <NavLink className={"linkfooter"} to={"/"} >  “سهیل” </NavLink> 
             می توانید  لوازم خانگی خارجی اعم از  یخچال فریزر، ماشین لباسشویی، 
            ماشین ظرفشویی و لوازم پخت و پز را با سهولت کامل خریداری کنید. قیمت رقابتی، فروش اقساطی، ارسال سریع به تمام نقاط ایران، تنوع بالای محصولات، فروشگاه “سهیل” را به یکی از معتبرترین فروشگاه آنلاین در ایران تبدیل نموده است. همکاران ما در  “سهیل” همواره سعی نموده‌اند اطلاعات کامل و دقیقی را نسبت به محصولات، شیوه‌های ارسال، نحوه‌ی پرداخت، گارانتی محصولات و… در اختیار مشتریان عزیز قرار دهند و خط مشی ما، جلب رضایت مشتری در تمامی مراحل خرید آنلاین است.
            </Typography>
            <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PlaceOutlinedIcon sx={{pr:0,pt:{xs:2,lg:1},color:"#ecd2a0",fontSize:"20px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"12px"}}> دفتر مرکزی: تهران، سعادت آباد، میدان کتاب، بلوار کوهستان، نبش گل‌گشت، پلاک 2/1</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PhoneEnabledOutlinedIcon sx={{pr:0,pt:1,color:"#ecd2a0",fontSize:"20px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"12px"}}>90008929 (روزهای کاری ساعت 8:30 الی 17)</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <EmailOutlinedIcon sx={{pr:0,pt:1,color:"#ecd2a0",fontSize:"20px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"12px"}}> info@sohil.com</Typography>
    </Box>
            </Box>
            </Box>
          <Box   >
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              my: 0,
              border:'none',
              backgroundColor:'#1c1c1c',
              height:'90px',
              alignItems:'center',
              width:'100%',
            }}
             > 
              <ListItem>
              <Typography level='h6' sx={{color:'#ececec',mt:0}}> سهیل در شبکه های اجتمایی</Typography>
              </ListItem>
              <ListItem>
                <List  
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{border:'none'}}
            >     
                <NavLink  className='navicon1'><Facebook  sx={{fontSize:"28px",color:"#3e98ed"}}/></NavLink>
                <NavLink  className='navicon2'><Instagram sx={{fontSize:"28px",color:"#f35131"}} /></NavLink>
                <NavLink  className='navicon3'><Telegram  color="info" sx={{fontSize:"28px"}} /></NavLink>
                <NavLink  className='navicon4'><WhatsApp   sx={{fontSize:"28px",color:"#4fe69b"}} /></NavLink>
                <NavLink className='navicon5'><LinkedIn   sx={{fontSize:"28px",color:"#3e98ed"}} /></NavLink>
              </List>
              </ListItem> 
            
            </List>
          </Box>
      <Box sx={{bgcolor:'#1c1c1c',mb:3,mt:0}}>
        <Typography sx={{textAlign:'center',fontSize:"14px",color:'#8a8a8a',mt:8}}>
           © 1384-1402 Copyright:سهیل -کلیه حقوق محفوظ است
        </Typography>
      </Box>
     
    </Box>
  );
}
