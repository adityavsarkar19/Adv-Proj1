import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
   document.querySelector(".sidebar").classList.remove("open");
  }
  return (
<BrowserRouter>
    <div className ="grid-container">
    <header className = "header">
        <div className = "brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">MusikMart</Link>
            
        </div>
        <div className = "header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>

        </div>
    </header>
    <aside className= "sidebar">
        <h3>Categories</h3>
        <button className = "sidebar-close-button" onClick={closeMenu} >
         &#8594;

        </button>
        <ul>
            <li>
                <a href= "index.html">Western</a>
            </li>

             <li>
                <a href= "index.html">Hindustani</a>
            </li>
             <li>
                <a href= "index.html">Guitar</a>
            </li>

        </ul>

    </aside>
    
    <main className = "main">
         <div className ="content">
             <Route path ="/product/:id" component={ProductScreen} />
             <Route path = "/cart/:id?" component={CartScreen}/>
             <Route path ="/" exact={true} component={HomeScreen} />
             
             
             

         </div>
        
    </main>
    <footer className = "footer">
        All Rights Reserved
    </footer>
</div> 
</BrowserRouter>
  );
}

export default App;
