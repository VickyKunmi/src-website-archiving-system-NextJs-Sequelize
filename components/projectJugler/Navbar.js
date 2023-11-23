import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/PJ/Navbar.module.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {Menu, MenuButton, Link, MenuList, MenuItem, useDisclosure} from "@chakra-ui/react";
import {CustomdropDown} from "../global/CustomdropDown";
import {useState, useEffect} from "react";

export default function Navbar() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  const handleToggleMenu = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };


  const [clickCounts, setClickCounts] = useState({});

  useEffect(() => {
    // Fetch the click counts from the backend
    const fetchClickCounts = async () => {
      try {
        const response = await fetch('/api/pjClickCounts');
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
      await fetch(`/api/pjClickCounts?buttonName=${buttonName}`, { method: 'POST' });
      // Update the click count locally
      setClickCounts((prevClickCounts) => ({
        ...prevClickCounts,
        [buttonName]: prevClickCounts[buttonName] + 1 || 1,
      }));
    } catch (error) {
      console.error('Error updating click count:', error);
    }
  };







    return(
        <div className={styles.container}>
            <div className={styles.topheader}>
              {/* <FontAwesomeIcon icon={faPhone} style={{marginTop: "0", width: "16px"}}/>
             <span> <h5 className={styles.number}>02065789345 / 054897593</h5></span>
             <div className={styles.right}>
                <button className={styles.btn}>Register</button>
                <button className={styles.btn}>Login</button>

             </div> */}
             <div className={styles.title}>
                <h3>CUG Project jugler</h3>
             </div>
            </div>
            <div className={styles.item}>
            {/* <input type="checkbox" className={styles.togglemenu} checked={isChecked} onChange={handleToggleMenu} /> Add checked and onChange attributes */}
        {/* <div className={styles.hamburger}></div> */}
        <ul className={styles.list}>
                    <li>
                        <Menu>
                            <MenuButton as={Link} href="/projectJugler/u" 
                onClick={() => updateClickCount("Home")}
                            
                            className={styles.dropbtn}>
                                Home
                            </MenuButton>
                        </Menu>
                    </li>
                    <li>
                        <Menu>
                            <MenuButton as={Link} href="/projectJugler/u/projects" 
                onClick={() => updateClickCount("Projects")}
                            
                            className={styles.dropbtn}>
                                Projects
                            </MenuButton>
                        </Menu>
                    </li>
                    
                    <li>
                        <Menu>
                            <MenuButton as={Link} href="/projectJugler/u/about" 
                onClick={() => updateClickCount("About")}
                            
                            className={styles.dropbtn}>
                                About
                            </MenuButton>
                        </Menu>
                    </li>
                </ul>
            </div>
        </div>
    )
}