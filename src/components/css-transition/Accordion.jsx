import React, { useState } from 'react'
import qas from './qas.js'
import List from './List';
import './CSSTransition.css'

export default () => {
    const [currentIndex, setIndex] = useState(-1)
    const [isActive, setActive] = useState(false)

    const handleClick = i => setIndex(prevIndex => {
        if (prevIndex === i) setActive(!isActive)
        else setActive(true)
        return i
    })

    return (
    <div className='accordion'>
        {
            qas.map((qa, i) => (
                <List
                    question={qa.question}
                    answer={qa.answer}
                    handleClick={handleClick}
                    key={i}
                    index={i}
                    currentIndex={currentIndex}
                    isActive={isActive}
                />
            ))
        }
    </div>
    )
}
