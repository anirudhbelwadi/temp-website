import 'swiper/css';
import 'swiper/css/pagination';
import '../src/styles/main.scss';
import Footer from '../src/commons/footer';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
