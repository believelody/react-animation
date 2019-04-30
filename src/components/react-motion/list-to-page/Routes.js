import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from '../asyncComponent.js'

const ReactMotionList = asyncComponent(() => import('./ReactMotionList'))
const ReactMotionPage = asyncComponent(() => import('./ReactMotionPage'))

const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ matchProps => (<Component {...matchProps} />) } />
)

export default () => {
  return (
        <>
            <DefaultLayout exact path='/react-motion/page-list' component={ReactMotionList} />
            <DefaultLayout exact path='/react-motion/page-detail' component={ReactMotionPage} />
        </>
  )
}
