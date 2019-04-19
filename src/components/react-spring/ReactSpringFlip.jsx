import React, { useState } from 'react'
import { Spring, animated, interpolate } from 'react-spring/renderprops'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'

const styles = {
    container: { height: '100%', display: 'flex', justifyContent: 'center', alignitems: 'center', willChange: 'background' },
    shape: { width: 600, height: 600, willChange : 'transform' }
}

const Content = ({ toggle, backgroundColor, fill, rotate, scale, shape }) => {
    return (
    <animated.div style={{ ...styles.container, backgroundColor }}>
        <animated.svg
            style={{ 
                ...styles.shape, 
                fill, 
                transform: interpolate([rotate, scale], (r, s) => `rotate3d(0, 1, 0, ${r}) scale(${s})`)
            }}
            version='1.1'
            viewBox='0 0 400 400'
        >
            <g style={{ cursor: 'pointer' }} fillRule='evenodd' onClick={toggle}>
                <animated.path id='path-1' d={shape} />
            </g>
        </animated.svg>
    </animated.div>
)}

export default () => {
    const [toggled, setToggle] = useState(true)

    const toggle = () => setToggle(!toggled)

    return (
        <div className='spring-flip-container'>
            <Spring
                native
                from={{ fill: 'black' }}
                to={{
                    fill: toggled ? '#247ba0' : '#70c1b3',
                    backgroundColor: toggled ? '#b2dbbf' : '#f3ffbd',
                    rotate: toggled ? '0deg' : '180deg',
                    scale: toggled ? 0.3 : 0.7,
                    shape: toggled ? TRIANGLE : RECTANGLE
                }}
            >
                {
                    props => <Content {...props} toggle={toggle} />
                }
            </Spring>
        </div>
    )
}