import React from 'react'

export default ({ question, answer, currentIndex, index, isActive, handleClick }) => {
    let current = currentIndex === index

    return (
    <ul className='holder'>
        <li className='question' onClick={() => handleClick(index)}>{question}</li>
        <li className={current && isActive ? 'answer open' : 'answer'}>
            {
                current && isActive && <p>{answer}</p>
            }
        </li>
    </ul>
    )
}
