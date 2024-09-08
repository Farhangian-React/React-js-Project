import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import './Sheet.css';
import { NavLink } from 'react-router-dom';




export default function SheetWashingMachine() {
  return (
      
    <>
     <Grid container  spacing={2} columns={12} sx={{mx:5,my:1,p:5,borderRadius:'10px'}}> 
     <Grid xs={12} md={6}  sx={{display:{sm:'flex'},flexDirection:"column",justifyContent:'center',my:2}}>
        <Grid xs={12} md={12} 
          sx={{
            display:{xs:"none",sm:"flex"},

            borderRadius:1,
            backgroundImage:'url("https://decokaran.ir/image/cache/outputfiles/products/%D9%8EAshpaz_khane/kabinet/KT104%20(3)-700x700.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:'300px',
           
            m:2,
            
            }}
        >
       
        </Grid>
        <Grid  xs={12} sm={12}  sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row'}
       , justifyContent:"center"}}>
           <Grid  sx={{
               p:2,
               borderRadius:1,
               backgroundImage:'url("https://homeservize.com/blog1/wp-content/uploads/2021/05/washing-machine-and-laundry-storage.jpg")',
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               height:'250px',
               width:{xs:"250px",sm:"300px",md:"350px"},
               m:2,
              
          }}>
       
        </Grid>
        <Grid  sx={{
          p:2,
          borderRadius:1,
               backgroundImage:'url("https://cdn.dsmcdn.com//ty730/product/media/images/20230214/9/280740426/857021368/5/5_org_zoom.jpg")',
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               width:{xs:"250px",sm:"300px",md:"350px"},
               backgroundRepeat: 'no-repeat',
               height:'250px',
             
               m:2,
          }}>
       
        </Grid>
        </Grid>
        </Grid>
       <Grid container xs={12} md={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",my:2}}>
         <Grid xs={12}>
          <Typography variant="h4" sx={{py:4}}  >
            ماشین لباسشویی
         </Typography>
          <Typography variant="body1" paragraph>
          وقتی همه‌چی بوی تمیزی میده
</Typography>
<Typography paragraph>
  با اومدنِ ماشین لباسشویی‌ها، آدما از لباس شستن، دست شستن! دیگه لازم نیست برای شستن لباس ساعت‌ها وقت صرف کنن و بعد منتظر خشک شدنِشون بمونن! با ماشین لباسشویی اسنوا می‌تونین زمانتون رو مدیریت کنین و به کارهای مهم‌تری برسین!
برای انتخاب ماشین لباسشویی دلخواهتون فقط کافیه یه سر به سرزمین پاکیزگی سهیل بزنین!
</Typography>      
        </Grid>
                  <Grid  xs={12}  sx={{display:{xs:'flex',sm:'flex'},justifyContent:{xs:'center',sm:'center',md:'start'}}}>
       <Button variant='contained' sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'}, fontSize:"18px",color:'#eeeeee',m:3,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>  <NavLink className='link' to={"/shop-washing-machine" }>  مشاهده همه ی ماشین لباسشویی ها </NavLink></Button>
        </Grid>
        </Grid>
      </Grid>
 
    </>
  );
}
