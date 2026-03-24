import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h4>{product.brand}</h4>
      <p>{product.name}</p>

      <div className="price-section">
        <span className="price">₹{product.price}</span>
        <span className="mrp">₹{product.mrp}</span>
        <span className="discount">{product.discount}% OFF</span>
      </div>

      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
