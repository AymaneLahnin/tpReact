import download from '../images/download.jpeg';
const Header = () => {
  const headerStyle = {
      display: 'flex',
    
      backgroundColor: '#f8f9fa',
      padding: '10px 3vh',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const imgStyle = {
      height: '50px',
      marginRight: '20px'
  };

  const linkStyle = {
      textDecoration: 'none',
      color: '#007bff',
      fontSize: '18px',
      fontWeight: 'bold'
  };

  return (
      <header style={headerStyle}>
          <img src={download} alt="Logo" style={imgStyle} />
          <a href="/" style={linkStyle}>Home</a>
      </header>
  );
};

export default Header;