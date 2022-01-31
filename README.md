## About the Project

This project is about quiz-style Japanese language learning application.
Following features are currently available

- Login and Registration
- Update account information
- Answering Quiz and Scoring

## About the Project

This project is about quiz-style Japanese language learning React application.
Following features are currently available

- Login and Registration
- Update account information
- Answering Quiz and Scoring

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode, client and server concurrently.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If you want to run client alone, run `npm client` instead.
If you want to run server alone, run `npm start` instead.

## How the App works

### State Management

React-Redux is the key technologies for the frontend and state-management.\
Once the app detects a user action from UI. Redux updates the state and keep it in store.js.\
For instance, If the user choose one of the quiz answers, `QuizScreen.js` dispatches `updateScore()` function\
This will then update `currentScore` state depending on chosen answer is correct or not.

### Authentication

For the backend, the server consists of Node.js and express.js and Database is MongoDB\
During the registration the inputted information such as email or password goes through `userRoute` API\
The `userController.js` calls Mongoose schema and interacts with database to store the data.\
Inputted password is hashed by `bcrypt.js` before being stored.

### Authorization

Users should go through `authMiddleware` for the authorization.\
It verifies jwt token in the Http request and restricts page navigation\
