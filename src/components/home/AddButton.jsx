import React from 'react'
import { Dialog,Box,DialogContent, Typography, Button,TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import DateComponent from './DateComponent'


const useStyles=makeStyles({

    container:{
        background:'#2A3E4C',
        width:"100%",
        height:'85vh'
    },
    heading:{
        color:"#fff",
        margin:"20px 10px 10px 20px",
        fontSize:20
    },
    textFieldContainer:{
        display:'flex',
        flexFlow:"row wrap",
        margin:'20px auto',
        paddingLeft:7,
        "&>*":{
            width:'22vw',
        }
    },
    button:{
        width:'48%',
    }
})


const AddButton = ({openAdd,setOpenAdd}) => {
    const classes=useStyles()
    const closeDialog=()=>{
        setOpenAdd(false)
    }
    const a="anshul"
    return (
        <Dialog open={openAdd} onClose={()=>closeDialog()}
        sx={{
            "& .MuiPaper-root": {
              maxWidth:'unset'
            }
          }}
       
        >
            <DialogContent className={classes.container}>
            <Typography className={classes.heading}>Add</Typography>
                <Box className={classes.textFieldContainer}>
                <TextField id="filled-basic" label="Business Code" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Customer Number" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <DateComponent heading="Clear Date"/>
                <TextField id="filled-basic" label="Business Year" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Document Id" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <DateComponent heading="Clear Date"/>
                <DateComponent heading="Clear Date"/>
                <DateComponent heading="Clear Date"/>
                <TextField id="filled-basic" label="Invoice Currency" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Document Type" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Posting Id" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Total Open Amount" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <DateComponent heading="Clear Date"/>
                <TextField id="filled-basic" label="Customer Payment Terms" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                <TextField id="filled-basic" label="Invoice Id" variant="filled" style={{margin:'20px 5px',background:'#ffffff'}}/>
                </Box>
                <Button className={classes.button}
                 style={{color:'#ffffff',border:'1px solid #ffffff',margin:'0 15px'}}
                variant="outlined">Add</Button>
                <Button className={classes.button} style={{color:'#ffffff',border:'1px solid #ffffff'}} variant="outlined" >Cancel</Button>
            </DialogContent>  
        </Dialog>

    )
}

export default AddButton
