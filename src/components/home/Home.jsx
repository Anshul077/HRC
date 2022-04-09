import React,{useState} from "react";
import { Typography,Box, Button} from '@material-ui/core'
import SearchBar from './SearchBar'
import TableCom from './TableCom'
import {makeStyles} from '@material-ui/styles'

import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import AdvanceSearch from './AdvanceSearch'


const useStyles=makeStyles({
  container:{
    width:'100%',
    height:55,
    color:'#fff',
    display:'flex',
  },
  component:{
    width:'100%',
    background:' #2A3E4C',
    display:'flex',
    margin:'30px 0 0 0 ',
    flexDirection:'column'
  },
  box1:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    marginTop:20,
  },
  root:{
    "&.MuiButton-root": {
      border: "1px #14AFF1 solid",
      width:"12%",
      borderRadius:0
    },
    "&.MuiButton-root:hover":{
      backgroundColor:'#14AFF1'
    },
    "&.MuiButton-text": {
      color: "#ffffff"
    },
  }
})

const styles = {
 
};


const Home = () => {
  const [openEdit,setOpenEdit]=useState(false)
  const [openDelete,setOpenDelete]=useState(false)
  const [openAdd,setOpenAdd]=useState(false)
  const [openAdvance,setOpenAdvance]=useState(false)
  const editOnClick=()=>{
    setOpenEdit(true)
  }
  const deleteOnClick=()=>{
    setOpenDelete(true)
  }
  const addOnClick=()=>{
    setOpenAdd(true)
  }
  const advanceOnClick=()=>{
    setOpenAdvance(true)
  }

  const classes=useStyles()
  return (
    <>
    <Box className={classes.container}>
      <Typography style={{fontSize:35,float:'left',marginRight:'28%'}}>ABC Products</Typography>
      <Typography style={{fontSize:35}}>highradius</Typography>
    </Box>

    <Box className={classes.component}>
      <Box className={classes.box1}>
      <Button className={classes.root} style={{borderRightRadius:0,borderRight:0,borderTopLeftRadius: 8,borderBottomLeftRadius: 8,marginLeft:10}}>Predict</Button>
      <Button className={classes.root} style={{borderRight:0,borderLeft:0}}>Analytics View</Button>
      <Button className={classes.root} style={{borderLeft:0,borderTopRightRadius: 8,borderBottomRightRadius: 8}} onClick={()=>advanceOnClick()}>Advance Search</Button>
      <SearchBar/>
      <Button className={classes.root} onClick={()=>addOnClick()}>ADD</Button>
      <Button className={classes.root} onClick={()=>editOnClick()}>EDIT</Button>
      <Button className={classes.root} style={{marginRight:10}} onClick={()=>deleteOnClick()}>DELETE</Button> 
      </Box>

      <Box className={classes.box2}>
    <TableCom openEdit={openEdit} setOpenEdit={setOpenEdit}/>
      <DeleteButton openDelete={openDelete} setOpenDelete={setOpenDelete}/>
      <AdvanceSearch openAdvance={openAdvance} setOpenAdvance={setOpenAdvance}/>
      <AddButton openAdd={openAdd} setOpenAdd={setOpenAdd}/>
      </Box>
    </Box>

    </>
  );
};

export default Home;
