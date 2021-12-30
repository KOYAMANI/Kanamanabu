import './App.css';

import { 
  BrowserRouter, 
  Route, 
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Account from './screens/Account/Account';
import Register from './screens/Auth/Register/Register';
import Login from './screens/Auth/Login/Login';
import Contents from './screens/Contents/Contents'
import EditProfile from './screens/EditProfile/EditProfile';
import QuizCategory from './screens/Quiz/QuizCategory/QuizCategory';
import QuizSelection from './screens/Quiz/QuizSelection/QuizSelection';


// import Landing from './screens/Landing/Landing';
// import Notes from './screens/Notes/Notes';
// import CreateNote from './screens/CreateNote/CreateNote';
// import EditNote from './screens/EditNote/EditNote';


const App = () =>(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path ='/' element ={ <Login />} />
      {/* <Route path ='/login' element ={ <Login />} />         */}
      <Route path ='/register' element ={ <Register />} />     
      <Route path ='/contents' element ={<Contents />} />
      <Route path ='/account' element ={<Account />} />
      <Route path ='/editprofile' element ={<EditProfile />} />

      <Route path ='/quizcategory' element ={<QuizCategory />} />
      <Route path ='/quizselection' element ={<QuizSelection />} />




        
      {/* <Route path ='/createnote' element ={<CreateNote />} />     
      <Route path ='/notes' element ={<Notes />} />
      <Route path ='/notes/:id' element ={<EditNote />} /> */}
    </Routes>
    <Footer/>
  </BrowserRouter>

 )
export default App;
