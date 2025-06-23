import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aadhar from './componets/Aadhar';
import Dash from "./componets/Dash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aadhar />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
