import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CartContext} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartBuyGas from '../../CartBuyGas';
import FilterRages from "./FilterRages";
import Rating from '@mui/material/Rating';
   function Tems({ currentItems }) {
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
      fetch("http://localhost:3000/Allcomments")
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
  اجاق گاز ایستاده
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,textAlign:"justify"}}>

 اجاق گاز از اساسی ترین اجزای آشپزخانه محسوب می‌ شود.
  با شنیدن اسم اجاق گاز ذهن اکثر ما به سراغ یک اجاق گاز فردار کلاسیک می‌ رود که قدیم در همه آشپزخانه ‌ها بود. شما مجبور نیستید که یک اجاق گاز فردار بخرید اما خرید اجاق گاز دارای فر مزایای خودش را دارد. اجاق گاز فردار ارزان ‌تر و به صرفه تر از خرید یک اجاق‌ گاز رومیزی بدون فر و در کنار آن، یک فر توکار جداگانه است. البته که خرید اجاق گاز فردار یا بدون فر سلیقه ای است و هر کسی با توجه به فضای آشپزخانه خود انتخاب می‌ کند. اما با آگاهی از مدل‌ های مختلف اجاق گاز و انتخاب‌ هایی که می ‌توانید داشته باشید، قطعا راحت ‌تر و سریع ‌تر خرید اجاق گاز را به ثمر خواهید رساند. فروشگاه اینترتی دیجی ‌کالا علاوه بر فروش انواع اجاق گاز و دیگر لوازم آشپزخانه، بهترین مرجع راهنمای خرید لوازم خانگی برقی و غیر برقی محسوب می‌ شود. شما می ‌‌توانید با مطالعه جدول مشخصات و نقد و بررسی مدل‌ های مختلف،
   اجاق گاز مناسب با بودجه و فضای آشپزخانه خود را بیابید. اما قبل از آن در اینجا با انواع اجاق گاز آشنا شوید.
  </Typography>
  <Typography variant="h6" sx={{color:"#282828",py:4, px:5,pb:1,fontWeight: 550,textAlign:"justify"}}  >
  انواع اجاق گاز ایستاده
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,textAlign:"justify"}}>

 اجاق ‌گاز آشپزخانه بر اساس دو عامل تقسیم می‌ شوند: نوع مصرف و شکل ظاهری. اجاق ‌ها در بازار از نظر نوع مصرف به 2 دسته برقی و گازی تقسیم می ‌شوند.

اجاق گازی: خیلی از آشپزان تازه ‌کار و سرآشپزان معروف برای آشپزی اجاق های گازی را ترجیح می ‌دهند؛ چرا که امکان تنظیم حرارت اجاق گازهایی که با گاز کار می‌ کنند، خیلی دقیق ‌تر از اجاق‌ های برقی است. شما می‌ توانید حرارت را بین درجه های مختلف تنظیم کنید و چون می ‌توانید شعله را با چشم خود ببینید، رسیدن به میزان دمای مورد نظر راحت‌ تر است. میزان مصرف انرژی در اجاق‌ های گازی نیز کمتر است.

اجاق برقی: اجاق‌ های برقی جدید بین خانم های خانه بسیار پرطرفدار است چرا که بسیار زیبا هستند و تمیز کردن آن‌ها راحت‌ تر است. اجاق‌ های برقی مانند اجاق‌ های گازی دارای انواع مختلف دو شعله، سه شعله، چهار شعله، پنج شعله و حتی بیشتر است و شما می ‌توانید با توجه به نیازتان مدل مورد نظر خود را سفارش دهید.
  </Typography>
     <Typography variant="h6" sx={{color:"#282828",pb:4, pt:2,px:5,pb:1,fontWeight: 550,textAlign:"justify"}}  >
    راهنمای خرید اجاق‌ گاز
 </Typography>
 <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,mb:3,textAlign:"justify"}}>
 اگر محدودیت بودجه دارید و خانواده پر جمعیتی هم نیستید، می ‌توانید اجاق گاز رومیزی یا اجاق گاز بدون فر بخرید. قیمت اجاق گاز رومیزی ارزان ‌تر از اجاق گاز معمولی است و غالبا مدل های یک شعله تا چهار شعله آن‌ ها در بازار وجود دارد. اجاق گاز بدون فر نیز ظاهری شبیه اجاق‌ گاز فر دار دارد، با این تفاوت که به جای فر غالبا کشو یا محفظه ای کابینت مانند دارند. اجاق گاز بدون فر ارزان ‌تر از مدل‌ های فردار است و از نظر ظاهری جلوه جذاب ‌تری نسبت به اجاق گاز رومیزی در آشپزخانه دارد و می ‌توان از فضای پایین گاز آن‌ ها نیز مثل کابینت برای قرار دادن ظروف استفاده کرد.
اما اگر بودجه بیشتری برای خرید اجاق گاز دارید، اجاق فردار برقی می ‌تواند جلوه‌ خاصی به آشپزخانه شما بدهد. همچنین می ‌توانید نگاهی به اجاق‌ گازهای 6 شعله استیل بیاندازید. قیمت اجاق گاز برقی و گازی بزرگ در مارک ‌های ایرانی تفاوت زیادی با هم ندارند. اجاق‌ گازهای استیل ظاهر بسیار جذابی دارند و وجودشان دکوراسیون آشپزخانه های مدرن را تکمیل می ‌کند. فر ‌در سبک آشپزی امروزی نقش پر رنگی دارد و آشپزی را برای خیلی از افراد راحت‌ کرده‌ است.
  </Typography>
 </Box>
 <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee",mb:5}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"100vh"},
position:"sticky",
top: "80px",

}}>
  <FilterRages/></Box>

  <Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",mx:0,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"},pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}> اجاق‌ گاز ایستاده
 </Typography>
 </Box>
  <Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>
 
   {currentItems &&
     currentItems.map((item) => (
     
       <NavLink to={'/cartbuygas'}  className={"linkss"}> 
<Card className='cards' sx={{width:{xs:"270px",sm:'270px',md:"250px",lg:'250px'},height:{xs:"400px",sm:'400px',md:"450px",lg:'450px'},marginTop:'10px',marginBottom: '10px',mx:{xs:3,lg:1.5},mt:3, px:1.5,pb:1,pt:2 }} key={item.id}>
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
sx={{width:{xs:"150px",sm:"150px",md:"200px",lg:"200px"},m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'30px',direction:"rtl"}}>
    <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
      {item.title1}
    </Typography>
    </CardContent>
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",
    alignSelf:"center",alignItems:"center",
    border:"none",height:'25px',direction:"rtl",py:0.8,my:0}}>
    <Typography  sx={{fontSize:{xs:"12px",lg:"14px"},color:"#8a8a8a",textAlign:'center'}}>
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
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#926f34" sx={{textAlign:'center'}}>{item.price}</Typography>
    </Box>
  </CardContent>
   <CardActions sx={{display:'flex',justifyContent:'center'}}>
   <NavLink to={'/cartbuygas'}>  <Button size="large"
       fullWidth
       variant="contained"
       sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:{xs:"16px",lg:"18px"},
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", mt:2,mb:{xs:0,md:2},py:0,px:{xs:5,lg:8},
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px"}}
       onClick={()=>{
         setCartItems([item]);
        }}>خرید </Button></NavLink>
     
   </CardActions>
  
 </Card>
 </NavLink>
       
     ))}
     </Box>

</Box>          </Box>
          </Box>
         
      </>
    );
  }
  
  export default function CardRanges({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
    const getData=()=>{
      fetch('http://localhost:3000/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Gas" && i.type === "ranges"));
       setDatashow(result.filter(i=>i.product === "Gas" && i.type === "ranges" ));
      
      
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