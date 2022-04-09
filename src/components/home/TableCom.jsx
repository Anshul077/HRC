import React,{useState,useEffect} from 'react'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core'
import { Typography,Box, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import EditButton from "./EditButton";
const useStyles=makeStyles({
})

const TableCom = ({openEdit,setOpenEdit}) => {

  const columnItem=["S NO","Bussiness Code","Customer Code","Clear code","Bussiness Year","Document Id","Posting Date","Document Create Date","Due Date","Invoice Currency","Document Type","Posting Id","Total Open Amount","Baseline Create Date"]

  const data=["1","U001","200769623","2020-02-11","2020-01-01","1930438491","2020-01-26","2020-01-25","2020-02-10","USD","RV","1","54273.28","2020-01-26"]

  let checkVal=data[9]
const [val,setVal]=useState(checkVal)
const [editedVal,setEditedVal]=useState("USD")
  const classes=makeStyles()
  editedVal==="USD"?data[9]="USD":data[9]=editedVal
  console.log(editedVal,data[9])
  return (
    <>
      <TableContainer >
      <Table >
       <TableHead style={{marginRight:40}}>
      <TableRow >
        <TableCell style={{color:"#ffffff"}}>
          <input type="checkbox" />
        </TableCell>
        {
          columnItem.map(item=>(
            <TableCell align="right" style={{color:"#ffffff"}}>
                {item}
            </TableCell>
          ))
        }
           
      </TableRow>
      
        <TableRow>
        <TableCell style={{color:"#ffffff"}}>
            <input  type="checkbox" />
          </TableCell>
          {
            data.map(item=>
              (
              <TableCell align="right" style={{color:"#ffffff"}}>
                  {item}
              </TableCell>
            )
            )
              }
        </TableRow>
   
      
    </TableHead>
    </Table>
    </TableContainer>
    <EditButton openEdit={openEdit} setOpenEdit={setOpenEdit} val={val} setVal={setVal} setEditedVal={setEditedVal} data={data}/>
    </>
    )
}

export default TableCom;











// const columnItem=[
//   {
//     columnName:"S NO"
//   },
//   {
//     columnName:"Bussiness Code"
//   },
//   {
//     columnName:"Customer Number"
//   },
//   {
//     columnName:"Clear Code"
//   },
//   {
//     columnName:"Bussiness Year"
//   },
//   {
//     columnName:"Document Id"
//   },
//   {
//     columnName:"Posting Date"
//   },
//   {
//     columnName:"Document Create Date"
//   },
//   {
//     columnName:"Due Date"
//   },
//   {
//     columnName:"Invoice Currency"
//   },
//   {
//     columnName:"Document Type"
//   },
//   {
//     columnName:"Posting Id"
//   },
//   {
//     columnName:"Total Open Amount"
//   },
//   {
//     columnName:"Baseline Create Date"
//   },
// ]