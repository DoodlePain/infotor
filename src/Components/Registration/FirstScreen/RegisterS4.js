import React, { Component } from 'react';
import { Button, Icon, Switch } from '@material-ui/core';
import { Link } from "react-router-dom";
import TasksObj from '../../Home/Tasks.json'

class RegisterS4 extends Component {
    constructor(props) {
        super(props)

        var PrimoIsee = localStorage.getItem("PrimoIsee") === "true"
        var SecondoIsee = localStorage.getItem("SecondoIsee") === "true"
        var TerzoIsee = localStorage.getItem("TerzoIsee") === "true"

        this.state = {
            PrimoIsee: PrimoIsee,
            SecondoIsee: SecondoIsee,
            TerzoIsee: TerzoIsee
        };

    }

    handleChangeTrigger(label) {
        switch (label) {
            case "PrimoIsee":
                this.setState({
                    PrimoIsee: !this.state.PrimoIsee
                })
                break;

            case "SecondoIsee":
                this.setState({
                    SecondoIsee: !this.state.SecondoIsee
                })
                break;
            case "TerzoIsee":
                this.setState({
                    TerzoIsee: !this.state.TerzoIsee
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
        if (nextState !== this.state) {
            return true
        }
        return false
    }

    setLocalData() {
        !this.state.SecondoIsee || !this.state.TerzoIsee ? localStorage.setItem("PrimoIsee", this.state.PrimoIsee) : localStorage.setItem("PrimoIsee", true)
        !this.state.PrimoIsee || !this.state.TerzoIsee ? localStorage.setItem("SecondoIsee", this.state.SecondoIsee) : localStorage.setItem("SecondoIsee", true)
        !this.state.PrimoIsee && !this.state.SecondoIsee ? localStorage.setItem("TerzoIsee", this.state.TerzoIsee) : localStorage.setItem("TerzoIsee", true)
    }

    render() {
        var disableSwitch = localStorage.getItem('Immatricolazione') === "true"

        return (
            <div className="App-header">

                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={() => this.props.backward()}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_upward</Icon>
                </Button>

                <p>
                    Hai consegnato l'Isee?
                </p>

                <p>
                    Entro il {TasksObj['isee1'].expire}?
                    <Switch checked={this.state.PrimoIsee} onChange={this.handleChangeTrigger.bind(this, "PrimoIsee")} disabled={!disableSwitch} />
                </p>
                <p>
                    Entro il {TasksObj['isee2'].expire}?
                    <Switch checked={this.state.SecondoIsee} onChange={this.handleChangeTrigger.bind(this, "SecondoIsee")} disabled={!disableSwitch} />
                </p>
                <p>
                    Entro il {TasksObj['isee3'].expire}?
                    <Switch checked={this.state.TerzoIsee} onChange={this.handleChangeTrigger.bind(this, "TerzoIsee")} disabled={!disableSwitch} />
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

export default RegisterS4;