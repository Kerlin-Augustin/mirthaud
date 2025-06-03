export const getHeaderAuthStyle = (
  isHovered: boolean
): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  color: isHovered ? 'white' : 'black',
  borderRadius: '5px',
  padding: '.5em',
  cursor: 'pointer',
  background: isHovered
    ? 'linear-gradient(135deg, #FF69B4, #FFC0CB)'
    : '',
  margin: '0 1em 0 0',
});