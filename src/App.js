// import logo from './logo.svg';
import './App.css';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import AdminLogin from './components/adminAuth/index';
import Forgot from './components/authentication/Forgot';
import UpdateBook from './components/UpdateBook/index';
import AddBooks from './components/AddBooks/index';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import BookDashboard from './components/BookDashboard/index';
import UserDashboard from './components/UserDashboard';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        {/* <Route exact path="/" element={<MainPage />} /> */}

        <Route exact path="/" element={<Login/>} />
        {/* <Route exact path="/adminlogin" element={<AdminLogin/>} /> */}
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/booksData" element={<BookDashboard/>} />
        <Route path='/addData' element={<AddBooks/>}/>
        <Route exact path="/userData" element={<UserDashboard/>} />
		    <Route path='/update/:id' element={<UpdateBook/>}/>
		    <Route path='/forgot' element={<Forgot/>}/>
        </Routes>
    </Router>

    </div>
  );
}
export default App;