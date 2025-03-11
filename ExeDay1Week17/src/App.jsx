import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {

  return (
    // <BrowserRouter>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/">Home</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/profile">Profile</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/shop">Shop</NavLink>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<HomeScreen />} />
    //     <Route path="/profile" element={<ProfileScreen />} />
    //     <Route
    //       path="/shop"
    //       element={
    //         <ErrorBoundary>
    //           <ShopScreen />
    //         </ErrorBoundary>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
  // );
  // <div className="container mx-auto p-4">
  //     <PostList />
  //   </div>
  // );

  <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-6">Profile Data</h1>
  <Example1 />
  <Example2 />
  <Example3 />
</div>
);
  
}

export default App;