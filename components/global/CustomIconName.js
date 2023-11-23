// import { Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import styles from "../../styles/admin/LeftNavbar.module.css";
export const CustomIconName = ({title, Icon}) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
      const handleMouseOut = () => {
        setIsHovering(false);
      }
  return (
    <div>
        <FontAwesomeIcon 
        className={styles.icon}
        style={{ width: "18px", cursor: "pointer" }}
        icon={Icon} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} />
    
    {isHovering && (
        <h2 style={{fontSize: "16px",  fontFamily: "Roboto San-sherif", fontWeight: "bold"}}>{title}</h2>
    )}
    </div>
  )
  
}
