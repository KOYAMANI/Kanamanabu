import './App.css';

import { 
  BrowserRouter, 
  Route, 
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Landing from './screens/Landing/Landing';
import Account from './screens/Account/Account';
import Notes from './screens/Notes/Notes';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import CreateNote from './screens/CreateNote/CreateNote';
import EditNote from './screens/EditNote/EditNote';
import Contents from './screens/Contents/Contents'
import EditProfile from './screens/EditProfile/EditProfile';


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

        
      {/* <Route path ='/createnote' element ={<CreateNote />} />     
      <Route path ='/notes' element ={<Notes />} />
      <Route path ='/notes/:id' element ={<EditNote />} /> */}
    </Routes>
    <Footer/>
  </BrowserRouter>

 )
export default App;
