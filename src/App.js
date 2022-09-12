import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import AllLinks from './Routes/AllLinks';
import Profile from './components/Home/Profile';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      {/* <Box bg="#EDF2F8"> */}
      <AllLinks />
      <AllRoutes />
      {/* </Box> */}
    </div>
  );
}

export default App;