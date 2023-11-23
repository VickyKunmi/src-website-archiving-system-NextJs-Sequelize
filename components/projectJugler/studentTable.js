import React, { useState } from "react";
import styles from "../../styles/PJ/Table.module.css";
import { CustomTable } from "../global/CustomTable";
import { useDispatch, useSelector } from "react-redux";
// import { getStudent_helper, getStudents } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import { TableCell, TableRow } from "@mui/material";
import { TableModal } from "../global/TableModal";
import { BiBook } from "react-icons/bi";
import { ViewStudent } from "./viewStudent";
import { paginate } from "../../utils/paginate";
import Pagination from "../Pagination";
import { getProject_helper } from "@/lib/helper";

const TableHead = [
  "Index No",
  "Name",
  "Graduating year",
  // "Title",
  "Supervisor",
];
export function StudentTable({ records }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredStudents = records.filter((p) =>
    p.studentname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [project_data, setProjectData] = useState([]);

  const paginatedStudents = paginate(filteredStudents, currentPage, pageSize);

  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [student_data, setStudentData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getProject_helper({ projectId: id });
    if (results) return setProjectData(results);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search projects..."
          className={styles.search}
        />
      </div>

      <CustomTable tableHead={TableHead}>
        {/* {records.length > 0
        ? records.map(
            (
              { id, studentname, student_id, year,  supervisorname },
              i,
              k,
            ) => ( */}
        {paginatedStudents.map((studentInfo) => (
          <TableRow key={studentInfo.id}>
            <TableCell>{studentInfo.student_id.slice(0, 20)}</TableCell>
            <TableCell>{studentInfo.studentname.slice(0, 20)}</TableCell>
            <TableCell>{studentInfo.year.slice(0, 20)}</TableCell>
            {/* <TableCell>{title.slice(0, 20)}</TableCell> */}
            <TableCell>{studentInfo.supervisorname.slice(0, 20)}</TableCell>
            <TableCell>
              <TableModal
                callbackfn={onUpdate}
                data={studentInfo.id}
                key={studentInfo.id}
                icon={<BiBook />}
                title={"View Student details"}
                btntitle={"View"}
              >
                <ViewStudent data={project_data[0]} />
              </TableModal>
            </TableCell>
          </TableRow>
        ))}
        {/* )
          )
        : null} */}
      </CustomTable>
      <div className={styles.pagination}>

      <Pagination
        items={records.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
      </div>
    </>
  );
}
