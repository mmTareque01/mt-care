import React from 'react'
import CustomInputField from '../customPackages/customInputField'
import CustomTypography from '../customPackages/customTypography'

export default function Form(props) {
    const [inputBox, setInputBox] = React.useState(props.inputBox)
  return (
    <form>
        <CustomTypography
            text = {props.header}
            align = 'center'
            />
        {
            inputBox.map(item=>(
            <CustomInputField
                hints = {item.hints}
                margin = {item.margin}
                />
            ))
        }
    </form>
  )
}
