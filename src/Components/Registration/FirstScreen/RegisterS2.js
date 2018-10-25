import React, { Component } from 'react';
import { Button, Icon, Switch } from '@material-ui/core';
import { Link } from "react-router-dom";


class RegisterS2 extends Component {
    constructor(props) {
        super(props)
        const Test = localStorage.getItem("Test") === "true"
        const Iscrizione = localStorage.getItem("Iscrizione") === "true"
        const Immatricolazione = localStorage.getItem("Immatricolazione") === "true"
        this.state = {
            Test: Test,
            Iscrizione: Iscrizione,
            Immatricolazione: Immatricolazione,
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

            default:
                break;
        }
    }

    setLocalData() {
        localStorage.setItem("Test", this.state.Test)
        localStorage.setItem("Iscrizione", this.state.Iscrizione)
        localStorage.setItem("Immatricolazione", this.state.Immatricolazione)
    }

    render() {
        this.value = "ciao"

        return (
            <div className="App-header">
                <p>
                    Hai svolto il test?
                <Switch checked={this.state.Test} onChange={this.handleChangeTrigger.bind(this, "Test")} />
                </p>

                <p>
                    Hai pagato il contributo?
                <Switch checked={this.state.Iscrizione} onChange={this.handleChangeTrigger.bind(this, "Iscrizione")} />
                </p>

                <p>
                    Ti sei immatricolato?
                <Switch checked={this.state.Immatricolazione} onChange={this.handleChangeTrigger.bind(this, "Immatricolazione")} />
                </p>

                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={() => this.props.backward()}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_upward</Icon>
                </Button>
                <Link to="/" >
                    <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={this.setLocalData.bind(this)}>
                        <Icon className="rightIcon" style={{ color: "white" }}>arrow_downward</Icon>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default RegisterS2;
