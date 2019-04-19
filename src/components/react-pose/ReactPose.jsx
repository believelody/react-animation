import React, { useState, useEffect } from 'react'
import SwipeableList from './pose-swipeable/SwipeableList'
import './ReactPose.css'
import PoseRouter from './pose-router/PoseRouter';

export default ({ getPath, location }) => {
    const items = [
        { title: 'React', subtitle: 'Javascript Library', icon: 'code' },
        { title: 'React-Pose', subtitle: 'Animations', icon: 'play_circle_outline' },
        { title: 'Material-UI', subtitle: 'Material Design', icon: 'palette' },
    ]
    
    useEffect(() => {
        if (location) getPath(location.pathname)
    }, [])

    return (
        <div className='pose-container'>
            <PoseRouter />
            <SwipeableList
                items={items}
                onSwipe={i => console.log(`swiped #${i}`)}
            />
        </div>
    )
}
