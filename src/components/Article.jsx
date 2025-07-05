import "../styles/Article.css";

function Article({ className }) {
  return (
    <div className={className}>
      <div className="article-item">
        <figure className="image">
          <img src="./src/assets/images/image-retro-pcs.jpg" alt="" />
        </figure>
        <div className="article-info">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="article-item">
        <figure className="image">
          <img src="./src/assets/images/image-top-laptops.jpg" alt="" />
        </figure>
        <div className="article-info">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="article-item">
        <figure className="image">
          <img src="./src/assets/images/image-gaming-growth.jpg" alt="" />
        </figure>
        <div className="article-info">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
