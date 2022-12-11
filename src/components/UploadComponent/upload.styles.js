import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        position:"relative",
        width: '100%',
        height: '500px',
        color: '#ccc'
    },
    active: {
        width: '100%',
        height: '500px',
        color: '#000',
        padding: '4rem'
    }
}));

export default useStyles;