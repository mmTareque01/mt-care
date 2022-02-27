import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root : {
        height : props=>props.height?props.height:'auto',
        width : props=>props.width?props.width:'auto',
        padding : props=>props.padding?props.padding:'',
        margin : props=>props.margin?props.margin:'',
        display : props=>props.display?props.display:''
    },
    image: {
        height : props=>props.imgHeight?props.imgHeight:'auto',
        width : props=>props.imgWidth?props.imgWidth:'auto',
    }
})

export default function Logo(props) {
    const classes = useStyle(props)
  return (
    <div className={classes.root}>
        <img
            className={classes.image}
            src = {props.imgPath}
            alt = "soft chat logo"
            />
    </div>
  )
}
