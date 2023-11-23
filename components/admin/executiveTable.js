/* eslint-disable @next/next/no-img-element */
import { deleteAction } from "@/redux/reducer";
import { BiEdit, BiTrashAlt, BiBook } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { UpdateExecutive } from "./updateExecutive";
import { getExecutive_helper } from "../../lib/helper";
import { useState } from "react";
import { TableModal } from "../global/TableModal";
import { getExecutives } from "../../lib/helper";
import { useQuery } from "react-query";
// stylesheet
import styles from "../../styles/admin/Table.module.css";
import { ViewExecutive } from "./viewExecutive";
const TableHead = ["Name", "Position", "Faculty", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [executive_data, setExecutiveData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getExecutive_helper({ executiveId: id });
    if (results) return setExecutiveData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery(
    "executives",
    getExecutives
  );

  if (isLoading) return <div>Executive is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;
  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(({ id, name, position, faculty, img }, i, j) => (
            <TableRow key={i}>
              <TableCell>{name.slice(0, 20)}</TableCell>
              <TableCell>{position}</TableCell>
              <TableCell>{faculty}</TableCell>
              <TableCell>
                <img src={img} alt="" className={styles.images} />
              </TableCell>
              <TableCell>
                <TableModal
                  data={id}
                  key={j}
                  icon={<BiBook />}
                  title={"View Executive"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewExecutive data={executive_data[0]} />
                </TableModal>
                <TableModal
                  callbackfn={onUpdate}
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Executives"}
                  btntitle={"Edit"}
                >
                  <UpdateExecutive data={executive_data[0]} />
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
