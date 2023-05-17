import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Main from '../components/Main'
import MyBadge from '../components/MyBadge'
//import Hero from '../components/Hero'
//import Counter from '../components/Counter'

const Home = () => {
  return (
    <>
        <Navigation/>
        {/*<Counter/>*/}
        {/*<Hero/>*/}
        <MyBadge/>
        <Main/>
        <Footer/>
    </>
  )
}

export default Home