/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/admin/Table.module.css";
import { CustomTable } from "../global/CustomTable";
import { useState } from "react";
import {
  getAcademicCommittee,
  getAcademicCommittee_helper,
} from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTrashAlt } from "react-icons/bi";
import { ViewAcademicCommitte } from "./viewAcademicCommittee";
import { UpdateAcademicCommittee } from "./updateAcademicCommitte";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [academicCommittee_data, setAcademicCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getAcademicCommittee_helper({
      academicCommitteeId: id,
    });
    if (results) return setAcademicCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery(
    "academicCommittees",
    getAcademicCommittee
  );
  if (isLoading) return <div> Committee is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;

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
                  icon={<BiBook />}
                  title={"View Academic Committee"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewAcademicCommitte data={academicCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Academic Committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateAcademicCommittee data={academicCommittee_data[0]} />
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
