/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/admin/Table.module.css";
import { useState } from "react";
import { getReligiousCommittee, getReligiousCommittee_helper } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTransferAlt } from "react-icons/bi";
import { ViewReligiousCommittee } from "./viewReligiousCommittee";
import { UpdateReligiousCommittee } from "./updateReligiousCommittee";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [religiousCommittee_data, setReligiousCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getReligiousCommittee_helper({
      religiousCommitteeId: id,
    });
    if (results) return setReligiousCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "religiousCommittees",
    getReligiousCommittee
  );
  if (isLoading) return <div>Committee is Loading...</div>;
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
                  title={"View Religious Committee"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewReligiousCommittee data={religiousCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Religious committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateReligiousCommittee data={religiousCommittee_data[0]} />
                </TableModal>
                <Button
                  className={styles.delete}
                  onClick={() => onDelete({ id })}
                  startIcon={<BiTransferAlt />}
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
