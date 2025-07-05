import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Featured from "./components/Featured.jsx";
import Article from "./components/Article.jsx";
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <Navbar className="navbar"/>
      <Hero className="hero"/>
      <Featured className="featured-articles"/>
      <Article className="article-list"/>
    </div>
  );
}

export default App;
