import React from 'react'
import { Router, Link, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'
import PoseHome from './PoseHome'
import PoseAbout from './PoseAbout'
import './PoseRouter.css'

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: 300 },
    exit: { opacity: 0}
})

const PosedRouter = ({ children }) => (
    <Location>
        {
            ({ location }) => (
                <PoseGroup>
                    <RouteContainer key={location.key} style={{ paddingLeft: '20px' }}>
                        <Router location={location}>
                            {children}
                        </Router>
                    </RouteContainer>
                </PoseGroup>
            )
        }
    </Location>
)

export default () => {
  return (
    <div className='pose-router-container'>
        <div id='site-container'>
            <header>
                <h1>Route transitions with Pose and Reach Router</h1>
            </header>
            <div id='content-container'>
                <ul id='site-nav'>
                    <li><Link to='/react-pose/home'>Pose Router Home</Link></li>
                    <li><Link to='/react-pose/about'>Pose Router About</Link></li>
                </ul>
                <PosedRouter>
                    <PoseHome path='/react-pose/home' />
                    <PoseAbout path='/react-pose/about' />
                </PosedRouter>
            </div>
        </div>
    </div>
  )
}
