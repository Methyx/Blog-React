import "./App.css";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import MainContent from "./MainContent";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <NavigationMenu />
      </div>
      <div className="container content">
        <div className="main-content">
          <MainContent />
        </div>
        <div className="side-content">
          <AboutMe />
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};
export default App;
