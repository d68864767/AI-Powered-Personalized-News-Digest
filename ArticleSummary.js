```javascript
import React, { Component } from 'react';
import axios from 'axios';

class ArticleSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: '',
      title: '',
      url: '',
      category: ''
    };
  }

  componentDidMount() {
    this.getArticleSummary();
  }

  getArticleSummary = async () => {
    const { match: { params } } = this.props;
    const response = await axios.get(`/api/${params.id}`);
    const { title, url, category, summary } = response.data;
    this.setState({ title, url, category, summary });
  }

  render() {
    const { title, url, category, summary } = this.state;
    return (
      <div className="article-summary">
        <h2>{title}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
        <p>Category: {category}</p>
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>
    );
  }
}

export default ArticleSummary;
```

