import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ReqButton from './Components/ReqButton/ReqButton';
import Vacancies from './Components/Vacancies/Vacancies';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Vacancies/>
      <Reviews/>
      <Footer/>
      <ReqButton/>
    </div>
  );
}

export default App;
