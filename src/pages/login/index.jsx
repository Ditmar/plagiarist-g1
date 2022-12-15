import { useState } from "react";
import {Typography,CardContent,Card,CardActions,TextField,IconButton,InputAdornment,FormControl,OutlinedInput,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AvatarD from "./Avatar";
import SigUp from "./sigUp";
import CustomizedButtons from "./boton";
import Fonts from "./fonts";
import useStyles from "./stylescard";
const Login = () => {
  //variables de estado
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  //peticion a la url con fetch y funcion asyncronas
    let url="http://3.23.86.147/server/autenthication/login"
    async function login() {
      console.warn(email, password);
      let item = { email, password };
      let result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      History.pushState("/add");
    }

 const classes = useStyles();
  return (
    <Card className={classes.cardStyle}>
      <CardContent className={classes.cardCont}>
        <AvatarD/>
        <Fonts/>
      </CardContent>
      <Typography className={classes.textfieldStyle}>EMAIL</Typography>
      <TextField
        className={classes.field}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        placeholder="Email address"
        fullWidth
      />
      <Typography className={classes.textfieldStyle}>PASSWORD</Typography>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={(e) => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <CardActions className={classes.cardActionStyle}>
        <CustomizedButtons onClick={login}/>
      </CardActions>
      <SigUp/>
    </Card>
  );
};
export default Login;
