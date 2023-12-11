import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path='/favourites' element={<Favourites />}></Route>
    </Route>
  </>
))

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
