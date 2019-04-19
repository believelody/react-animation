import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className="slopeBegin" />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
            <div className={`slopeEnd ${gradient}`} />
        </ParallaxLayer>

        <ParallaxLayer className='text number' offset={offset} speed={0.3}>
            <span>0</span><span style={{ color: 'white' }}>{offset + 1}</span>
        </ParallaxLayer>

        <ParallaxLayer className="text header" offset={offset} speed={0.4}>
            <span>
                <p style={{ fontSize: 20 }}>{ caption }</p>
                <div className={`stripe ${gradient}`} />
                <p>{ first }</p>
                <p>{ second }</p>
            </span>
        </ParallaxLayer>
    </>
)

export default () => {
    const parallaxRef = useRef(null)
    const scroll = to => parallaxRef.current.scrollTo(to)

    return (
        <div className='spring-parallax-container' style={{ gridColumn: 'span 2', background: '#dfdfdf' }}>
            <Parallax ref={parallaxRef} pages={3} horizontal scrolling={false}>
                <Page
                    offset={0}
                    gradient='pink'
                    caption='who we are'
                    first='Lorem ipsum'
                    second='dolor sit'
                    onClick={() => scroll(1)}
                />
                <Page
                    offset={1}
                    gradient='teal'
                    caption='what we do'
                    first='consectetur'
                    second='adipiscing elit'
                    onClick={() => scroll(2)}
                />
                <Page
                    offset={2}
                    gradient='tomato'
                    caption='what we want'
                    first='Morbi quis'
                    second='est dignissim'
                    onClick={() => scroll(0)}
                />
            </Parallax>
        </div>
    )
}