import { useState } from "react";

const useUpload = (room) => {
    console.log('rooom code ',room )
    const [formatAccepted, setFormatAccepted] = useState(false);
    const [file, setFile] = useState({});
    const getFile = (event) => {
        try {
            if (event.dataTransfer.files.length >= 1) {
                return event.dataTransfer.files
            }
        } catch (error) {
            throw new Error(`Error, file doesn't exits `);
        }
    }
    const onCancelUpload = () => {
        setFormatAccepted(false);
        setFile({})
    }
    const checkUpload = (event) => {
        const [file] =  getFile(event);
        if(file.type === "application/pdf"){
            setFile({
                file,
                name: file.name,
                type: file.type,
                size: Math.round(((file.size / 1024) /  1024) * 100) / 100
            });
            setFormatAccepted(true);
        }else{
            alert("No corresponde al formato")
            setFile({})
            setFormatAccepted(false)
        }
    }
    const getUploadForm = () => {
        const data = new FormData();
        data.append('file', file.file);
        data.append('user', 'bot');
        data.append('code', room);
        return data;
    }
    const onChangeFile = (e)=>{
        const file = e.target.files[0]
        if(file.type === "application/pdf"){
            setFile({
                file,
                name: file.name,
                type: file.type,
                size: Math.round(((file.size / 1024) /  1024) * 100) / 100
            });
            setFormatAccepted(true);
        }else{
            alert("No corresponde al formato")
            setFile({})
            setFormatAccepted(false)
        }
    }
    return {onChangeFile, checkUpload, formatAccepted, onCancelUpload, file, getUploadForm}
}
export default useUpload;