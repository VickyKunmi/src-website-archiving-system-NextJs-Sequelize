/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/admin/Table.module.css";
import { useState } from "react";
import { getProcurementCommittee, getProcurementCommittee_helper } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTransferAlt } from "react-icons/bi";
import { ViewProcurementCommitte } from "./viewProcurementCommittee";
import { UpdateProcurementCommittee } from "./updateProcurementCommitte";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [procurementCommittee_data, setProcurementCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getProcurementCommittee_helper({
      procurementCommitteeId: id,
    });
    if (results) return setProcurementCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "procurementCommittees",
    getProcurementCommittee
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
                  title={"View Procurement Committee"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewProcurementCommitte data={procurementCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update procurement committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateProcurementCommittee data={procurementCommittee_data[0]} />
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
