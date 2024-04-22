import React from 'react'
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'

const Search = () => {
  return (
    <div className={styles.container}>

        <MdSearch />
        <input  placeholder="Search for a user" className={styles.input} />

    </div>
  )
}

export default Search
