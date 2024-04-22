import React from 'react'
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/next.svg" alt="profile" fill />
                </div>
                <span>UserName</span>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label > UserName</label>
                    <input type="text" name="userName" placeholder='userName' />
                    <label > UserEmail@gmail.come</label>
                    <input type="email" name="userEmail" placeholder='userEmail@gmail.com' />
                    <label > UserPassword</label>
                    <input type="password" name="userPassword" placeholder='userPassword' />
                    <label > UserPhone</label>
                    <input type="text" name="userPhone" placeholder='userPhone' />
                    <label > text</label>
                    <textarea name="address" placeholder='text' />
                    <label > isAdmin?</label>
                    <select name='isAdmin' id='isAdmin'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <label > isActive?</label>
                    <select name='isActive' id='isActive'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
