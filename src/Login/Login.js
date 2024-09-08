
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PageTitle } from "../Title/PageTitle";

export default function Login() {
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
    <PageTitle title='  ورود' description=' ورود   '/>
    
      <Box
        sx={{
         
       backgroundImage: `url(" https://www.digikala.com/mag/wp-content/uploads/2021/11/01-Benefits-of-Ice-Bath.jpg")`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:'100vh',
       width:'100%',
       display:{xs:'flex',sm:'flex'},flexDirection:{sx:'column',sm:'column',md:'row'},justifyContent:{sx:'center',sm:'center',md:'center'}
          
        }}
      >
       
        <Grid
            
            component={Paper}
            elevation={6}
            square
            sx={{bgcolor:'#eeeeee'}}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h4">
                SOHIL
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <label> آدرس ایمیل</label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                />
                <label> رمز </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="عضویت"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  ورود 
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                   رمز را فراموش کرده اید؟
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"حساب کاربری ندارید؟ خروج  "}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
         
      </Box>
  
    </>
  );
}

