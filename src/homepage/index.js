import About from './about';
import Banner from './banner';
import Consultation from './consultation';
import Demo from './demo';
import Features from './features';
import Journey from './journey';
import Knowledge from './knowledge';
import Locator from './locator';

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Features />
      <Locator />
      <Demo />
      <Consultation />
      <Knowledge />
      <Journey />
    </main>
  );
};

export default Home;
