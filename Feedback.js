```javascript
import React, { Component } from 'react';
import axios from 'axios';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({feedback: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/feedback', { feedback: this.state.feedback })
      .then(res => {
        alert('Feedback submitted successfully!');
        this.setState({feedback: ''});
      })
      .catch(err => {
        console.error(err);
        alert('An error occurred while submitting feedback.');
      });
  }

  render() {
    return (
      <div className="Feedback">
        <h2>Feedback</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Feedback:
            <textarea value={this.state.feedback} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Feedback;
```

