import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Tab } from 'semantic-ui-react'

const PageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    background-color: #e3f2fd;
    font-family: "Open Sans", sans-serif;
    overflow: hidden;
`

const slideInLeft = keyframes`
    from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

const slideOutLeft = keyframes`
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    to {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
`

const slideInRight = keyframes`
    from {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
`

const slideOutRight = keyframes`
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
`

const Page = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; 
    left: 0;
    text-align: center;
    h2 {
        color: #0d47a1;
    }
    p {
        font-size: 1rem;
        max-width: 400px;
        margin: 20px auto;
        color: #37474f;
    }

    a {
        text-decoration: none;
        color: #fff;
        border: 1px solid #4776e6;
        border-radius: 5px;
        background-image: linear-gradient(to right, #4776e6 0%, #8e54e9 51%, #4776e6 100%);
    }

    img {
        border-radius: 50%;
    }
`

const HomePageElm = styled(Page)`
    &.page-enter {
        animation: ${slideInLeft} 0.6s forwards;
    }

    &.page-exit {
        animation: ${slideOutLeft} 0.6s forwards;
    }
`

const DetailsPageElm = styled(Page)`
    background-color: #90caf9;
    &.page-enter {
        animation: ${slideInRight} 0.6s forwards;
    }

    &.page-exit {
        animation: ${slideOutRight} 0.6s forwards;
    }
`

const HomePage = () => {
    return (
        <HomePageElm>
            <h2>Styled Home Page</h2>
            <p>
                This page demonstrate the page transition animation done on react router URLs with styled components and react-transition-group.
            </p>
            <p>To view the page transition, click on below link.</p>
            <Link to="/styled-components/details">Go to Page Two →</Link>
        </HomePageElm>
    )
}

const DetailsPage = () => {
    return (
        <DetailsPageElm>
            <h2>Styled Details Page</h2>
            <p>
                <img src="https://placeimg.com/200/200/people" alt="people" />
            </p>
            <p>
                Demo page. Click below to go back to previous page
            </p>
            <Link to='/styled-components'>Back to Home Page</Link>
        </DetailsPageElm>
    )
}

/* const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={matchProps => (<Component {...matchProps} />)} />
) */

export default ({ getPath, location }) => {
    useEffect(() => {
        if (location) getPath(location.pathname)
    }, [])

    return location.pathname.includes('/styled-components') &&
        <PageContainer>
            <TransitionGroup component={null}>
                <CSSTransition
                    timeout={600}
                    classNames="page"
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path='/styled-components' component={HomePage} />
                        <Route exact path='/styled-components/details' component={DetailsPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </PageContainer>
}
