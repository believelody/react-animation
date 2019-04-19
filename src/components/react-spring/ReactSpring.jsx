import React, { useState, useEffect } from 'react'
import ReactSpringParallax from './ReactSpringParallax';
import ReactSpringReveal from './ReactSpringReveal';
import './ReactSpring.css'
import ReactSpringFlip from './ReactSpringFlip';
import ReactSpringGesture from './ReactSpringGesture';

export default ({ getPath, location }) => {
    useEffect(() => {
       if (location) getPath(location.pathname)
    }, [])
    
    return (
        <div style={{ display: 'block', width: '100%', position: 'relative' }}>
            <ReactSpringReveal />
            <ReactSpringFlip />
            <ReactSpringGesture />
            <ReactSpringParallax />
        </div>
    )
}