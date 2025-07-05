import "../styles/Featured.css";

function Featured({ className }) {
  return (
    <div className={className}>
      <h2 className="heading">New</h2>
      <ul className="articles-list">
        <li className="article">
          <h3 className="title">Hydrogen VS Electric Cars</h3>
          <p className="description">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </li>
        <li className="article">
          <h3 className="title">The Downside of AI Artistry</h3>
          <p className="description">What are the possible adverse effects of on-demand AI image generation?</p>
        </li>
        <li className="article">
          <h3 className="title">Is VC Funding Drying Up?</h3>
          <p className="description">Private funding by VC firsms is down 50% YOY. We take a look at what that means.</p>
        </li>
      </ul>
    </div>
  );
}

export default Featured;
