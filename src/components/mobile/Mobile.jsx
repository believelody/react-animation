import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Menu, Sidebar, Segment } from 'semantic-ui-react'
import HeaderMenu from '../header/Header'
import routes from '../../routing'

export default ({children}) => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
        <Header style={{ position: 'fixed', top: 0, backgroundColor: 'white', width: '100%', border: '1px solid black' }}>
            <Button style={{ left: 0, position: 'absolute' }} disabled={toggle} onClick={() => setToggle(true)}>
                <Icon name='home' />
            </Button>
        </Header>

        <Sidebar.Pushable as={Segment} style={{ marginTop: 30 }}>
            <Sidebar
            as={Menu}
                animation='overlay'
                onHide={() => setToggle(false)}
                visible={toggle}
                width='thin'
            >
                <HeaderMenu setToggle={setToggle} vertical={true} icon='labeled' inverted={false} />
            </Sidebar>

              <Sidebar.Pusher dimmed={toggle}>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </>
  )
}
