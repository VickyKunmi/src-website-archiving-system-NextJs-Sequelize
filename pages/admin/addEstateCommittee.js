import Head from "next/head";
import styles from "../../styles/admin/ExecutiveForm.module.css";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import { useState } from "react";
import { useRouter } from "next/router";
import { addEstateCommittee } from "@/lib/helper";
import { Success } from "@/components/admin/Success";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

export default function AddEstateCommittee() {
  const [file, setFile] = useState(null);
  const [position, setPosition] = useState(null);
  const [name, setName] = useState(null);
  const router = useRouter();
  const [savedNotify, setSavedNotify] = useState(null);

  const handleAddEstateCommittee = async (model) => {
    const result = await addEstateCommittee(model);
    const { isSaved } = result;
    if (isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/admin/committee/estate");
      }, 500);
    }
  };
  const session = useRequireAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
        data
      );
      const { url } = uploadRes.data;
      if (url) {
        const model = {
          name,
          position,
          img: url,
        };
        await handleAddEstateCommittee(model);
      }
    } catch (err) {
      console.log(err);
    }
  };



  const {status} = useSession ({
    required: true,
    onUnauthenticated: () => {
      router.push("/admin/login")
    }
  })
  
  
  if(status === "authenticated")

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
      <LeftNavbar />
      <Header />
      {savedNotify && (
        <Success message={"Estate committee has been added successfully"} />
      )}

      <div className={styles.content}>
        <div className={styles.header}>Add a new Estate Committee</div>
        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fromlist}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formlist}>
              <input
                type="text"
                name="position"
                className={styles.input}
                placeholder="Position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className={styles.formlist}>
              <input
                type="file"
                name="img"
                className={styles.input}
                placeholder="Image"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className={styles.add}>
                Add
                <span className={styles.btnspan}>
                    <BiPlus className={styles.btn} />
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