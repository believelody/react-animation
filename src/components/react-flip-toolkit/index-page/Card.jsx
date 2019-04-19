import React, { useRef } from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { Flipped } from 'react-flip-toolkit'
import anime from 'animejs'
import { BaseGridList } from '../BaseComponents'
import { CardGrid } from './Components'

const IndexGrid = styled(BaseGridList)`
    width: 100%;
    grid-auto-rows: 3rem;
    ${CardGrid + '[display="grid"]'} & {
        grid-template-columns: repeat(3, 5rem);
        grid-gap: 2rem;
        margin-bottom: 2rem;
    }
`

const IndexListItem = styled.li`
    display: flex;
    justify-content: center;
`

const Card = styled.li`
    height: 100%;
    transtion: box-shadow .5s;
    background-color: white;
    overflow: hidden;
    position: relative;
    will-change: transform;
    svg {
        will-change: transform;
    }
`

const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    will-change: transform;
    ${CardGrid + '[display="grid"]'} & {
        grid-template-columns: repeat(3, 5rem);
        grid-gap: 2rem;
        margin-bottom: 2rem;
    }
`

const Description = styled.div`
    min-width: 280px;
    text-align: right;
    text-decoration: none !important;
    color: black;
    > *:last-child {
        margin-bottom: 0 !important;
    }
`

const ListFlex = styled.div`
    ${CardGrid + '[display="grid"]'} & {
        display: block;
    }

    justify-content: flex-end;
    > * {
        margin-bottom: .5rem;
    }
`

const CardHeader = styled.h2`
    display: inline-block;
    margin-top: 0;
    margin-bottom: .5rem;
`

const IconCount = styled.span`
    display: inline-block;
    font-weight: bold;
`

const Price = styled.span`
    display: inline-block;
`

export default IconSetcard = ({ setKey, highlightIcons, iconCount, navigate, icons }) => {
    const descriptionRef = useRef()

    const onStart = (el, prevLocation, currentLocation) => {
        if (prevLocation.location.pathname.match(this.props.setKey) && currentLocation.location.pathname === '/react-flip-toolkit') {
            ;[...el.querySelectorAll('[data-fade-in')].forEach(el => (el.style.opacity = '0'))
            el.style.zIndex = '5'
        }
    }

    const onComplete = (el, prevLocation, currentLocation) => {
        if (currentLocation.location.pathname === '/react-flip-toolkit' && prevLocation.location.pathname.match(setKey)) {
            anime({
                targets: el.querySelectorAll('[data-fade-in]'),
                opacity: [0, 1],
                translateY: [15, 0],
                delay: (el, i) => i * 70 + 300,
                easing: 'easeOutSine',
                duration: 350
            })
            el.style.zIndex = ''
        }
    }

    const onDelayAppear = (el, i) => {
        anime({
            targets: el,
            opacity: [0, 1],
            scale: [0.9, 1],
            easing: 'easeOutSine',
            delay: i * 40,
            duration: 400
        })
    }

    const onExit = (el, index, removeElement) => {
        anime({
            targets: el,
            opacity: 0,
            scale: 0.9,
            easing: 'easeOutSine',
            duration: 400,
            delay: i * 40,
            complete: removeElement
        })
    }

    const navigate = () => {
        navigate(setKey)
    }

    return (
        <Flipped
            flipId={setKey}
            stagger
            onStartImmediate={onStart}
            onComplete={onComplete}
            onDelayAppear={onDelayAppear}
        >
            <Card onClick={navigate}>
                <Flipped inverseFlipId={setKey}>
                    <CardContent>
                        <IndexGrid>
                            {
                                icons.map(({ Icon, id }) => (
                                    <IndexListItem key={id}>
                                        <Icon style={iconBaseStyles} />
                                    </IndexListItem>
                                ))
                            }
                        </IndexGrid>
                        <Description ref={descriptionRef}>
                            <Flipped
                                flipId={`${setKey}-title`}
                                translate
                            >
                                <CardHeader data-fade-in>
                                    {setKey[0].toUpperCase() + setKey.slice(1)} Icons
                                </CardHeader>
                            </Flipped>
                            <ListFlex>
                                <div>
                                    <Flipped
                                        flipId={`${setKey}-count`}
                                        translate
                                    >
                                        <IconCount data-fade-in>{iconCount} icons</IconCount>
                                    </Flipped>
                                </div>
                                <div>
                                    <Flipped
                                        flipId={`${setKey}-price`}
                                        translate
                                    >
                                        <Price data-fade-in>${iconCount / 2}</Price>
                                    </Flipped>
                                </div>
                            </ListFlex>
                        </Description>
                    </CardContent>
                </Flipped>
            </Card>
        </Flipped>
    )
}
