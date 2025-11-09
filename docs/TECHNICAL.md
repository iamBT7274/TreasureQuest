# TreasureQuest Technical Documentation

## Overview
TreasureQuest is an interactive web-based quiz game that combines puzzle-solving with time management. This document provides technical details about implementation, dependencies, and development guidelines.

## Dependencies

### Core Dependencies
- React.js (^18.0.0)
- React Router DOM
- Firebase (^9.0.0)
- React Icons

### Development Dependencies
- Create React App
- ESLint
- Prettier

## Component Documentation

### Game Component
`src/pages/game.js`

#### Purpose
Manages the main game logic, including:
- Question display
- Answer handling
- Score tracking
- Timer management

#### Key Features
1. Progressive Difficulty System
   ```javascript
   const getTimeLimit = (level) => {
     switch (level) {
       case 1: return 50;
       case 2: return 30;
       case 3: return 15;
       default: return 50;
     }
   };
   ```

2. Score Management
   - Base score: +10 points for correct answers
   - Penalties vary by level:
     - Level 1: -3 points
     - Level 2: -5 points
     - Level 3: -7 points

### Authentication Component
`src/pages/auth.js`

#### Features
- Email/password authentication
- Guest mode access
- Session management
- User profile creation

#### Security Implementation
- Firebase Authentication
- Token-based session management
- Secure password handling

### Timer Component
`src/components/timer.jsx`

#### Features
- Circular visual timer
- Level-based time limits
- Event-driven updates

## API Integration

### Game API
`src/services/game.api.js`

#### Endpoints
- Base URL: `https://marcconrad.com/uob/heart/api.php`
- Quiz endpoint: `/quiz`

#### Error Handling
```javascript
try {
  const response = await fetch(`${API_BASE_URL}/quiz`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
} catch (error) {
  console.error("API Error:", error);
  return null;
}
```

## Firebase Implementation

### Configuration
`src/firebase.js`

#### Services Used
- Authentication
- Firestore Database
- Analytics

#### Security Rules
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Development Guidelines

### Code Style
- Use functional components
- Implement React hooks
- Follow ESLint configuration
- Use async/await for promises

### State Management
- Use React hooks for local state
- Implement prop drilling where appropriate
- Consider Context API for global state

### Error Handling
- Implement try-catch blocks
- Use error boundaries
- Provide user feedback

### Testing Guidelines
- Unit test components
- Test API integration
- Validate user interactions

## Deployment

### Build Process
```bash
npm run build
```

### Firebase Deployment
```bash
firebase deploy
```

## Security Considerations

### Authentication
- Token-based auth
- Session management
- Password security

### Data Protection
- Firebase security rules
- Input validation
- XSS prevention

## Performance Optimization

### Implemented
- Component lazy loading
- Image optimization
- Firebase caching

### Planned Improvements
- Code splitting
- Service worker
- PWA support