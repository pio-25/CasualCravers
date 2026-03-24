import "./Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Home() {
  return (
    <>
      <section className="hero">
        <h1>CasualCravers</h1>
        <p>Wear the vibe. Own the comfort</p>
      </section>

      <section className="products">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
}

export default Home;
