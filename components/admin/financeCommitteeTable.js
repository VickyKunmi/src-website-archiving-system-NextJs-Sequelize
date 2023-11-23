/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/admin/Table.module.css";
import { getFinanceCommittee, getFinanceCommittee_helper } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { BiBook, BiEdit, BiTrashAlt } from "react-icons/bi";
import { TableModal } from "../global/TableModal";
import { ViewFinanceCommitte } from "./viewFinanceCommittee";
import { UpdateFinanceCommittee } from "./updateFinanceCommittee";
import { useState } from "react";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [financeCommittee_data, setFinanceComitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getFinanceCommittee_helper({
      financeCommitteeId: id,
    });
    if (results) return setFinanceComitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "financeCommittees",
    getFinanceCommittee
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
                  title={"View Finance Committee"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewFinanceCommitte data={financeCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Finance Committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateFinanceCommittee data={financeCommittee_data[0]} />
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
