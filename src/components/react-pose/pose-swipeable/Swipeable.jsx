import React from 'react'
import posed from 'react-pose'
import triggerDistance from './triggerDistance'

export default posed.li({
    draggable: 'x',
    dragBounds: {
        right: 0
    },
    dragEnd: {
        transition: ({ from, to, velocity }) => {
            if (from <= -triggerDistance) {
                return {
                    type: 'tween',
                    ease: 'linear',
                    from,
                    to: -window.innerWidth,
                    duration: 280
                }
            }

            return {
                type: 'spring',
                from,
                to,
                velocity,
                stiffness: 750,
                damping: 50
            }
        }
    },
    flip: {
        scale: 1,
        transition: {
            default: {
                type: 'tween',
                duration: 200
            }
        }
    }
})