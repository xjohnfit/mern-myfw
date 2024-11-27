import Auth from "./Auth";
import Home from "./Home";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import No from "./No";
import Yes from "./Yes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
