/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/admin/Table.module.css";
import { useState } from "react";
import {
  getEditorialCommittee,
  getEditorialCommittee_helper,
} from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTrashAlt } from "react-icons/bi";
import { ViewEditorialCommittee } from "./viewEditorialCommittee";
import { UpdateEditorialCommittee } from "./updateEditorialCommittee";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.toggleForm);
  const dispatch = useDispatch();
  const [editorialCommittee_data, setEditorialCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getEditorialCommittee_helper({
      editorialCommitteeId: id,
    });
    if (results) return setEditorialCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "editorialCommittees",
    getEditorialCommittee
  );
  if (isLoading) return <div>Committee is loading...</div>;
  if (isError) return <div> Got error{error}</div>;

  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(({ id, name, position, img }, i, j) => (
            <TableRow key={i}>
              <TableCell>{name.slice(0, 20)}...</TableCell>
              <TableCell>{position}</TableCell>
              <TableCell>
                <img src={img} alt="img" className={styles.images} />
              </TableCell>
              <TableCell>
                <TableModal
                data={id}
                key={j}
                icon={<BiBook/>}
                title={"View Editorial COmmittee"}
                btntitle={"View"}
                className={styles.view}
                callbackfn={onUpdate}>
                    <ViewEditorialCommittee data={editorialCommittee_data[0]}/>

                </TableModal>
                <TableModal
                data={id}
                key={i}
                icon={<BiEdit/>}
                title={"Update Editorial Committee"}
                btntitle={"Edit"}
                className={styles.view}
                callbackfn={onUpdate}>
                    <UpdateEditorialCommittee data={editorialCommittee_data[0]}/>
                </TableModal>
                <Button className={styles.delete} onClick={() => onDelete({id})} startIcon={<BiTrashAlt />}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        : null}
    </CustomTable>
  );
}
