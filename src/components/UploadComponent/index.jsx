import FileUpload from "./FileUpload";
import useStyles from "./upload.styles";

const UploadComponent = () => {
    const classes = useStyles();
    return (
            <div className={classes.content}>
                <FileUpload />
            </div>
    )
}
export default UploadComponent;