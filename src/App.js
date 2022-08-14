import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RouterUsers from './pages/RouterUsers';
import RouterPosts from './pages/RouterPosts';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/*' element={<RouterUsers />} />
        <Route path='/posts/*' element={<RouterPosts />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
