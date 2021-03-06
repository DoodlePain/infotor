import React, { Component } from 'react';

class Timeline extends Component {

    constructor(props) {
        super(props)

        this.state = { tasks: 6 }

    }


    async componentWillMount() {
        if (localStorage.getItem('Nome') === null || localStorage.getItem('Nome') === "null") { this.props.history.push('/register') }
        var tasks = 3
        await localStorage.getItem('Test') === "true" ? tasks = --tasks : tasks = tasks
        await localStorage.getItem('Iscrizione') === "true" ? tasks = --tasks : tasks = tasks
        await localStorage.getItem('Immatricolazione') === "true" ? tasks = --tasks : tasks = tasks
        await localStorage.getItem('Tasse') === "true" ? tasks = --tasks : tasks = tasks
        await localStorage.getItem('PrimaTassa') === "true" ? tasks = --tasks : tasks = tasks
        await localStorage.getItem('SecondaTassa') === "true" ? tasks = --tasks : tasks = tasks
        this.setState({ tasks })
    }

    render() {
        return (
            <div>
                <h1 style={{ color: 'black', textAlign: "center" }}>Ciao {localStorage.getItem('Nome')}</h1>
                <h4 style={{ color: 'black' }} onClick={() => { this.props.history.push('/tasks') }}> Ti {this.state.tasks === 1 ? `rimane ${this.state.tasks} cosa` : `rimangono ${this.state.tasks} cose`} da fare <i className="material-icons" style={{
                    cursor: "pointer",
                    paddingTop: "1%",
                    position: "absolute"
                }}>
                    keyboard_arrow_right
                        </i></h4>
            </div>
        );
    }
}

export default Timeline;