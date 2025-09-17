function HomePage() {
  return (
    <div>
      {/* Герой-секция с фоном */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Добро пожаловать в Улытау</h1>
            <p>Откройте для себя сердце Казахстана</p>
          </div>
        </div>
      </div>

      {/* Остальной контент */}
      <div className="page-content">
        {/* ... остальной код главной страницы ... */}
      </div>
    </div>
  );
}

export default HomePage;