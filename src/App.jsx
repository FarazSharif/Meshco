import React from 'react'
import './App.css'
import './reset.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Rights from '../components/Rights'

export default function App() {
const [mainPage, setMainPage] = React.useState(true)
const [productsPage, setProductsPage] = React.useState(false)
const [aboutUsPage, setAboutUsPage] = React.useState(false)

const [scrollDirection, setScrollDirection] = React.useState("up");
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currScrollPos = window.pageYOffset;
    if (currScrollPos > prevScrollPos) {
        setScrollDirection("down")
    }
        else {
        setScrollDirection("up")
    }
}



return (
  <div className='app'>
  <Nav scrollDirection={scrollDirection}/>
  <Main mainPage={mainPage} scrollDirection={scrollDirection}/>
  <Footer />
  <Rights />
  </div>
)
}
