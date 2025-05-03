
import Home from '@pages/Home';
import UserDetail from '@pages/UserDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return <>
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<UserDetail />} />
  </Routes>
</Router>
  </>;
};

export default App;