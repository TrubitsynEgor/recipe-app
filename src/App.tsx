import { Home, Cuisines, CuisinesTarget, Search, Recipe, Vegetarian, Vegan, Favorite, Authorization, Register, Profile } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import './firebase'

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
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

    </>
  )
);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
