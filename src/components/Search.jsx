import React from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './styles/Search.module.css'

function Search() {
  return (<>
    <div style={{
      width:'100%',
      padding:'4rem'}}>
      </div>
    <div className={styles.searchBar}>
        <input type="text" name="" id="" placeholder="Search" />
        <FaSearch className={styles.searchIcon} />
      </div>
      <div style={{
        width:'100%',
        padding:'4rem'}}>
        </div>
          </>
  )
}

export default Search