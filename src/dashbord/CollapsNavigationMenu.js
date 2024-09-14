
import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';
import {CartBuyContext} from '../Shared/Cart-Context';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputBase from '@mui/material/InputBase';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import "./E.css";
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function CollapsNavigationMenu() {



  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
  
  const [data,setData]=useContext(CardData);
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const getData=()=>{
  fetch('http://localhost:3000/Allproducts')
  .then(res => res.json())
  .then((result)=> {
    setData(result);
  },
  (error) => {
    alert('error');
  }
  )
  }
  useEffect( ()=>{
    getData();
  },[])
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = data.filter((user) =>
    user.title1.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  }


  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const opens1 = Boolean(anchorEl1);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens2 = Boolean(anchorEl2);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const opens3 = Boolean(anchorEl3);


  
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
 
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleDrawerOpen1 = () => {
    setOpen1(true);
  };

  const handleDrawerClose1 = () => {
    setOpen1(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
    
    <Grid xs={10} sx={{my:0,py:0,bgcolor:'black', display: 'flex',justifyContent:'start',ml:0,direction:'rtl',alignSelf:"center",}}>
  
    
    
    <IconButton
      
          
      onClick={handleDrawerOpen1}
    
      sx={{ color:' #fff', ml: 0, ...(open1 && { display: 'none' }) }}
    >
      < SearchOutlinedIcon/>
    </IconButton>



    <IconButton
      
          
      onClick={handleDrawerOpen}
    
      sx={{ color:' #FFC412', ml: 0, ...(open && { display: '' }) }}
    >
      <MenuIcon />
    </IconButton>

    <Drawer
        sx={{
          
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
            height:'auto',
           
          },
        }}
        variant="persistent"
        anchor="right"
        open={open1}
      >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around"}}>
          <Grid sx={{width:"100%"}}>
        <InputBase
        sx={{direction:"rtl", ml: 1, flex: 1 ,fontSize:"18px"}}
        type="text"
        placeholder="  به دنبال چه چیزی می گردید؟"
        inputProps={{ 'aria-label': 'جستجوی محصولات سهیل' }}
        value={searchItem}
        onChange={
          handleInputChange
        }
      /></Grid>
           <Grid sx={{width:"100%",direction:"ltr"}}>

            <IconButton onClick={handleDrawerClose1}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
             </Grid>
        </DrawerHeader>
        <Divider />
        <Typography variant='body2'  sx={{mt:2,mr:2,color:"#bbb"}}>نمایش نتایج از</Typography>
        <Typography variant='h6' sx={{mr:2,color:"#393939"}}> بخش محصولات </Typography>
        <Box sx={{bgcolor:"#f1f1f1",display:"flex",flexDirection:"column",justifyContent:"center",flexWrap:'wrap' ,overflow:"auto",mb:30}}>  
{filteredUsers.map((item) => (
    <NavLink to={'/cartsearch'}  className={"linksearch"}>  
   <Grid xs={12} onClick={()=>{
      setCartItems([item]);
      handleDrawerClose1();

     }} sx={{bgcolor:"white",display:"flex",flexDirection:"row",justifyContent:"space-around",m:1,p:1}} >
    <Grid xs={4} sx={{alignSelf:"center"}} >
    <img src={item.img} width={120}/>
    </Grid>
        <Grid xs={4} sx={{alignSelf:"center"}}>
            <Typography  sx={{fontSize:"14px"}}>
            {item.title1}
            </Typography>
        </Grid>
        <Grid xs={4} sx={{direction:"rtl",direction:"flex",flexDirection:"column",alignSelf:"center",mr:1}}>

            <Typography  sx={{mt:1,fontSize:"12px",textAlign:"center",alignSelf:"center",color:"#E0AA3E"}}>{item.pricenum} تومان</Typography>
        </Grid>
    </Grid>
    </NavLink>
))}
  </Box>
  
          
       
       
      </Drawer>







       
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            height:'100vh',
           
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>
            <Grid sx={{width:"100%"}}>
           <Typography
     variant="h5"
     noWrap
     component="a"
     href="/"
     sx={{
       mr:0 ,
       mt:1,
       display: 'flex',
       flexGrow: 0,
       fontFamily: 'monospace',
       fontWeight: 300,
       fontStyle:'italic',
       letterSpacing: '.1rem',
       color: 'white',
       textDecoration: 'none',
       direction:"rtl"
     }}
   >
     SOHIL
   </Typography>
           </Grid>
           <Grid sx={{width:"100%",direction:"ltr"}}>

            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
             </Grid>
        </DrawerHeader>
        <Divider />
        <List 
        sx={{fontSize:"18px",color:"#515151",width:"130px"}}
        >
            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
              <Grid sx={{width:"100%"}}><ListItemButton sx={{fontSize:"16px"}}
               onClick={handleClick1}
               >
               محصولات
              </ListItemButton>
              </Grid>
              <Grid sx={{width:"100%"}}>
              <KeyboardArrowDownIcon  onClick={handleClick1}/></Grid>
              <Menu
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'220px' } ,direction:'rtl'
            }
          }
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
       
        }}
        anchorEl={anchorEl1}
        open={opens1}
        onClose={handleClose1}
  
      >
        <MenuItem onClick={handleClose1} disableRipple>
        
        <NavLink  onClick={handleClose1} className='navlink' to={'/allrefriderators' } >یخچال و فریزر</NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple ><NavLink className='navlink' to={'/shop-washing-machine' }  >
          ماشین لباسشویی
       </NavLink> </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink'  to={'/shop-dishwasher'}>
          ماشین ظرفشویی
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink' to={'/allgas'}>
           پخت و پز
        </NavLink></MenuItem>
      
      </Menu>
            </ListItem>
            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
              <Grid sx={{width:"100%"}}><ListItemButton sx={{fontSize:"16px"}}
               onClick={handleClick2}
               >
               جشنواره ها
              </ListItemButton>
              </Grid>
              <Grid sx={{width:"100%"}}>
              <KeyboardArrowDownIcon  onClick={handleClick2}/></Grid>
              <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl2}
        open={opens2}
        onClose={handleClose2}
        sx={
          { mt: "1px", "& .MuiMenu-paper": 
            { backgroundColor: '#fff',width:'220px' } ,direction:'rtl'
          }
        }
      >
        <MenuItem onClick={handleClose2} disableRipple>
        <NavLink className='navlink'> جشنواره های تابستانه 1402 </NavLink>
          
        </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple><NavLink className='navlink'>
        
           طرح فروش اقساطی
       </NavLink> </MenuItem>
        <MenuItem onClick={handleClose2} disableRipple><NavLink className='navlink'>
       
           جشنواره های زمستانه 1402
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose2} disableRipple><NavLink className='navlink'>
       
           فعال سازی کارت تخفیف
        </NavLink></MenuItem>
      </Menu>
            </ListItem>
            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
              <Grid sx={{width:"100%"}}><ListItemButton sx={{fontSize:"16px"}}
               onClick={handleClick3}
               >
               خدمات
              </ListItemButton>
              </Grid>
              <Grid sx={{width:"100%"}}>
              <KeyboardArrowDownIcon  onClick={handleClick3}/></Grid>
              <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl3}
        open={opens3}
        onClose={handleClose3}
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'220px' } ,direction:'rtl'
            }
          }
      >
        <MenuItem onClick={handleClose3} disableRipple>
        <NavLink className='navlink'>    درخواست نصب و تعمیر </NavLink>
          
        </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink'>
        
             خدمات پس از فروش
       </NavLink> </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink'>
       
              انتخاب الکترونیک
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink'>
       
             فرم تماس با ما 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink'>
       
          سوالات متداول 
  </NavLink></MenuItem>
      </Menu>
            </ListItem>
            
            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            
            </ListItem>
            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
             
             </ListItem>

            <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            <Grid sx={{width:"100%"}}>
            <ListItemButton  >
              <NavLink className='navlinkcoll' sx={{fontSize:"16px"}} to={'/shop-dishwasher'}>
              فروشگاه ها
           </NavLink> </ListItemButton>
           </Grid>
           <Grid sx={{width:"100%"}}>
             </Grid>
           </ListItem>
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            <Grid sx={{width:"100%"}}>
            <ListItemButton >
              <NavLink className='navlinkcoll' to={"/about-snova"}>
               چرا سهیل
           </NavLink> </ListItemButton>
           </Grid>
           <Grid sx={{width:"100%"}}>
             </Grid>
           </ListItem>
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            <Grid sx={{width:"100%"}}>
            <ListItemButton >
              <NavLink className='navlinkcoll' to={"/about-snova"}>سبک زندگی
           </NavLink> </ListItemButton>
           </Grid>
           <Grid sx={{width:"100%"}}>
             </Grid>
           </ListItem>
            
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            
           </ListItem>
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            
            </ListItem>
        </List>
        <Divider  />
    <NavLink to={'/login'}>
           <PermIdentityOutlinedIcon  sx={{mt:3,mr:22,fontSize:'35px',color:'black'}} />
        </NavLink>
          
       
       
      </Drawer>
   </Grid>
    </>
  );
}
