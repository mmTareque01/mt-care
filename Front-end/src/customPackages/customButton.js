import React from 'react'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

// icons
import SaveIcon from '@material-ui/icons/Save';
import InfoIcon from '@mui/icons-material/Info';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BlockIcon from '@mui/icons-material/Block';
import DoneIcon from '@mui/icons-material/Done';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const useStyle = makeStyles({
    root: {
        padding: props => props.padding ? props.padding : "20px 12px",
        margin: props => props.align ? props.align : "",
        lineHeight: props => props.lineHeight ? props.lineHeight : "1",
        width: props => props.width ? props.width : "100%",
        fontSize: props => props.fontSize ? props.fontSize : "",
        fontWeight: props => props.fontWeight ? props.fontWeight : "",
        textTransform: props => props.textTransform ? props.textTransform : "capitalize",
        display: props => props.display,
        backgroundColor: props => props.bgColor,
        color: props=>props.fontColor,
    },
    body: {
    }
});



export default function CustomButton(props) {
    const classes = useStyle(props);
    return (
        <span className={classes.body}>

            <Button
                className={classes.root}
                variant={props.variant}
                onClick={props.action}
                to={props.link}
                color={props.color}
                disableRipple={props.disableRipple}
                endIcon={
                    (
                        () => {
                            if (props.send) {
                                return (<SendIcon />)
                            }
                            else if (props.delete) {
                                return (<DeleteIcon />)
                            }
                            else if (props.upload) {
                                return (<CloudUploadIcon />)
                            }
                            else if (props.voice) {
                                return (<KeyboardVoiceIcon />)
                            }
                            else if (props.save) {
                                return (<SaveIcon />)
                            }
                            else if (props.dropdownMore) {
                                return (<ExpandMore />)
                            }
                            else if (props.dropdownLess) {
                                return (<ExpandLess />)
                            }
                            else if (props.details) {
                                return (<InfoIcon />)
                            }
                            else if (props.block) {
                                return (<BlockIcon />)
                            }
                            else if (props.approve) {
                                return (<DoneIcon />)
                            }
                            else {
                                return ("");
                            }
                        }
                    )()
                }

                startIcon={
                    (
                        () => {
                            if (props.goBack) {
                                return (<ArrowBackIcon />)
                            }
                            else if (props.update) {
                                return (<UpgradeIcon />)
                            }
                            else {
                                return ("");
                            }
                        }
                    )()
                }
            >
                {props.text}
                <u>{props.underlineText}</u>

            </Button>


        </span>
    )
}
