import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import React from 'react'
import styles from "../../ui/dashboard/products/products.module.css"
import Image from 'next/image'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search />
                <Link href="/dashboard/products/add" >
                {/* <Link href="/dasboard/pusers/add" > */}
                    <button className={styles.addButton}> Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="vercel.svg"
                                    width={40}
                                    height={40}
                                    alt='profile'
                                    className={styles.productImage} />
                                <span>IPhone</span>
                            </div>
                        </td>
                        <td>Description</td>
                        <td>$35.6</td>
                        <td>20.04.2024</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
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

export default page
