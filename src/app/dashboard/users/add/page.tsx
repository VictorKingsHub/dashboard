import React from 'react'
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css"

const AddUsersPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="userName" placeholder='userName' required />
        <input type="email" name="userEmail" placeholder='userEmail' required />
        <input type="password" name="password" placeholder='password' required />
        <input type="text" name="phone" placeholder='phone' />
        <select name="isAdmin" id="isAdmin" className={styles.select}>
          <option value="false" selected>isAdmin</option>
          <option value="yes"> Yes </option>
          <option value="No"> No </option>
        </select>
        <select name="isActive" id="isActive" className={styles.select}>
          <option value="false" selected>isActive</option>
          <option value="Yes"> Yes </option>
          <option value="No"> No</option>
        </select>
        <textarea
          name="address"
          id="address"
          cols={30}
          rows={10}
          placeholder='Address'> </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUsersPage
