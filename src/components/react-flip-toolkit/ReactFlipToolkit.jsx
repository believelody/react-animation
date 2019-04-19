import React from 'react'
import { Router } from 'react-router'
import { Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { Contents } from './BaseComponents'
import { Flipper } from 'react-flip-toolkit'
// import WorldIcon from './icon-components/environmental/World'
import { Icon } from 'semantic-ui-react'

const Header = styled.header`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid black;
    width: 100%;
    z-index: 10;
    position: relative;
    background-color: #e6e6e6;
    a {
        color: black;
        &:hover {
            font-weight: bold;
        }
    }
    h1 {
        font-weight: normal;
        font-size: 1rem;
        display: inline;
    }
`

const FlexContents = styled(Contents)`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled.a`
    text-decoration: underline;
`

const history = createBrowserHistory()
const cachedPush = history.push
history.push = args => {
    if (typeof args === 'string') {
        return cachedPush(args)
    }

    if (args && args.state && args.state.animate) {
        args.state.animate().then(() => {
            delete args.state.animate
            cachedPush(args)
        })
    }
    else {
        cachedPush(args)
    }
}

export default () => {
    return (
        <Router history={history}>
            <Route
                render={
                    ({ location, search }) => (
                        <Flipper flipKey={location} decisionData={{ location, search }}>
                            <Header>
                                <FlexContents>
                                    <div>
                                        <Link to='/react-flip-toolkit'>
                                            <Icon name='home' style={{ width: '20px', marginRight: '.5rem' }} />
                                            <h1>Icon Demo App</h1>
                                        </Link>
                                    </div>
                                </FlexContents>
                            </Header>
                            <IndexPage />
                        </Flipper>
                    )
                }
            />
        </Router>
    )
}