import React, { Component } from 'react';
import TasksObj from '../Tasks.json'
import Task from './Task'

class TasksContainer extends Component {


    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const tasks = TasksObj
        var renderTasks = []
        console.log(tasks);
        Object.keys(tasks).map((el, index) => {
            renderTasks.push(<Task key={index} task={tasks[el]} />)
        })

        return (
            <div className="CardContainer">
                {renderTasks}
            </div>
        );
    }
}

export default TasksContainer;