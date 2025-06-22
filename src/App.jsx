import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          {/* Add more routes here as you develop other pages */}
          {/* <Route path="markets" element={<Markets />} /> */}
          {/* <Route path="exchange" element={<Exchange />} /> */}
          {/* <Route path="portfolio" element={<Portfolio />} /> */}
          {/* <Route path="crypto/:id" element={<CryptoDetail />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="*" element={<Home />} /> {/* Fallback for now */}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
