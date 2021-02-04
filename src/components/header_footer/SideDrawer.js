import React from 'react'
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props)=>{

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -80
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav"
                className = "nav_bar"
                >
                <ListItem button onClick={()=> scrollToElement
                ('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('venueNfo')}>
                    Venue INFO
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('location')}>
                    Location
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('social')}>
                    Social
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('poll')}>
                    Poll
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('faq')}>
                    FAQ
                </ListItem>

                <ListItem button onClick={()=> scrollToElement
                ('newsletter')}>
                    Contact Us
                </ListItem>

                <ListItem>
                    <a href = "https://github.com/hwilliams27/Pop-Up-Event-Site">GitHub</a>
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer; 
