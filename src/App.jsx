import React from 'react'
import './App.css'
import main from './main.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'

function App() {
  return (
  
    <div className='main-container'>
      <nav className='navbar'>
        <h2 className='name'>🛡Life<h2 style={{color:'skyblue', fontSize:'35px', fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',}}>Gadgets</h2></h2>
        <ul className='nav'>
          <a className='nav-item' href='#product'>Product</a>
          <a className='nav-item' href='#whyus'>Why Us</a>
          <a className='nav-item' href='#review'>Reviews</a>
        </ul>
       <a style={{display:'flex', marginTop:'30px', cursor:'pointer'}}>🛒</a>
        <a className='btn' >Shop Now</a>
      </nav>  
       {/* <div className='main'>
         <p className='text'>This page is fully recommendation for<br></br> those people who engaged with more powerfull and 
        easier price<br></br> than market price</p>
          <img className='pic2' src = {layout}></img>        
      </div> */}
    
     <div>
        <div>
        <h2 className='main-text'>
          Gadgets That
        </h2>   
        <h2 className='main-text' style={{color:'rgb(76, 201, 201)', display:'flex'}}>
           Save Lives<h2 className='main-text' style={{color:'white', marginLeft:'15px'}}>&</h2>
        </h2>
        <h2 className='main-text' style={{color:' rgb(222, 92, 7)'}}>Simplify Yours</h2>
        <h2 className='main-wording'>Premium smart tools and essential emergency gear designed <br></br>
          for modern life. Up to 40% off during our limited-time<br></br>
          launch sale.
        </h2>
        <div style={{display:'flex', marginLeft:'20px'}}>
          <a className='btn' style={{marginLeft:'30px', backgroundColor:' rgb(222, 92, 41)'}}>Shop Sale Now ▶</a>
          <a className='btn' style={{marginLeft:'20px', backgroundColor:'whitesmoke'}}>View Best Seller</a>
      </div>
        <h1 style={{color:'white', marginTop:'40px'}}>Shop By Category</h1>
        <h3 style={{color:'black'}}>Find exactly what you need to upgrade your everyday life.</h3>
      <div style={{display:'flex', gap:'30px', justifyContent:'space-between' }}>
        <img className='picture' src = {main}>
        </img>
        <img className='picture' src = {p2}></img>
        <img className='picture' src = {p3}></img>
      </div> 
        <div className='product'>
          <div> <h3 className='product-text'>Life Saving Gadgets</h3></div>
          <div> <h3 className='product-text' style={{marginLeft:'60px'}}>Daily Life Tools</h3></div>
          <div> <h3 className='product-text' style={{marginLeft:'200px'}}>Smart Electronics</h3></div>

        </div>
     </div> 
     </div>
     </div>
  )
}

export default App