```javascript
// Import required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  interests: {
    type: [String],
    default: []
  },
  preferredCategories: {
    type: [String],
    default: []
  },
  readingPreferences: {
    type: String,
    default: 'All'
  },
  feedback: {
    type: [String],
    default: []
  }
});

// Export User model
module.exports = mongoose.model('User', UserSchema);
```
