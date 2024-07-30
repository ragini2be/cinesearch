import { AllRoutes } from './routes/AllRoutes';
import { Header , Footer } from './Component';
import './App.css';

function App() {
  return (
    < div className="App">
    <Header/>
    <AllRoutes/>
    <Footer/>
    </ div>
  );
}

export default App;
