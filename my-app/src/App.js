
import './App.css';
import './App.scss';
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import Portfolios from './Pages/Portfolios';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';



function App() {
  return (
    <div className="App">
     <div className="sidebar">
       <Navbar/>
     </div>
     <div className="main-content">
       <div className="content">
       <Switch>
       <Route path='/'exact>
         <HomePage/>
         </Route>
         <Route path='/about'exact>
         <AboutPage/>
         </Route>
         <Route path='/portfolios'exact>
         <Portfolios/>
         </Route>
         <Route path='/blogs'exact>
         <BlogPage/>
         </Route>
         <Route path='/contacts'exact>
         <ContactPage/>
         </Route>
         </Switch>
       </div>
     </div>
    </div>
  );
}

export default App;
