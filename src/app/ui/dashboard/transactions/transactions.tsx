import React from 'react'
import styles from "./transactions.module.css"
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Transactions</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="next.svg" alt='profile photo' width={20} height={20} className={styles.userImage} />
                Vic Code
              </div>
            </td>
            <td>
              <span className={`${styles.main} ${styles.pending}`}> pending </span>
            </td>
            <td> 13 04 2024 </td>
            <td>$3,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/next.svg" alt='profile photo' width={20} height={20} className={styles.userImage} />
                Vic Code
              </div>
            </td>
            <td>
              <span className={`${styles.main} ${styles.done}`}> Done </span>
            </td>
            <td> 13 04 2024 </td>
            <td>$3,000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/next.svg" alt='profile photo' width={20} height={20} className={styles.userImage} />
                Vic Code
              </div>
            </td>
            <td>
              <span className={`${styles.main} ${styles.cancelled}`}> Cancelled </span>
            </td>
            <td> 13 04 2024 </td>
            <td>$3,000</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default Transactions
