/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CustomTable } from "../global/CustomTable";
import { Button, TableCell, TableRow } from "@mui/material";
import styles from "../../styles/admin/Table.module.css";
import { TableModal } from "../global/TableModal";
import { BiBook, BiEdit, BiTrash } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getNews, getNews_helper } from "@/lib/helper";
import Link from "next/link";
import { deleteAction } from "@/redux/reducer";
import { useQuery } from "react-query";
import UpdateNews from "./updateNews";
const TableHead = ["Title", "Category", "Date", "Image"];

export function NewsTable({ records }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const [news_data, setNewsData] = useState([]);

  const onUpdate = async (id) => {
    const results = await getNews_helper({ newsId: id });
    if (results) return setNewsData(results);
  };
  const onDelete = ({ id }) => {
    if (!visible) {
      dispatch(deleteAction(id));
    }
  };
  const { isLoading, isError, data, error } = useQuery("news", getNews);


  if (isLoading) return <div>News is Loading...</div>;
  if (isError) return <div>Got Error{error}</div>;

  return (
    <CustomTable tableHead={TableHead}>
      {records.length > 0
        ? records.map(({ id, title, category, news, date, img }, i, j) => (
            <TableRow key={i}>
              <TableCell>{title}</TableCell>
              <TableCell>{category}</TableCell>
              {/* <TableCell>{news.slice(0, 20)}...</TableCell> */}
              <TableCell>{date}</TableCell>
              <TableCell>
                <img src={img} alt="" className={styles.images} />
              </TableCell>
              <TableCell>

                <TableModal
                  data={id}
                  key={j}
                  icon={<BiBook />}
                  title={"View News"}
                  btntitle={"View"}
                  className={styles.view}
                  callbackfn={onUpdate}
                >
                 {/* <ViewN */}
                </TableModal>
                
                <TableModal
                  callbackfn={onUpdate}
                  data={id}
                  key={i}
                  icon={<BiEdit />}
                  title={"Update News"}
                  btntitle={"Edit"}
                >
                  <UpdateNews />
                </TableModal>
                <Button
                  className={styles.delete}
                  onClick={() => onDelete({ id })}
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
