import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core'

class Task extends Component {
    state = { expanded: false };

    render() {
        const { task } = this.props
        var color = task.expire
        var d1 = new Date(task.expire)
        var d2 = new Date()
        var timeDiff = d1.getTime() - d2.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


        if (diffDays > 30) { color = "#43a047" }
        else if (diffDays < 1) { color = "#e53935" }
        else { color = "#ffb300" }

        var TaskStatus = localStorage.getItem(`${task.tag}`) === "true" ? "done" : "more_horizontal"

        return (
            <div>
                <div className="singleCard">
                    <Card className="card" onClick={() => { this.setState({ expanded: !this.state.expanded }) }}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className="avatar" style={{ background: color }} >
                                    <Icon style={{ color: "white" }}>{TaskStatus}</Icon>
                                </Avatar>
                            }
                            title={task.title}
                            subheader={task.expire + (diffDays > 0 ? ("     Giorni rimasti : " + diffDays + "") : "")}

                        />
                        <CardActions className="actions" disableActionSpacing >
                            <i className="material-icons" style={{ cursor: "pointer" }}>
                                {this.state.expanded ? "keyboard_arrow_up " : "keyboard_arrow_down"}
                            </i>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    {task.text}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card >
                </div>
            </div>
        );
    }
}

export default Task;