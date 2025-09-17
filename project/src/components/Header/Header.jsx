import { useState } from 'react';
import MobileMenu from './MobileMenu';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('RU');

  const handleLanguageSelect = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          {/* Кнопка меню */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Логотип по центру */}
          <div className="logo-center">
            <h1>Vizit Ulytau</h1>
          </div>

          {/* Выбор языка с выпадающим меню */}
          <div className="language-switcher">
            <button 
              className="current-lang"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {currentLanguage}
              <span className="arrow">▼</span>
            </button>
            
            {isLanguageOpen && (
              <div className="language-dropdown">
                <button onClick={() => handleLanguageSelect('RU')}>RU</button>
                <button onClick={() => handleLanguageSelect('KZ')}>KZ</button>
                <button onClick={() => handleLanguageSelect('EN')}>EN</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Выдвижное меню */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header;