import propTypes  from "prop-types";


function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
    <header style={headerStyles}>
      <div className="container">
        {text}
      </div>
    </header>
  );
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}
Header.propTypes = {
    text: propTypes.string,
    bgColor: propTypes.string,
    textColor:propTypes.string
}

export default Header;
