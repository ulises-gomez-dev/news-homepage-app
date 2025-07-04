import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image"></div>
      <div className="hero-text">
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back in the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="hero-btn">READ MORE</button>
      </div>
    </div>
  );
}

export default Hero;
