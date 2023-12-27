import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import NumberGuessingGame from './Game/NumberGuessingGame';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div ClassName="Container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
