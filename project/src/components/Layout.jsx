import Header from './Header/Header';
import Footer from './Footer';
import './Header/Header.css';

function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;