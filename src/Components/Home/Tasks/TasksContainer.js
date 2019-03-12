import React, { Component } from 'react';
import TasksObj from '../Tasks.json'
import Task from './Task'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import Grade from '@material-ui/icons/Grade';
import Reorder from '@material-ui/icons/Reorder';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

class TasksContainer extends Component {

    state = {
        drawer: false
    }


    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {


        const sideList = (
            <div >
                <List>

                    <ListItem button key="Home">
                        <ListItemIcon><Home /></ListItemIcon>
                        <Link to="/" >
                            <ListItemText primary="Home" />
                        </Link>
                    </ListItem>
                    <ListItem button key="Lista" >
                        <ListItemIcon><Reorder /></ListItemIcon>
                        <Link to="/tasks" >
                            <ListItemText primary="Lista" />
                        </Link>
                    </ListItem>
                    <ListItem button key="Modifica" >
                        <ListItemIcon><Settings /></ListItemIcon>
                        <Link to="/register" >
                            <ListItemText primary="Modifica" />
                        </Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Lista" >
                        <ListItemIcon><Grade /></ListItemIcon>
                        <Link to="/about" >
                            <ListItemText primary="Info" />
                        </Link>
                    </ListItem>
                </List>
            </div>
        );

        const tasks = TasksObj
        var renderTasks = []
        Object.keys(tasks).map((el, index) => {
            renderTasks.push(<Task key={index} task={tasks[el]} />)
        })

        var toggleDrawer = () => {
            this.setState({
                drawer: !this.state.drawer
            })
        }

        return (
            <div className="CardContainer">
                <AppBar position="static" style={{ marginLeft: '-6%', width: '105%', position: 'fixed' }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon onClick={toggleDrawer} />
                        </IconButton>
                        <Typography variant="h4" color="inherit" style={{ left: '20%', width: '100%', position: 'fixed' }} >
                            Informatica Tor Vergata
                        </Typography>
                    </Toolbar>
                </AppBar>
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
                <div style={{ top: '10%', position: 'relative' }} >
                    {renderTasks}
                </div>
            </div>
        );
    }
}

export default TasksContainer;