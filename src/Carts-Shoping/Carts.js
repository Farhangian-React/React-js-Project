import  React,{useContext,useState,useEffect} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box'
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Buttons from './Buttons'; 
import {TableContainer,TableHead,TableRow,TableCell,TableBody, TableFooter,} from '@mui/material';
import HorizontalStepper from './HorizontalStepper';
import './Carts.css';
import { PageTitle } from '../Title/PageTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
export default function Carts() {
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
  const addCommas=(nStr)=>{
    console.log(setCartItemsBuy(cartItemsBuy));
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
  useEffect(()=>{ 
    const uniqueArray = cartItemsBuy.filter((obj, index, self) =>
    index === self.findIndex((t) => (
      t.id === obj.id && t.title1 === obj.title1
    ))
  );
  setCartItemsBuy(uniqueArray);
  
  console.log(cartItemsBuy);
  },[])
  {/*
let numbers = [1, 2, 3];

let sum = numbers.reduce(function (previousValue, currentValue) {

return previousValue + currentValue;
const totalPrice=cartItemsBuy.reduce
((prevValue,currValue)=>{
  return Number(prevValue.pricenum)+ Number(currValue.pricenum)},0);
});
*/}
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
 
  const totalPrice=addCommas(convertToPersian(cartItemsBuy.reduce((sum,li)=>sum+Number( convertToEnglish(li.pricenum1)-(convertToEnglish(li.pricenum1)*li.off / 100)),0)+""));


  const deletList=(e)=>{
      setCartItemsBuy([...cartItemsBuy.filter(q=>q.id !==e.id)])
    }
const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <PageTitle title='سبد خرید  ' description=' سبد خرید   '/>
   <TopNav/>
<Box sx={{mt:15,mx:5}}>
   <HorizontalStepper/>
</Box>
    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",my:5,mx:5}} >
    <Box  sx={{boxShadow:"10px 10px 10px #64b3f4 ",display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}>
      <Typography  textAlign='center' sx={{ fontSize:"24px",fontWeight:600,mb:1,color:'#211e60' }}>
       سبد خرید
      </Typography>
      </Box>
      <TableContainer sx={{alignSelf:"center",alignItems:"center",textAlign:"center"}} >
      <Table borderAxis="both" sx={{ m:"auto",minWidth:450,border:'1px solid black' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{textAlign:"center",m:"auto"}} >
            <TableCell  align='center'>تصویر محصول</TableCell>
            <TableCell align='center' >عنوان</TableCell>
            <TableCell align='center'  >تعداد  </TableCell>
            <TableCell align='center'   >قیمت </TableCell>
            <TableCell align='center'  > حذف</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cartItemsBuy.map((item) => (
            <TableRow
              key={item.id}
            >
              <TableCell align='center' vertical-align='top'><img src={item.img} width={100} alt=''/></TableCell>
              <TableCell align='center' vertical-align='top'>{item.title1}</TableCell>
              <TableCell align='center' vertical-align='top'>{<Buttons t={item}  />}</TableCell>
              <TableCell align='center' vertical-align='top'>{addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))}</TableCell>   
              <TableCell align='center' vertical-align='top'><DeleteOutlinedIcon  sx={{mr:2,color:'black'}} onClick={handleClickOpen}/>  
            <Dialog
             
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  id="alert-dialog-title" sx={{direction:'rtl'}}>
          {"حذف محصول"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          آیا از حذف این محصول از سبد خرید خود مطمین هستید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button   size='small' sx={{'&:hover': {backgroundColor:'#ffebee'},p:0,border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',color:'black',}} onClick={handleClose}>لغو</Button>
          <Button  size='small'  sx={{ '&:hover': {backgroundColor:'#f44336'},p:0,borderRadius:'15px',backgroundColor:'#d50000',color:'white'}}  onClick={()=>deletList(item)} autoFocus>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
           <TableCell align='center' vertical-align='top' sx={{fontSize:'18px',fontWeight:'bold',color:'black'}} >جمع کل قیمت:</TableCell>
          <TableCell></TableCell>
        <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell align='center' vertical-align='top' sx={{fontSize:'16px',fontWeight:'bold',color:'black'}}>{totalPrice} تومان </TableCell>
        </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',direction:'ltr',mb:5,mx:5}} >
      <NavLink to={'/buybasket'}  className="linkss"><Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
        backgroundImage:"linear-gradient(to right ,#64b3f4,#282828)",
       color:'white',borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",mx:6,px:1,mb:2,width:"80%"}}> ثبت سفارش</Button></NavLink>
        <NavLink to={'/'}  className="linkss">  <Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
        color:'white'},backgroundImage:"linear-gradient(to right ,#64b3f4,#282828)",color:'white',
        borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",mx:6,px:1,mb:2,width:"80%"}}> بازگشت به صفحه اصلی </Button></NavLink>
      </Box>
      <Footer/>
    </>
  )

        }