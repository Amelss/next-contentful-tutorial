import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/RecipeCard.module.css'

export default function RecipeCard({ recipe }) {
    
    const {title, slug, cookingTime, thumbnail} = recipe.fields

  return (
      <div className={styles.card}>
          <div className={styles.featured}>
              {/* <Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} /> */}
              <Image src={`https:${thumbnail.fields.file.url}`} width={500} height={500} alt='picture of blog' />
          </div>
          <div className={styles.content}>
              <div className={styles.info}>
                  <h4>{title}</h4>
                  <p>Takes approx {cookingTime} mins to make</p>
              </div>
              <div className={styles.actions}>
                  <Link href={`/recipes/${slug}`}> <button className={styles.btn}>Cook this! </button></Link>
              </div>
          </div>
          
    </div>
  )
}
