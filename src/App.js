import './App.css';
import Body from './Components/Body';
import { Box } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{backgroundColor: "rgb(234,249,254)"}}>
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
