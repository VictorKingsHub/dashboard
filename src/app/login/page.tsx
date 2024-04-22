import React from 'react'
import styles from "@/app/ui/login/login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="userName" placeholder='userName' />
        <input type="text" name="userPassword" placeholder='userPassword' />
        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

export default LoginPage
