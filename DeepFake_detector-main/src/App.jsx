import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import AuthCard from './Pages/login-Register/Auth';

import DeepFakePage from './Pages/Deepfake/deepFakePage';
import FakeNewsPage from './Pages/FakeNews/fakeNews';
import ContactPage from './Pages/ContactUs/contactPage';
// import Navbar from './Components/navbar';

function App() {
  return (
    <>
      <Routes>    
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<AuthCard />} />
        <Route path="/register" element={<AuthCard />} />
        <Route path='/deepFake' element={<DeepFakePage/>}/>
        <Route path='/FakeNews' element={<FakeNewsPage/>}/>
        
        <Route path='/Contact' element={<ContactPage/>}/>
      </Routes>
    </>
  );
}

export default App;

