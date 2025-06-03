import './sidebar.css';
import SidebarButton from "../Buttons/SidebarButton"

function Sidebar() {

  const tabs = [
    <SidebarButton buttonText="Home" />,
    <SidebarButton buttonText="Interview" />,
    <SidebarButton buttonText="Resume" />,
    <SidebarButton buttonText="My Network" />,
    <SidebarButton buttonText="Messaging" />]

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
        <h3 className="profileText">
          Sign Out
        </h3>
      </div>
    </aside>
  )
}

export default Sidebar