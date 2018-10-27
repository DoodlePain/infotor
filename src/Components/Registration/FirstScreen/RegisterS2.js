import React, { Component } from 'react';
import { Button, Icon, Switch } from '@material-ui/core';


class RegisterS2 extends Component {
    constructor(props) {
        super(props)
        const Test = localStorage.getItem("Test") === "true"
        const Contributo = localStorage.getItem("Contributo") === "true"
        const Immatricolazione = localStorage.getItem("Immatricolazione") === "true"
        const Tasse = localStorage.getItem("Tasse") === "true"
        this.state = {
            Test: Test,
            Contributo: Contributo,
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

            case "Contributo":
                this.setState({
                    Contributo: !this.state.Contributo
                })
                break;

            case "Immatricolazione":
                this.setState({
                    Immatricolazione: !this.state.Immatricolazione,
                    Tasse: false
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
        localStorage.setItem("Test", this.state.Test)
        this.state.Test ? localStorage.setItem('SecondoTest', true) : localStorage.setItem('SecondoTest', false)
        localStorage.setItem("Contributo", this.state.Contributo)
        localStorage.setItem("Immatricolazione", this.state.Immatricolazione)
        localStorage.setItem("Tasse", this.state.Tasse)
        this.props.advance()
    }

    render() {
        this.value = "ciao"

        return (
            <div className="App-header">
                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={() => this.props.backward()}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_upward</Icon>
                </Button>
                <p>
                    Hai svolto il test?
                <Switch checked={this.state.Test} onChange={this.handleChangeTrigger.bind(this, "Test")} />
                </p>

                <p>
                    Hai pagato il contributo?
                <Switch checked={this.state.Contributo} onChange={this.handleChangeTrigger.bind(this, "Contributo")} />
                </p>

                <p>
                    Ti sei immatricolato?
                <Switch checked={this.state.Immatricolazione} onChange={this.handleChangeTrigger.bind(this, "Immatricolazione")} />
                </p>

                <p>
                    Hai pagato le tasse?
                <Switch checked={this.state.Tasse} onChange={this.handleChangeTrigger.bind(this, "Tasse")} disabled={!this.state.Immatricolazione} />
                </p>

                <Button variant="fab" color="primary" className="button bothInline" style={{ marginTop: "10%" }} onClick={this.setLocalData.bind(this)}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_downward</Icon>
                </Button>
            </div>
        );
    }
}

export default RegisterS2;
