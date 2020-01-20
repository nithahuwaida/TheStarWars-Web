import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Dashboard from './component/Dashboard.js';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
