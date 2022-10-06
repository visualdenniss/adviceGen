import React from 'react'
import './App.css'
import Advice from './Advice/Advice'
import LearnMore from './Components/LearnMore/LearnMore'
const App = () => {
    return (
        <div className='app'>
            <Advice></Advice>
            <LearnMore></LearnMore>
        </div>
    )
}

export default App
