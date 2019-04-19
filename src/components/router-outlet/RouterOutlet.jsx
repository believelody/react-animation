import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import Header from '../header/Header'
import routing from '../../routing'
import ReactMotion from '../react-motion/ReactMotion';
import Mobile from '../mobile/Mobile';
import StyledComponents from '../styled-components/StyledComponents';

const Content = ({ setPath, location }) =>
    <Container style={{ minHeight: '100vh' }}>
        {
            routing.map((r, i) => <Route key={i} exact={r.exact} path={`/${r.path}`} render={({ location }) => <r.component location={location} getPath={setPath} />} />)
        }
        <StyledComponents location={location} getPath={setPath} />
        <ReactMotion location={location} getPath={setPath} />
    </Container>

export default ({location}) => {
    const [path, setPath] = useState(location.pathname)
    return window.screen.width < 1024 
        ?
        <Mobile>
            <Content setPath={setPath} location={location} />
        </Mobile>
        :
        <>
            <Header activeItem={path} />
            <Content setPath={setPath} location={location} />
        </>
}
