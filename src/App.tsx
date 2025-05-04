
import { Box } from '@chakra-ui/react';
import Header from '@pages/Header';
import Home from '@pages/Home';
import UserDetail from '@pages/UserDetail';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => 
   (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Box p={4} minH="90vh"  justifyContent="center" display="flex" alignItems="center" width={"100%"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<UserDetail />} />
        </Routes>
      </Box>
    </Router>
   )

export default App;