```javascript
import React, { Component } from 'react';
import axios from 'axios';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const response = await axios.get('/api/news');
      this.setState({ news: response.data });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  render() {
    const { news } = this.state;

    return (
      <div className="NewsFeed">
        <h1>News Feed</h1>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))
        ) : (
          <p>No news to display</p>
        )}
      </div>
    );
  }
}

export default NewsFeed;
```
