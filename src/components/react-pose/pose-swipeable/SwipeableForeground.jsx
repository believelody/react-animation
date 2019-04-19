import React from 'react'
import posed from 'react-pose'
import { transform } from 'popmotion'
import triggerDistance from './triggerDistance'

const { pipe, interpolate, clamp, blendColor } = transform

export default posed.div({
    passive: {
        backgroundColor: [
            'x',
            pipe(
                interpolate([0, -triggerDistance], [0, 1]),
                clamp(0, 1),
                blendColor('#ccc', '#4D11DA')
            ),
            true
        ]
    }
})