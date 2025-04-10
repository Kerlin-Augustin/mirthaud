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

  const style: { [key: string]: React.CSSProperties } = {
    sideBarContainer: {
      background: '#FF69B4',
      width: '200px',
      height: '100vh',
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'stretch'
    },
    logo: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    logoText: {
      color: 'white',
    }
  }

  return (
    <aside style={style.sideBarContainer}>
      <div style={style.logo}>
        <h2 style={style.logoText}>
          Mirthaud
        </h2>
      </div>
      {allTabs}
      <div>
        Sign Out
      </div>
    </aside>
  )
}

export default Sidebar