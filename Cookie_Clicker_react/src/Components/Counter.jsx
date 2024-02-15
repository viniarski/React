import {useState, useEffect} from 'react'
import './Counter.css'

export default function Counter({count, setCount}) {
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(preCount => preCount + 1 )
        }, 1000)

        return () => clearInterval(interval)
    },[])

    return (
        <div>
            <p className="counter">Cookies: {count}</p>
        </div>
    )
}