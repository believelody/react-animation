import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PagesGrid from './PagesGrid'
import items from './fakeItems'
import ImageAnimation from '../ImageAnimation';
import { Motion, spring } from 'react-motion'

const Home = ({ history, location }) => {
    const [locationState, setLocationState] = useState()

    const onItemClick = (item, e) => {
        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        const x = e.currentTarget.offsetLeft
        const y = e.currentTarget.offsetTop - window.scrollY
        const locationUrl = {
            pathname: '/react-motion/page-detail',
            state: { width, height, x, y, item, scrollY: window.scrollY }
        }
        history.push(locationUrl)
    }

    return (
        <div>
            <h1>React Motion Examples:</h1>
            <h2>List to Page</h2>
            <PagesGrid {...{ items, onItemClick, locationState: location.state, history }} />
        </div>
    )
}

export default withRouter(Home)
