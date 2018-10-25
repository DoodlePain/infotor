import React, { Component } from 'react';

import { Button, Icon, Switch } from '@material-ui/core';
import { Link } from "react-router-dom";

class RegisterS3 extends Component {
    constructor(props) {
        super(props)
        const Test = localStorage.getItem("Test") === "true"
        const Iscrizione = localStorage.getItem("Iscrizione") === "true"
        const Immatricolazione = localStorage.getItem("Immatricolazione") === "true"
        const Tasse = localStorage.getItem("Tasse") === "true"
        console.log(Tasse);
        this.state = {
            Test: Test,
            Iscrizione: Iscrizione,
            Immatricolazione: Immatricolazione,
            Tasse: Tasse
        };

    }

    handleChangeTrigger(label) {
        switch (label) {
            case "Test":
                this.setState({
                    Test: !this.state.Test
                })
                break;

            case "Iscrizione":
                this.setState({
                    Iscrizione: !this.state.Iscrizione
                })
                break;

            case "Immatricolazione":
                this.setState({
                    Immatricolazione: !this.state.Immatricolazione
                })
                break;

            case "Tasse":
                this.setState({
                    Tasse: !this.state.Tasse
                })
                break;

            default:
                break;
        }
    }

    setLocalData() {
        localStorage.setItem("PrimaTassa", this.state.PrimaTassa)
    }

    render() {

        var disableSwitch = this.state.Test
        console.log(disableSwitch);


        return (
            <div className="App-header">
                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={() => this.props.backward()}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_upward</Icon>
                </Button>
                <p>
                    Prima tassa?
                    <Switch checked={this.state.Test} onChange={this.handleChangeTrigger.bind(this, "Test")} disabled={!this.state.Tasse} />
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
