import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds,
            timerRunning: true,
        };
    }

    pauseCountdown = () => {
        clearInterval(this.interval);
        this.setState({ timerRunning: false });
    }

    startCountdown = () => {
        this.interval = setInterval(() => {
            if (this.state.seconds === 0) {
                clearInterval(this.interval);
                this.props.soundAlarm()
            } else {
                this.setState(({ seconds }) => ({ seconds: seconds - 1 })); 
            }       
        }, 1000);
        this.setState({ timerRunning: true });
    }

    componentDidMount() {
        this.startCountdown()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    
    render() {
        return (
            <>
                {this.state.timerRunning ?
                    <button onClick={this.pauseCountdown}>Pause Timer</button>
                    : <button onClick={this.startCountdown}>Start Timer</button>
                }
                <p>Time remaining: {this.state.seconds}</p>
            </>
        );
    }
}