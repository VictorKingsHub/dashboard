import React from 'react'
import styles from "./sidebar.module.css"
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md"
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const menuUsers = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Product",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/setting",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      }
    ]
  }
]

const Sidebar
  = () => {
    return (
      <div className={styles.container}>

        <div className={styles.user}>
          <Image src="/vercel.svg" alt="alt" width={50} height={50} className={styles.userImage}/>
        </div>

        <div className={styles.userDetails}>
          <span className={styles.userName}>Victor Kings</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>

        <ul>
          {menuUsers.map((cat) =>

            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map(item => {
                return (
                  <MenuLink item={item} key={item.title} />
                )
              })}
            </li>
          )}
        </ul>
        <button className={styles.logout}>
          <MdLogout />
          <span>Logout</span>
        </button >
      </div>
    )
  }

export default Sidebar

