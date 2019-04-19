import React, { useState, useEffect } from 'react'
import Accordion from './Accordion';

export default ({ getPath, location }) => {
    useEffect(() => {
        if (location) getPath(location.pathname)
    }, [])

    return (
        <Accordion />
    )
}
