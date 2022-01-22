import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/ContactSection/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import axios from 'axios'


const URL = "https://randomuser.me/api/";

const App = () => {
  const[userData, setUserData] = useState(null);
  
  useEffect(()=>{
    async function getData (){
      const data = await axios.get(URL)
      setUserData(data.data.results[0])
    }
    getData();
  },[])

  const onClickHandler = (e) => {
    let item = document.querySelector('body')
    item.classList.toggle('mobile-nav-active')
    e.target.classList.toggle('bi-list')
    e.target.classList.toggle('bi-x')
  }

  if(userData != null) {return (
    <div>
     <i className="bi bi-list mobile-nav-toggle d-xl-none navicon" onClick={onClickHandler}></i>
      <Header info={userData}/>
      <Home info={userData}/>
      <About info={userData}/>
      <Contact info={userData}/>
      <Footer />
    </div>
  )} else {
    return (
      <Loader />
    )
  }

}

export default App

