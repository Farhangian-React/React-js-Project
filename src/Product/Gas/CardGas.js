import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CartContext} from '../../Shared/Cart-Context';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartBuyGas from '../CartBuyGas';
import FilterGas from "./FilterGas";
  
   function Tems({ currentItems }) {
    const [cartItems,setCartItems]=useContext(CartContext);
     return (
      <>
      <Box sx={{mt:2,mb:4}}>
      <ul className='headers'>
        <li>محصولات / </li>
        <li> پخت و پز / </li>
        <li> همه ی اجاق گازها </li>
      </ul>
     
    </Box>
    <Box sx={{m:4,p:2}}>
 
 <Typography variant='h5' sx={{px:5,pb:2}}>
 لوازم آشپزی برای فروش
 </Typography>
 <Typography  sx={{color:"#454545",fontSize:{xs:'14px',lg:'18px'},px:5,pb:2}}>
در sohil، انتخاب گسترده ما از وسایل آشپزی به شما کمک می کند تا تجربه آشپزخانه خود را بهبود ببخشید. از آشپزخانه هوشمند و اجاق گاز گرفته تا اجاق‌ها و مایکروویوهای خلاقانه، ما همه چیزهایی را که برای تهیه غذاهای خوشمزه به آسانی نیاز دارید، در اختیار داریم. بهترین معاملات را در مورد برندهای لوکس آشپزی مانند samsung،   wirpool , LG ,bush و موارد دیگر کاوش کنید!
 </Typography>
 <Typography variant='h5' sx={{ px:5,pb:2}}>
  دسته بندی لوازم پخت و پز
 </Typography>
 <Typography  sx={{color:"#454545",fontSize:{xs:'14px',lg:'18px'},px:5,pb:2}}>
 اجاق‌های دیواری: آشپزخانه خود را با اجاق‌های دیواری شیک و با صرفه‌جویی در فضا متحول کنید، کنترل دقیق دما و گزینه‌های پخت همه‌کاره را ارائه می‌دهد. اجاق‌های تک جداره، اجاق‌های دوجداره، اجاق‌های مایکروویو و کشوهای گرم‌کننده را کاوش کنید.
اجاق‌های اجاق‌پز: تجربه آشپزی خود را با اجاق‌های قدرتمند و کارآمد ما که دارای کنترل گرمای پاسخگو و پیکربندی‌های چندگانه مشعل برای تطبیق با تکنیک‌های مختلف پخت هستند، ارتقا دهید. اجاق‌های برقی، گازی، و اجاق‌های القایی را هم‌اکنون کاوش کنید!
محدوده ها: محدوده های ما راحتی یک اجاق گاز و اجاق گاز را در یک دستگاه ترکیب می کنند. فرقی نمی‌کند گاز، برق یا دو سوخت را ترجیح دهید، محدوده‌های ما کنترل دقیق دما و فضای پخت و پز کافی را ارائه می‌دهند تا به دستور العمل‌های مورد علاقه شما زنده شود.
مایکروویو: پخت و پز سریع و کارآمد، گرم کردن مجدد و یخ زدایی را با مایکروویوهای با کارایی بالا تجربه کنید. با کنترل‌های کاربرپسند و فناوری پیشرفته، مایکروویوهای ما نتایج ثابتی را ارائه می‌دهند.
هودهای برد: آشپزخانه خود را با هودهای قدرتمندی که بوی آشپزی، چربی و ذرات معلق در هوا را از بین می برند، تازه و بدون دود نگه دارید. هودهای کانالی و هودهای بدون کانال ما که برای حداکثر تهویه و عملکرد بی سروصدا طراحی شده اند، کیفیت هوا و آسایشی که شایسته شماست را فراهم می کنند.
لوازم کوچک: با وسایل کوچک ما، روال آشپزی خود را آسان‌تر کنید، که برای وعده‌های غذایی سریع و میان‌وعده با کمترین تلاش مناسب است. از مخلوط کن و غذاساز گرفته تا توستر و قهوه ساز، وسایل کوچک ما راحتی و کارایی را ارائه می دهند.
 </Typography>
 <Typography variant='h5' sx={{px:5,pb:2}}>
بهترین لوازم آشپزی را از ما بخرید
 </Typography>
 <Typography  sx={{color:"#454545",fontSize:{xs:'14px',lg:'18px'},px:5,pb:2}}>
 در sohil،تلاش ما فراتر از فروش لوازم خانگی است، ما متعهد به ارائه بهترین لوازم آشپزی موجود در بازار هستیم. اگر سؤالی دارید، اکنون با کارشناسان لوازم آشپزی ما تماس بگیرید..
 </Typography>
</Box>

    <Box component="div" sx={{ display:'flex',flexDirection:{xs:'column',lg:'row'}}} >
<FilterGas/>

<Box sx={{display:'flex',flexDirection:'column',justifyContent:'start'}}>
<Box sx={{my:{lg:3},mt:{xs:3},ml:1,mr:3,display:'flex',justifyContent:'start', height:'40px',bgcolor:{lg:"#E0E1E3"}}}>
<Typography sx={{pb:1,px:2,fontSize:{xs:"20px",lg:'24px'},direction:'rtl'}}>
همه ی اجاق گازها
</Typography>
</Box>
     
       <Box   sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>
        {currentItems &&
          currentItems.map((item) => (
            <NavLink to={'/cartbuygas'}  className={"linkss"}>  
            <Card className='cards' sx={{height:"500px", maxWidth:'250px',marginTop:'10px',marginBottom: '10px',marginX:'22px', p:1 }} key={item.id}>
      <CardMedia
          component="img"
          height="220"
         image={item.img}
          alt=""
          onClick={()=>{
            setCartItems([item]);
           }}
        />
            <CardContent sx={{height:"90px",direction:"rtl"}}>
         
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
        <NavLink className='buttonbuy' to={'/cartbuygas'}>  <Button size="large"
            fullWidth
            variant="contained"
            
            sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
            onClick={()=>{
              setCartItems([item]);
              <CartBuyGas/>
             }}>خرید </Button></NavLink>
          
        </CardActions>
       
      </Card>
      </NavLink>
          ))}
        </Box>
    </Box>
  </Box>
         
      </>
    );
  }
  
  export default function CardGas({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const getData=()=>{
      fetch('http://localhost:3000/AllGas')
      .then(res => res.json())
      .then((result)=> {
        setData(result);
        setDatashow(result);
      },
      (error) => {
        alert('error');
      }
      )
     }
    
      useEffect( ()=>{
        getData();
    
      },[])
      const [itemOffset, setItemOffset] = useState(0);
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = datashow.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(datashow.length / itemsPerPage);
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datashow.length;
        setItemOffset(newOffset);
      };
    return (
      <>
        <Tems currentItems={currentItems}  />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className='pagination'
          pageClassName='paginationli'
          previousClassName='previousStyle'
          nextClassName='nextStyle'
        />
 
      </>
    );}