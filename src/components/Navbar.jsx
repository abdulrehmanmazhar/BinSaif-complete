import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import Contextfile from "../contexts/badgeContext/Contextfile";


function Navbar({ LOGO, LINKS,toggleSlide }) {
    const {badge, setBadge} = useContext(Contextfile);
    // console.log(mycontext)
  
  return (
    <div className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleSlide}>
        <GiHamburgerMenu className={styles.hamIcon} />
      </div>
      <div className={styles.logo}>
        <h1>{LOGO}</h1>
      </div>
      <div className={styles.aLinks}>
        {LINKS.map(
          (
            link,
            index // Add index parameter to map function
          ) => (
            <NavLink className={styles.navLinks} key={index} to={link.link}>
              {link.text}
            </NavLink> // Use key prop for each anchor tag
          )
        )}
      </div>
      <div className={styles.searchBar}>
        <input type="text" name="" id="" placeholder="Search" />
        <FaSearch className={styles.searchIcon} />
      </div>
      <div className={styles.cart}>
        <div className={styles.cartIconDiv}>
        <Link key={'cart'} to={'cart'}>
        <CiShoppingCart className={styles.cartIcon}/> 
            </Link>
        </div>
        <p className={styles.badge}>{badge}</p>
      </div>
      <div className={styles.before}>
        <div className={styles.icon}><Link key={'sign-up'} to={'signup'}>
              Sign up
            </Link></div>
      </div>
    </div>
  );
}

export default Navbar;
