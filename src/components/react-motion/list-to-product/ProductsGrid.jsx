import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import ImageAnimation from '../ImageAnimation'
import { getContainerWidth } from '../getStyleAttr'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ProductStyle = styled.div`
    min-width: 250px;
    padding: 24px;
    opacity: ${props => props.opacity}
    transition: transform .4s ease-in;

    &:hover {
        transform: translateY(-2em);
    }
`

const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url('${props => props.image}');
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`

const Name = styled.h4``

const ProductsGrid = ({ products, onProductClick, locationState, history }) => {
    const [productArr, setArr] = useState(products.map(product => ({ ...product, visibility: 'visible', opacity: 1 })))
    const [back, setBack] = useState()
    const [filter, setFilter] = useState()
    const [event, setEvent] = useState()
    const [currentProduct, setCurrent] = useState()

    useEffect(() => {
        setFilter(false)

        if (history.action === 'POP' || history.location.state === undefined) {
            setBack(false)
        }
        else {
            setBack(true)
            if (locationState) {
                let tab = productArr.map(product => {
                    if (product._id === locationState.product._id) {
                        product.opacity = 0
                    }
                    return product
                })
                setArr(tab)
            }
        }

        // setOpacity(0)
    }, [])

    const handleClick = (product, e) => {
        setFilter(true)
        setEvent({ ...e })
        setCurrent(product)
        productArr.forEach(i => {
            if (product._id !== i._id) {
                i.opacity = 0
            }
        })
    }

    const defaultStyle = {
        x: back ? 0 : -200,
        opacity: back ? 1 : 0
    }

    const style = { x: spring(0), opacity: spring(1) }

    return (
        <Motion
            defaultStyle={defaultStyle}
            style={style}
        >
            {
                style => (
                    <Wrapper style={{ opacity: back ? 1 : style.opacity, transform: `translateX(${back ? 0 : style.x}px)` }}>
                        {
                            locationState && back &&
                            <ImageAnimation
                                image={locationState.product.picture}
                                startingX={0}
                                startingY={0}
                                startingWidth={getContainerWidth('#container')/2}
                                startingHeight={400}
                                endingX={locationState.x}
                                endingY={locationState.y + locationState.scrollY}
                                endingWidth={locationState.width}
                                endingHeight={locationState.height}
                                back={back}
                            />
                        }
                        {
                            productArr.map(product =>
                                <div key={product._id}>
                                    <Motion
                                        defaultStyle={{ opacity: 0 }}
                                        style={{ opacity: spring(product.opacity) }}
                                        onRest={
                                            () => {
                                                if (locationState) {
                                                    let tab = productArr.map(product => {
                                                        if (product._id === locationState.product._id) {
                                                            product.opacity = 1
                                                        }
                                                        return product
                                                    })
                                                    setArr(tab)
                                                }

                                                if (currentProduct) {
                                                    productArr.forEach(i => {
                                                        if (i._id !== product._id) {
                                                            i.visibility = 'hidden'
                                                        }
                                                    })
                                                    onProductClick(products.find(product => product._id === currentProduct._id), event)
                                                }
                                            }
                                        }
                                    >
                                        {
                                            style => (
                                                <ProductStyle opacity={style.opacity}>
                                                    <Image
                                                        onClick={e => {
                                                            handleClick(product, e)
                                                        }}
                                                        image={product.picture}
                                                    />
                                                    <Name>{product.name}</Name>
                                                </ProductStyle>
                                            )
                                        }
                                    </Motion>
                                </div>
                            )
                        }
                    </Wrapper>
                )
            }
        </Motion>
    )
}

ProductsGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })).isRequired,
    onProductClick: PropTypes.func
}

export default ProductsGrid