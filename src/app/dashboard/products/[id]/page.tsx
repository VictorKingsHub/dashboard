import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'

const SingleProductPage = () => {
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
                    <label > Title</label>
                    <input type="text" name="title" placeholder='title' />
                    <label > Price</label>
                    <input type="number" name="price" placeholder='price' />
                    <label > Stock</label>
                    <input type="number" name="stock" placeholder='99' />
                    <label > Color</label>
                    <input type="text" name="color" placeholder='color' />
                    <label > text</label>
                    <textarea name="size" placeholder='size' />
                    <label > Cat</label>
                    <select name='cat' id='cat'>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Computers">Computers</option>
                    </select>
                    <label > Description</label>

                    <textarea name="desc" placeholder='desc' rows={10} />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage
