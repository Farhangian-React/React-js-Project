import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Sheet.css';
export default function SheetGas() {
  return (
    <>      
        <Grid container  spacing={2} columns={12} sx={{mx:5,my:1,p:5,borderRadius:'10px',bgcolor:"#eeeeee"}}> 
       <Grid container xs={12} md={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column",my:2}}>
         <Grid xs={12}>
          <Typography variant="h4" sx={{py:4}}  >
         اجاق گاز
         </Typography>
          <Typography variant="body1" paragraph>
 وقتی همه‌چی جذاب و پرحرارته
</Typography>
<Typography paragraph>

اجاق‌گازها از قدیم تا همین امروز، پای ثابت آشپزی و پخت‌وپز بودن! اجاق‌گازهای اسنوا یه قدم جلوتر اومدن و قراره کارهایی رو از طرف شما انجام بدن تا دیگه لازم نباشه زمان زیادی پای اجاق گاز بمونین!
برای انتخاب اجاق گاز دلخواهتون فقط کافیه یه سر به سرزمین پرحرارت اجاق‌گازها اسنوا بزنین.
</Typography>      
        </Grid>
                  <Grid  xs={12}  sx={{display:{xs:'flex',sm:'flex'},justifyContent:{xs:'center',sm:'center',md:'start'}}}>
       <Button variant='contained'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'}, fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',m:3,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>  <NavLink className='link' to={"/allgas" }>  مشاهده همه ی اجاق گازها </NavLink></Button>
        </Grid>
        </Grid>
        <Grid xs={12} md={6}  sx={{display:{sm:'flex'},flexDirection:"column",justifyContent:'center',my:2}}>
        <Grid xs={12} md={12} 
          sx={{
            display:{xs:"none",sm:"flex"},

            borderRadius:1,
            backgroundImage:'url("https://www.mountainhighappliance.com/uploads/banner/cooking-hero.jpg")',
            backgroundPosition: 'center',
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
               backgroundImage:'url("https://20ojagh.ir/wp-content/uploads/2020/05/%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D8%A7%D8%B2-%D8%B1%D9%88%D9%85%DB%8C%D8%B2%DB%8C-%D8%A7%D8%B1%D8%B2%D8%A7%D9%86-%D9%82%DB%8C%D9%85%D8%AA-%D8%AF%D8%B1-%D8%A2%D8%B4%D9%BE%D8%B2%D8%AE%D8%A7%D9%86%D9%87.jpg")',
               backgroundPosition: 'center',
            
               backgroundRepeat: 'no-repeat',
               height:'250px',
               width:{xs:"250px",sm:"300px",md:"350px"},
               m:2,
              
          }}>
       
        </Grid>
        <Grid  sx={{
          p:2,
          borderRadius:1,
               backgroundImage:'url("https://milancoshop.com/site/uploader/post/Gas-Hob-in-Kitchen-1774.jpg")',
               backgroundPosition: 'center',
               width:{xs:"250px",sm:"300px",md:"350px"},
               backgroundRepeat: 'no-repeat',
               height:'250px',
             
               m:2,
          }}>
       
        </Grid>
        </Grid>
        </Grid>
    
       
       
      </Grid>
    </>
    
           

  );
}
