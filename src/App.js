import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/common/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
// import Head from './components/common/heading/Head';



const App = () => {
  return (
    <>
      <Router>
        {/* <Head/> */}
          <Header/>
         <Switch>
           <Route path='/' exact component={Home}></Route>
           <Route path='/about' exact component={About}></Route>
          <Route path='/courses' exact component={CourseHome}/>
          <Route path='/team' exact component={Team}/>
          <Route path='/pricing' exact component={Price}/>
          <Route path='/journal' exact component={Blog}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
