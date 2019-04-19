import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import routing from '../../routing'

const HeaderMenu = ({ activeItem, vertical = false, icon = '', inverted = false, setToggle }) => {
    const [active, setActive] = useState(activeItem)
    return (
        <Menu fluid={!vertical} icon={icon} inverted={inverted} vertical={vertical}>
            <Menu.Item 
                as={Link} 
                to='/' 
                content='Home'
                onClick={(e, { name }) => {
                    setActive(name)
                    if (window.screen.width < 1024) setToggle(false)
                }}
            />
            {
                routing.map((r, i) => (
                    <Menu.Item 
                        key={i}
                        as={Link}
                        name={`/${r.path}`}
                        active={active === `/${r.path}`}
                        onClick={(e, { name }) => {
                            setActive(name)
                            if (window.screen.width < 1024) setToggle(false)
                        }}
                        to={`/${r.path}`} 
                        content={r.label} 
                    />)
                )
            }
            <Menu.Item
                as={Link}
                to='/styled-components'
                content="Styled Components"
                onClick={(e, { name }) => {
                    setActive(name)
                    if (window.screen.width < 1024) setToggle(false)
                }}
            />
            <Menu.Item 
                as={Link} 
                to='/react-motion' 
                content="React Motion"
                onClick={(e, { name }) => {
                    setActive(name)
                    if (window.screen.width < 1024) setToggle(false)
                }}
            />
        </Menu>
    )
}

export default HeaderMenu
