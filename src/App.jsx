import React from 'react'
import '../src/style/App.css'
import '../src/style/App-ir.css'
import '../src/style/reset.css'
import '../src/style/subproducts.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Rights from '../components/Rights'
import Home from '../components/Home'
import Productweld from '../components/products/Productweld'
import Productwm from '../components/products/Productwm'
import Productemm from '../components/products/Productemm'
import Productpm from '../components/products/Productpm'
import Aboutus from '../components/Aboutus'
import ContactPage from '../components/Contact'

export default function App() {
    const [homePage, setHomePage] = React.useState(true);
    const [productsPage, setProductsPage] = React.useState(false);
    const [productweld, SetProductweld] = React.useState(false);
    const [productwm, SetProductwm] = React.useState(false);
    const [productemm, SetProductemm] = React.useState(false);
    const [productpm, SetProductpm] = React.useState(false);
    const [aboutUsPage, setAboutUsPage] = React.useState(false);
    const [contactPage, setContactPage] = React.useState(false);
    const [scrollDirection, setScrollDirection] = React.useState("up");


    function handleClickHome() {
        setHomePage(true)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(false)
    }

    function handleClickProducts() {
        setHomePage(false)
        setProductsPage(true)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(false)
    }
    function handleClickProductweld() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(true)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(false)
    }
    function handleClickProductswm() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(true)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(false)
    }
    function handleClickProductemm() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(true)
        SetProductpm(false)
        setContactPage(false)
    }
    function handleClickProductpm() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(true)
        setContactPage(false)
    }
    function handleClickAbout() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(true)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(false)
    }
    function handleClickContact() {
        setHomePage(false)
        setProductsPage(false)
        setAboutUsPage(false)
        SetProductweld(false)
        SetProductwm(false)
        SetProductemm(false)
        SetProductpm(false)
        setContactPage(true)
    }
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
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
            <Nav
                scrollDirection={scrollDirection} 
                homePage={homePage} handleClickHome={handleClickHome} 
                productsPage={productsPage} handleClickProducts={handleClickProducts}
                productweld={productweld} handleClickProductweld={handleClickProductweld} 
                productwm={productwm} handleClickProductswm={handleClickProductswm}
                productemm={productemm} handleClickProductemm={handleClickProductemm}
                productpm={productpm} handleClickProductpm={handleClickProductpm}
                aboutUsPage = {aboutUsPage} handleClickAbout= {handleClickAbout}
                contactPage= {contactPage} handleClickContact= {handleClickContact}
            />
            {productsPage ? <Products 
                productweld={productweld} handleClickProductweld={handleClickProductweld} 
                productwm={productwm} handleClickProductswm={handleClickProductswm}
                productemm={productemm} handleClickProductemm={handleClickProductemm}
                productpm={productpm} handleClickProductpm={handleClickProductpm}
            /> : ""}
            {homePage ? <Home handleClickProducts={handleClickProducts} handleClickContact={handleClickContact}/> : ""}
            {productweld ? <Productweld handleClickProducts={handleClickProducts}/> : ""}
            {productwm ? <Productwm handleClickProducts={handleClickProducts}/> : ""}
            {productemm ? <Productemm handleClickProducts={handleClickProducts}/> : ""}
            {productpm ? <Productpm handleClickProducts={handleClickProducts}/> : ""}
            {aboutUsPage ? <Aboutus/> : ""}
            {contactPage ? <ContactPage /> : ""}
            <Footer />
            <Rights />
        </div>
    )
}
