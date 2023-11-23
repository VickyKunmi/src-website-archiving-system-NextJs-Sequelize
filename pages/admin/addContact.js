import styles from "../../styles/admin/ExecutiveForm.module.css";
import { BiPlus } from "react-icons/bi";
import { useQueryClient, useMutation } from "react-query";
import { addContact, getContacts } from "@/lib/helper";
import { useState } from "react";
import axios from "axios";
import { Success } from "@/components/admin/Success";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

export default function AddExecutive() {
  const [email, setEmail] = useState(null);
  const [position, setPosition] = useState(null);
  const [name, setName] = useState(null);
  const [phone_no, setPhone_no] = useState(null);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const queryClient = useQueryClient();

  const handleAddContact = async (model) => {
    const result = await addContact(model);
    const { isSaved } = result;
    if (isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/admin/contact");
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data= new FormData();
    
    try {
        const model = {
            name,
            position,
            phone_no,
            email,
         
          }
        await handleAddContact(model);
      }
      // addMutation.mutate(model);
      catch (err) {
      console.log(err);
    }
  };

  const session = useRequireAuth();


  return (
    <>
    {session ? (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar/>
      <Header/>
      {savedNotify && <Success message={"Contact added successfully!"} />}

      <div className={styles.content}>
       
        <div className={styles.header}>Add a new Contact</div>
        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formlist}>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={styles.input}
              />
            </div>
            <div className={styles.formlist}>
              <input
                type="text"
                name="position"
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position"
                className={styles.input}
              />
            </div>
            <div className={styles.formlist}>
              <input
                type="text"
                name="phone_no"
                placeholder="Phone number"
                onChange={(e) => setPhone_no(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formlist}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <button className={styles.add}>
              Add
              <span className={styles.btnspan}>
                <BiPlus className={styles.btn}></BiPlus>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
    ) : (
      // Render content when the user is not authenticated
      <div>
        <alert>session expired! try to login to access page!</alert>

        {/* Render login form or redirect to the login page */}
      </div>
    )}
  </>
  );
}




export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(session && session.user.role === 2)
  return {
    redirect: {
      destination: "/admin/login"
    }
  
  }
  return {props: {session}}
}