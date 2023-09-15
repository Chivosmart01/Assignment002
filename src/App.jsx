
import Home from "../src/Pages/Home"

import MovieDetails from "../src/Pages/MovieDetails";
import MovieSearch from "../src/Pages/MovieSearch"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
    <Router>                          
      <Routes>
            <Home />
              
              <Route path='/' element={<Home/>} />
              <Route path="/search" element={<MovieSearch />} />     
              <Route path="/movies/:id" element={<MovieDetails />} />           
        </Routes>        
       </Router>
                  
    </div>
  );
}

export default App;