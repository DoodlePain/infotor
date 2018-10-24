import React, { Component } from 'react';
import RegisterS1 from './FirstScreen/RegisterS1'
import RegisterS2 from './FirstScreen/RegisterS2'

class RegisterContainer extends Component {
    state = { step: 1 }

    advance() {
        this.setState({ step: ++this.state.step })
        var elementA = document.getElementById('SecondScreen')
        elementA.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }

    backward() {
        this.setState({ step: --this.state.step })
        var elementB = document.getElementById('FirstScreen')
        elementB.scrollIntoView({ block: 'end', behavior: 'smooth' })
    }

    render() {
        return (
            <div >
                <div id="FirstScreen">
                    <RegisterS1 advance={this.advance.bind(this)} />
                </div>
                <div id="SecondScreen" >
                    <RegisterS2 backward={this.backward.bind(this)} />
                </div>
            </div>
        );
    }
}

export default RegisterContainer;