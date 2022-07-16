import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from "./component/Home/Home.js"
import Footer from './component/Footer/Footer'
import About from './component/About/About'
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import Loader from './component/Loader/Loader'
import AdminPanel from './component/Admin/AdminPanel'
import Timeline from './component/Admin/Timeline'
import Certificate from './component/Admin/Certificate'
import Projects from "./component/Admin/Projects"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from "./actions/user"

function App() {
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home certificate={user.certificate}
              timelines={user.timeline}
              skills={user.skills} />} />
            <Route path='/about' element={<About about={user.about} />} />
            <Route path='/projects' element={<Project projects={user.projects} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login />} />

            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/certificate"
              element={isAuthenticated ? <Certificate /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Projects /> : <Login />}
            />


          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
