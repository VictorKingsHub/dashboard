
"use client"
import React from 'react'
import styles from "./navbar.module.css"
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const NavBar = () => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="search" name="search" placeholder='search...' className={styles.input} />
        </div>
        <MdNotifications size={20} />
        <MdOutlineChat size={20} />
        <MdPublic size={20} />
      </div>
    </div>
  )
}

export default NavBar

