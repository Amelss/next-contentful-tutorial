import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful'
import RecipeCard from '@/components/RecipeCard'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'recipe'
  })

  return {
    props: { recipes: res.items },
    revalidate: 1
  }
}

export default function Home({ recipes }) {

  return (
    <>
      <div >
        <h1>Recipe List</h1>
        <div className={styles.recipeList}>
          {recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
        </div>
        
      </div>
    </>
  )
}
