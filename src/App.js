import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Landing } from "./pages";


function App() {
  const routes = [
    { path: '/about', element: <About /> },
  ]

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Landing /> exact />
          <Route path="/home" element=<Home /> exact />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} exact />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
