import styles from './App.module.scss'
import { Home, Cuisines, CuisinesTarget, Search, Recipe } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/cuisines" element={<Cuisines />} />
      <Route path="/cuisines/:country" element={<CuisinesTarget />} />
      <Route path="/search/:searched" element={<Search />} />
      <Route path="/recipe/:id" element={<Recipe />} />

    </>
  )
);



function App() {

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
