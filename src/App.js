import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Community, Contact, Home, Landing, Profile } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./components";
import './App.css';

function App() {
  const {authenticated} = useAuth0();

  const routes = [
    { path: '/about', element: <About /> },
    { path: '/profile', element: <Profile /> },
    { path: '/community', element: <Community /> },
    { path: '/contact-us', element: <Contact /> },
  ]

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element=<Landing /> exact />
          <Route path="/home" element=<Home /> exact />
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
