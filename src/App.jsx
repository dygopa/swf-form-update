import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomeIndex from './pages/home';
import SuccessIndex from './pages/success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex/>}/>
        <Route path="/success" element={<SuccessIndex/>}/>
      </Routes>
    </Router>
  )
}

export default App
