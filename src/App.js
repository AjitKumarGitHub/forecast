 
import './App.css';
import WeatherBox from './WeatherBox';
import Header from './Header';
import Weather5Days from './Weather5Days';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <div className="w-full h-screen ">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<WeatherBox/>}/>
        <Route path='/5days' element={<Weather5Days/>}/>
      </Routes>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
