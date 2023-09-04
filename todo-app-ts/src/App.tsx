import { Link, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { About } from './pages/About';
import { Posts } from './pages/Posts';

export function App() {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar__links'>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts list</Link>
        </div>
      </div>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>

  )
}
