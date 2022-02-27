import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CustomButton from '../customPackages/customButton';

export default function PopUpScreen(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    <CustomButton
        action={handleClickOpen}
        underlineText = "Join Using Code"
        disableRipple
        display = 'block'
        padding = "0"
        width = "auto"
        align = '10px auto'
        fontColor = {props.fontColor}
        />


      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >


        <DialogTitle id="responsive-dialog-title">
          {"Warning!!!"}
        </DialogTitle>


        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {props.leftBtnText?props.leftBtnText:"Cancel"}
          </Button>
          <Button onClick={props.action} autoFocus>
          {props.rightBtnText?props.rightBtnText:"Confirm"}
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
