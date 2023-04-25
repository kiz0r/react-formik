import Header from '../Header';
import Footer from '../Footer';
import './Layout.sass';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
