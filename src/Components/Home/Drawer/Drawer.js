import React, { Component } from 'react';
import TasksObj from '../Tasks.json'
import Task from './Task'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/HomeIcon';
import EditIcon from '@material-ui/icons/EditIcon';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class DrawerContainer extends Component {

    state = {
        drawer: false
    }
    render() {


        const sideList = (
            <div >
                <List>
                    <ListItem button key="Home">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="Modifica">
                        <ListItemIcon><EditIcon /></ListItemIcon>
                        <ListItemText primary="Modifica" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        var toggleDrawer = () => {
            this.setState({
                drawer: !this.state.drawer
            })
        }

        return (
            <div className="CardContainer">
                <Drawer open={this.state.drawer} onClose={toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default DrawerContainer;