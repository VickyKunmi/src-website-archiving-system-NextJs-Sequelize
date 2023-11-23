/* eslint-disable @next/next/no-img-element */
import { deleteAction } from "@/redux/reducer";
import { BiEdit, BiTrashAlt, BiBook } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { UpdateContact } from "./updateContact";
import { getContact_helper } from "../../lib/helper";
import { useState } from "react";
import { TableModal } from "../global/TableModal";
import { getContacts } from "../../lib/helper";
import { useQuery } from "react-query";
import { ViewContact } from "./viewContact";
// stylesheet
import styles from "../../styles/admin/Table.module.css";
const TableHead = ["Name", "Position", "Phone No", "Email"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [contact_data, setContactData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getContact_helper({ contactId: id });
    if (results) return setContactData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery("contacts", getContacts);

  if (isLoading) return <div>Contact is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;
  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(({ id, name, phone_no, email, position }, i, k) => (
            <TableRow key={i}>
              <TableCell>{name.slice(0, 20)}</TableCell>
              <TableCell>{position}</TableCell>
              <TableCell>{phone_no}</TableCell>
              <TableCell>{email.slice(0, 20)}</TableCell>
              <TableCell>
                <TableModal
                  callbackfn={onUpdate}
                  data={id}
                  key={k}
                  icon={<BiBook></BiBook>}
                  title={"View Contact"}
                  btntitle={"View"}
                >
                  <ViewContact data={contact_data[0]} />
                </TableModal>
                <TableModal
                  callbackfn={onUpdate}
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Contact"}
                  btntitle={"Edit"}
                >
                  <UpdateContact data={contact_data[0]} />
                </TableModal>

                <Button
                  className={styles.delete}
                  onClick={() => onDelete({ id })}
                  startIcon={<BiTrashAlt />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        : null}
    </CustomTable>
  );
}
