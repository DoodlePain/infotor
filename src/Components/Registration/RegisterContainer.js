import React, { Component } from 'react';
import RegisterS1 from './FirstScreen/RegisterS1'
import RegisterS2 from './FirstScreen/RegisterS2'

class RegisterContainer extends Component {
    state = { step: 1 }

    advance() {
        this.setState({ step: ++this.state.step })
        console.log("Clicked");

        var element = document.getElementById('SecondScreen')
        element.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }

    render() {
        return (
            <div >
                <div id="FirstScreen">
                    <RegisterS1 advance={this.advance.bind(this)} />
                </div>
                <div id="SecondScreen">
                    <RegisterS2 advance={this.advance.bind(this)} />
                </div>
            </div>
        );
    }
}

export default RegisterContainer;