import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './components/home/index';
import NotFound from './components/Pages/404 Page/Notfound';
import ProjectsPage from './components/Pages/Project Page/ProjectsPage';

function App() {
  return(
    
        <Router>
            <layout>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/AllProjects" element={<ProjectsPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            </layout>
        </Router>
  ); 
}

export default App
 