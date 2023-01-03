
import Home from './Home'
import About from './About'
import { Route,Routes,BrowserRouter,Link } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
    <Link to='/'>首页</Link>
    <Link to='/about'>关于</Link>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
