import {Route} from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/destination'>
          <Destination />
        </Route>
        <Route path='/crew'>
          <Crew />
        </Route>
        <Route path='/technology'>
          <Technology />
        </Route>
      </main>
    </div>
  );
}

export default App;
