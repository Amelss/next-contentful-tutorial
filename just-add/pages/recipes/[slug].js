import React from 'react'
import { createClient } from "contentful";
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "../../styles/Slug.module.css";
import Skeleton from '@/components/Skeleton';


 const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
 });

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'recipe'
    })

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: true
    }
}



export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': params.slug
    })

    // CONDITIONAL REDIRECTING TO HOMEPAGE
    // if (!items.length) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false
    //         }
    //     }
    // }

    const notFound = items[0] ? false : true
    
    return {
        props: { recipe: items[0] },
        revalidate: 1,
        notFound
    }
}

export default function RecipeDetails({ recipe }) {

    if(!recipe) return <Skeleton />
    const {featuredImage, title, cookingTime, ingredients, method} = recipe.fields

  return (
      <div>
          <div className={styles.banner}>
              <Image src={`https:${featuredImage.fields.file.url}`} width={500} height={500} alt='blog post image' />
              <h2 className={styles.h2}>{title}</h2>
          </div>
          <div className={styles.info}>
              <p>Takes about {cookingTime} minutes to cook.</p>
              <h3>Ingredients:</h3>
              {ingredients.map(ing => (
                  <span key={ing}>{ing}</span>
              ))}
          </div>
          <div className={styles.method}>
              <h3 className={styles.h3}>Method:</h3>
              <div>{documentToReactComponents(method)}</div>
          </div>
    </div>
  )
}
