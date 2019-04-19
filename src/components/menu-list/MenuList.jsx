import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Label } from 'semantic-ui-react'
import routing from '../../routing'
import './MenuList.css'

export default () => {
    return (
        <Menu vertical secondary className="menu-list" size='huge'>
            {
                routing.map((r, i) => (
                    <Menu.Item
                        key={i}
                        as={Link}
                        to={`/${r.path}`}
                        content={r.label}
                    />)
                )
            }
            <Menu.Item
                as={Link}
                to='/styled-components'
                content='Styled Components'
            />
            <Menu.Item
                as={Link}
                to='/react-motion'
                content='React Motion'
            />
        </Menu>
    )
}