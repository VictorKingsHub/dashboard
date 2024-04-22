import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/profile.png" alt='Rightbar img' width={50} height={50} className={styles.bg} />
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
            <span> Watch </span>
          </button>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> 💪 Available Now</span>
          <h3 className={styles.title}> How to use the new version of the admin dashboard </h3>
          <span className={styles.title}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur deleniti voluptates quisquam. Omnis, totam?
          </p>
          <button className={styles.button}>
            <MdReadMore />
            <span>Learn</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
