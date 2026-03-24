import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Products;
