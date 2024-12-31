import * as React from 'react';
import  {useContext,useState,useRef} from 'react';
import {CartBuyContext, CartContext} from '../Shared/Cart-Context';
import { Grid,Typography,Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/joy/Tooltip';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import {Link} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import CartModal from "../Carts-Shoping/CartModal";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import HiveIcon from '@mui/icons-material/Hive';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import '../Product/CartBuy.css';
import { Textarea } from '@mui/joy';
import { useEffect } from 'react';
const drawerWidth = 440;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CartSearch() {

  
  const [layout, setLayout] = React.useState(undefined);
  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
  const [image,setImage]=useState();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [advantage,setAdvantage]=useState("");
  const [disadvantages,setDisadvantages]=useState("");
  const [comment,setComment]=useState("");
  const [score,setScore]=useState("");
  const [error,setError]=useState({});
  const[commenuser,setCommenuser]=useState([]);
  const boxcommentref=useRef();
  const buttoncommentref=useRef();
  const boxnotcomments=useRef();
  const displycomments=useRef();
  const offref=useRef();
  const boxoff=useRef();
  const offrefprice=()=>{
    cartItems.map(i=>{
      if(i.off !== ""){
offref.current.className="offref";
      }
      else{
boxoff.current.className="boxoff";
      }
    }
    )
  }
  const convertToEnglish=(str)=> {
    let englishNumber =str
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');

 return(englishNumber);
  }
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
  const addCommas=(nStr)=>{
  
    if(nStr.length === 7){
      return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
    }
    if(nStr.length === 8){
      return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
    }
    if(nStr.length === 9){
      return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
  }
  }
  const displycomment=()=>{
    boxcommentref.current.className="vis";
    displycomments.current.className="hid";
  }
    const addcomments=()=>{
      if(commenuser.length===0){
  boxnotcomments.current.className="boxnotcomments"
      }
      else{
  boxcommentref.current.className="boxcommentref";
  displycomments.current.className="disply";
      }
    } 
  const isvalidate = ()=>{
    console.log(setCartItems(cartItems));
    let isvalid =true;
    let errmesage={};
    if(name === null || name === ""){  
      isvalid = false;
errmesage.name="لطفا نام را وارد کنید";
    }
    if( email === null ||  email === ""){
      isvalid = false;
errmesage.email="لطفا آدرس ایمیل را وارد کنید";
    }
    if( advantage === null || advantage === ""){
      isvalid = false;
errmesage.advantage="لطفا نقاط قوت را وارد کنید";
    }
    if(disadvantages === null || disadvantages === ""){
      isvalid = false;
errmesage.disadvantages="لطفا نقاط ضعف را وارد کنید";
    }
    if(comment === null || comment === ""){ 
      isvalid = false;
errmesage.comment="لطفا دیدگاه خود را وارد کنید";
    }
    if(score === null || score === ""){ 
      isvalid = false;
errmesage.score="لطفا  امتیاز خود را وارد کنید";
    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }
  const sumscore=()=>{
     let total=0;
  commenuser.map(i=>{
     total += i.score
   });
    return total / commenuser.length;
  }
useEffect(()=>{
  cartItems.map(i=>{ 
    fetch("http://localhost:3000/Allcomments")
    .then((res)=>
       res.json())
       .then((data)=>{
      data.map(j=>{
      if(j.idcomment === i.id){
        setCommenuser([...data.filter(j=>j.idcomment === i.id )])
      } 
    }
      )
      }
       )
    .catch(err=>toast.error(err))
  });
  cartItems.map(i=>{
    setImage(i.img);})  
  },[cartItems])
  useEffect(()=>{ 
    offrefprice();
  },[])
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(isvalidate()){
      //console.log(result);
      cartItems.map(i=>{ 
        let idcomment=i.id;
  let result={idcomment,name,email,advantage,disadvantages,
  score,comment}
  fetch("http://localhost:3000/Allcomments",{
    method:"POST",
    headers:{"content-type":"aplication/jopes"},
    body:JSON.stringify(result)
}).then((res)=>{
toast.success("ثبت دیدگاه با موفقیت صورت گرفت") ; 
}).catch((err)=>{
    toast.error("");
})
      })
          }
      }
      const handleDrawerClose = () => {
        setOpen(false);
      };
      const addToCart=(p)=>{   
       if(cartItemsBuy.includes(p)){
        setCartItemsBuy((currState)=>{
       return [...currState]});  
      }
      else{
        setCartItemsBuy((currState)=>{
          return [...currState,p]});
       }
       setOpen(true);
        } 
  return (
    <>
    <PageTitle  title=' سبد خرید ' description=' سبد خرید '/>
   <TopNav/>

  



   <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
   <Box container sx={{height:"auto",display:'flex',flexDirection:{xs:'column',lg:"row"},bgcolor:'white',mx:5,mt:{xs:12,lg:5},mb:5,borderRadius:'10px',direction:'rtl'}}>
        <Box >
         {cartItems.map(i=> 
         <Box   sx={{mt:{xs:1,md:1},display:'flex', flexDirection:'column',justifyContent:'center',bgcolor:'white'}}> 
         <Box sx={{px:5,mt:1,mb:{xs:12,lg:12},width:'15%',height:'20px'}}>
         <img src={i.berand} width={'90%'} alt=''/>
         </Box>
          <Typography variant='h5' sx={{px:5,mb:3,mt:0,textAlign:'right',fontSize:"16px"}}  >
       {i.title1}
        </Typography>
        <Typography  sx={{px:5,mb:1,color:'gray',textAlign:'right'}}  >
      {i.title2}
        </Typography>
        <Rating
        sx={{fontSize:"16px",px:5,mb:1}}
       name="simple-controlled"
       value={sumscore()}
     />
        <Typography variant="body2" sx={{px:5,color:'black',textAlign:'right'}}>
    {i.title3}
        </Typography>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'start'}}>
         <Typography variant='h6' sx={{px:5,mt:2,textAlign:'right'}}>قیمت :</Typography>
          <Typography ref={offref} variant="h5" sx={{color:'#674e06',px:5,mt:2,textAlign:'right'}}  >
         {  i.price}
          </Typography>
          
          </Box>
          <Box ref={boxoff} sx={{display:'flex',flexDirection:'row',justifyContent:'start',mb:2,mt:0}}>
         <Typography variant='h5' sx={{color:"red",px:5,mt:0.5,textAlign:'right'}}>قیمت با  {convertToPersian(i.off)}%   تخفیف :</Typography>
          <Typography variant="h5" sx={{color:'red',px:1,mt:0.5,textAlign:'right'}}  >
       
          {addCommas(convertToPersian((convertToEnglish(i.pricenum)-(convertToEnglish(i.pricenum)*i.off / 100))+''))} تومان 
         </Typography>
          </Box>
        <Button size='medium'  color='secondary'  onClick={()=>
         addToCart(i)
       }
       sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mx:25, my:3,py:0.5,px:0}}
       > 
        افزودن به سبد خرید  </Button>
        <Drawer
       sx={{
         position:"absolute",
         width: drawerWidth,
         height:"auto",
         flexShrink: 0,
         '& .MuiDrawer-paper': {
           width: drawerWidth,
           boxSizing: 'border-box', 
         },
       }}
       variant="persistent"
       anchor="right"
       open={open}
     >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around",backgroundImage:"#f2f2f2"}}>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"start",width:"100%"}}>
<Box sx={{width:"30px",alignSelf:'center',pr:2}}>
<Badge badgeContent={cartItemsBuy.length}  color="warning" >
<ShoppingCartIcon color="action"sx={{color:"black"}} />
</Badge>
</Box> 
<Box sx={{width:"80px",alignSelf:'center',pr:0}}>
<Typography

noWrap
component="a"
href="/"
sx={{
mr:1 ,
mt:0,
display: 'flex',
flexGrow: 0,
fontSize:"22px",
color: '#202020',
textDecoration: 'none',
direction:"rtl"
}}
>
سبدخرید
</Typography>
</Box>
</Box>
           <Box sx={{width:"100%",direction:"ltr"}}>

            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
             </Box>
        </DrawerHeader>
        <Divider />
        <CartModal/>
        </Drawer>
         <Box sx={{display:'flex',justifyContent:'center',pb:{xs:5,lg:1},mx:2}}>
         <InfoIcon sx={{mt:0,pr:1.5,fontSize:'18px',color:'#4b4f4f'}}/>
         <Typography variant='body2' sx={{direction:'rtl',pl:5,pr:1,color:'#333637'}}> درخواست مرجوع کردن کالا در گروه یخچال و فریزر با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد 
          (در صورت پلمپ بودن، کالا نباید باز شده باشد).</Typography>
          </Box>
          
        <Box sx={{m:3, display:'flex',justifyContent:'center'}}>
        <Tooltip color='warning'  title="اضافه به علاقمندی">
      <IconButton sx={{pl:2,color:'black' }}>
        <FavoriteBorderIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title=" به اشتراک گذاری کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <ShareIcon/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" اطلاع رسانی شگفت انگیز ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <NotificationsActiveOutlinedIcon/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" نمودار قیمت">
      <IconButton  sx={{pl:2,color:'black' }}>
         <TimelineOutlinedIcon/>
         </IconButton>
    </Tooltip>
        
    <Tooltip title=" مقایسه کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
        <AutoAwesomeMotionOutlinedIcon/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" افزودن به لیست ">
      <IconButton  sx={{pl:2,color:'black' }}>
   <TocOutlinedIcon/>
         </IconButton>
    </Tooltip>
         
          </Box>
           </Box>
         )}
     </Box>
       
             
     <Box   sx={{mt:{xs:5,lg:1}, mx:{xs:1,lg:3},display:'flex',flexDirection:{xs:"column",lg:"row"},justifyContent:'start',alignSelf:{xs:"center",lg:"start"},direction:'rtl'}} >
       <Box  sx={{mx:{xs:0,lg:2},mt:{xs:2,lg:4},pt:{lg:1},display:'flex',alignItems:'center',justifyContent:'center'}} >

          <Box 
           sx={{
            display:"flex",
            borderRadius:5,
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            height:{xs:"600px",lg:"400px"},
            width:{xs:"650px",lg:"350px"},
           my:{xs:0},
    
            }}
          >
            </Box>  

      
        </Box>
      {cartItems.map(i=>
       < Box   sx={{pt:{lg:5},mx:0,display:'flex',flexDirection:{xs:"row",lg:"column"},justifyContent:'center'}} >
       <Link onClick={()=>setImage(i.img)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.img})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
        <Link onClick={()=>setImage(i.imga1)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.imga1})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
        <Link onClick={()=>setImage(i.imga2)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.imga2})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
      <Box className="allproduct"
      sx={{ height:{xs:"110px",lg:"90px"},
      width:{xs:"110px",lg:"90px"}, display:"flex",
      borderRadius:5, my:{xs:2,lg:1},p:0,mx:1    
    }}
      >
         <Button  onClick={() => {
            setLayout('center');
          }} sx={{color:'black',m:"auto"}}><Typography variant='h4' sx={{textAlign:'center',fontWeight:'800'}}>...</Typography></Button>





<Modal   open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} sx={{display:"flex",flexWrap:"wrap",overflow:"auto"}}>
          <ModalClose  sx={{color:"red"}} />
          {cartItems.map(i=><Typography variant='body1' sx={{mt:4,direction:'rtl'}}>{i.title1} </Typography>
          
          )}
        {cartItems.map(i=><Typography variant='h5' sx={{color:'black',mt:2,mb:4,direction:'rtl'}}>مدل: {i.title2} </Typography>)}
          <Box  sx={{width:'100%',height:'100 vh',direction:{xs:'rtl',md:'ltr'}, display:'flex',flexDirection:{xs:"column",lg:"row"},justifyContent:'center',bgcolor:'#fff'}}>
        <Grid sx={{mx:{xs:2,md:2},mt:{xs:2,lg:1},display:'flex',justifyContent:'center'}} >
             {cartItems.map(i=> 
        <img  src={image} width={'100%'} alt=''   /> 
        )}
        </Grid>
       < Grid
        container
        spacing={0}
      >
       <Grid  xs={4} md={4} sx={{alignItems:'center',display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'} height={'100 vh'} alt=''/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'}  height={'100 vh'} alt=''/></Link>)}</Grid> 
       <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'} alt=''/></Link>)} </ Grid> 
      <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'} alt=''/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'} alt=''/></Link>)}</Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'} alt=''/></Link>)}</Grid> 
       </Grid>
        </Box>
        </ModalDialog>
      </Modal>
      </Box>
        </Box>
      )}
        </Box> 
       </Box>

<Box sx={{display:'flex',bgcolor:'white',mx:5,mb:5,flexDirection:{xs:"column",lg:"row"},mt:{xs:3,lg:1},borderRadius:'10px',direction:'rtl'}}>
<Box  sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:{lg:3}}}>
{cartItems.map(i=>
    <Box container sx={{whiteSpace:"wrap",width:"90%",display:'flex',flexDirection:"row",alignSelf:"center",bgcolor:'white',px:3,py:0,mx:{xs:1,md:5},mb:2,mt:{xs:2,md:2},borderRadius:'10px',direction:'rtl'}}>
     <MessageOutlinedIcon sx={{pr:2,pt:3,color:"#E0AA3E",fontSize:"28px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#3d3d3d",fontSize:"18px"}}> نظرات کاربران<Typography variant='body2' sx={{py:0,color:"#6e6e6e"}}>{i.title1} </Typography>
       </Typography>
    </Box>)}
    <Box  sx={{whiteSpace:"wrap",display:'flex',flexDirection:"column",bgcolor:'white',p:3,mx:{xs:1,md:5},mb:2,mt:{xs:2,md:2},border:"1px dashed #d0d0d0",borderRadius:'10px',direction:'rtl'}}>
      <Typography  sx={{my:1,fontSize:"18px",fontWeight: 'bold'}}>
      دیگران را با نوشتن نظرات خود، برای انتخاب این کالا راهنمایی کنید.
      </Typography>
      <Typography sx={{color:"#2b31d5",fontSize:"16px"}}>
      لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
      </Typography>
      <Typography sx={{fontWeight: 'light',fontSize:"16px",color:"#6e6e6e"}}>
      لطفا متن ارسالی به دور از توهین و تمسخر باشد.
      </Typography>
      <Typography  sx={{fontWeight: 'light',fontSize:"16px",color:"#6e6e6e"}}>
      از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی نظیر شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
      </Typography>
      <Typography sx={{pt:2}}>
      در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر کاربران در فرآیند انتخاب و خرید یک محصول است.
      </Typography>
  
    </Box>
    <Button ref={buttoncommentref} onClick={addcomments}  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mx:25, my:3,py:0.5,px:0}}> مشاهده ی دیدگاه کاربران </Button>
       <Box  ref={boxnotcomments} sx={{display:"none"}}> <Typography variant='h6' sx={{color:"#585858",textAlign:"center",mx:5}}> دیدگاهی برای این محصول ثبت نشده است</Typography> 
       </Box>
     <Box ref={boxcommentref} sx={{ display:"none"}}>
      <Typography variant='h5' sx={{direction:"rtl",color:"#282828",my:0,py:0}}>دید گاه ها...
      <Box className='linetin'></Box>
      </Typography>
     
       {commenuser.map(j=> 
  <Typography sx={{direction:"rtl"}}>
      <Typography variant='body2' sx={{mt:3}}>{j.name}</Typography>
      <Rating
        name="simple-controlled"
        value={j.score}
        sx={{fontSize:"14px",my:1}}
      />
      <Typography sx={{fontSize:"16px",color:"#585858"}}>{j.comment}</Typography>
      <Box className='linetinck'></Box>
     </Typography>
       )}
       
   </Box>
<Button ref={displycomments} onClick={displycomment}sx={{display:"none"}} ><Typography variant='body1' sx={{color:"#E0AA3E"}}>  ادامه ی نظرات...</Typography></Button>
    </Box>
   
    <Box   sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:3,
    bgcolor:'white',direction:'rtl'}}
    
    >   
    {cartItems.map(i=>
    <Box container sx={{mx:3,py:3,display:'flex',flexDirection:"column",bgcolor:'white',direction:'rtl'}}>
      <Typography  sx={{pl:0.6,py:0,color:"#6e6e6e",fontSize:"16px"}}> اولین نفری باشید که دیدگاهی را ارسال می کنید برای : 
       </Typography>
       <Typography variant='body2' sx={{pt:0.4,color:"#3d3d3d"}}> " {i.title1} "</Typography>
       <Box className='linetinck'></Box>
    </Box>
    )}
         <form  noValidate onSubmit={handlesubmit}>
          <Box sx={{mt:1,mx:3}}>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}>نام <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/></FormLabel>
              <Input
            color="warning"
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                id="firstName"
                label="نام"
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.name}
              </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}> آدرس ایمیل <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/></FormLabel>
              <Input
                color="warning"
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.email}
             </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}><HiveIcon sx={{fontSize:"10px",color:"green"}}/>نقاط قوت   </FormLabel>
              <Input
                color="warning"
            type='text'
                variant="outlined"
                required
               
                defaultValue={null}
                value={advantage}
                onChange={(e)=> setAdvantage(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.advantage}
             </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}><HiveIcon sx={{fontSize:"10px",color:"red"}}/> نقاط ضعف  </FormLabel>
              <Input
               
               color="warning"
            type='text'
                variant="outlined"
                required
                defaultValue={null}
                value={disadvantages}
                onChange={(e)=> setDisadvantages(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               {error.disadvantages}
            
             </Typography>
                <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}> امتیاز شما</FormLabel>
                <Rating
        name="simple-controlled"
        value={score}
        
        onChange={(event, newValue) => {
          setScore(newValue)
          ;
        }}
      />
       <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               {error.score}
              
             </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"12px"}}> دیدگاه شما <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/>  </FormLabel>
            <Textarea
             color="warning"
                 variant="outlined"
                 required
              
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"200px"}}
             ></Textarea>

               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               {error.comment}
              
             </Typography>
           
            

          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",
           borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mt:2,py:0.3,px:6}}
            type="submit"
            
          >
           ثبت
          </Button>
          </Box>
        </form>
        </Box> 

</Box>
</Box>
    <Footer/>
    </>
  );
}







  

   
