import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import ReviewAnswer from './components/quiz/ReviewAnswer';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review" exact component={ReviewAnswer} />
        <Route path="/" exact component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
