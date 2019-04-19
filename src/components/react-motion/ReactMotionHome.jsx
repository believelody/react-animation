import React from 'react'
import { withRouter } from 'react-router-dom'
import ItemsGrid from './ItemsGrid'
import items from './fakeItems'


const Home = ({ history }) => {

    const onItemClick = (item, e) => {
        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        const x = e.currentTarget.offsetLeft
        const y = e.currentTarget.offsetTop - window.scrollY
        const location = {
            pathname: '/react-motion/item',
            state: { width, height, x, y, item }
        }
        history.push(location)
    }

    return (
        <div>
            <h1>React Motion</h1>
            <ItemsGrid {...{ items, onItemClick }} />
        </div>
    )
}

export default withRouter(Home)
