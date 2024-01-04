```javascript
import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      interests: [],
      preferredCategories: [],
      readingPreferences: '',
      feedback: []
    };
  }

  componentDidMount() {
    // Fetch user data from the server when the component mounts
    axios.get('/api/user')
      .then(res => {
        this.setState({
          username: res.data.username,
          email: res.data.email,
          interests: res.data.interests,
          preferredCategories: res.data.preferredCategories,
          readingPreferences: res.data.readingPreferences,
          feedback: res.data.feedback
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="UserProfile">
        <h2>User Profile</h2>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <p>Interests: {this.state.interests.join(', ')}</p>
        <p>Preferred Categories: {this.state.preferredCategories.join(', ')}</p>
        <p>Reading Preferences: {this.state.readingPreferences}</p>
        <p>Feedback: {this.state.feedback.join(', ')}</p>
      </div>
    );
  }
}

export default UserProfile;
```
