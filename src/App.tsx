import styles from './App.module.scss'
import { Home, Cuisines, CuisinesTarget } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/cuisines" element={<Cuisines />} />
      <Route path="/cuisines/:country" element={<CuisinesTarget />} />

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
