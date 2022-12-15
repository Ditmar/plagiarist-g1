import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    main:{
        position: "relative",
        padding: '1rem',
        height:"100%",
    },
    container: {
        position: "relative",
        padding: '1rem',
        height:"100%",
        borderStyle: 'dotted',
    },
    input: {
        position: "absolute",
        margin: "0",
        padding: "0",
        width: '100%',
        height: '100%',
        outline:"none",
        opacity:"0"
    },
    button:{
        margin: "1rem",
        border:" solid 1px gray",
        borderRadius : "0.5rem",
        color :"aliceblue",
        background: theme.palette.primary.main,
        width:"10rem",
        height:"3rem"
    },
    deletteIcon:{
        color: theme.palette.high.main,
        
    },
    iconPdf:{
        color: theme.palette.low.main,
    },
    cardInfo:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonDelete:{
        border: "none",
        borderRadius: '50px',
        background:"none",
        margin: "0.2rem",
        zIndex: "1200",
        transition: "3s"
    },
    inputButton:{
        display: "none"
    },
    '@media (max-width: 80rem)': {
        container: {
          display: "none"
        },
        input:{
        },
        inputButton:{
            position:"relative",
            display: "flex",
            width: "10rem",
            height: "3rem",
            backgroundColor : theme.palette.colorbuttonupload.main,
            borderRadius : "0.5rem",
            border:" solid 1px gray",
            margin: "1rem",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
      }
}));
export default useStyles;