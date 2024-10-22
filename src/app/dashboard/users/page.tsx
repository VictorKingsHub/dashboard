import React from 'react'
import styles from "../../ui/dashboard/users/users.module.css"
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search />
                <Link href="/dashboard/users/add" >
                    <button className={styles.addButton}> Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="next.svg"
                                    width={40}
                                    height={40}
                                    alt='profile'
                                    className={styles.userImage} />
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td>John@gmail.com</td>
                        <td>13.11.1885</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage
