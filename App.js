```javascript
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserProfile from './UserProfile';
import NewsFeed from './NewsFeed';
import ArticleSummary from './ArticleSummary';
import DailyDigest from './DailyDigest';
import Feedback from './Feedback';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={NewsFeed} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/article-summary" component={ArticleSummary} />
            <Route path="/daily-digest" component={DailyDigest} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```

