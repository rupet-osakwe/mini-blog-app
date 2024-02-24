
import './App.scss';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import CreatePost from './pages/create-post';
import Post from './pages/post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <h2>Welcome</h2> */}
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/single-post/:id" element={<Post />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
