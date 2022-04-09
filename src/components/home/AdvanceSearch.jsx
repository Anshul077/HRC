import React,{useState} from "react";
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
    container:{
        background:'#2A3E4C',
        padding:15,
        width:"90vh",
        height:'42vh'
    },
    heading:{
        color:"#fff"
    },
    textFieldContainer:{
        display:'flex',
        flexFlow:'row wrap',
        margin:'20px auto',
        '&>*':{
            width:'50%',
        }
    },
    button:{
        width:'48%',
    }
})


const AdvanceSearch = ({openAdvance,setOpenAdvance}) => {
    const classes=useStyles()
    const closeDialog=()=>{
        setOpenAdvance(false)
    }

    return (
        <Dialog open={openAdvance} onClose={()=>closeDialog()}>
        <DialogContent className={classes.container}>
            <Typography className={classes.heading}>Advance Search</Typography>
            <Box className={classes.textFieldContainer}>
            <TextField InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Customer Id'></TextField>
            <TextField InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Invoice Id'></TextField>
            <TextField InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Customer Number'></TextField>
            <TextField InputProps={{style: {background:"#fff",margin:'5px 10px'}}} variant="filled" label='Business Year'></TextField>
            </Box>
                <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Search</Button>
                <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}} >Cancel</Button>
        </DialogContent>  
    </Dialog>
    )
}

export default AdvanceSearch
