import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.gbContainer}>
          <Image src="/home1" fill alt='Rightbar img' />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> 🔥 Available Now</span>
          <h3 className={styles.title}> How to use the new version of the admin dashboard </h3>
          <span className={styles.title}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur deleniti voluptates quisquam. Omnis, totam?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
