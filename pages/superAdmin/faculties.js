import React from 'react'

export default function faculties() {
  return (
    <div>faculties</div>
  )
}


export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token !== process.env.TOKEN){
      return {
        redirect: {
          destination: "/superAdmin/login",
          permanent: false,
        }
      }
    }
    return{
      props: {},
    }
  }
  