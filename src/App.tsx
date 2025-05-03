
import { Box } from '@chakra-ui/react';
import Home from '@pages/Home';
import UserDetail from '@pages/UserDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => 
   (
    <Router>
      <Box p={4} bg="gray.100" minH="100vh" flexDirection="column" justifyContent="center" display="flex" alignItems="center" width={"100%"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<UserDetail />} />
        </Routes>
      </Box>
    </Router>
   )

export default App;