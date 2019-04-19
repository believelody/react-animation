import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from './asyncComponent.js'

const ReactMotionHome = asyncComponent(() => import('./ReactMotionHome'))
const ReactMotionItem = asyncComponent(() => import('./ReactMotionItem'))

const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ matchProps => (<Component {...matchProps} />) } />
)

export default () => {
  return (
        <Switch>
            <DefaultLayout exact path='/react-motion' component={ReactMotionHome} />
            <DefaultLayout path='/react-motion/item' component={ReactMotionItem} />
        </Switch>
  )
}
