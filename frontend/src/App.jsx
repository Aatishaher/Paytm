import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Send from './pages/send';
import './input.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/send" element={<Send/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
