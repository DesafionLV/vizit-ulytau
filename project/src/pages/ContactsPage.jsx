function ContactsPage() {
  return (
    <div className="page-content">
      <h2>Контакты</h2>
      
      <div className="contacts-grid">
        <div className="contact-card">
          <h3>📧 Электронная почта</h3>
          <p>info@vizit-ulytau.kz</p>
          <p>tourism@vizit-ulytau.kz</p>
        </div>

        <div className="contact-card">
          <h3>📞 Телефоны</h3>
          <p>+7 7172 123 4567 (Офис)</p>
          <p>+7 777 123 4567 (Менеджер по туризму)</p>
          <p>+7 707 123 4567 (Экскурсии)</p>
        </div>

        <div className="contact-card">
          <h3>🏢 Адрес</h3>
          <p>Казахстан, Улытауская область</p>
          <p>г. Улытау, ул. Центральная, 123</p>
        </div>

        <div className="contact-card">
          <h3>🕒 Часы работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб: 10:00 - 16:00</p>
          <p>Вс: выходной</p>
        </div>
      </div>

      <div className="social-section">
        <h3>Мы в социальных сетях</h3>
        <div className="social-links">
          <p>Instagram: @vizit_ulytau</p>
          <p>Facebook: Vizit Ulytau</p>
          <p>YouTube: Vizit Ulytau Official</p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;