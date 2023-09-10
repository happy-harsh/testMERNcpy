import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div style={{margin:"auto"}}>
        <img src="https://source.unsplash.com/random/1536x626/?office" alt="" style={{backgroundSize:"cover"}} />
        </div>
    </div>  )
}

export default Home