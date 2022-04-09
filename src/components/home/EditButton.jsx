import React,{useState} from "react";
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import '../../App.css'

const useStyles=makeStyles({
    container:{
        background:'#2A3E4C',
        padding:15,
        width:"90vh",
        height:'30vh'
    },
    heading:{
        color:"#fff"
    },
    textFieldContainer:{
        display:'flex',
        margin:'20px auto',
        '&>*':{
            width:'50%'
        }
    },
    button:{
        width:'48%',
        margin:"0 5px",
        color:"#fff",
        border:"1px solid #fff"
    }
})

const EditButton = ({openEdit,setOpenEdit,val,setVal,setEditedVal,data}) => {
   const classes=useStyles()

    const closeDialog=()=>{
        setOpenEdit(false)
    }

    return (
        <Dialog open={openEdit} onClose={()=>closeDialog()}>
            <DialogContent className={classes.container}>
                <Typography className={classes.heading}>Edit</Typography>
                <Box className={classes.textFieldContainer}>
                <TextField 	inputProps={
					{ readOnly: true, }
				}  InputProps={{style: {background:"#fff",marginRight:20}}} variant="filled" label='Invovice Currency' ></TextField>
                <TextField InputProps={{style: {background:"#fff"}}} variant="filled" label='Customer Payment Terms' ></TextField>
                </Box>
                    <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Edit</Button>
                    <Button className="button2"  variant="outlined" style={{color:"#ffffff",border:'1px solid #ffffff',margin:'0 5px'}}>Cancel</Button>
            </DialogContent>  
        </Dialog>
    )
}

export default EditButton
