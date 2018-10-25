import React, { Component } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        color: "white"
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    }
});

class RegisterS1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Nome: null,
            Cognome: '',
            Data: '',
        };
    }

    setLocalData() {
        localStorage.setItem("Nome", this.state.Nome)
        localStorage.setItem("Cognome", this.state.Cognome)
        localStorage.setItem("Data", this.state.Data)
        this.props.advance()

    }

    render() {
        return (
            <div className="App-header">
                <TextField
                    required
                    id="standard-required"
                    label="Nome"
                    placeholder={(localStorage.getItem("Nome")) ? localStorage.getItem("Nome") : this.state.Nome}
                    className={styles.textField}
                    margin="normal"
                    onChange={(e) => {
                        this.setState({ Nome: e.target.value })
                    }}
                />
                <TextField
                    required
                    id="standard-required"
                    label="Cognome"
                    placeholder={(localStorage.getItem("Cognome")) ? localStorage.getItem("Cognome") : this.state.Cognome}
                    className={styles.textField}
                    margin="normal"
                    onChange={(e) => {
                        this.setState({ Cognome: e.target.value })
                    }}
                />
                <TextField
                    required
                    id="date"
                    label="Data di nascita"
                    value={(localStorage.getItem("Data") && !this.state.Data) ? localStorage.getItem("Data") : this.state.Data}
                    className={styles.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="date"
                    onChange={(e) => {
                        this.setState({ Data: e.target.value })
                    }}
                />
                <Button variant="fab" color="primary" className="button" style={{ marginTop: "10%" }} onClick={this.setLocalData.bind(this)}>
                    <Icon className="rightIcon" style={{ color: "white" }}>arrow_downward</Icon>
                </Button>
            </div>
        );
    }
}

export default RegisterS1;
