import './App.css';

import { 
  BrowserRouter, 
  Route, 
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Account from './screens/Account/Account';
import Contents from './screens/Contents/Contents'
import EditProfile from './screens/EditProfile/EditProfile';
import QuizCategory from './screens/Quiz/QuizCategory/QuizCategory'
import QuizSelection from './screens/Quiz/QuizSelection/QuizSelection';
import QuizScreen from './screens/Quiz/Quizes/QuizScreen';
import SignInPage from "./screens/Auth/SignInPage/SignInPage";


const App = () =>(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path ='/' element ={ <SignInPage />} />
      <Route path ='/contents' element ={<Contents />} />
      <Route path ='/account' element ={<Account />} />
      <Route path ='/editprofile' element ={<EditProfile />} />
      <Route path ='/quizcategory' element ={<QuizCategory />} />
        <Route path ='/quizselection' element ={<QuizSelection />} />
      <Route path ='/quiz' element={<QuizScreen />} />


    </Routes>
    <Footer/>
  </BrowserRouter>

 )
export default App;
