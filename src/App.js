import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Community, Contact, Home, Landing, Marketplace, Profile } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./components";
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  const routes = [
    { path: '/about', element: <About /> },
    { path: '/profile', element: <Profile /> },
    { path: '/community', element: <Community /> },
    { path: '/contact-us', element: <Contact /> },
    { path: '/marketplace', element: <Marketplace /> },
  ]

  return (
    <div>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} exact />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
