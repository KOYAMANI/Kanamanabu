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

If you want to run a client alone, run `npm client` instead.
If you want to run a server alone, run `npm start` instead.

If you have Docker on your machine, you can also run :

### `make run-local`

It will compose client, sever and database on a Docker.
Open [http://localhost:80](http://localhost:80) to view it in your browser.

## API References

| Method | API call                           | description                                                                                                               |
|--------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| POST   | api/users/                         | [Register a new user](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/users/register.md)                            |
| POST   | api/users/login                    | [Login](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/users/login.md)                                             |
| DELETE | api/users/delete                   | [Delete a user](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/users/delete.md)                                    |
| POST   | api/users/profile                  | [Update a user profile](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/users/update.md)                            |
| GET    | api/chapter/:title                 | [Show a contents of learning chapter](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/chapters/chapters.md)         |
| GET    | api/quizzes/categories             | [Show quiz category](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/quizzes/categories.md)                         |
| GET    | api/quizzes/:category              | [Sort quizzes by category](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/quizzes/category.md)                     |
| GET    | api/quizzes/:category/:subcategory | [Sort quizzes by category and sub-category](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/quizzes/subcategory.md) |
| GET    | api/achievements                   | [Show user's achievements](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/achievements/achievements.md)            |
| GET    | api/achievements/add               | [Add a new achievement to a user](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/achievements/add.md)              |

## Data types

[Documentation](https://github.com/KOYAMANI/Kanamanabu/blob/main/docs/data/data_types.md)

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
