import React from 'react'
import Navigation from '../components/Navigation'
//import Counter from '../components/Counter'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navigation/>
        {/*<Counter/>*/}
        <Hero/>
        <Main/>
        <Footer/>
    </>
  )
}

export default Home