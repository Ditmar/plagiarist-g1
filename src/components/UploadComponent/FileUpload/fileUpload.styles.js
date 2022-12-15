import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main:{
        position: "relative",
        padding: '10px',
        height:"100%",
    },
    container: {
        position: "relative",
        padding: '10px',
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
        margin: "10px",
        border:" solid 1px gray",
        borderRadius : "5px",
        color :"aliceblue",
        background:"#239f98",
        width:"100px",
        height:"50px"
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
        margin: "2px",
        zIndex: "1200",
        transition: "3s",
        '&:hover': {
            borderRadius: '10px',
            background:"#dfa6a6",
          },
    },
    inputButton:{
        display: "none"
    },
    '@media (max-width: 800px)': {
        container: {
          display: "none"
        },
        input:{
          //display: "none"
        },
        inputButton:{
            position:"relative",
            display: "flex",
            width: "100px",
            height: "50px",
            backgroundColor : "#00004e",
            borderRadius : "5px",
            border:" solid 1px gray",
            margin: "10px",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
      }
}));
export default useStyles;