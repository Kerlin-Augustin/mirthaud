import './sidebarButton.css';

interface SidebarButtonProps {
  buttonText: string
}

function SidebarButton({buttonText}: SidebarButtonProps) {

  return (
    <div className="homeButton">
      <h2 className='homeButtonText'>{buttonText}</h2>
    </div>
  )
}

export default SidebarButton