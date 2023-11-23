/* eslint-disable @next/next/no-img-element */
import {
  getOrganizingCommittee,
  getOrganizingCommittee_helper,
} from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiTransferAlt } from "react-icons/bi";
import { ViewOrganizingCommitte } from "./viewOrganizingCommittee";
import UpdateJudiciaryCommittee from "./updateJudiciaryCommittee";
import styles from "../../styles/admin/Table.module.css";
import { UpdateOrganizingCommittee } from "./updateOragnizingCommittee";

const TableHead = ["Name", "Position", "Image"];
export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [organizingCommittee_data, setOrganizingCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getOrganizingCommittee_helper({
      organizingCommitteeId: id,
    });
    if (results) return setOrganizingCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "organizingCommittees",
    getOrganizingCommittee
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
                  title={"View Organizing Committee"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewOrganizingCommitte data={organizingCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiBook />}
                  title={"Update Organizing Committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateOrganizingCommittee
                    data={organizingCommittee_data[0]}
                  />
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
