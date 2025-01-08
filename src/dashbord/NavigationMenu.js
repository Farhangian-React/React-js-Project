import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Link from "@mui/material/Link";
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import dishwashericon from '../img/dishwasher-icon.jpg';
import washingmachins from '../img/washingmachin-icon2.png';
import gasicon from '../img/gas-icon2.jpg';
import Button from '@mui/material/Button';
import Refrigeratoricon from '../img/Refrigerator-icon1.png';
import {NavLink} from 'react-router-dom';
import './E.css';
import { Typography } from '@mui/material';

const useRovingIndex = (options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
  const targetRefs = React.useRef([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index) => ({
    ref: (ref) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};
const Refrigerators  = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Button
          aria-expanded={open ? 'true' : 'false'}
          ref={ref}
          {...props}
       
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'black',backgroundColor:'white', ':hover': {backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}}
        >
         
          <NavLink className='navlinkactiv' to={"/allrefriderators" } >  یخچال و فریزر </NavLink>
             
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}  placement='left-end' disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              borderRight:'1px solid black',
              mt:-2.7,
              mr:4.6,
              p:1,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'230px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'center',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem  >
            <NavLink className='navlink' to={"/shop-refrigeratorfrenchdoor" } {...getTargetProps(0)}>  یخچال های دو در </NavLink>
             
            </ListItem>
            <ListItem >
           
              
                <NavLink className='navlink' to={'/shop-refrigeratorsidbysid'} {...getTargetProps(1)}> یخچال های ساید بای ساید  </NavLink> 
             
            </ListItem>
            <ListItem >
           
             
            <NavLink className='navlink' to={'/shop-refrideratorbottomfreezer'} {...getTargetProps(2)}> یخچال و فریزر پایین  </NavLink>
            
            </ListItem>
            <ListItem >
         
            
            <NavLink className='navlink' to={"/shop-refrideratortopfreezer"} {...getTargetProps(3)}> یخچال و فریزر بالا  </NavLink>
            
            </ListItem>
            <ListItem  >
            
              
               <NavLink className='navlink' to={'/shop-refrideratorspecializedfreezer'} {...getTargetProps(4)}>  یخچال و فریزر تخصصی </NavLink>  
              
            </ListItem>
           
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});







const Cooking  = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Button
          aria-expanded={open ? 'true' : 'false'}
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'black',backgroundColor:'white', ':hover': {backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}}
        >
          <NavLink className='navlinkactiv' to={"/allgas" } >  پخت و پز  </NavLink>
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}  placement='left-end' disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              borderRight:'1px solid black',
              mb:-12,
              mr:8.1,
              px:2,
              pb:2,
              pt:3,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'230px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'start',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem >
            <NavLink className='navlink' to={'/shop-ranges'} {...getTargetProps(0)}> اجاق گاز و فر</NavLink>
             
            </ListItem>
            <ListItem>
           
              
                <NavLink className='navlink' to={'/shop-cooktop'} {...getTargetProps(1)}> گاز صفحه ای</NavLink> 
             
            </ListItem>
            <ListItem  >
           
             
            <NavLink className='navlink' to={'/shop-Hood'} {...getTargetProps(2)}> هود   </NavLink>
            
            </ListItem>
            <ListItem  >
         
            
            <NavLink className='navlink' to={'/shop-microwaves'}  {...getTargetProps(3)}> مایکروویو </NavLink>
            
            </ListItem>
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});











const Products = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Link
          
         
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'white',textDecoration:'none'}}
        >
          محصولات 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              my: 1,
              p:2,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'210px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'start',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem  >
                <ListItemDecorator  >
              <img src={Refrigeratoricon} width={20} alt='img1' />
              </ListItemDecorator>
              
                 <NavLink className='navlink' to={"/allrefriderators" } {...getTargetProps(0)}>  <Refrigerators/> </NavLink>
             
            </ListItem>
            <ListItem>
            <ListItemDecorator  >
              <img src={washingmachins} width={20} alt='img2' />
              </ListItemDecorator>
              
                <NavLink className='navlink' to={'/shop-washing-machine'} {...getTargetProps(1)}>ماشین لباسشویی</NavLink> 
             
            </ListItem>
            <ListItem >
            <ListItemDecorator  >
              <img src={gasicon} width={20} alt='img3' />
              </ListItemDecorator>
             
            <NavLink className='navlink' to={'/allgas'} {...getTargetProps(2)}><Cooking/> </NavLink>
            
            </ListItem>
            <ListItem  >
              <ListItemDecorator  >
              <img src={dishwashericon} width={20} alt='img4' />
              </ListItemDecorator>
              
               <NavLink className='navlink' to={'/shop-dishwasher'} {...getTargetProps(4)}>ماشین ظرفشویی</NavLink>  
              
            </ListItem>
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});
const Shows = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  const open = Boolean(anchorEl);
  const id = open ? 'about-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Link
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'white',textDecoration:'none'}}
        >
          جشنواره ها 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
          <List
                 aria-label="Products"
                 variant="outlined"
                 orientation="vertical"
           
                 sx={{
                   my: 1,
                   p:2,
                   boxShadow: 'md',
                   borderRadius: 'sm',
                   '--List-radius': '8px',
                   '--List-padding': '4px',
                   '--ListDivider-gap': '4px',
                   '--ListItemDecorator-size': '32px',
                   backgroundColor:'#fff',
                   width:'220px',
                   height:'100px',
                   alignItems:'start',
                   display:'flex',
                   justifyContent: 'center'
                 }}
          >
           
            <ListItem>
              
              <NavLink  className='navlink' to={'/jashnehtabestane'}  {...getTargetProps(0)}>
                جشنواره زمستانه  
              </NavLink >            
             
            </ListItem>
            <ListItem>
             
              <NavLink  className='navlink' to={'/karttakhfif'}  {...getTargetProps(1)}>
                فعال سازی کارت تخفیف
              </NavLink >  
             
            </ListItem>
          </List>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});
const Servis = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  const open = Boolean(anchorEl);
  const id = open ? 'about-popper' : undefined;
  return (
    <ClickAwayListener  onClickAway={() => setAnchorEl(null)}>
      <Box  onMouseLeave={() => setAnchorEl(null)}>
        <Link
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
           sx={{color:'white',textDecoration:'none'}}
      
        >
          خدمات 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
      
            sx={{
              my: 1,
              p:2,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'200px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'center',
             
            }}
             
            
          >
       
            <ListItem >
              <NavLink className='navlink' to={'/AfterSalesService'}  {...getTargetProps(0)}>
                خدمات پس از فروش
              </NavLink>
            </ListItem>
            <ListItem >
              <NavLink className='navlink' to={'/ContactUsForm'}  {...getTargetProps(1)}>
                فرم تماس با ما
              </NavLink>
            </ListItem>
            <ListItem >
              <NavLink className='navlink' to={'/PopularQuestions'}  {...getTargetProps(2)}>
                سوالات متداول
              </NavLink>
            </ListItem>
          </List>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});

export default function NavigationMenu() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box sx={{display:"flex"}} >
      <List
        orientation="horizontal"
        className='lis'
        
        sx={{
          
          '--List-radius': '8px',
          '--List-padding': '8px',
          '--List-gap': '12px',
          '--ListItem-gap': '0px',
          
          
         
        }}
      >
        
        <ListItem  className='list'>
          
          <Products 
            onMouseEnter={() => {
              setActiveIndex(0);
              targets[0].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(0)}
          />
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem className='list'>
          <Shows
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(1)}
          />
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list'>
          <Link
           sx={{color:'white',textDecoration:'none'}}
           
            {...getTargetProps(2)}
            component="a"
            href="/shop-ranges"
            className='hover'
          >
            فروشگاه
          </Link>
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list' >
          <Link
          sx={{color:'white',textDecoration:'none'}}
           
            {...getTargetProps(3)}
            component="a"
            href="/about-snova"
            className='hover'
          >
          چرا سهیل
          </Link>
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list' >
          <Link
           sx={{color:'white',textDecoration:'none'}}
          
            {...getTargetProps(4)}
            component="a"
            href="/life-style"
            className='hover'
          >
            سبک زندگی
          </Link>
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list'>
          <Servis
            onMouseEnter={() => {
              setActiveIndex(5);
              targets[5].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(5)}
            className='servis'
          />
        </ListItem>
      </List>
    
    </Box>
  );
}
