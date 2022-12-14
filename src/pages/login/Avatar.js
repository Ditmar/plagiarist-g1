import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
const useStyle=makeStyles({
    Avatar:{
        backgroundColor:'#3751FF',
        width:'48px',
        height:'48px',
        marginLeft:'135px',
        alignContent:'center',
    },
    AvatLetter:{
        background: 'linear-gradient(143.7deg, rgba(255, 255, 255, 0.7) 0%, #FFFFFF 100%)',
        width: '1.125rem',
        height: '1.313rem',
        borderTopRightRadius: '0.6rem',
        borderBottomRightRadius: '0.6rem',
    }
})

const AvatarD= () => {
const classes=useStyle()
  return (
    <Avatar className={classes.Avatar}>
    <p className={classes.AvatLetter}>{""}</p>
  </Avatar>
  )
}
export default AvatarD
