import React from 'react'
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {COLORS} from '../theme/colors'

const useStyles = makeStyles({
    root: {
      background: props=>props.background?props.background:"#fff",
      margin: props=>props.margin?props.margin:"",
      '& .MuiInputLabel-root':{
          color: '#000',
      },
      '& .MuiOutlinedInput-notchedOutline':{
          border: props=>props.border?props.border:`2px solid ${COLORS.main}`,
      },
      '& .MuiInputBase-root':{
          color: "#000",
          height: props=>props.height?props.height:"",
      },
      '& .MuiOutlinedInput-input': {
        padding: props=>props.padding?props.padding:"",
      }
    }
  });
  


export default function CustomInputField(props) {
    const classes = useStyles(props);

    return (
        <div style={{padding:"0"}}>
            <TextField
                required = {props.required}
                className={classes.root}
                color= {props.color?props.color:"primary"}
                // id="outlined-required"
                label={props.hints?props.hints:""}
                variant= {props.variant ? props.variant:"outlined"}
                type={props.type?props.type:"text"}
                fullWidth= {props.fullWidth?props.fullWidth:"true"}
                name={props.name}
                defaultValue = {props.text?props.text:""}
                disabled = {props.disabled}
            />
      </div>
    )
}
