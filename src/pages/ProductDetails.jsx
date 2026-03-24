// import { useParams } from "react-router-dom";
// import products from "../data/products";
// import "./ProductDetails.css";
// import { FaComments, FaShoppingCart, FaBolt } from "react-icons/fa";


// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) {
//     return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
//   }

//   return (
//     <div className="product-details">
//       <div className="details-card">
//         <img src={product.image} alt={product.name} />

//         <div className="details-info">
//           <h2>{product.name}</h2>
//           <p className="category">{product.category}</p>
//           <span className="price">{product.price}</span>

//           <p className="description">{product.description}</p>

//         <div className="details-buttons">
//             <button className="chat-btn">
//                 <FaComments /> Chat with Seller
//             </button>
//         <div className="action-row">
//             <button className="cart-btn">
//                 <FaShoppingCart /> Add to Cart
//             </button>
//             <button className="buy-btn">
//                 <FaBolt /> Buy Now
//             </button>
//   </div>

// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
