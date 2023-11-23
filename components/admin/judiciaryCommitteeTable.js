/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  getJudicaryCommittee_helper,
  getJudiciaryCommittee,
} from "@/lib/helper";
import styles from "../../styles/admin/Table.module.css";

import { deleteAction } from "@/redux/reducer";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTransferAlt } from "react-icons/bi";
import ViewJudiciaryCommittee from "./viewJudiciaryCommittee";
import UpdateJudiciaryCommittee from "./updateJudiciaryCommittee";

const TableHead = ["Name", "Position", "Image"];

export function Table({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [judiciaryCommittee_data, setJudiciaryCommitteeData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getJudicaryCommittee_helper({
      judiciaryCommitteeId: id,
    });
    if (results) return setJudiciaryCommitteeData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, error } = useQuery(
    "judiciaryCommittees",
    getJudiciaryCommittee
  );
  if (isLoading) return <div>Committe is loading...</div>;
  if (isError) return <div>Got error{error}</div>;
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
                  title={"View Judiciary Executive"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <ViewJudiciaryCommittee data={judiciaryCommittee_data[0]} />
                </TableModal>
                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update Judiciary committee"}
                  btntitle={"Edit"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                  <UpdateJudiciaryCommittee data={judiciaryCommittee_data[0]} />
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
