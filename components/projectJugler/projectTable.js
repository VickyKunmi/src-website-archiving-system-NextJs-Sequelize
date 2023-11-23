import React, { useState } from "react";
import styles from "../../styles/PJ/Table.module.css";
import { CustomTable } from "../global/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { getProject, getProject_helper } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { Button, TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTrash } from "react-icons/bi";
import Link from "next/link";
import { ViewProject } from "./viewProject";
import { UpdateProject } from "./updateProject";

const TableHead = ["Name", "Title", "Year", "Faculty"];


export function ProjectTable({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [project_data, setProjectData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getProject_helper({ projectId: id });
    if (results) return setProjectData(results);
  };

  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery("project", getProject);
  if (isLoading) return <div>Loading projects....</div>;
  if (isError) return <div>Got error {error}</div>;

  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(({id,  student_id, studentname, year, title }, i, j) => (
            <TableRow key={i}>
              <TableCell>{student_id}</TableCell>
              <TableCell>{studentname}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>
                <TableModal
                  data={id}
                  key={j}
                  icon={<BiBook />}
                  title={"View student project"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                 <ViewProject data={project_data[0]} />
                 
                </TableModal>

                <TableModal
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update student project"}
                  btntitle={"Edit"}
                  className={styles.update}
                  callbackfn={onUpdate}
                >
                 <UpdateProject data={project_data[0]} />
                </TableModal>

                <Button
                  className={styles.delete}
                  onClick={() => onDelete({id})}
                  startIcon={<BiTrash />}
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
