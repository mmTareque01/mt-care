import React from 'react'
import { Container, Grid } from '@mui/material';
import CustomButton from '../customPackages/customButton';
import PopUpScreen from '../components/popUpScreen';
import Form from '../components/form';
import {COLORS} from '../theme/colors' 
import Logo from '../customPackages/logo';
import LogoImage from '../assests/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import GoTo from '../utilities/Goto'
import { useNavigate, useParams } from 'react-router-dom';
import {PATH} from '../routes/paths'

const inputBox = [
    {
        hints : "User Name",
        margin : "150px 0"
    },
    {
        hints : "Email",
        margin : "15px 0"
    },
    {
        hints : "Group Name",
        margin : "15px 0"
    },
]

const useStyle = makeStyles({
    form : {
        margin: '50px 0 0 0'
    }
})

export default function Login() {
    const classes = useStyle()
    const navigate = useNavigate()
  return (
    <div>
       <Container>
           {/* <Logo
            imgPath = {LogoImage}
            imgHeight = '75px'
            margin = '25px 0 0 0'
            // display = 'block'
            /> */}
            
            <Grid container spacing={5} className={classes.form}>
                <Grid item sm = {6}>
                <Form
                    inputBox = {inputBox}
                    header = "Create a Group to Get Started"
                    />
                
                <CustomButton
                    text = "Create Group"
                    variant = 'contained'
                    align = '20px 0 0 0'
                    textTransform = 'uppercase'
                    bgColor = {COLORS.main}
                    // action = {()=> GoTo(navigate, `${PATH.home.path}`)}
                    />
                
                    <PopUpScreen
                        btnText = "Join Using Code"
                        rightBtnText = "Join"
                        fontColor = {COLORS.main}
                        />
               
                 

                </Grid>
                <Grid item sm = {6}>
                    {/* <h2>right side</h2> */}
                </Grid>
            </Grid>
       </Container>
    </div>
  )
}
