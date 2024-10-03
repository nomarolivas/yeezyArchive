import { SideNav } from "./components/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
          <div className="routes">
            <SideNav />

            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Sneakers" element={<Sneakers />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} >

              </Route> */}


          </div>
        </Router>
  );
}

export default App;
