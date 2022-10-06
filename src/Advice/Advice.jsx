import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Advice.css'
const Advice = () => {

    const [advice, setAdvice] = useState('')
    const [id, setId] = useState('')

    const [cat, setCat] = useState('')

    const url = 'https://api.adviceslip.com/advice'

    const getPost =  async () => {
        const res = await axios.get(url)
        const advice = res.data.slip.advice

        const catData = await axios.get('https://api.thecatapi.com/v1/images/search')
        const cat = catData.data[0].url
        setCat(cat)

        const id = res.data.slip.id
        setAdvice(advice);
        setId(id)

    }

    return (
        <div className='advice-container'>
            <h4 className='advice-title'>ADVICE #{id}</h4>
            <p className='advice-quote'>{advice}</p>
            <div className="deco">
                <img src="pattern-divider-desktop.svg" alt="" />
            </div> 
            <img className='cat-img' src={cat} alt="" />
            <button className="gen-btn" onClick={()=>getPost()}>
                <img className='icon-dice' src="icon-dice.svg" alt="" />
            </button>
        </div>
    )
}

export default Advice
