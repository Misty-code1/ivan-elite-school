import './App.css';
import './Fonts/Poppins-Regular.ttf'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomPage from './Pages/HomPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={HomPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
