function Sidebar() {

  const style: { [key:string]: React.CSSProperties} = {
    sideBarContainer: {
      background: '#FF69B4'
    }
  }

  return (
    <div style={style.sideBarContainer}>
      Home
    </div>
  )
}

export default Sidebar