import React, { useState,useEffect,useRef } from 'react';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import './Products.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from 'react-router-dom';
import SlideOffProducts from "./SlideOffProducts";
import { Button, Typography } from '@mui/material';
function Products() {


  const refbox1=useRef();
  const refbox2=useRef();
  const refbox3=useRef();
  const refbox4=useRef();
 const refbutton1=useRef();
 const refbutton2=useRef();
 const refbutton3=useRef();
 const refbutton4=useRef();
 const bagbox1=useRef();
 const tinybox1=useRef();
 const bagbox2=useRef();
 const tinybox2=useRef();
 const bagbox3=useRef();
 const tinybox3=useRef();
 const bagbox4=useRef();
 const tinybox4=useRef();
 
  const addstyle1=()=>{
    refbox1.current.className="cc";
    refbutton1.current.className="refbutton";
    bagbox1.current.className="bagbox";
    tinybox1.current.className="tinybox";
   
  }
  const addstyle2=()=>{
    refbox2.current.className="cc";
    refbutton2.current.className="refbutton";
    bagbox2.current.className="bagbox";
    tinybox2.current.className="tinybox";
  }
  const addstyle3=()=>{
    refbox3.current.className="cc";
    refbutton3.current.className="refbutton";
    bagbox3.current.className="bagbox";
    tinybox3.current.className="tinybox";
  }
  const addstyle4=()=>{
    refbox4.current.className="cc";
    refbutton4.current.className="refbutton";
    bagbox4.current.className="bagbox";
    tinybox4.current.className="tinybox";
  }
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return 'https://www.bleeckerkitchen.com/wp-content/uploads/2022/01/Electric-Tools-you-need-in-your-Kitchen.jpg';
            case 2: return 'https://m.media-amazon.com/images/I/81FQCyxhuKS._AC_UF894,1000_QL80_.jpg';
            case 3: return 'https://assets.telkitchens.co.uk/srcane/uploads/2021/09/07060057/How-do-modern-kitchen-appliances-make-cooking-easier-and-ease-manual-work.jpg';
            case 4: return 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/06292022/rs28a5f61sr/RS28A5F61SR_03_Silver_SCOM.jpg?$product-details-jpg$';
            default: return null;
          }
       
        }; 
        const returnType1=()=>{
          switch(type){
            case 1: return "فصل پر جایزه";
            case 2: return "انتخاب به جا";
            case 3: return "فرصت های بر آب رفته";
            case 4: return 'اعتبار شیرین ۱۰۰ میلیون تومانی';
            default: return null;
          }
       
        };
        const returnType2=()=>{
          switch(type){
            case 1: return "هدیه ی خرید برای همه تا سقف ۱۰ میلیون تومان در جشنواره های پاییزه ی سهیل";
            case 2: return 'اجاق گاز ۴ شعله ی سهیل با فضای کمتر و پخت بهتر';
            case 3: return "به جای ظرف شستن  برای هنر وقت بزارید";
            case 4: return 'تخیف های باور نکردنی و ویژه';
            default: return null;
          }
       
        };
        const returnType3=()=>{
          switch(type){
            case 1: return 'جشنواره های زمستانه' ;
            case 2: return 'اطلاعات بیشتر';
            case 3: return 'ماشین ظرفشویی سری Moment';
            case 4: return 'کلیک کنید';
            default: return null;
          }
       
        };
        const returnType4=()=>{
          switch(type){
            case 1: return '/jashnehtabestane' ;
            case 2: return '/shop-ranges';
            case 3: return '/shop-dishwasher';
            case 4: return '/ProductOff';
            default: return null;
          }
       
        };
  return (
    <>
    <PageTitle title=' وب سایت لوازم خانگی سهیل' description=' سهیل '/>
    <TopNav />

    <div className='flex flex-col bg-zinc-200' >

    <div className='w-full h-auto flex justify-center  bg-cover bg-center bg-no-repeat '
    style={{backgroundImage:`url(${returnPhotoURL()})`}}
     >
         

       
         <div className=' bg-black bg-opacity-70 lg:bg-opacity-90 w-[80vw] lg:w-[50vw] h-[250px] mt-52 lg:mt-24 mb-20 mx-5 '>
          <p className='flex flex-col justify-between border-r-4 border-white mt-5 mr-8 pr-2 py-6 text-white text-right' >
             <p className='text-2xl text-white my-1.5 px-2'> {returnType1()}</p>

            <p className='text-yellow-100 mt-1 text-lg px-2'  > {returnType2()}</p>
             <NavLink className='navbanner'  to={returnType4()}>
               <p className='text-sm text-yellow-500 mt-1.5 px-2'   >
           {returnType3()}
          </p></NavLink>
         
          </p>
        
         </div>
      </div>
     
    




    <div className="logos w-full h-[120px] flex justify-between relative bg-white whitespace-nowrap pt-2 overflow-hidden ">
<div  className='logos-slide' >
<NavLink to={"/samsungbrand" }> <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' /></NavLink>
</div>
<div  className='logos-slide' >

<NavLink to={'/whirlpoolbrand'}><img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' /></NavLink>

</div>
<div  className='logos-slide' >
  <NavLink to={"/lgbrand"}><img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png" alt='' /></NavLink>
</div>
<div  className='logos-slide' >


<NavLink to={'/bushbrands'}><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png" alt='' /></NavLink>
</div>

</div>
    
      
    <div ref={bagbox1}
className='flex flex-col lg:flex-row w-[100vw] p-5 my-5 mx-auto '
   > 
       <div ref={tinybox1} className='flex justify-center flex-col my-5 w-[100vw] lg:w-[50vw] mx-auto px-6'>
       <div ref={refbox1} className='h-[290px] mx-auto px-5 overflow-hidden' >
          <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
          یخچال و فریزر، ضروری در هر آشپزخانه
         </p>
         <p className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         امروزه یکی از کالاهای اساسی که در آشپزخانه‌ها مشاهده می‌شود و هم‌چنین دغدغه‌ی تازه‌عروس‌ها برای جهیزیه‌شان هم نیز است، انتخاب یخچال و فریزر با دوام و با قیمت مناسب است. ما شما را در این مطلب با انواع یخچال و فریزر و مزیت‌های هر کدام آشنا می‌کنیم.
         </p>
         <p  className='text-black py-3 text-start font-bold text-3xl md:text-2xl'>
         یخچال فریزر تک درب 
         </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans' >
          این یخچال‌ها به دلیل کوچک بودنشان، فضای کمی را می‌گیرند و به طبع، قیمت کمتری نیز دارند. این نوع از یخچال و فریزر مناسب برای ادارات، هتل‌ها و میهمان‌خانه‌ها و فروشگاه‌ها است.
         </p>
         <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         یخچال فریزر مدل فریزر بالا یا فریزر پایین
         </p>
         <p className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         در این نوع از یخچال و فریزر از آن جایی که از اسمشان پیداست، بدنه به دو قسمت تقسیم شده و یا یخچال بالا قرار دارد و یا پایین. این نوع از یخچال فریزر جای کمتری می‌گیرند و اغلب یا قسمت یخچال بزرگ‌تر است و یا یخچال و فریزر به یک اندازه‌اند. خانواده‌ها بر حسب نیازشان، این نوع از یخچال فریزر را انتخاب می‌کنند.
          </p>
         <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         یخچال فریزر دو قلو
         </p>
         <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         این نوع از یخچال فریزر هنوز هم طرفداران خاص خودش را دارد. در این نوع، یخچال و فریزر از یکدیگر جدایند ولی کنار هم قرار گرفته و مکمل هم می‌شوند، پس یخچال و فریزر دقیقا اندازه و قرینه‌ی هم‌اند؛ هر چند که می‌توان آن‌ها را در دو جای مختلف و جدا از هم نیز قرار داد. این نوع از یخچال و فریزر، برای خانواده‌های با جمعیت بالا توصیه می‌شود، زیرا در کنار هم حجم زیادی دارند، ولی یکی از مزیت‌های آن امکان جدا کردن و جابجایی آسانشان به ویژه در آپارتمان‌ها است.
          </p>
         <p  className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
         یخچال فریزر ساید بای ساید 
         </p>
         <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         یخچال فریزر ساید بای ساید یا به اختصار ساید را برخی در زمره‌ی یخچال فریزرهای دوقلو می‌دانند؛ ولی ساید یک تفاوت اساسی با نوع دوقلو دارد، آن هم این که نمی‌توان یخچال و فریزر را از هم جدا کرد و این دو قسمت بهم چسبیده‌اند، پس مکان بیشتری را اشغال می‌کنند. این نوع از یخچال و فریزر، پرطرفدارترین نوع‌اند، هم به خاطر زیبایی و هم به خاطر جا دار بودن و امکاناتی مثل یخ‌ساز و آب‌سردکن‌هایی که بر روی در آن‌ها قرار می‌گیرد. بهترین سایز برای یخچال فریزر ساید را می‌توان 25 تا 27 فوت دانست، زیرا برای آپارتمان‌هایی با فضای متوسط و حتی بزرگ‌تر بسیار مناسب است. 
          </p>
         <p   className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
         یخچال فریزر در فرانسوی
         </p>
         <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
          
این نوع از یخچال‌فریزرها بسیار مورد اقبال قرار گرفته‌اند. مهم‌ترین دلایل آن هم جاداری بسیار و هم‌چنین شکیل یا لاکچری بودن آن است. در این نوع از یخچال و فریزر، یخچال و فریزر یک تکه بوده ولی از یکدیگر با درب‌هایی جدا می‌شوند. برخی از مدل‌های آن دارای فریزر کشویی در قسمت پایین است و برخی دیگر نیز دو در بالا برای یخچال و دو در پایین برای فریزر دارند. این نوع از یخچال و فریزر را بیشتر به خانواده‌هایی که جمعیت بالا و هم‌چنین فضای نسبتا بزرگی در آشپزخانه دارند، توصیه می‌شود. 

یخچال فریزرها بر حسب ساده بودن یا امکانات متعدد داشتن، فوت و اندازه‌ی یخچال، برند و کارخانه‌ی تولیدی و ایرانی و خارجی بودنشان، دارای قیمت‌های متفاوت‌اند. برخی از یخچال‌فریزرها ساده‌اند، یعنی امکانات متعددی ندارند و فقط همان کاربرد اصلی یخچال و فریزر یعنی سرمایش مواد خوراکی را بر عهده‌دارند که مسلما قیمت ارزان‌تری نسبت به انواع لاکچری و پرکاربردشان دارند. اندازه و سایز هم در خرید قسطی یخچال فریزر مناسب برای خانواده‌ها حایز اهمیت است. اندازه‌ی آن‌ها از 12 فوت گرفته تا 36 فوت‌اند که خانواده ها متناسب با فضای خانه‌ی‌شان، جمعیتشان و از همه مهم‌تر توانایی مالی‌شان می‌توانند هر کدام را که تمایل دارند، خریداری کنند. 

در کشور ما کارخانه‌های تولید یخچال و فریزر وجود دارند که کالاهای با کیفیتی می‌سازند و به نسبت مدل خارجی‌شان به صرفه ترند. مشهورترین برندهای ایرانی شامل یخچال و فریزر اسنوا، امرسان، پارس، الکترواستیل، هیمالیا اند. معروف‌ترین برندهای خارجی یخچال که در ایران هم نمایندگی دارند، شامل: جنرال آمریکایی، ال جی، سامسونگ، هاینس و... اند. گران‌ترین  برند، یخچال و فریزر سامسونگ است که قیمت این برند معمولا بیشتر از سایر یخچال‌ها و فریزرها است. 
          </p>
          <p  className='text-black py-3 text-start font-bold text-3xl md:text-2xl'>
      خرید آنلاین انواع یخچال و فریزر از سهیل 
          </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
          شما می‌توانید انواع برند یخچال فریزر های معتبر و معروف خارجی مانند 
            یخچال دوقلوی سامسونگ 
          و حتی فریزر تک LG و فریزر تک امرسان و یا جدید ترین مدل یخچال ساید و انواع دیگر یخچال را 
          از سایت  سهیل خریداری کنید و نهایت رضایت و اطمینان را از خرید خود داشته باشید. 
          </p>

        </div>
         <button ref={refbutton1} onClick={addstyle1}
          className='text-md text-yellow-500 bg-white self-start my-3 mx-12 hover:bg-white hover:text-yellow-900'
>   ادامه ی مطلب... </button>
                  <div  sx={{display:"flex",justifyContent:"start"}}>
                    <NavLink style={{ textDecoration: "none" }} to={"/allrefriderators" }>
       <button className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-5 mx-8 px-5 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
        > 
        مشاهده همه ی یخچال و فریزرها </button></NavLink>
        </div>
        </div>



        <div data-aos="flip-left"
          className='washimg flex w-[90%] h-[400px] my-8  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:'url("https://images.webfronts.com/cache/meyeeahbfvwe.jpg?imgeng=/w_800/h_800/m_letterbox_ffffff_100")'
          }} 
       
        >
        </div>
        </div>





        <div ref={bagbox2}
className='flex flex-col lg:flex-row w-[100vw] p-5 my-5 mx-auto '
   > 
       <div ref={tinybox2} className='flex justify-center flex-col my-5 w-[100vw] lg:w-[50vw] mx-auto px-6'>
       <div ref={refbox2} className='h-[290px] mx-auto px-5 overflow-hidden' >
          <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl'>
       ماشین لباسشویی
         </p>
         <p   className='text-justify text-xl md:text-md text-gray-500 font-sans'>
         یکی مهمترین وسایل هر خانه‌ای ماشین لباسشویی است. ماشین لباسشویی‌های امروزی نقش پر رنگی در برآورده کردن یکی از اصلی‌ترین نیازهای زندگی روزمره ما یعنی نظافت، بازی می‌کنند، به همین دلیل به سرعت در حال پیشرفت هستند. ماشین‌های لباسشویی‌ جدید با کمترین مصرف انرژی بیشترین بازدهی را دارند. شما می‌توانید جدیدترین مدل‌های ماشین لباسشویی را در سایت دیجی‌کالا مشاهده کنید و سفارش دهید.

با توجه به اندازه و مدل آشپزخانه‌های امروزی شما می‌توانید انتخاب‌های متنوعی داشته باشید. ماشین‌های لباسشویی چند مدل هستند. ماشین لباسشویی سطلی یا درب از بالا و ماشین لباسشویی درب از جلو که بسیار پر طرفدار است.

برای خرید ماشین لباسشویی مناسب باید مواردی چون تعداد افراد خانواده و فضای آشپزخانه خود را در نظر بگیرید. برای خانواده‌های بزرگ باید به دنبال ماشین لباسشویی با ظرفیت بالا بگردید که در یک بار استفاده بتوانید حجم زیادی از لباس را در آن‌قرار دهید تا مجبور به استفاده مکرر از لباسشویی در طول روز نباشند. به این صورت در مصرف انرژی هم صرفه جویی می‌شود.

تمام لوازم خانگی برقی برچسب میزان مصرف انرژی دارند. لوازم برقی که میزان مصرف انرژی آن‌ها زیر A قرار گرفته است، ماهانه هزینه زیادی برای پرداخت قبض برق روی دست شما می‌گذارد. برای جلوگیری از این موضوع شما می‌توانید با بررسی جدول ماشین‌های لباسشویی در دیجی‌کالا میزان مصرف انرژی آن‌ها را بررسی و با هم مقایسه کنید.
         </p>
         <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl'  >
         خرید آنلاین بهترین انواع ماشین لباسشویی
         </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans' >
          اگر به دنبال بهترین هستید در دیجی‌کالا بهترین مدل‌های ماشین لباسشویی ال جی، سامسونگ، بوش، دوو، اسنوا و پاکشوما وجود دارد تا شما بتوانید مدل موردنظر خود را با بررسی و مقایسه برندهای مختلف انتخاب کنید. هر برند امکانات خاصی به لباسشویی خود اضافه کرده‌است که شاید شما به همه آن‌ها نیاز نداشته باشید. پس باید قبل از خرید نیاز خود از یک ماشین لباسشویی و همچنین بودجه‌ای که هزینه می‌کنید را بدانید. می‌توانید امکانات و قیمت هر ماشین‌ لباسشویی را در این فروشگاه اینترنتی ببینید تا راحت‌تر ماشین لباسشویی مناسب خود را انتخاب کنید.
         </p> 
        </div>
        <button ref={refbutton2} onClick={addstyle2}
          className='text-md text-yellow-500 bg-white self-start my-3 mx-12 hover:bg-white hover:text-yellow-900'
>   ادامه ی مطلب... </button>
                  <div  sx={{display:"flex",justifyContent:"start"}}>
                    <NavLink style={{ textDecoration: "none" }} to={"/allrefriderators" }>
       <button className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-5 mx-8 px-5 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
        > 
        مشاهده همه ی ماشین لباسشویی‌ها </button></NavLink>
        </div>
        </div>
        

        <div data-aos="flip-left"
          className='washimg flex w-[90%] h-[400px] my-8  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:'url("https://homeservize.com/blog1/wp-content/uploads/2021/05/washing-machine-and-laundry-storage.jpg")'
          }} 
       
        >
        </div>
        </div>

        <div ref={bagbox3}
className='flex flex-col lg:flex-row w-[100vw] p-5 my-5 mx-auto '
   > 
       <div ref={tinybox3} className='flex justify-center flex-col my-5 w-[100vw] lg:w-[50vw] mx-auto px-6'>
       <div ref={refbox3} className='h-[290px] mx-auto px-5 overflow-hidden' >
          <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
         اجاق گاز
         </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans' >
          اجاق گاز از اساسی ترین اجزای آشپزخانه محسوب می‌ شود. با شنیدن اسم اجاق گاز ذهن اکثر ما به 
          سراغ یک اجاق گاز فردار کلاسیک می‌ رود که قدیم در همه آشپزخانه ‌ها بود. شما مجبور نیستید که یک اجاق گاز فردار بخرید اما خرید اجاق گاز دارای فر مزایای خودش را دارد. اجاق گاز فردار ارزان ‌تر و به صرفه تر از خرید یک اجاق‌ گاز رومیزی بدون فر و در کنار آن، یک فر توکار جداگانه است. البته که خرید اجاق گاز فردار یا بدون فر سلیقه ای است و هر کسی با توجه به فضای آشپزخانه خود انتخاب می‌ کند. اما با آگاهی از مدل‌ های مختلف اجاق گاز و انتخاب‌ هایی که می ‌توانید داشته باشید، قطعا راحت ‌تر و سریع ‌تر خرید اجاق گاز را به ثمر خواهید رساند. فروشگاه اینترتی دیجی ‌کالا علاوه بر فروش انواع اجاق گاز و دیگر لوازم آشپزخانه، بهترین مرجع راهنمای خرید لوازم خانگی برقی و غیر برقی محسوب می‌ شود. شما می ‌‌توانید با مطالعه جدول مشخصات و نقد و بررسی مدل‌ های مختلف،
           اجاق گاز مناسب با بودجه و فضای آشپزخانه خود را بیابید. اما قبل از آن در اینجا با انواع اجاق گاز آشنا شوید.
</p>
<p className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
انواع اجاق گاز
         </p>
<p className='text-justify text-xl md:text-md text-gray-500 font-sans' >
اجاق ‌گاز آشپزخانه بر اساس دو عامل تقسیم می‌ شوند: نوع مصرف و شکل ظاهری. اجاق ‌ها در بازار از نظر نوع مصرف به 2 دسته برقی و گازی تقسیم می ‌شوند.

اجاق گازی: خیلی از آشپزان تازه ‌کار و سرآشپزان معروف برای آشپزی اجاق های گازی را ترجیح می ‌دهند؛ چرا که امکان تنظیم حرارت اجاق گازهایی که با گاز کار می‌ کنند، خیلی دقیق ‌تر از اجاق‌ های برقی است. شما می‌ توانید حرارت را بین درجه های مختلف تنظیم کنید و چون می ‌توانید شعله را با چشم خود ببینید، رسیدن به میزان دمای مورد نظر راحت‌ تر است. میزان مصرف انرژی در اجاق‌ های گازی نیز کمتر است.

اجاق برقی: اجاق‌ های برقی جدید بین خانم های خانه بسیار پرطرفدار است چرا که بسیار زیبا هستند و تمیز کردن آن‌ها راحت‌ تر است. اجاق‌ های برقی مانند اجاق‌ های گازی دارای انواع مختلف دو شعله، سه شعله، چهار شعله، پنج شعله و حتی بیشتر است و شما می ‌توانید با توجه به نیازتان مدل مورد نظر خود را سفارش دهید.
</p>
<p  className='text-black py-3 text-start font-bold text-3xl md:text-2xl'  >
راهنمای خرید اجاق گاز
         </p>
<p  className='text-justify text-xl md:text-md text-gray-500 font-sans' >
اگر محدودیت بودجه دارید و خانواده پر جمعیتی هم نیستید، می ‌توانید اجاق گاز رومیزی یا اجاق گاز بدون فر بخرید. قیمت اجاق گاز رومیزی ارزان ‌تر از اجاق گاز معمولی است و غالبا مدل های یک شعله تا چهار شعله آن‌ ها در بازار وجود دارد. اجاق گاز بدون فر نیز ظاهری شبیه اجاق‌ گاز فر دار دارد، با این تفاوت که به جای فر غالبا کشو یا محفظه ای کابینت مانند دارند. اجاق گاز بدون فر ارزان ‌تر از مدل‌ های فردار است و از نظر ظاهری جلوه جذاب ‌تری نسبت به اجاق گاز رومیزی در آشپزخانه دارد و می ‌توان از فضای پایین گاز آن‌ ها نیز مثل کابینت برای قرار دادن ظروف استفاده کرد.
اما اگر بودجه بیشتری برای خرید اجاق گاز دارید، اجاق فردار برقی می ‌تواند جلوه‌ خاصی به آشپزخانه شما بدهد. همچنین می ‌توانید نگاهی به اجاق‌ گازهای 6 شعله استیل بیاندازید. قیمت اجاق گاز برقی و گازی بزرگ در مارک ‌های ایرانی تفاوت زیادی با هم ندارند. اجاق‌ گازهای استیل ظاهر بسیار جذابی دارند و وجودشان دکوراسیون آشپزخانه های مدرن را تکمیل می ‌کند. فر ‌در سبک آشپزی امروزی نقش پر رنگی دارد و آشپزی را برای خیلی از افراد راحت‌ کرده‌ است.
</p>
        </div>
        <button ref={refbutton3} onClick={addstyle3}
          className='text-md text-yellow-500 bg-white self-start my-3 mx-12 hover:bg-white hover:text-yellow-900'
>   ادامه ی مطلب... </button>
                  <div  sx={{display:"flex",justifyContent:"start"}}>
                    <NavLink style={{ textDecoration: "none" }} to={"/allrefriderators" }>
       <button className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-5 mx-8 px-5 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
        > 
        مشاهده همه ی اجاق‌ گازها </button></NavLink>
        </div>
        </div>
        <div data-aos="flip-left"
          className='washimg flex w-[90%] h-[400px] my-8  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:'url("https://milancoshop.com/site/uploader/post/Gas-Hob-in-Kitchen-1774.jpg")'
          }} 
       
        >
        </div>
       
        </div>  
        <div ref={bagbox4}
className='flex flex-col lg:flex-row w-[100vw] p-5 my-5 mx-auto '
   > 
       <div ref={tinybox4}className='flex justify-center flex-col my-5 w-[100vw] lg:w-[50vw] mx-auto px-6'>
       <div ref={refbox4} className='h-[290px] mx-auto px-5 overflow-hidden' >
          <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl' >
       ماشین ظرفشویی برای آسایش بیشتر
         </p>
          <p className='text-justify text-xl md:text-md text-gray-500 font-sans'>
          شستن ظرف‌ها بعد از یک مهمانی با تعداد زیاد افراد و یا در
           انتهای یک روز خسته‌کننده کاری طاقت‌فرسا به نظر می‌رسد اما ماشین‌های ظرف‌شویی به کمک ما آمده‌اند تا انجام این کار را تسهیل کنند. استفاده از این دستگاه‌ها علاوه بر کاهش زمان شستشو، در مصرف آب نیز صرفه‌جویی بسیاری می‌کنند و از طرفی عمل شستشو را با کیفیت و دقت بالاتری انجام می‌دهند. نحوه‌ی عملکرد این دستگاه‌ها نیز به این صورت است که ظروف را
            داخل سبدهای تعبیه شده داخل آن قرار می‌دهید و سپس قرص یا پودر شستشو را داخل محفظه‌ی مخصوص قرار می‌دهید
            و با انتخاب برنامه‌ی شستشوی مناسب، دستگاه را روشن می‌کنید تا عملیات شستشو آغاز شود.
            </p>  
            <p  className='text-black py-3 text-start font-bold text-3xl md:text-2xl'  >
            انواع ماشین ظرفشویی
         </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
          ماشین‌های ظرفشویی بسته به ظرفیتشان در انواع مختلفی تولید می‌شوندو
مدل رومیزی: این مدل برای خانواده‌های کم جمعیت است و تعداد ظرف کمتری در داخل آن قرار می‌گیرد به همین علت برای  آشپزخانه‌های کوچک  مناسب‌تر است. این محصولات هم‌چنین قیمت مناسب‌تری دارند و به راحتی می‌توان آن را روی کابینت قرار داد
مدل مبله: فرق بین این مدل با مدل رومیزی در ظرفیت آن است. خانواده‌های پرجمعیت به ماشین ظرفشویی بزرگتری نیاز دارند. برای نصب این نوع از ماشین باید فضای مناسبی مانند ماشین لباس‌شویی در آشپزخانه در نظر بگیرید.
توکار: طراحی بسیاری از آشپزخانه‌ها به طوری است که کالاهایی چون ماشین ظرفشویی، فر و ماکروفر در داخل کابیت‌ها قرار می‌گیرند و دیگر نیازی نیست آن‌ها را روی کابینت قرار دهید.
            </p>  
            <p className='text-black py-3 text-start font-bold text-3xl md:text-2xl'  >
            خرید آنلاین ماشین ظرفشویی از سهیل 
         </p>
          <p  className='text-justify text-xl md:text-md text-gray-500 font-sans'>
          محصولات متنوع با مشخصات مختلفی در بازار وجود دارند که شاید باعث سردرگمی در انتخاب شود. دیجی کالا امکان مشاهده‌ی قیمت و مقایسه‌ی مشخصات کالاهای مختلف را به شما می‌دهد تا بتوانید به راحتی انتخاب کنید. شما می‌تواند انواع ماشین ظرفشویی را در این فروشگاه اینترنتی به صورت آنلاین خریداری کنید.
            </p>  
          </div>
          <button ref={refbutton4} onClick={addstyle4}
          className='text-md text-yellow-500 bg-white self-start my-3 mx-12 hover:bg-white hover:text-yellow-900'
>   ادامه ی مطلب... </button>
                  <div  sx={{display:"flex",justifyContent:"start"}}>
                    <NavLink style={{ textDecoration: "none" }} to={"/allrefriderators" }>
       <button className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-5 mx-8 px-5 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
        > 
        مشاهده همه ی ماشین ظرفشویی ها </button></NavLink>
        </div>
          </div>
          <div data-aos="flip-left"
          className='washimg flex w-[90%] h-[400px] my-8  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:'url("https://bosch-home-germany.com/wp-content/uploads/2020/12/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%B8%D8%B1%D9%81%D8%B4%D9%88%DB%8C%DB%8C-%D9%87%D8%A7%DB%8C-%D8%A8%D9%88%D8%B4-%D8%A7%D8%A8%D8%B9%D8%A7%D8%AF-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-%D8%AF%D8%A7%D8%B1%D8%AF.jpg")'
          }} 
       
        >
        </div>
      </div>
      <SlideOffProducts/>
 
      <div className="logos w-full h-[120px] flex justify-between relative bg-white whitespace-nowrap pt-2 overflow-hidden ">
<div  className='logos-slide' >
<NavLink to={"/samsungbrand" }> <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' /></NavLink>
</div>
<div  className='logos-slide' >

<NavLink to={'/whirlpoolbrand'}><img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' /></NavLink>

</div>
<div  className='logos-slide' >
  <NavLink to={"/lgbrand"}><img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png" alt='' /></NavLink>
</div>
<div  className='logos-slide' >


<NavLink to={'/bushbrands'}><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png" alt='' /></NavLink>
</div>

</div>
    
</div>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default Products;
