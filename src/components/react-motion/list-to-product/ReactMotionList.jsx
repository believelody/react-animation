import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import products from './fakeProducts'
import { Motion, spring } from 'react-motion'

const List = ({ history, location }) => {
    const [locationState, setLocationState] = useState()

    const onProductClick = (product, e) => {
        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        const x = e.currentTarget.offsetLeft
        const y = e.currentTarget.offsetTop - window.scrollY
        const locationUrl = {
            pathname: '/react-motion/product-detail',
            state: { width, height, x, y, product, scrollY: window.scrollY }
        }
        history.push(locationUrl)
    }

    return (
        <div>
            <h1>React Motion Examples:</h1>
            <h2>List to Product</h2>
            <ProductsGrid {...{ products, onProductClick, locationState: location.state, history }} />
        </div>
    )
}

export default withRouter(List)