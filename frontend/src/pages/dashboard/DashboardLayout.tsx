import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout