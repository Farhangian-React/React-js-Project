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
import { NavLink } from 'react-router-dom';
import FilterGas from "./FilterGas";
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
  
   function Tems({ currentItems,load }) {
    const [cartItems,setCartItems]=useContext(CartContext);
    const[datacomment,setDatacomment]=useState([]);
    const convertToPersian=(str)=> {
      let persianNumber =str
      .replace(/0/g, '۰')
      .replace(/1/g, '۱')
      .replace(/2/g, '۲')
      .replace(/3/g, '۳')
      .replace(/4/g, '۴')
      .replace(/5/g, '۵')
      .replace(/6/g, '۶')
      .replace(/7/g, '۷')
      .replace(/8/g, '۸')
      .replace(/9/g, '۹');
  return(persianNumber);
    }
    const getData=()=>{
      fetch("https://serverjson-project.onrender.com/Allcomments")
      .then((res)=>
         res.json())
         .then((data)=>{
        setDatacomment(data);
        }
         )
      .catch(err=>console.log(err));
    }
    useEffect(()=>{
      getData();
      
    },[])
        const sumscore=(item)=>{
          let total=0;
          let aver=0;
       datacomment.map(i=>{
        if(i.idcomment === item.id){
          aver ++;
          total += i.score; 
        }
        });
         return total /aver;
       }
     return (
      <>
     <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
       <Box>
    <Typography variant="h6" sx={{color:"#282828",py:4, px:5,pb:1,fontWeight: 550,textAlign:"justify"}}  >
    پخت و پز
 </Typography>
 <Typography sx={{color:"#414141",fontSize:"16px", px:5,pb:1,textAlign:"justify"}}>
در sohil، انتخاب گسترده ما از وسایل آشپزی به شما کمک می کند تا تجربه آشپزخانه خود را بهبود ببخشید. از آشپزخانه هوشمند و اجاق گاز گرفته تا اجاق‌ها و مایکروویوهای خلاقانه، ما همه چیزهایی را که برای تهیه غذاهای خوشمزه به آسانی نیاز دارید، در اختیار داریم. بهترین معاملات را در مورد برندهای لوکس آشپزی مانند samsung،   wirpool , LG ,bush و موارد دیگر کاوش کنید!
 </Typography>
 <Typography variant='h5' sx={{ px:5,pb:2,textAlign:"justify"}}>
  دسته بندی لوازم پخت و پز
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,textAlign:"justify"}}>
 اجاق‌های دیواری: آشپزخانه خود را با اجاق‌های دیواری شیک و با صرفه‌جویی در فضا متحول کنید، کنترل دقیق دما و گزینه‌های پخت همه‌کاره را ارائه می‌دهد. اجاق‌های تک جداره، اجاق‌های دوجداره، اجاق‌های مایکروویو و کشوهای گرم‌کننده را کاوش کنید.
اجاق‌های اجاق‌پز: تجربه آشپزی خود را با اجاق‌های قدرتمند و کارآمد ما که دارای کنترل گرمای پاسخگو و پیکربندی‌های چندگانه مشعل برای تطبیق با تکنیک‌های مختلف پخت هستند، ارتقا دهید. اجاق‌های برقی، گازی، و اجاق‌های القایی را هم‌اکنون کاوش کنید!
محدوده ها: محدوده های ما راحتی یک اجاق گاز و اجاق گاز را در یک دستگاه ترکیب می کنند. فرقی نمی‌کند گاز، برق یا دو سوخت را ترجیح دهید، محدوده‌های ما کنترل دقیق دما و فضای پخت و پز کافی را ارائه می‌دهند تا به دستور العمل‌های مورد علاقه شما زنده شود.
مایکروویو: پخت و پز سریع و کارآمد، گرم کردن مجدد و یخ زدایی را با مایکروویوهای با کارایی بالا تجربه کنید. با کنترل‌های کاربرپسند و فناوری پیشرفته، مایکروویوهای ما نتایج ثابتی را ارائه می‌دهند.
هودهای برد: آشپزخانه خود را با هودهای قدرتمندی که بوی آشپزی، چربی و ذرات معلق در هوا را از بین می برند، تازه و بدون دود نگه دارید. هودهای کانالی و هودهای بدون کانال ما که برای حداکثر تهویه و عملکرد بی سروصدا طراحی شده اند، کیفیت هوا و آسایشی که شایسته شماست را فراهم می کنند.
لوازم کوچک: با وسایل کوچک ما، روال آشپزی خود را آسان‌تر کنید، که برای وعده‌های غذایی سریع و میان‌وعده با کمترین تلاش مناسب است. از مخلوط کن و غذاساز گرفته تا توستر و قهوه ساز، وسایل کوچک ما راحتی و کارایی را ارائه می دهند.
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,textAlign:"justify"}}>
بهترین لوازم آشپزی را از ما بخرید
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,mb:3,textAlign:"justify"}}>
 در sohil،تلاش ما فراتر از فروش لوازم خانگی است، ما متعهد به ارائه بهترین لوازم آشپزی موجود در بازار هستیم. اگر سؤالی دارید، اکنون با کارشناسان لوازم آشپزی ما تماس بگیرید..
 </Typography>
</Box>
<Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},mb:5,
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"100vh"},
position:{xs:"static",lg:"sticky"},
top: "80px",

}}>
<FilterGas/></Box>

<Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",mx:0,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"},pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"24px",lg:"22px"},direction:'rtl'}}>
  پخت و پز 
</Typography>
</Box> 
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>

{
  load ? 
  <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open
>
<CircularProgress color="inherit" />
</Backdrop>
:
currentItems &&
  currentItems.map((item) => (
    <NavLink to={'/cartbuygas'}  className={"linkss"}> 
<Card className='cards' sx={{width:{xs:"350px",lg:'250px'},
height:{xs:"500px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:{xs:1,lg:1.5},mt:3, px:{xs:0.8,lg:1.5},pb:1,pt:2 }} key={item.id}>
<Box sx={{width:"35px",height:"20px",bgcolor:"#f5cd00",color:"#414141",borderRadius:"20%",px:0,py:0,mt:0.2,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Typography sx={{fontSize:"12px",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
    </Box>
<CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:{xs:"220px",lg:"200px"},m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'60px',direction:"rtl"}}>
    <Typography component="div" sx={{fontSize:{xs:"18px",lg:"14px"},textAlign:'center'}}>
      {item.title1}
    </Typography>
    </CardContent>
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",
    alignSelf:"center",alignItems:"center",
    border:"none",height:'25px',direction:"rtl",py:0.8,my:0}}>
    <Typography  sx={{fontSize:{xs:"14px",lg:"14px"},color:"#8a8a8a",textAlign:'center'}}>
      {item.title2}
      </Typography>
      <Rating
         sx={{color:"#f5cd00",fontSize:"12px",px:5,alignItems:"center"}}
        name="simple-controlled"
        value={sumscore(item)}
      
      />
    
  </CardContent>

  <CardContent sx={{height:'20px',direction:"rtl",display:"flex",justifyContent:"center",flexDirection:"column",borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}} >
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',px:0.7,py:0.3}}>
     <Typography   color="black" sx={{textAlign:'center',fontSize:"16px"}}>خرید نقدی</Typography>
     <Typography  variant="h5" color="#926f34" sx={{textAlign:'center',fontSize:{xs:"18px",lg:"16px"}}}>{item.price}</Typography>
    </Box>
   
  </CardContent>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/CartBuyDishwasher'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:{xs:"16px",lg:"18px"},
      backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", mt:2,mb:{xs:0,md:2},py:0,px:{xs:8,lg:5},
      borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px"}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
</Card>
</NavLink>
    
  ))}
  </Box>
    </Box>
  </Box>
     </Box>    
      </>
    );
  }
  
  export default function CardGas({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const [isLoading,setIsLoading]=useState(true);
    const getData=()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Gas"));
   setDatashow(result.filter(i=>i.product === "Gas"));
   setIsLoading(false);
  
  },
      (error) => {
        alert('error');
        setIsLoading(false);
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
        <Tems currentItems={currentItems} load={isLoading}  />
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