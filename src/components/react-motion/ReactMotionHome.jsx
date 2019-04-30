import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

export default () => {
    return (
        <List divided size='big' style={{ padding: '20px 0' }}>
            <List.Item as={Link} to='/react-motion/page-list'>List to Page</List.Item>
            <List.Item as={Link} to='/react-motion/product-list'>List to Product</List.Item>
        </List>
    )
}