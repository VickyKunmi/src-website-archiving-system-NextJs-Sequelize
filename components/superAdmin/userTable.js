import React, { useState } from 'react'
import styles from "../../styles/PJ/Table.module.css";
import { CustomTable } from '../global/CustomTable';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getserver } from '@/config';



const TableHead = ["Username", "Role"];

export function UserTable({records}) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [user_data, setUserData] = useState([]);
  
  const router = useRouter();
  const deleteUser = (id) => {
    axios.delete(`/api/AdminRegister?id=${id}`)
      .then(response => {
        setTimeout(()=> {
          router.replace(`${getserver}/superAdmin/users`)
        })
      })
      .catch(error => {
        // Handle error
        console.error('Error deleting user:', error);
      });
  };



 
  return (
    <CustomTable tableHead={TableHead}>
      {records.length >  0
      ? records.map(({id, role, username}, i, k) => (
        <TableRow key={i}>
          <TableCell>{username}</TableCell>
          <TableCell>{role}</TableCell>
          <TableCell>
            <button style={{backgroundColor: "red", color: "white", width: "20%", fontSize: "18px"}} onClick={() => deleteUser(id)}>Delete</button>
          </TableCell>
        </TableRow>
      )): null}
    </CustomTable>
  )
}
