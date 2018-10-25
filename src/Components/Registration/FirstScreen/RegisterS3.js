import React, { Component } from 'react';

import { Button, Icon, Switch } from '@material-ui/core';
import { Link } from "react-router-dom";

class RegisterS3 extends Component {
    constructor(props) {
        super(props)

        var PrimaTassa = localStorage.getItem("PrimaTassa") === "true"
        var SecondaTassa = localStorage.getItem("SecondaTassa") === "true"

        this.state = {
            PrimaTassa: PrimaTassa,
            SecondaTassa: SecondaTassa
        };

    }

    handleChangeTrigger(label) {
        switch (label) {
            case "PrimaTassa":
                this.setState({
                    PrimaTassa: !this.state.PrimaTassa
                })
                break;

            case "SecondaTassa":
                this.setState({
                    SecondaTassa: !this.state.SecondaTassa
                })
                break;

            default:
                break;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.active !== this.props.active) {
            return true
        }
        if (nextState.tasseAttive !== this.state.tasseAttive) {
            return true
        }
        if (nextState !== this.state) {
            return true
        }
        return false
    }

    setLocalData() {
        localStorage.setItem("PrimaTassa", this.state.PrimaTassa)
    }

    render() {

        var disableSwitch = localStorage.getItem('Tasse') === "true"


        return (
            <div className="App-header">
                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={() => this.props.backward()}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_upward</Icon>
                </Button>
                <p>
                    Prima tassa?
                    <Switch checked={this.state.PrimaTassa} onChange={this.handleChangeTrigger.bind(this, "PrimaTassa")} disabled={!disableSwitch} />
                </p>
                <p>
                    Seconda tassa?
                    <Switch checked={this.state.SecondaTassa} onChange={this.handleChangeTrigger.bind(this, "SecondaTassa")} disabled={!disableSwitch} />
                </p>


                <Link to="/" >
                    <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={this.setLocalData.bind(this)}>
                        <Icon className="rightIcon" style={{ color: "white" }}>arrow_downward</Icon>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default RegisterS3;
