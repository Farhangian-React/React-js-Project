import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import './Sheet.css';
import { NavLink } from 'react-router-dom';



export default function SheetDishwasher() {
  return (
    <>
     <Grid container  spacing={2} columns={12} sx={{mx:5,my:1,p:5,borderRadius:'10px'}}> 
        <Grid xs={12} md={6}  sx={{display:{sm:'flex'},flexDirection:"column",justifyContent:'center',my:2}}>
        <Grid xs={12} md={12} 
          sx={{
            display:{xs:"none",sm:"flex"},

            borderRadius:1,
            backgroundImage:'url("https://bosch-home-germany.com/wp-content/uploads/2020/12/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%B8%D8%B1%D9%81%D8%B4%D9%88%DB%8C%DB%8C-%D9%87%D8%A7%DB%8C-%D8%A8%D9%88%D8%B4-%D8%A7%D8%A8%D8%B9%D8%A7%D8%AF-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-%D8%AF%D8%A7%D8%B1%D8%AF.jpg")',
            backgroundPosition: 'center',
            backgroundSize:"cover",
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
               backgroundImage:'url("https://110center.ir/images/articles/ivzmb1kgofq7rc3p9dw2htejy48lsxnu65a.jpg")',
               backgroundPosition: 'center',
               backgroundSize:"cover",
               backgroundRepeat: 'no-repeat',
               height:'250px',
               width:{xs:"250px",sm:"300px",md:"350px"},
               m:2,
              
          }}>
       
        </Grid>
        <Grid  sx={{
          p:2,
          borderRadius:1,
               backgroundImage:'url("https://farahamkadeh.ir/wp-content/uploads/2023/11/12dishwasher-min-1-780x470.png")',
               backgroundPosition: 'center',
               width:{xs:"250px",sm:"300px",md:"350px"},
               backgroundRepeat: 'no-repeat',
               height:'250px',
               backgroundSize:"cover",
               m:2,
          }}>
       
        </Grid>
        </Grid>
        </Grid>
        <Grid container xs={12} md={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",my:2}}>
         <Grid xs={12}>
          <Typography variant="h4" sx={{py:4}}  >
          ماشین ظرف‌شویی
         </Typography>
          <Typography variant="body1" paragraph>
وقتی همه چیز برق میزنه
 </Typography>
 <Typography paragraph variant='body1'>
پای سینک موندن و دونه‌دونه ظرف‌ها رو شستن، 
باعث می‌شه کلی زمان مفید رو از دست بدین یا به جای لذت بردن از دورهمی‌های خانوادگی مدام حواستون به ظرف‌های کثیف باشه! ماشین ظرفشویی‌های اسنوا اینجا هستن تا به نگرانی‌ها و دغدغه‌هاتون پایان بدن! برای انتخاب ماشین ظرفشویی دلخواهتون فقط کافیه سری به سرزمین براق اسنوا بزنین!
</Typography>      
        </Grid>
                  <Grid  xs={12}  sx={{display:{xs:'flex',sm:'flex'},justifyContent:{xs:'center',sm:'center',md:'start'}}}>
       <Button variant='contained' sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'}, fontSize:"18px",color:'#eeeeee',m:3,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>  <NavLink className='link' to={"/shop-dishwasher" }>  مشاهده همه ی ماشین ظرفشویی ها </NavLink></Button>
        </Grid>
        </Grid>
      </Grid>     
    </>
           

  );
}
