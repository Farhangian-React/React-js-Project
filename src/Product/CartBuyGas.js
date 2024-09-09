import * as React from 'react';
import  {useContext,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {CartBuyContext, CartContext} from '../Shared/Cart-Context';
import { Grid,Typography,Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/joy/Tooltip';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink,Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
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
import './CartBuy.css';
const drawerWidth = 400;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CartBuyGas() {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [layout, setLayout] = React.useState(undefined);
  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
  const [image,setImage]=useState(cartItems.map(i=>i.img));
const [index, setIndex] = React.useState(null);
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

  <Box container sx={{height:"100 vh",display:'flex',flexDirection:{xs:'column',md:'row'},bgcolor:'white',mx:5,mt:3,mb:5,borderRadius:'10px',direction:'rtl'}}>
    



  <Grid container  xs={12}  md={6}  sx={{mt:{xs:8,md:1}}} >
         {cartItems.map(i=> 
         <Grid  xs={12} md={12} sx={{display:'flex', flexDirection:'column',justifyContent:'center',bgcolor:'#f1f1f1'}} > 
          <Box sx={{px:5,mt:1,mb:3,width:'15%',height:'20px'}}>
          <img src={i.berand} width={'90%'}/>
          </Box>
           <Typography variant="h6" sx={{px:5,mb:3,mt:0,textAlign:'right'}}  >
        {i.title1}
         </Typography>
         <Typography variant="h5" sx={{px:5,mb:5,color:'gray',textAlign:'right'}}  >
       {i.title2}
         </Typography>
         <Typography variant="body2" sx={{px:5,color:'black',textAlign:'right'}}>
     {i.title3}
         </Typography>
         <Box sx={{display:'flex',flexDirection:'row',justifyContent:'start'}}>
          <Typography variant='h6' sx={{px:5,mt:2,textAlign:'right'}}>قیمت :</Typography>
           <Typography variant="h5" sx={{color:'gray',px:5,mt:2,textAlign:'right'}}  >
            
          {  i.price}
           </Typography>
           </Box>

         <Button size='medium'  color='secondary'  onClick={()=>
          addToCart(i)
        }
        sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mx:8, my:1,py:0,px:8}}
        > 
         افزودن به سبد خرید  </Button>
         <Drawer
        sx={{
          position:"absolute",
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            height:'100vh'
           
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around",backgroundImage:"#f2f2f2"}}>
        <Grid sx={{display:"flex",flexDirection:"row",justifyContent:"start",width:"100%"}}>
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
</Grid>
           <Grid sx={{width:"100%",direction:"ltr"}}>

            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
             </Grid>
        </DrawerHeader>
        <Divider />
        <CartModal/>
        </Drawer>
         <Grid sx={{display:'flex',justifyContent:'center',pb:{xs:5,lg:1}}}>
         <InfoIcon sx={{mt:0,pr:1.5,fontSize:'18px',color:'#4b4f4f'}}/>
         <Typography variant='body2' sx={{direction:'rtl',pl:5,pr:1,color:'#333637'}}> درخواست مرجوع کردن کالا در گروه یخچال و فریزر با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد 
          (در صورت پلمپ بودن، کالا نباید باز شده باشد).</Typography>
          </Grid>
          
        <Grid sx={{m:3, display:'flex',justifyContent:'center'}}>
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
         
          </Grid>
           </Grid>
         )}
      </Grid>
       
       <Grid  xs={12} sm={8} lg={6} sx={{mt:{xs:5,md:1}, mx:1,display:'flex',flexDirection:{xs:"column",md:"row"},justifyContent:'center',direction:'rtl'}} >
       <Grid  xs={4} md={4} lg={4}  sx={{mx:{xs:0,md:2},mt:{xs:2,md:4},display:'flex',alignItems:'center',justifyContent:'center'}} >
             {cartItems.map(i=> 
        <img  src={image}  width={'100%'} height={'100%'} /> 
        )}
        </Grid>
      
       < Grid xs={2} md={2}  sx={{pt:4,m:0,display:'flex',flexDirection:{xs:"row",md:"column"},justifyContent:'center'}} >
       <Grid  xs={4} md={3} sx={{ p:0,display:'flex',alignItems:'center',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100px'} height={'100px'}/></Link>)} </Grid>
       <Grid xs={4} md={3} sx={{p:0,display:'flex',alignItems:'center',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1}  width={'100px'} height={'100px'}/></Link>)} </Grid> 
      <Grid xs={4} md={3} sx={{p:0,display:'flex',alignItems:'center',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}   width={'100px'} height={'100px'}/></Link>)} </ Grid> 
     
      <Box className='boximage'>
         <Button  onClick={() => {
            setLayout('center');
          }} sx={{color:'black',mt:{xs:2,md:2}}}><Typography variant='h6' sx={{textAlign:'center',fontWeight:'800'}}>...</Typography></Button>





<Modal   open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} sx={{display:"flex",flexWrap:"wrap",overflow:"auto"}}>
          <ModalClose  sx={{color:"red"}} />
          {cartItems.map(i=><Typography variant='body1' sx={{mt:4,direction:'rtl'}}>{i.title1} </Typography>
          
          )}
        {cartItems.map(i=><Typography variant='h5' sx={{color:'black',mt:2,mb:4,direction:'rtl'}}>مدل: {i.title2} </Typography>)}
          <Box  sx={{width:'100%',height:'100 vh',direction:{xs:'rtl',md:'ltr'}, display:'flex',flexDirection:{xs:"column",lg:"row"},justifyContent:'center',bgcolor:'#fff'}}>
        <Grid sx={{mx:{xs:2,md:2},mt:{xs:2,lg:1},display:'flex',justifyContent:'center'}} >
             {cartItems.map(i=> 
        <img  src={image} width={'100%'}   /> 
        )}
        </Grid>
     
       < Grid
        container
        spacing={0}
       
    
      >
       <Grid  xs={4} md={4} sx={{alignItems:'center',display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'} height={'100 vh'}/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'}/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'} height={'100 vh'}/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'}  height={'100 vh'}/></Link>)}</Grid> 
       <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'}/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'}/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'}/></Link>)} </ Grid> 
      <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'}/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'}/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'}/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'}/></Link>)}</Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'}/></Link>)}</Grid> 
       </Grid>
        </Box>
        
         
        </ModalDialog>
      </Modal>

      </Box>
      
       
        </Grid>
       
          
        </Grid> 
       
       
     
</Box>

  

<Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:1,mt:1,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid container
           justifyContent={'start'}
        
       rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
       margin={0}
       sx={{display:'flex',flexDirection:'column'}}
       >
       
      <Accordion sx={{ml:{xs:5}}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
          
        }}
      >
        <AccordionSummary   sx={{color:"white",fontSize:'22px',  backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}   expandIcon={<AddIcon />}> مشخصات اصلی</AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5}}}>
          <Box  sx={{display:'flex'}}>
          <Grid xs={12} md={4} >
             {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>مدل : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fs}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>عمق : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fd}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>عرض :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fw}   </Typography>
            </ListItem>
            <ListItem role="none">
           
           <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}> ارتفاع : </Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fh}</Typography>
         
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>قابلیت اتصال به اینترنت : </Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.FWifi}   </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>نوع احتراق :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.IgnitionType}   </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>تعداد شعله :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.NumBurn}   </Typography>
         </ListItem>
          </List>
            )}
        </Grid>
        <Grid xs={12} md={4} >
        {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600',}}>نوع شعله :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.BurnType}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>دوگانه سوز :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.DualFuel}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>حالت گواهی :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.ProofMode } </Typography>
            </ListItem>
            <ListItem role="none">
           
           <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600',}}>حالت سبت :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.SabbathMode}</Typography>
         
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>قابلیت خود تمیزی :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.SelfClean}   </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>کشوی ذخیره :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.StorageDrawer } </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>کشوی گرم کردن :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.WarmingDrawer } </Typography>
         </ListItem>
          </List>
            )}
        </Grid>
        <Grid xs={12} md={4} >
    
        {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>توری پیوسته :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.ContinuosGrate}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>کوره ی همرفت :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.ConvectionOven}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>پیش نویس پایین :</Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.DownDraft}   </Typography>
            </ListItem>
            <ListItem role="none">
           
           <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>ظرفیت فر اول :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.FOC}</Typography>
         
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>ظرفیت مایکروویو :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Mc}   </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>توان مایکروویو :</Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.MW}   </Typography>
         </ListItem>
         <ListItem role="none">
         <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}></Typography>
           <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}></Typography>
         </ListItem>
          </List>
            )}
        </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ml:{xs:5}}}
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary   sx={{color:"white",fontSize:'22px',  backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}   expandIcon={<AddIcon />}>ویژگی ها و امکانات</AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5}}}> {cartItems.map(i=>
          <Box  sx={{ml:{xs:3},display:'flex',flexWrap:'wrap',justifyContent:'center'}}>  
          {i.Prop.map(j=>
             <Grid xs={6} md={3} sx={{display:"flex",justifyContent:"center",alignSelf:"center",px:1}}>  
           <List
               aria-label="Products"
               variant="outlined"
               orientation='vertical'
               sx={{mt: 2,mb:0,border:'none',alignItems:'start',height:"480px"
               }} 
             >
               <ListItem role="none" >
              <img src={j.Fimg} width={250} height={250}/> 
               </ListItem>
               <ListItem role="none">
               <Typography sx={{mt:0,fontSize:{xs:'16px',md:'20px'},fontWeight:'600'}}>{j. Ftitle1} </Typography>
               </ListItem>
               <ListItem role="none">
                 <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}> {j. Ftitle2}  </Typography>
               </ListItem>
             </List>
           </Grid>
          )}
             </Box>  )}
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ml:{xs:5}}}
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary  sx={{color:"white",fontSize:'22px',  backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)"}}   expandIcon={<AddIcon />}> مشخصات بیشتر</AccordionSummary>
        <AccordionDetails>
        <Grid  >
        
        </Grid>
        </AccordionDetails>
      </Accordion>
   
        </Grid>
</Box>
 
    <Footer/>
    </>
  );
}







  

   
