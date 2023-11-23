/* eslint-disable react/jsx-no-undef */
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import {getserver} from "@/config"
import { getserver } from "@/config";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { CustomdropDown } from "./global/CustomdropDown";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [clickCounts, setClickCounts] = useState({});

  useEffect(() => {
    // Fetch the click counts from the backend
    const fetchClickCounts = async () => {
      try {
        const response = await fetch('/api/clickCounts');
        const clickCounts = await response.json();
        setClickCounts(clickCounts);
      } catch (error) {
        console.error('Error fetching click counts:', error);
      }
    };
    

    fetchClickCounts();
  }, []);

  const updateClickCount = async (buttonName) => {
    try {
      await fetch(`/api/clickCounts?buttonName=${buttonName}`, { method: 'POST' });
      // Update the click count locally
      setClickCounts((prevClickCounts) => ({
        ...prevClickCounts,
        [buttonName]: prevClickCounts[buttonName] + 1 || 1,
      }));
    } catch (error) {
      console.error('Error updating click count:', error);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/img/srcLogo.png"
              alt="float"
              width="45"
              height="45"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className={styles.texts}>
          <Link href="/">
            <div className={styles.text}>Welcome</div>
            <div className={styles.text}>SRC</div>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <input type="checkbox" className={styles.togglemenu} />
        <div className={styles.hamburger}></div>

        <ul className={styles.list}>
          <li>
            <Menu>
              <MenuButton
                as={Link}
                href="/"
                onClick={() => updateClickCount("Home")}
                className={styles.dropbtn}
              >
                Home
              </MenuButton>
            </Menu>
          </li>

          <CustomdropDown title={"SRC"}>
            <MenuList>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/src/aboutSrc"
                onClick={() => updateClickCount("About Src")}
              >
                About Us
              </MenuItem>

              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/src/role"
                onClick={() => updateClickCount("Src role")}
              >
                Role of SRC
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/src/constitution"
                onClick={() => updateClickCount("Src constitution")}
              >
                SRC constitution
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/src/councilElection"
                onClick={() => updateClickCount("Src council election")}
              >
                Council election
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/src/project"
                onClick={() => updateClickCount("Src project")}
              >
                Our Project
              </MenuItem>
            </MenuList>
          </CustomdropDown>

          <CustomdropDown title={"Faculties"}>
            <MenuList>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/faculties/cems"
                onClick={() => updateClickCount("cems faculty")}
              >
                Computing Engineering & Mathematical sciences
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/faculties/eba"
                onClick={() => updateClickCount("eba faculty")}
              >
                Economic & Business Administration
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                onClick={() => updateClickCount("education faculty")}
                href="/faculties/edu"
              >
                Education
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/faculties/phas"
                onClick={() => updateClickCount("phas faculty")}
              >
                Health and Allied Science
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/faculties/rs"
                onClick={() => updateClickCount("Rs faculty")}
              >
                Religious and Social Science
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/faculties/rs"
                onClick={() => updateClickCount("graduate studies")}
              >
                School of Graduate Studies
              </MenuItem>
            </MenuList>
          </CustomdropDown>
          <CustomdropDown title={"Executive"}>
            <MenuList>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/executives/srcExecutives"
                onClick={() => updateClickCount("src executives")}
              >
                SRC Executives
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/executives/associations"
                onClick={() => updateClickCount("associations executives")}
              >
                Departmental/Associations
              </MenuItem>
            </MenuList>
          </CustomdropDown>

          <CustomdropDown title={"Committees"}>
            <MenuList>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/committees/academic"
                onClick={() => updateClickCount("academic committee")}
              >
                Academic Committee
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/committees/edictorial"
                onClick={() => updateClickCount("edictorial committee")}
              >
                Edictorial Committee
              </MenuItem>
            </MenuList>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/estate"
              onClick={() => updateClickCount("estate committee")}
            >
              Estate Committee
            </MenuItem>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/finance"
              onClick={() => updateClickCount("finance committee")}
            >
              Finance Committee
            </MenuItem>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/judiciary"
              onClick={() => updateClickCount("judiciary committee")}
            >
              Judiciary Committee
            </MenuItem>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/organizing"
              onClick={() => updateClickCount("organizing committee")}
            >
              Organizing Committee
            </MenuItem>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/procurement"
            >
              Procurement Committee
            </MenuItem>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/committees/religious"
              onClick={() => updateClickCount("religious committee")}
            >
              Religious Committee
            </MenuItem>
          </CustomdropDown>

          <li>
            <Menu>
              <MenuButton
                as={Link}
                href="/news"
                onClick={() => updateClickCount("news")}
                className={styles.dropbtn}
              >
                News
              </MenuButton>
            </Menu>
          </li>

          <CustomdropDown title={" Welfare/Advice"}>
            <MenuList>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/welfare/freshersInfo"
                onClick={() => updateClickCount("freshersInfo")}
              >
                Freshers Info
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/welfare/hostels"
                onClick={() => updateClickCount("hostels")}
              >
                Hostels
              </MenuItem>
              <MenuItem
                className={styles.dropdownlist}
                as={Link}
                href="/welfare/scholarship"
                onClick={() => updateClickCount("scholarship")}
              >
                scholarship & Aids
              </MenuItem>
            </MenuList>
            <MenuItem
              className={styles.dropdownlist}
              as={Link}
              href="/welfare/attachment"
              onClick={() => updateClickCount("attachment")}
            >
              Attachment/Internship
            </MenuItem>
          </CustomdropDown>
          <Menu>
            <MenuButton
              as={Link}
              href="/events"
              onClick={() => updateClickCount("events")}
              className={styles.dropbtn}
            >
              Events
            </MenuButton>
          </Menu>
          <li>
            <Menu>
              <MenuButton
                as={Link}
                href="/contact"
                onClick={() => updateClickCount("contact")}
                className={styles.dropbtn}
              >
                Contact Us
              </MenuButton>
            </Menu>
          </li>
        </ul>
      </div>
      <div className={styles.but}>
        <Link href="/projectJugler/u" className={styles.pj}>
          <button className={styles.button}>Project Jugler</button>
        </Link>
      </div>
    </div>
  );
}
