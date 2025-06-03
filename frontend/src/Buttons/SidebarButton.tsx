interface SidebarButtonProps {
  buttonText: string
}

function SidebarButton({buttonText}: SidebarButtonProps) {

  const style: {[key:string] : React.CSSProperties} = {
    homeButton: {
      background: 'white',
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '0.5em',
      marginTop: '1em'
    },
    text: {
      marginLeft: '1em',
      marginRight: '1em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
      fontSize: '14px'
    }
  }

  return (
    <div style={style.homeButton}>
      <h2 style={style.text}>{buttonText}</h2>
    </div>
  )
}

export default SidebarButton