import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Community, Contact, Home, Landing, Profile } from "./pages";


function App() {
  const routes = [
    { path: '/about', element: <About /> },
    { path: '/profile', element: <Profile /> },
    { path: '/community', element: <Community /> },
    { path: '/contact-us', element: <Contact /> },
  ]

  return (
    <div>
      <BrowserRouter>
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
