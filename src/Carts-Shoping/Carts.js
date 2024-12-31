import  React,{useContext,useState} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box'
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Buttons from './Buttons'; 
import {TableContainer,TableHead,TableRow,TableCell,TableBody, TableFooter, IconButton,} from '@mui/material';
import HorizontalStepper from './HorizontalStepper';
import './Carts.css';
import { PageTitle } from '../Title/PageTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
export default function Carts() {
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
const totalPrice=cartItemsBuy.reduce((prevValue,currValue)=>{
  return Number(prevValue)+ Number(currValue.pricenum)},0);
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
    <Box sx={{my:5,mx:5}} >
      <Typography level='h4' textAlign='start' sx={{ mb: 5,mr:5,color:'#211e60' }}>
       سبد خرید
      </Typography>
      <TableContainer >
      <Table borderAxis="both" sx={{ minWidth: 650,border:'1px solid black' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell align='center' vertical-align='top'>تصویر محصول</TableCell>
            <TableCell align='center' vertical-align='top'>عنوان</TableCell>
            <TableCell align='center' vertical-align='top' >مشخصات</TableCell>
            <TableCell align='center' vertical-align='top' >تعداد  </TableCell>
            <TableCell align='center' vertical-align='top'  >قیمت </TableCell>
            <TableCell align='center' vertical-align='top' > حذف</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cartItemsBuy.map((item) => (
            <TableRow
              key={item.id}
            >
              <TableCell align='center' vertical-align='top'><img src={item.img} width={70} alt=''/></TableCell>
              <TableCell align='center' vertical-align='top'>{item.title1}</TableCell>
              <TableCell align='center' vertical-align='top'>{item.title2}</TableCell>
              <TableCell align='center' vertical-align='top'>{<Buttons i={item}  />}</TableCell>
              <TableCell align='center' vertical-align='top'>{item.pricenum}</TableCell>   
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
        <TableCell></TableCell>
          <TableCell> </TableCell>
          <TableCell align='center' vertical-align='top' sx={{fontSize:'16px',fontWeight:'bold',color:'black'}}>{totalPrice}</TableCell>
        </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',direction:'ltr',mb:5,mx:5}} >
       <IconButton size='small' className='iconbutton' sx={{bgcolor:'#3f51b5',color:'white',borderRadius:'5px',ml:5,px:4}}> ثبت سفارش</IconButton>
       <IconButton size='small' className='iconbutton' sx={{bgcolor:'#3f51b5',color:'white',borderRadius:'5px',mr:5,px:2}}> بازگشت به صفحه اصلی </IconButton>
      </Box>
      <Footer/>
    </>
  )

        }