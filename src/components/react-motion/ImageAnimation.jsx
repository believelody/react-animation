import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'
import { getContainerLeft } from './getStyleAttr'

const Image = styled.div.attrs({
    style: ({ width, height, x, y, borderRadius, visibility }) => ({
        width: `${width}px`,
        top: `${y}px`,
        left: `${x}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}%`,
    }),
})`
    background: url('${props => props.image}');
    visibility: ${props => props.visibility};
    position: absolute;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
`

const ImageAnimation = ({ image, startingX, startingY, startingWidth, startingHeight, endingX, endingY, endingWidth, endingHeight, back = false }) => {
    const [visibility, setVisibility] = useState('visible')

    const defaultStyle = {
        x: startingX,
        y: startingY,
        width: startingWidth,
        height: startingHeight,
        borderRadius: !back ? 50 : 0
    }

    const style = {
        x: spring(endingX),
        y: spring(endingY),
        width: spring(endingWidth),
        height: spring(endingHeight),
        borderRadius: back ? spring(50) : spring(0)
    }

    return (
        <Motion
            defaultStyle={defaultStyle}
            style={style}
            onRest={
                () => {
                    //  Hide image component only when animation is triggered by pop history
                    if (back) setVisibility('hidden')
                }
            }
        >
            {
                style => (
                    <Image
                        x={style.x}
                        y={style.y}
                        width={style.width}
                        height={style.height}
                        image={image}
                        borderRadius={style.borderRadius}
                        visibility={visibility}
                    />
                )
            }
        </Motion>
    )
}

ImageAnimation.propTypes = {
    image: PropTypes.string.isRequired,
    startingX: PropTypes.number.isRequired,
    startingY: PropTypes.number.isRequired,
    startingWidth: PropTypes.number.isRequired,
    startingHeight: PropTypes.number.isRequired,
    endingX: PropTypes.number.isRequired,
    endingY: PropTypes.number.isRequired,
    endingWidth: PropTypes.number.isRequired,
    endingHeight: PropTypes.number.isRequired,
}

export default ImageAnimation