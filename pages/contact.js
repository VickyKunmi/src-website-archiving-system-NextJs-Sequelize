/* eslint-disable react/jsx-key */
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import SideBar from "@/components/SideBar";
import axios from "axios";
// import { TableContainer } from "@chakra-ui/react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.element}>
            <TableContainer className={styles.table}>
              <Table>
                <TableHead className={styles.tableHead}>
                  <TableRow>
                    <TableCell className={styles.header}>Name</TableCell>
                    <TableCell className={styles.header}>Position</TableCell>
                    <TableCell className={styles.header}>Phone No</TableCell>
                    <TableCell className={styles.header}>Email</TableCell>
                  </TableRow>
                </TableHead>
                
                  <TableBody>
                    {contact.map((contactInfo) => (
                      <TableRow key={contactInfo.id}>
                        <TableCell> {contactInfo.name}</TableCell>
                        <TableCell> {contactInfo.position}</TableCell>
                        <TableCell> {contactInfo.phone_no}</TableCell>
                        <TableCell> {contactInfo.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className={styles.right}>
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/Contact");
  return {
    props: {
      contact: res.data,
    },
  };
};
