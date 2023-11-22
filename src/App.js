import './App.css';
import HeaderSection from './Components/Header/headerSection.jsx';
import Intro from './Components/Intro/intro.jsx';
import WhyUs from './Components/WhyUs/whyus.jsx';
import Area from "./Components/Area/area.jsx";
import Client from "./Components/Clients/client.jsx";
import Team from "./Components/Team/team.jsx";
import Accordion from "./Components/Faq/faq.jsx";
import NewsLetter from "./Components/News/news.jsx";
import Footer from "./Components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Intro />
      <WhyUs />
      <Area />
      <Client />
      <Team />
      <Accordion />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
