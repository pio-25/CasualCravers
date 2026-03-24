import "./Cart.css";
import products from "../data/products";

function Cart() {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {products.slice(0, 2).map((item) => (
        <div className="cart-card" key={item.id}>
          
          <img src={item.image} alt={item.name} />

          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span className="cart-price">₹{item.price}</span>

            <div className="cart-actions">

              <div className="quantity-box">
                <span className="qty-btn">−</span>
                <span className="qty-count">1</span>
                <span className="qty-btn">+</span>
              </div>

              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ₹1150</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;


// import "./Cart.css";
// import products from "../data/products";

// function Cart() {
//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>

//       {products.slice(0, 2).map((item) => (
//         <div className="cart-card" key={item.id}>
//           <img src={item.image} alt={item.name} />

//           <div className="cart-details">
//             <h4>{item.name}</h4>
//             <p>{item.description}</p>
//             <span className="cart-price">{item.price}</span>

//             <div className="cart-actions">
//               <span>Quantity: 1</span>
//               <button className="remove-btn">Remove</button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="cart-summary">
//         <h3>Total: ₹450</h3>
//         <button className="checkout-btn">Proceed</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;
