// import React from 'react'
// import './App.css'
// // import main from './main.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import main from './main.png'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import Product from './Components/Product'

// function App() {
//   return (
  
//     <div className='main-container'>
//         <nav className='navbar'>
//             <a href="#" className="name">🩸 KyraAura</a>
//             <ul className="nav-links">
//                 <a href="#home">Home</a>
//               <a href="#products">Products</a>
//               <a href="#tips">Skincare Tips</a>
//               <a href="#about">About</a>
//               <a href="#contact">Contact</a>
//             </ul>
//             <button className="cart-btn" onClick={() => openCart()}>
//                 <i className="fas fa-shopping-cart"> Cart (0)</i>
//             </button>
//         </nav>
//       </div>

//   )
// }
   
//    export default App







import React from "react";

const products = [
  {
    id: 1,
    name: "Radiance Cleanser",
    image:
      p2,
    description: "A gentle daily cleanser that refreshes skin and removes impurities.",
  },
  {
    id: 2,
    name: "Glow Serum",
    image:
      p3,
    description: "Lightweight serum designed to support a bright, healthy-looking glow.",
  },
  {
    id: 3,
    name: "Hydra Mist",
    image:
      p4,
    description: "Instant hydration boost for skin that feels soft, calm, and revived.",
  },
  {
    id: 4,
    name: "Velvet Cream",
    image:
      p5,
    description: "A nourishing moisturizer that helps lock in comfort all day long.",
  },
  {
    id: 5,
    name: "Pure Clay Mask",
    image:
      p2,
    description: "A purifying mask that leaves skin feeling smooth, fresh, and balanced.",
  },
  {
    id: 6,
    name: "Night Repair Oil",
    image:
      p3,
    description: "A restorative nighttime oil for a soft and radiant morning look.",
  },
  {
    id: 7,
    name: "Sun Shield SPF",
    image:
      p4,
    description: "Daily sun protection with a clean finish and lightweight feel.",
  },
  {
    id: 8,
    name: "Aura Eye Gel",
    image:
      p5,
    description: "Cooling eye care that helps refresh the under-eye area.",
  },
];

export default function App() {
  return (
    <div style={styles.page}>
      <style>{`
       * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, sans-serif;
          background: #fffaf7;
          color: #2d2d2d;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          cursor: pointer;
          border: none;
          outline: none;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 250, 247, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #b56b7d;
          letter-spacing: 0.5px;
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          font-weight: 600;
          color: #444;
        }

        .nav-links a:hover {
          color: #b56b7d;
        }

        .cart-btn {
          background: #b56b7d;
          color: white;
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .cart-btn:hover {
          background: #9f5769;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 110px 20px 50px;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("[images.unsplash.com](https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80)");
          background-size: cover;
          background-position: center;
          animation: zoomHero 18s ease-in-out infinite alternate;
          z-index: 1;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url(${main});
          background-size: cover;
          z-index: 2;
        }

        @keyframes zoomHero {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 560px;
          color: white;
        }

        .hero-content h1 {
          font-size: 2.3rem;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .hero-content p {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 22px;
          color: #f7f2f3;
        }

        .hero-btn {
          display: inline-block;
          background: #f4c7d1;
          color: #4a2a35;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .hero-btn:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 20px;
        }

        .center-text {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 45px;
        }

        .center-text h2 {
          font-size: 2rem;
          color: #b56b7d;
          margin-bottom: 14px;
        }

        .center-text p {
          font-size: 1rem;
          line-height: 1.8;
          color: #5c5c5c;
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .product-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.1);
        }

        .product-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .product-content {
          padding: 18px;
        }

        .product-content h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
          color: #b56b7d;
        }

        .product-content p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .extra-text {
          text-align: center;
          max-width: 900px;
          margin: 45px auto 0;
          color: #555;
          line-height: 1.8;
          font-size: 1rem;
        }

        .newsletter {
          background: linear-gradient(135deg, #fbe7ec, #fff6f4);
          border-radius: 24px;
          padding: 40px 24px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(181,107,125,0.08);
        }

        .newsletter h3 {
          font-size: 1.8rem;
          color: #b56b7d;
          margin-bottom: 12px;
        }

        .newsletter p {
          max-width: 700px;
          margin: 0 auto 20px;
          color: #5d5d5d;
          line-height: 1.7;
        }

        .subscribe-btn {
          background: #b56b7d;
          color: white;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .subscribe-btn:hover {
          background: #9e5567;
        }

        .footer {
          background: #2f1d23;
          color: #f8e9ed;
          margin-top: 60px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .footer h4,
        .footer h3 {
          margin-bottom: 12px;
        }

        .footer p,
        .footer a {
          color: #efdde2;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.12);
          text-align: center;
          padding: 16px 20px 24px;
          color: #e6d0d6;
          font-size: 0.9rem;
        }

        @media (min-width: 640px) {
          .hero-content h1 {
            font-size: 3rem;
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .hero-content h1 {
            font-size: 4rem;
          }

          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-container {
            grid-template-columns: 1.4fr 1fr 1fr;
          }

          .nav-container {
            flex-wrap: nowrap;
          }
        }
      `}</style>
    

      <header className="navbar">
        <div className="nav-container">
          <div className="brand">KyraAura</div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Product</a>
            <a href="#tips">SkinCare Tips</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="cart-btn">Cart</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Glow Naturally with KyraAura Skin Care</h1>
          <p>
            Discover skincare made to nourish, refresh, and highlight your natural beauty.
            KyraAura brings elegant care routines designed for healthy and radiant skin.
          </p>
          <a href="#products" className="hero-btn">
            Explore Products
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="center-text">
          <h2>Skincare That Feels Pure and Beautiful</h2>
          <p>
            At KyraAura, we believe skincare should be simple, calming, and effective. Our
            collection is inspired by clean beauty, hydration, balance, and everyday glow,
            helping you build a routine that feels luxurious and easy to love.
          </p>
        </div>

        <div className="product-grid" id="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="extra-text" id="tips">
          <p>
            Healthy skin starts with consistency. Cleanse gently, hydrate daily, protect your
            skin barrier, and always make room for sunscreen in your routine. Choosing products
            that suit your skin type can help reveal a smoother, brighter, and more confident
            glow over time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="newsletter">
          <h3>Stay Updated with KyraAura</h3>
          <p>
            Subscribe for skincare tips, product launches, seasonal beauty updates, and fresh
            wellness inspiration from our website.
          </p>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-container">
          <div>
            <h3>KyraAura</h3>
            <p>
              Premium skincare for your daily self-care ritual. Designed to bring softness,
              confidence, and a radiant glow to your routine.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#products">Product</a>
              <a href="#tips">SkinCare Tips</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: hello@kyraaura.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: Your City, Your Country</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 KyraAura. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fffaf7",
    minHeight: "100vh",
  },
};
