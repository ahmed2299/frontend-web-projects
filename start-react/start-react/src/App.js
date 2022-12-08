import './App.css';
import NavBar from './Components/Navbar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './styles.css'
import MastHead from './Components/MastHead/MastHead'
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import CopyRight from './Components/CopyRight/CopyRight';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MasterLayout from './Components/MasterLayout/MasterLayout';
import PortfolioModal from './Components/PortfolioModal/PortfolioModal';
export default function App() {

  return (
    <>
    
    
    <NavBar></NavBar>
    <MastHead></MastHead>
    <Portfolio></Portfolio>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
    <CopyRight></CopyRight>
    </>
  );
}

