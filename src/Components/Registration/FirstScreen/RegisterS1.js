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
    state = {
        Nome: null,
        Cognome: '',
        Data: ''
    }

    setLocalData() {
        console.log(this.state);
        localStorage.setItem("Nome", this.state.Nome)
        localStorage.setItem("Cognome", this.state.Cognome)
        localStorage.setItem("Data", this.state.Data)
    }

    render() {
        this.value = "ciao"
        console.log(localStorage.getItem("Data"));

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
                        console.log(e.target.value);

                        this.setState({ Data: e.target.value })
                    }}
                />
                <Button variant="contained" color="primary" className="button" style={{ marginTop: "10%" }} onClick={this.setLocalData.bind(this)}>
                    Send &nbsp;
                    <Icon className="rightIcon">send</Icon>
                </Button>
                <div className="explanation">
                    <p>
                        Questi dati ci aiuteranno a darti una mano e per migliorare la tua esperienza
                    </p>
                </div>
            </div>
        );
    }
}

export default RegisterS1;
