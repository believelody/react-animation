import React, { useState } from 'react'
import { Transition, animated } from 'react-spring/renderprops'

const defaultStyles = {
    cursor: 'pointer',
    position: 'absolute',
    minWidth: '300px',
    minHeight: '300px',
    maxWidth: '500px',
    maxHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 800,
    fontSize: '16em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const A = ({styles}) => (
        <animated.div
            style={{
                ...defaultStyles,
                ...styles,
                backgroundColor: '#b2dbbf'
            }}
        >
            A
        </animated.div>
    )

const B = ({styles}) => (
    <animated.div
        style={{
            ...defaultStyles,
            ...styles,
            backgroundColor: '#14d790'
        }}
    >
        B
    </animated.div>
)

export default () => {
    const [toggled, setToggle] = useState(true)

    const toggle = e => setToggle(prevToggled => !prevToggled)

    return (
        <div className='spring-reveal-container'>
            <h3>Click on the square to see animation</h3>
            <span onClick={toggle}>
                <Transition
                    items={toggled}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    config={{ tension: 10, friction: 1 }}
                >
                    {
                        toggled => 
                        toggled ? 
                        props => <A styles={props} /> 
                            : 
                        props => <B styles={props} />
                    }
                </Transition>
            </span>
        </div>
    )
}