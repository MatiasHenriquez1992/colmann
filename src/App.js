import './App.css';
import IndexPage from './componentes/IndexPage';
import Nosotros from './componentes/Nosotros/Nosotros';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
