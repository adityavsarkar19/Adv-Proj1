import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'; 
import './App.css';
import CartScreen from './Screens/CartScreen'; 
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SigninScreen from './Screens/SigninScreen';

function App() {

    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;
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
            {
                userInfo  ? <Link to ="/profile">{userInfo.name}</Link>:
                <Link to = "/signin">Sign In</Link>
            }
            
            

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
             <Route path = "/signin" component = {SigninScreen} />
             <Route path = "/register" component = {RegisterScreen} />
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
