import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const Image = styled.div.attrs({
    style: ({ width, height, x, y }) => ({
        width: `${width}px`,
        left: `${x}px`,
        top: `${y}px`,
        height: `${height}px`
    }),
})`
    background: url('${props => props.image}');
    position: absolute;
    background-size: cover;
    background-position: center;
`

const ImageAnimation = ({ image, startingX, startingY, startingWidth, startingHeight, endingX, endingY, endingWidth, endingHeight }) => {
    
        const defaultStyle = {
            x: startingX,
            y: startingY,
            width: startingWidth,
            height: startingHeight
        }
    
        const style = {
            x: spring(endingX),
            y: spring(endingY),
            width: spring(endingWidth),
            height: spring(endingHeight)
        }
    
        return (
            <Motion
                defaultStyle={defaultStyle}
                style={style}
            >
                {
                    style => (
                        <Image
                            x={style.x}
                            y={style.y}
                            width={style.width}
                            height={style.height}
                            image={image}
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