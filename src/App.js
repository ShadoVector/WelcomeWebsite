import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
