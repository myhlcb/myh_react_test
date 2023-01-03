
import { HashRouter,Route,Routes,BrowserRouter,Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Layout from './Layout'
import Article from './Article'
export default function App() {
  return (
    // HashRouter有#; BrowserRouter没有
    <BrowserRouter>
    <Link to='/'>首页</Link>
    <Link to='/about'>关于</Link>
    <Routes>
      {/* path指定路径 element指定要渲染的组件 */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/about/:id' element={<About/>}></Route>
      <Route path='/layout' element={<Layout/>}>
        <Route path='/layout/article' element={<Article/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
