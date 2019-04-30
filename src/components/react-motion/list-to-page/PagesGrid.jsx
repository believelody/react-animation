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

const ItemStyle = styled.div`
    min-width: 250px;
    padding: 24px;
    opacity: ${props => props.opacity}
`

const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url('${props => props.image}');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`

const Name = styled.h4``

const PagesGrid = ({ items, onItemClick, locationState, history }) => {
    const [itemArr, setArr] = useState(items.map(item => ({ ...item, visibility: 'visible', opacity: 1 })))
    const [back, setBack] = useState()
    // const [opacity, setOpacity] = useState(1)
    const [filter, setFilter] = useState()
    const [event, setEvent] = useState()
    const [currentItem, setCurrent] = useState()

    useEffect(() => {
        setFilter(false)
        
        if (history.action === 'POP' || history.location.state === undefined) {
            setBack(false)
        }
        else {
            setBack(true)
            if (locationState) {
                let tab = itemArr.map(item => {
                    if (item._id === locationState.item._id) {
                        item.opacity = 0
                    }
                    return item
                })
                setArr(tab)
            }
        }

        // setOpacity(0)
    }, [])

    const handleClick = (item, e) => {
        setFilter(true)
        setEvent({...e})
        setCurrent(item)
        itemArr.map(i => {
            if (item._id !== i._id) {
                i.opacity = 0
                return
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
                    <Wrapper style={{ opacity: back ? 1 : style.opacity, transform: `translateX(${ back ? 0 : style.x }px)` }}>
                        {
                            locationState && back &&
                            <ImageAnimation
                                image={locationState.item.picture}
                                startingX={0}
                                startingY={0}
                                startingWidth={getContainerWidth('#container')}
                                startingHeight={400}
                                endingX={locationState.x}
                                endingY={locationState.y + locationState.scrollY}
                                endingWidth={locationState.width}
                                endingHeight={locationState.height}
                                back={back}
                            />
                        }
                        {
                            itemArr.map(item =>
                                <div key={item._id}>
                                    {
                                        /* locationState && item === locationState.item &&
                                        <Motion
                                            style={{ opacity: spring(1, { stiffness: 62, damping: 35 }) }}
                                            onRest={
                                                () => {
                                                    console.log(opacity)
                                                    setOpacity(back ? 1 : 0)
                                                    console.log(opacity)
                                                    setBack(false)
                                                }
                                            }
                                        >
                                            {
                                                style => (
                                                    <ItemStyle>
                                                        <Image
                                                            onClick={e => handleClick(item, e)}
                                                            image={locationState.item.picture}
                                                            style={{ opacity }}
                                                        />
                                                        <Name style={{ opacity: style.opacity }}>{item.name}</Name>
                                                    </ItemStyle>
                                                )
                                            }
                                        </Motion> */
                                    }
                                    <Motion
                                    defaultStyle={{ opacity: 0 }}
                                        style={{ opacity: spring(item.opacity) }}
                                        onRest={
                                            () => {
                                                if (locationState) {
                                                    let tab = itemArr.map(item => {
                                                        if (item._id === locationState.item._id) {
                                                            item.opacity = 1
                                                        }
                                                        return item
                                                    })
                                                    setArr(tab)
                                                }
                                                
                                                if (currentItem) {
                                                    itemArr.forEach(i => {
                                                        if (i._id !== item._id) {
                                                            i.visibility = 'hidden'
                                                        }
                                                    })
                                                    onItemClick(items.find(item => item._id === currentItem._id), event)
                                                }
                                            }
                                        }
                                    >
                                        {
                                            style => (
                                                <ItemStyle opacity={style.opacity}>
                                                    <Image
                                                        onClick={e => {
                                                            handleClick(item, e)
                                                        }}
                                                        image={item.picture}
                                                    />
                                                    <Name>{item.name}</Name>
                                                </ItemStyle>
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
PagesGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })).isRequired,
    onItemClick: PropTypes.func
}

export default PagesGrid