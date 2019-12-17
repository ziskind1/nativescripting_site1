import * as React from 'react';
import styled from 'styled-components';

interface WebinarCountdownTimerProps {
    style: React.CSSProperties;
}

interface WebinarCountdownTimerState {
    timeStr: string;
}

class WebinarCountdownTimer extends React.Component<
    WebinarCountdownTimerProps,
    WebinarCountdownTimerState
    > {

    constructor(props: WebinarCountdownTimerProps) {
        super(props);
        this.state = {
            timeStr: '--:--'
        };
    }

    public componentDidMount() {
        window.setInterval(() => {
            this.calcTimerFunc();
        }, 1000);
    }

    public render() {
        return (
            <span style={this.props.style}>{this.state.timeStr}</span>
        );
    }

    private calcTimerFunc() {
        const nowDate = new Date();
        const now = nowDate.getTime();
        const nowMin = nowDate.getMinutes();

        let expMin = nowMin;

        if (nowMin >= 0 && nowMin < 15) {
            expMin = 15 - nowMin;
        }
        else if (nowMin >= 15 && nowMin < 30) {
            expMin = 30 - nowMin;
        }
        else if (nowMin >= 30 && nowMin < 45) {
            expMin = 45 - nowMin;
        }
        else if (nowMin >= 45 && nowMin <= 59) {
            expMin = 60 - nowMin;
        }

        const nextWebinarDateTime = new Date();
        nextWebinarDateTime.setMinutes(nowMin + expMin);
        nextWebinarDateTime.setSeconds(0);

        const distance = nextWebinarDateTime.getTime() - now;

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timeStr = minutes.toString() + ':' + (seconds.toString()).padStart(2, '0');

        this.setState({
            timeStr: timeStr
        });
    }
}


export default WebinarCountdownTimer;
