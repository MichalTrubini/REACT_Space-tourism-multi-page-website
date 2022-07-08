import React, { Suspense } from 'react';
import {Route} from 'react-router-dom';

import Header from "./components/Header";

const Home = React.lazy(() => import('./pages/Home'));
const Destination = React.lazy(() => import('./pages/Destination'));
const Crew = React.lazy(() => import('./pages/Crew'));
const Technology = React.lazy(() => import('./pages/Technology'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
  );
}

export default App;
