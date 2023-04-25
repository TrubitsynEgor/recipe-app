import { Home, Cuisines, CuisinesTarget, Search, Recipe, Vegetarian, Vegan, Favorite } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/cuisines" element={<Cuisines />} />
      <Route path="/cuisines/:country" element={<CuisinesTarget />} />
      <Route path="/search/:searched" element={<Search />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/vegetarian" element={<Vegetarian />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/favorite" element={<Favorite />} />

    </>
  )
);



function App() {

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
