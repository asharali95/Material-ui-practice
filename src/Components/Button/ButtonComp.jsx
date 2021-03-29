import React from 'react'
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/CreditCard"
const ButtonComp = () => {

    return  (
        <div>
        <Button variant="contained">This is me </Button>
        <IconButton aria-label="delete">
            <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="delete" disabled>
            <DeleteIcon/>
        </IconButton>
        <IconButton disableRipple aria-label="delete">
            <DeleteIcon/>
        </IconButton>


        
        </div>
    );
}

export default ButtonComp
