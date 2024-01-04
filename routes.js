```javascript
// Import required modules
const express = require('express');
const router = express.Router();

// Import controllers
const apiController = require('./api');
const userProfileController = require('./UserProfile');
const newsFeedController = require('./NewsFeed');
const articleSummaryController = require('./ArticleSummary');
const dailyDigestController = require('./DailyDigest');
const feedbackController = require('./Feedback');

// API routes
router.get('/api', apiController.getApi);
router.post('/api', apiController.postApi);

// User Profile routes
router.get('/userProfile', userProfileController.getUserProfile);
router.post('/userProfile', userProfileController.postUserProfile);
router.put('/userProfile/:id', userProfileController.updateUserProfile);
router.delete('/userProfile/:id', userProfileController.deleteUserProfile);

// News Feed routes
router.get('/newsFeed', newsFeedController.getNewsFeed);
router.post('/newsFeed', newsFeedController.postNewsFeed);

// Article Summary routes
router.get('/articleSummary/:id', articleSummaryController.getArticleSummary);
router.post('/articleSummary', articleSummaryController.postArticleSummary);

// Daily Digest routes
router.get('/dailyDigest', dailyDigestController.getDailyDigest);
router.post('/dailyDigest', dailyDigestController.postDailyDigest);

// Feedback routes
router.get('/feedback', feedbackController.getFeedback);
router.post('/feedback', feedbackController.postFeedback);

module.exports = router;
```
