/* eslint-disable @next/next/no-img-element */
import { getEvent_helper, getEvents } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import styles from "../../styles/admin/Table.module.css";
import { TableModal } from "../global/TableModal";
import { BiBook, BiTrash } from "react-icons/bi";
import Link from "next/link";
import ViewEvent from "./viewEvent";
import UpdateEvent from "./updateEvent";



const TableHead = ["Title", "Description", "Date", "Image"];

export function EventTable({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [event_data, setEventData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getEvent_helper({ eventId: id });
    if (results) return setEventData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery("event", getEvents);

  if (isLoading) return <div>News is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;

  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(
            ({ id, title, category, description, date, img }, i, j) => (
              <TableRow key={i}>
                <TableCell>{title}</TableCell>
                <TableCell>{description.slice(0, 20)}...</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <img src={img} alt="" className={styles.images} />
                </TableCell>
                <TableCell>
                  <TableModal
                    data={id}
                    key={j}
                    icon={<BiBook />}
                    title={"View Event"}
                    btntitle={"View"}
                    className={styles.view}
                    callbackfn={onUpdate}
                  >
                   {/* <ViewEvent data={event_data[0]} /> */}
                   <ViewEvent data={event_data} />
                  </TableModal>
                  <TableModal
                    data={id}
                    key={i}
                    icon={<BiBook />}
                    title={"Edit Event"}
                    btntitle={"Edit"}
                    className={styles.view}
                    callbackfn={onUpdate}
                  >
                   {/* <ViewEvent data={event_data[0]} /> */}
                   <UpdateEvent data={event_data} />
                  </TableModal>
                 

                  <Button
                    className={styles.delete}
                    onClick={() => onDelete({ id })}
                    startIcon={<BiTrash />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )
          )
        : null}
    </CustomTable>
  );
}
