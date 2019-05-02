import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'

export default ({ location }) => {
    const { product, x, y, width, height, scrollY } = location.state

    return (
        <>
            <ProductDetail
                product={product}
                startingX={x}
                startingY={y}
                startingWidth={width}
                startingHeight={height}
            />
            <Link 
                to={{ 
                    pathname: "/react-motion/product-list", 
                    state: { product, x, y, width, height, scrollY, back: true } 
                }}
                style={{
                    marginTop: 35
                }}
            >
                Back to List
            </Link>
        </>
    )
}