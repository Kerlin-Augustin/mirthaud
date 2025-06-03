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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoAndTabs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoText: {
      color: 'white',
    },
    tabs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    profile: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '0.5em',
      marginBottom: '1em',
    },
    profileText: {
      marginLeft: '1em',
      marginRight: '1em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
      fontSize: '14px'
    }
  }

  return (
    <aside style={style.sideBarContainer}>
      <div style={style.logoAndTabs}>
        <h2 style={style.logoText}>
          Mirthaud
        </h2>
        <div style={style.tabs}>
          {allTabs}
        </div>
      </div>
      <div style={style.profile}>
        <h3 style={style.profileText}>
          Sign Out
        </h3>
      </div>
    </aside>
  )
}

export default Sidebar