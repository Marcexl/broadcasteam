import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import i18n from './i18n'; 
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Video />
        <About />
        <Services />
        <Contact />
        <Footer />
      </I18nextProvider>
    </>
  );
}

export default App;
