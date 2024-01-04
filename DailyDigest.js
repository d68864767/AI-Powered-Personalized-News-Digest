```javascript
import React, { Component } from 'react';
import axios from 'axios';

class DailyDigest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digest: []
    };
  }

  componentDidMount() {
    this.fetchDigest();
  }

  fetchDigest = async () => {
    try {
      const response = await axios.get('/api/daily-digest');
      this.setState({ digest: response.data });
    } catch (error) {
      console.error('Error fetching daily digest:', error);
    }
  }

  render() {
    const { digest } = this.state;

    return (
      <div className="DailyDigest">
        <h1>Daily Digest</h1>
        {digest.length > 0 ? (
          digest.map((article, index) => (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))
        ) : (
          <p>No articles in your digest today. Check back tomorrow!</p>
        )}
      </div>
    );
  }
}

export default DailyDigest;
```

