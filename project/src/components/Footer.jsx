function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {currentYear} Vizit Ulytau. Все права защищены.</p>
        <p>Разработано с ❤️ для любителей природы и истории Казахстана</p>
      </div>
    </footer>
  );
}

export default Footer;