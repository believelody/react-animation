import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { StaggeredMotion, spring, presets } from 'react-motion'
import ImageAnimation from '../ImageAnimation'
import { getContainerWidth } from '../getStyleAttr'

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    `
    
const HeroSpace = styled.div`
    background: url('${props => props.image}');
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    `
    
const Paper = styled.div`
    padding: 24px;
    overflow: hidden;
`

const Name = styled.h4``

const Description = styled.p``

const PageDetail = ({ startingX, startingY, startingWidth, startingHeight, item, history: { action } }) => {
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        if (action === 'POP') {
            setRefresh(true)
        }
        else {
            setRefresh(false)
        }
    }, [])

    return (
        <Wrapper>
            <HeroSpace image={refresh ? item.picture : ''} />
            {
                !refresh &&
                <ImageAnimation
                    image={item.picture}
                    startingX={startingX}
                    startingY={startingY}
                    startingWidth={startingWidth}
                    startingHeight={startingHeight}
                    endingX={0}
                    endingY={0}
                    endingWidth={getContainerWidth('#container')}
                    endingHeight={400}
                />
            }
            <StaggeredMotion
                defaultStyles={[
                    {
                        delay: 0,
                        opacity: 0,
                        y: -130
                    },
                    {
                        delay: 0,
                        opacity: 0,
                        x: -150,
                    }
                ]}
                styles={
                    prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => i === 0 ? 
                    {
                        delay: 1,
                        opacity: spring(1),
                        y: spring(0, { stiffness: 30, damping: 17 })
                    }
                    : 
                    {
                        delay: prevInterpolatedStyles[i - 1] * (i + 1),
                        opacity: spring(prevInterpolatedStyles[i - 1].opacity),
                        x: spring(0, { stiffness: 30, damping: 17 })
                    })
                }
            >
                {
                    interpolatingStyles => (
                        <Paper>
                            <Name 
                                style={{
                                    opacity: interpolatingStyles[0].opacity, 
                                    transform: `translate(0, ${interpolatingStyles[0].y}px)` 
                                }}
                            >
                                {item.name}
                            </Name>
                            <Description 
                                style={{ 
                                    animation: `${interpolatingStyles[1].delay}s ease-in`, 
                                    opacity: interpolatingStyles[1].opacity, 
                                    transform: `translate(${interpolatingStyles[1].x}px, 0)` 
                                }}
                            >
                                {item.description}
                            </Description>
                        </Paper>
                    )
                }
            </StaggeredMotion>
        </Wrapper>
    )
}

PageDetail.propTypes = {
    startingX: PropTypes.number.isRequired,
    startingY: PropTypes.number.isRequired,
    startingWidth: PropTypes.number.isRequired,
    startingHeight: PropTypes.number.isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
}

export default withRouter(PageDetail)