import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1 className="logo">Vizit Ulytau</h1>
        <p className="tagline">Официальный туристический портал Улытауского региона</p>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О регионе</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;