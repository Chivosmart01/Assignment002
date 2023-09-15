import Home from '../../../stage 2/assignment2/src/Pages/Home';

import MovieDetails from '../../../stage 2/assignment2/src/Pages/MovieDetails';
import MovieSearch from '../../../stage 2/assignment2/src/Pages/MovieSearch'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
    <Router>                          
      <Routes>

              
              <Route path='/' element={<Home/>} />
              <Route path="/search" element={<MovieSearch />} />     
              <Route path="/movies/:id" element={<MovieDetails />} />           
        </Routes>        
       </Router>
                  
    </div>
  );
}

export default App;