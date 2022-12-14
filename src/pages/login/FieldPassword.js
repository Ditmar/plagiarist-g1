import { useState } from 'react';
import { InputAdornment,FormControl,OutlinedInput,IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const FieldPassword = () => {
const [showPassword, setShowPassword] = useState(false);
const [password, setPassword] =useState("");
return (
  <>
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
  </>
);
}
export default FieldPassword;