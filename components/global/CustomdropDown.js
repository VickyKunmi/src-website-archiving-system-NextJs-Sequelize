import React from "react";
import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import styles from "../../styles/Navbar.module.css";

export const CustomdropDown = ({ title, children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <li>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          className={styles.dropbtn}
        >
          {title} {isOpen}
        </MenuButton>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          className={styles.dropDown}
        >
          {children}
        </MenuList>
      </Menu>
    </li>
  );
};
