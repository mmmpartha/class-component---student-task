import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Studentdetails from "./studentdetails";
import Edit from "./edit";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Studentdetails />} />
          <Route exact path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

