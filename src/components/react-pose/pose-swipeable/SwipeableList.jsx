import React, { useState, useEffect } from 'react'
import { PoseGroup } from 'react-pose'
import { value } from 'popmotion'
import { ListItem, ListItemText, Avatar, Icon } from '@material-ui/core'
import SwipeableForeground from './SwipeableForeground'
import Swipeable from './Swipeable'
import triggerDistance from './triggerDistance'

export default ({ items, onSwipe }) => {
    const [swipeItems, setItem] = useState(items)

    useEffect(() => {
        for (let i in items) {
            swipeItems[i].show = true
            swipeItems[i].x = value(0)
        }
        setItem(swipeItems)
    }, [])

    const onDragEnd = i => e => {
        const x = swipeItems[i].x.current

        if (x <= -triggerDistance) {
            const tab = swipeItems
            tab[i].show = false
            setTimeout(() => setItem(tab), 280)
        }

    }

    return (
        <div className='pose-list'>
            {
                swipeItems.filter(item => item.show).map((item, i) =>
                    <SwipeableForeground
                        key={i}
                        style={{ top: i * 60 }}
                        parentValues={{ x: item.x }}
                        className='pose-item--behind pose-item'
                    >
                        <Icon>archive</Icon>
                    </SwipeableForeground>
                )
            }
            <PoseGroup>
                {
                    swipeItems.filter(item => item.show).map((item, i) => (
                            <Swipeable
                                key={i}
                                style={{ top: i * 60 }}
                                onDragEnd={onDragEnd(i)}
                                values={{ x: item.x }}
                                className='pose-item'
                            >
                                <ListItem component="div">
                                    <Avatar>
                                        <Icon>{item.icon}</Icon>
                                    </Avatar>
                                    <ListItemText primary={item.title} secondary={item.subtitle} />
                                </ListItem>
                            </Swipeable>
                        )
                    )
                }
            </PoseGroup>
        </div>
    )
}