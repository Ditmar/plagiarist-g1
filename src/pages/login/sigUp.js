import { Typography,Link } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'

const useStyle=makeStyles({
    TextSigUp:{
        marginTop:'18px',
        fontFamily:'Mulish',
        fontSize:'14px',
        fontWeight:400,
        textAlign:'center',
        letterSpacing:'0,3px',
        color:'#9FA2B4',
        marginRight:'9px'

    },
    TextLink:{
        width:'51px',
        fontFamily:'Mulish',
        fontSize:'14px',
        fontWeight:600,
        letterSpacing:'0,2px',
        color:'#3751FF'
      
    }
})

const SigUp = () => {

const classes=useStyle()
return (   

        <Typography className={classes.TextSigUp}>
        No tienes una cuenta? &nbsp;
        <Link href="#" className={classes.TextLink}>
          {" "}
          Sign up
        </Link>
        </Typography>
);
}
export default SigUp;
