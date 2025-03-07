import Header from 'components/common/Header';
import SkipNavigation from '../common/SkipNavigation';

const Layout = ({ children }) => {
  return (
    <>
      <SkipNavigation />
      <Header />
      <main id='main-content'>{children}</main>
    </>
  );
};

export default Layout;
