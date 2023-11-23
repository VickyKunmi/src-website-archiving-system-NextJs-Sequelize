import Navbar from "./Navbar";
import { useState } from "react";

const Layout = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <>
      <Navbar clickCount={clickCount} setClickCount={setClickCount} />
    </>
  );
};

export default Layout;
