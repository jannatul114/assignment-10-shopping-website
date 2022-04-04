
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'/home'} element={<Home></Home>}></Route>
        <Route path={'/dashBoard'} element={<DashBoard></DashBoard>}></Route>
        <Route path={'/reviews'} element={<Reviews></Reviews>}></Route>
        <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
        <Route path={'*'} element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
