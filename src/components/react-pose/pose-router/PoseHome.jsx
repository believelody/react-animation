import React from 'react'
import posed from 'react-pose'
import { Link } from '@reach/router'

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
})

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
})

export default () => {
  return (
    <>
      <h2>React Pose Router Home</h2>
        <ListContainer>
            <Item>
                <Link to='/react-pose/about'>React Pose Router About</Link>
                <p>Some generic description about the about page</p>
            </Item>

            <Item>
                <Link to='/react-pose/about'>React Pose Router About</Link>
                <p>Some generic description about the about page</p>
            </Item>

            <Item>
                <Link to='/react-pose/about'>React Pose Router About</Link>
                <p>Some generic description about the about page</p>
            </Item>

            <Item>
                <Link to='/react-pose/about'>React Pose Router About</Link>
                <p>Some generic description about the about page</p>
            </Item>
        </ListContainer>
    </>
  )
}
