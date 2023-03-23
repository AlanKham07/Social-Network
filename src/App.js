import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
    </div>
  )
}

export default App;
