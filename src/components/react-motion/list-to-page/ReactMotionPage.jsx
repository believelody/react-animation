import React from 'react'
import { Link } from 'react-router-dom'
import PageDetail from './PageDetail'

/* const fakeItem = {
    "_id": "59357b8c63ebdafcde795ae1",
    "picture": "https://via.placeholder.com/1000x400",
    "name": "fugiat esse eu",
    "description": "Proident duis proident deserunt nisi magna aliquip incididunt. Reprehenderit in minim tempor adipisicing non esse magna ex ex mollit consectetur Lorem eiusmod. Nulla nostrud quis magna aliquip ex veniam adipisicing anim anim cillum veniam consectetur cillum ipsum. Ea velit ipsum sint non aliqua exercitation voluptate aliqua est excepteur cupidatat sint officia. Sint dolor adipisicing esse qui Lorem est ex incididunt occaecat officia. Occaecat amet sint consequat id.\r\nNulla ex exercitation consequat officia amet et elit. In proident excepteur dolor adipisicing incididunt do. Ullamco amet in sint dolore duis mollit. Fugiat aute eu ad sit voluptate velit labore in esse cupidatat.\r\nAliquip ex culpa non ad eiusmod ad incididunt aute occaecat laborum consectetur sit deserunt. Nulla ex culpa minim sint mollit eiusmod ea non commodo aliquip reprehenderit. Incididunt elit exercitation commodo velit laborum non et consectetur aute aliquip.\r\n",
    "createdAt": "2016-02-17T09:52:24 -02:00"
} */

export default ({ location }) => {
    const { item, x, y, width, height, scrollY } = location.state

    return (
        <>
            <PageDetail
                item={item}
                startingX={x}
                startingY={y}
                startingWidth={width}
                startingHeight={height}
            />
            <Link to={{ pathname: "/react-motion/page-list", state: { item, x, y, width, height, scrollY, back: true } }}>Back to List</Link>
        </>
    )
}
