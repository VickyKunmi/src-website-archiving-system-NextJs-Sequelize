/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */

import { useRouter } from "next/router";
import { useEffect } from "react";


export default function requireAuth(Component) {
    return () => {
      const router = useRouter();
  
      useEffect(() => {
        // Check if the user is authenticated
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/projectJugler/admin");
        }
      }, []);
  
      return <Component />;
    };
  }