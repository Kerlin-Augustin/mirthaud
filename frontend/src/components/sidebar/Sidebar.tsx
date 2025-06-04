import './sidebar.css';
import '../../defaultNavLink.css'
import SidebarButton from "../buttons/SidebarButton"
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleSignout = () => {
    logout()
    navigate('/')
  }

  const tabs = [
    <NavLink className="nav-link" to=""><SidebarButton buttonText="Home" /></NavLink>,
    <NavLink className="nav-link" to="interviews"><SidebarButton buttonText="Interview" /></NavLink>,
    <NavLink className="nav-link" to="resume"><SidebarButton buttonText="Resume" /></NavLink>,
    <NavLink className="nav-link" to="mynetwork"><SidebarButton buttonText="My Network" /></NavLink>,
    <NavLink className="nav-link" to="messaging"><SidebarButton buttonText="Messaging" /></NavLink>]

  const allTabs = tabs.map((tab, index) => {
    return (
      <div key={index}>
        {tab}
      </div>
    )
  })

  return (
    <aside className="sideBarContainer">
      <div className="logoAndTabs">
        <h2 className="logoText">
          Mirthaud
        </h2>
        <div className="tabs">
          {allTabs}
        </div>
      </div>
      <div className="profile">
        <h3
          className="profileText"
          onClick={handleSignout}
          >
          Sign Out
        </h3>
      </div>
    </aside>
  )
}

export default Sidebar