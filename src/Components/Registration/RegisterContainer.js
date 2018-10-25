import React, { Component } from 'react';
import RegisterS1 from './FirstScreen/RegisterS1'
import RegisterS2 from './FirstScreen/RegisterS2'
import RegisterS3 from './FirstScreen/RegisterS3'

class RegisterContainer extends Component {
    state = { step: 1 }

    advance() {
        if (this.state.step < 3) {
            this.setState({ step: ++this.state.step })
            var element = null
            if (this.state.step === 2) element = document.getElementById('SecondScreen')
            else if (this.state.step === 3) element = document.getElementById('ThirdScreen')
            element.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }

    backward() {
        if (this.state.step > 1) {
            this.setState({ step: --this.state.step })
            var element = null
            if (this.state.step === 1) element = document.getElementById('FirstScreen')
            else if (this.state.step === 2) element = document.getElementById('SecondScreen')
            element.scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
    }

    render() {
        return (
            <div >
                <div id="FirstScreen">
                    <RegisterS1 advance={this.advance.bind(this)} />
                </div>
                <div id="SecondScreen" >
                    <RegisterS2 backward={this.backward.bind(this)} advance={this.advance.bind(this)} />
                </div>
                <div id="ThirdScreen" >
                    <RegisterS3 backward={this.backward.bind(this)} active={this.state.step === 3} />
                </div>
            </div>
        );
    }
}

export default RegisterContainer;