import './App.css';
import { 
  BrowserRouter, 
  Route, 
  Routes,
} from 'react-router-dom';
import React from 'react'
import Footer from './components/Global/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Account from './screens/Account/Account';
import EditProfile from './screens/EditProfile/EditProfile';
import MainScreen from './screens/Main/MainScreen'
import QuizSelection from './screens/Quiz/QuizSelection/QuizSelection';
import QuizScreen from './screens/Quiz/Quizzes/QuizScreen';
import SignInScreen from "./screens/SignIn/SignInScreen";

const isServerSideRendered = () => {
    return typeof window === 'undefined';
};

if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
        import('@axe-core/react').then((axe) => {
            axe.default(React, ReactDOM, 1000, {});
        });
    });
}

const App = () =>(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path ='/' element ={ <SignInScreen />} />
      <Route path ='/account' element ={<Account />} />
      <Route path ='/editprofile' element ={<EditProfile />} />
      <Route path ='/main' element ={<MainScreen />} />
        <Route path ='/quizselection' element ={<QuizSelection />} />
      <Route path ='/quiz' element={<QuizScreen />} />
    </Routes>
    <Footer/>
  </BrowserRouter>

 )
export default App;
