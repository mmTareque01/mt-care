import React from 'react'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// import theme from '../theme'

const useStyle = makeStyles({
    root:{
        padding: props=> props.padding?props.padding:"25px 0",
        margin: props=>props.margin?props.margin:"0",
        lineHeight: props=>props.lineHeight?props.lineHeight:"1",
        fontWeight: props=>props.fontWeight?props.fontWeight:"700",
        textAlign: props=>props.align?props.align:"",
        margin: props=>props.align ==="center"?"auto":'',
        fontSize: props=>props.fontSize?props.fontSize:"",
        cursor: props=>props.onClick?"pointer": "",
        // textShadow: "0px 2vw rgba(255, 255, 255, 0.1)"
        width: props=>props.width,
        float: props=>props.align,
        
    },
    abc:{
        fontStyle: 'italic'
    }
});



export default function CustomTypography(props) {
    const classes = useStyle(props);
    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
                <Typography 
                    variant={props.variant?props.variant:"body1"}
                    color= "primary"
                    className={props.ab? props.ab: classes.abc + classes.root}
                    onClick={props.onClick}
                    >

                    {props.text}

                </Typography>
            {/* </ThemeProvider> */}
           
        </div>
    )
}


