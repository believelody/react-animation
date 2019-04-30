import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from '../asyncComponent.js'

const ReactMotionList = asyncComponent(() => import('./ReactMotionList'))
const ReactMotionProduct = asyncComponent(() => import('./ReactMotionProduct'))

const DefaultLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ matchProps => (<Component {...matchProps} />) } />
)

export default () => {
  return (
        <>
            <DefaultLayout exact path='/react-motion/product-list' component={ReactMotionList} />
            <DefaultLayout exact path='/react-motion/product-detail' component={ReactMotionProduct} />
        </>
  )
}
