import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/create" element={<Create />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;




