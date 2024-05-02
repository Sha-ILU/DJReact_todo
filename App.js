
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lgin from './Lgin';
import Dashbrd from './Dashbrd';
import Tdform from './Tdform';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Dashbrd /> : <Lgin setLoggedIn={setLoggedIn} />}
          </Route>
          <Route path="/add" component={Tdform} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

