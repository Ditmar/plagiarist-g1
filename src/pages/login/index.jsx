import React from 'react';
import axios from "axios"
import { useState} from 'react';
import { Avatar, Grid,Paper,TextField, Button, Typography,Link, OutlinedInput} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';

const Login = () => {
/*styles*/
const paperStyle={
  background:'#FFFFFF',
  width:'380px',
  height:'592px',
  border:'1px solid #DFE0EB',
  borderRadius:"8px",
  margin:"139px 530px 139px 530px",
  boxSizing:'border-box',
  paddingLeft:'32px',
  paddingRight:'32px',
  paddingTop:'35px',
  paddingBottom:'40px',
    
}
const avatarStyle={
  backgroundColor:'#3751FF',
  width:'48px',
  height:'48px',
  marginTop:'0px',
  alignContent:'center' 
    
}
const letteravatartStyle={
  background: 'linear-gradient(143.7deg, rgba(255, 255, 255, 0.7) 0%, #FFFFFF 100%)',
  width: '1.125rem',
  height: '1.313rem',
  borderTopRightRadius: '0.6rem',
  borderBottomRightRadius: '0.6rem',
  
}

const plagiocontrolStyle={
  fontFamily: 'Mulish,sans-serif',
  fontSize: '19px',
  letterSpacing: '0.4px',
  wordSpacing: '0px',
  color: '#A4A6B3',
  opacity: '0.7',
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight:'23.85px',
  width: '316px',
  height:'24px',
  marginTop:'12px',
  marginBottom:'0px',
  textAlign:'center'
}

const LoginplagioStyle={
  textAlign:'center',
  width:'316px',
  Height: '30px',
  fontFamily: 'Mulish,sans-serif',
                                                
  color:'#252733',
  letterSpacing: '0.3px',
  fontWeight:700,
  fontSize: '24px',
  fontStyle: 'normal',
  marginTop:'32px',
  marginBottom:'12px'
}
const forfieldStyle={
  width:'316px',
  height:'20px',
  marginTop:'0px',
  textAlign:'center',
  fontFamily: 'Mulish',
  color:'#9FA2B4',
  fontSize: '14px',
  fontStyle:'normal',
  letterSpacing: '0.3px',
  fontWeight:400,
  marginBottom:'48px'
}
const textlabelStyle={
  fontFamily: 'Mulish',
  width:'316px',
  height:'16px',
  color:'#9FA2B4',
  fontSize: '12px',
  letterSpacing: '0.3px',
  fontWeight:700, 
  textTransform:'uppercase',
  marginTop:'0px',
  marginBottom:'6px'
}

const labelStyle={
  width:'316px',
  height:'42',
  backgroundColor:'#FCFDFE',
  border:'1px solid #F0F1F7',
  borderRadius:'8px',
  marginTop:'0px',
  marginBottom:'24px',
  boxSizing:'border-box',
}
const labeliconStyle={
  width:'16.67px',
  height:'13.33px',
  background:'##FA2B4',
  marginRight:'8px',

}

const btnStyle={
  width:'316px',
  height:'48px',
  background:'#3751FF',
  //webkitBoxShadow: '0px 4px 24px 12px ##3751ff3d',
  boxShadow:'0px 4px 24px 12px ##3751ff3d',
  borderRadius:'8px',
  marginTop:'0px',
}

const quesStyle={
  marginTop:'18px',
  fontFamily:'Mulish',
  fontSize:'14px',
  fontWeight:400,
  textAlign:'center',
  letterSpacing:'0,3px',
  color:'#9FA2B4',
  marginRight:'9px'
  }
const linkStyle={ width:'51px',
  fontFamily:'Mulish',
  fontSize:'14px',
  fontWeight:600,
  letterSpacing:'0,2px',
  color:'#3751FF',
  marginTop:'18px'
}

  /*setValues Form*/

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
};

//request Api with axios library
const baseUrl=("http://localhost:3001/usersLogin");
const iniciarSesion = async () => {
  await axios
    .get(baseUrl, { params: { email: email, password: password } })
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      if (res.length > 0) {
        //alert("bienvenido");
        window.location.href="./menu";
      } else {
        alert("email o password  incorrecto");
      }
    })

    .catch((error) => {
      console.log(error);
    });
};

/*Form*/
  return (
    <form onSubmit={handleSubmit}>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <p style={letteravatartStyle}>{""}</p>
          </Avatar>
          <Typography style={plagiocontrolStyle}>Plagio Control</Typography>
        </Grid>
        <Typography style={LoginplagioStyle}>Login Plagio Control</Typography>
        <Typography style={forfieldStyle}>
          Enter your email and password below
        </Typography>

        <h1 style={textlabelStyle}>EMAIL</h1>
        <TextField
          name="email"
          autoComplete="email"
          variant="outlined"
          placeholder="Email address"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={labelStyle}
        />

        <h1 style={textlabelStyle}>PASSWORD</h1>
        <FormControl variant="outlined" fullWidth required style={labelStyle}>
          <OutlinedInput
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                  style={labeliconStyle}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          onClick={() => iniciarSesion()}
        >
          Log in
        </Button>
        <Typography style={quesStyle}>
          No tienes una cuenta? &nbsp;
          <Link href="#" style={linkStyle}>
            {" "}
            Sign up
          </Link>
        </Typography>
      </Paper>
    </form>
  );
}

export default Login