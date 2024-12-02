import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilteringFrenchDoor from './FilteringFrenchDoor';
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
         یخجال های دو درب
         </Typography>
         <Typography sx={{color:"#414141",fontSize:"16px", px:5,pb:1,textAlign:"justify"}}>
      یخچال های دو درب  دارای یک یخچال در بالای کشوی فریزر هستند. این یخچال
       دارای انعطاف پذیری دو درب است که برای آشپزخانه های باریک طراحی شده و ظاهری 
      پیشرفته به آشپزخانه شما می بخشد. مدل‌های منتخب دارای کشوهای میانی
       برای انعطاف‌پذیری بیشتر هستند تا هر مورد خانه خود را داشته باشد.
      </Typography>
      <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,mb:3,textAlign:"justify"}}>
      ما مفتخریم که یخچال‌ها را با هر قیمتی ارائه می‌کنیم تا بتوانید
       آنچه را که نیاز دارید بیابید. با انتخاب محدوده بودجه خود شروع کنید، سپس ظرفیتی را انتخاب کنید که متناسب با مواد غذایی هفتگی خانوار شما باشد که ابعادی متناسب با آشپزخانه شما داشته باشد. سپس سبک مورد علاقه خود را از درب داخلی به سمت درب فرانسوی و موارد دیگر انتخاب کنید! هنگامی که یکی را که دوست دارید پیدا کردید، آن را برای 
       خرید به سبد خرید خود اضافه کنید و ضمانت های خود را اضافه کنید یا 
       با مدل های دیگر مقایسه کنید تا انتخاب کاملی داشته باشید.
      </Typography>
    </Box>
    <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"70vh"},
position:"sticky",
top: "80px",

}}>
 <FilteringFrenchDoor/></Box>
  <Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",mx:0,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"},pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}>   یخچال‌های دو درب
</Typography>
</Box>
 <Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>
  {currentItems &&
    currentItems.map((item) => (
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>    
 <Card className='cards' sx={{width:{xs:"270px",sm:'270px',md:"250px",lg:'250px'},
height:{xs:"400px",sm:'400px',md:"450px",lg:'450px'},marginTop:'10px',marginBottom: '10px',mx:{xs:3,lg:1.5},mt:3, px:1.5,pb:1,pt:2 }} key={item.id}>
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
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
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
    </Box>
  </Box>
 </Box>
    </>
  );
      }

export default function CardRefrigeratorsFrenchDoor({ itemsPerPage }) {
 
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);

 const getData=()=>{
  fetch('http://localhost:3000/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Ref" && i.type === "FrenchDoor"));
   setDatashow(result.filter(i=>i.product === "Ref" && i.type === "FrenchDoor" ));
  
  
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
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className='pagination'
        pageClassName='paginationli'
        previousClassName='previousStyle'
        nextClassName='nextStyle'
      />
    </>
  );
}
 
