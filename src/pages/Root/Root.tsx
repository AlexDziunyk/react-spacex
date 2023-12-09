import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

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