import './styles/App.css';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Donate from './components/Donate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState } from 'react';
import Vet from './components/Vet';
import Volunteers from './components/Volunteers';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/Donate' component={Donate} />
          <Route path='/Vet' component={Vet} />
          <Route path='/Volunteers' component={Volunteers} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
