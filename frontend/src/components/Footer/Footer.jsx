import React from "react";
  import "./Footer.css";
  export default function Footer() {
    return (
      <footer style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
        <nav>
          <a href="/terms">Terms of Service</a> | 
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/help">Help</a>
        </nav>
        <nav>
          <a href="/iphone-app">iPhone App</a> | 
          <a href="/android-app">Android App</a>
        </nav>
        <nav>
          <a href="/users">Users</a> | 
          <a href="/collections">Collections</a> | 
          <a href="/shopping">Shopping</a> | 
          <a href="/explore">Explore</a> | 
          <a href="/shop">Shop</a>
        </nav>
        <p>&copy; {new Date().getFullYear()} Pinterest. All rights reserved.</p>
      </footer>
    );
  }
  

