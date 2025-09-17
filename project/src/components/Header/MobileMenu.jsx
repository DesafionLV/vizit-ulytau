import './Header.css';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-overlay" onClick={onClose}></div>
      
      <div className="menu-content">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="menu-columns">
          {/* Левая колонка - прозрачная */}
          <div className="menu-column left-column">
            <h3>В РЕГИОНЕ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Где остановиться</a></li>
              <li><a href="#" onClick={onClose}>Где поесть</a></li>
              <li><a href="#" onClick={onClose}>Куда сходить</a></li>
              <li><a href="#" onClick={onClose}>Что посмотреть</a></li>
            </ul>

            <h3>ТУРИСТАМ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Интерактивная карта</a></li>
              <li><a href="#" onClick={onClose}>3D - туры</a></li>
            </ul>

            <h3>РАЗНОЕ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Контакты</a></li>
            </ul>

            <h3>МЕРОПРИЯТИЯ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Qazaqman</a></li>
              <li><a href="#" onClick={onClose}>Qargaly Fest</a></li>
            </ul>

            <h3>НОВОСТИ</h3>
            <h3>О РЕГИОНЕ</h3>
          </div>

          {/* Правая колонка - белая */}
          <div className="menu-column right-column">
            <h3>О РЕГИОНЕ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>О нас</a></li>
              <li><a href="#" onClick={onClose}>Новости</a></li>
              <li><a href="#" onClick={onClose}>Контакты</a></li>
            </ul>

            <h3>ТУРИСТАМ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Интерактивная карта</a></li>
              <li><a href="#" onClick={onClose}>3D - Туры</a></li>
            </ul>

            <h3>МЕРОПРИЯТИЯ</h3>
            <ul>
              <li><a href="#" onClick={onClose}>Qazaqman</a></li>
              <li><a href="#" onClick={onClose}>Qargaly Fest</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;