```javascript
// Import required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define News schema
const NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  feedback: {
    type: [String],
    default: []
  }
});

// Export News model
module.exports = mongoose.model('News', NewsSchema);
```
