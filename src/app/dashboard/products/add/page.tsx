import React from 'react'
import styles from "@/app/ui/dashboard/products/addProducts/addProducts.module.css"

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" name="title" placeholder='tile' required />
        <select name="cat" id="" className={styles.select}>
          <option value="general">Choose and option</option>
          <option value="Kitchen"> Kitchen </option>
          <option value="Phone"> Phone</option>
          <option value="computer"> computer </option>
        </select>
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='stock' name='stock' />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea
          name="desc"
          id="desc"
          cols={30}
          rows={10}
          placeholder='Description'> </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage
