import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import styles from "../../styles/admin/Table.module.css";
export const CustomTable = ({ tableHead, children }) => {
  return (
    <>
    
    <TableContainer>
      <Table>
        <TableHead className={styles.tableHead}>
          <TableRow>
            {tableHead.map((cell, index) => (
              <TableCell key={index} className={styles.header}>
                {cell}
              </TableCell>
            ))}
            <TableCell key={"actions"} className={styles.header}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
    </>
  );
};
