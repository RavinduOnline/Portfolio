import React, {useEffect}from 'react'
import Body from '../body'
import Footer from '../footer'
import Header from '../header'
import './home.css'
import Aos from 'aos'
import "aos/dist/aos.css"


function Home () {

    useEffect(() => {
        Aos.init({duration: 700});
     }, []);

    return (
        <div className="home">
            <div >
                <Header/>
            </div>

            <div>
                <Body/>
            </div>

            <div>
                <Footer/>
            </div>
            
        </div>

    )
}

export default Home
