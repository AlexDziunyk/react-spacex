import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import './style.css';

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Root