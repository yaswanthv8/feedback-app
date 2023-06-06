
function Header({text, bgColor, textColor}) {
const headerStyles ={
  backgroundColor: bgColor, color: textColor
}

  return (
    <header style={headerStyles}>
        <div>
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a84',

}

export default Header