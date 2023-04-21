import { Button, Input } from './components'
import styles from './App.module.scss'
import { useEffect } from 'react'
import { useGetRandomQuery } from './store'

function App() {

  const { data = [], isLoading, isError } = useGetRandomQuery()

  // useEffect(() => {
  //   getPopular()
  // }, [])

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={styles.app}>
      <ul>
        {data.recipes.map((el: IRecipeData) =>
          <li key={el.id}>
            <span>{el.title}</span>
            <img src={el.image} />
          </li>)}
      </ul>
    </div>
  )
}

export default App
