import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from "../pages/Homepage";
import SignIn from "../pages/Sign-In";
import User from "../pages/User";
import ErrorPage from "../pages/ErrorPage";
import { useSelector } from 'react-redux';
import { selectLogin } from '../utils/selectors';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function App() {

  const loginData = useSelector(selectLogin);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={loginData.token ? <User /> : <Navigate to="/login" />} />
          <Route path="/error-page" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
