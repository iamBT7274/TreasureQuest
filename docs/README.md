# Getting Started with TreasureQuest

## Introduction
TreasureQuest is an interactive quiz game that challenges players with timed puzzles and rewards quick thinking. This guide will help you get started with development and deployment.

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/treasurequest.git
cd treasurequest
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Authentication and Firestore
   - Copy your Firebase config

4. Create environment variables:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Development

### Starting the Development Server
```bash
npm start
```

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

## Project Structure

### Key Directories
- `/src/components`: Reusable UI components
- `/src/pages`: Page components
- `/src/services`: API and business logic
- `/src/firebase.js`: Firebase configuration

### Important Files
- `App.js`: Main application component
- `firebase.js`: Firebase initialization
- `game.api.js`: Game API integration

## Features

### Authentication
- Email/Password login
- Guest mode
- Profile management

### Game Features
- Multiple difficulty levels
- Time-based challenges
- Score tracking
- Leaderboard

### User Profile
- Score history
- Achievement tracking
- Profile customization

## Deployment

### Firebase Deployment
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```

4. Deploy:
```bash
firebase deploy
```

## Troubleshooting

### Common Issues

1. Firebase Configuration
```javascript
// Check firebase.js configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // ...other config
};
```

2. API Connection
```javascript
// Verify API_BASE_URL in game.api.js
const API_BASE_URL = "https://marcconrad.com/uob/heart/api.php";
```

### Debug Tips
- Check browser console for errors
- Verify Firebase rules
- Confirm API endpoints
- Review authentication flow

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Support
For support, please:
1. Check documentation
2. Review common issues
3. Submit an issue on GitHub
4. Contact development team

## License
This project is licensed under the MIT License.