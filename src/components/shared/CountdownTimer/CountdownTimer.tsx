import * as React from 'react';
import styled from 'styled-components';

import './CountdownTimer.css';
import {
  ActionBtnType,
  ActionButtonProps
} from '../../ActionButton/ActionButton';

const expirationDateStr = 'Dec 2, 2019 23:59:59';
const ctaUrl = '/course/nativescript-with-angular-pro';
const couponCode = 'CYBER19';

interface CountdownTimerProps {
  expirationDateStr?: string;
}

interface CountdownTimerState {
  expired: boolean;
  distance: number;
  intervalId: number;
}

class CountdownTimer extends React.Component<
  CountdownTimerProps,
  CountdownTimerState
  > {
  private countDownDate: number;

  constructor(props: CountdownTimerProps) {
    super(props);

    let expDateStr = expirationDateStr;

    if (props.expirationDateStr) {
      expDateStr = props.expirationDateStr;
    }

    this.countDownDate = new Date(expDateStr).getTime();
    const now = new Date().getTime();

    this.state = {
      expired: true,
      distance: this.countDownDate - now,
      intervalId: 0
    };
  }

  public componentDidMount() {
    var intervalId = window.setInterval(() => {
      this.timerFunctionBody();
    }, 1000);
    this.setState({ intervalId: intervalId });
  }

  public componentDidUpdate() {
    if (this.state.distance < 0) {
      window.clearInterval(this.state.intervalId);

      document
        .getElementById('___gatsby')
        .classList.remove('with-countdown-timer');
    } else {
      document
        .getElementById('___gatsby')
        .classList.add('with-countdown-timer');
    }
  }

  public render() {
    const days = Math.floor(this.state.distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (this.state.distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((this.state.distance % (1000 * 60)) / 1000);

    const timeStr =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    const CouponCode = styled.span`
      color: red;
    `;

    return (
      <div
        className={
          this.state.expired
            ? 'countdown-timer-wrapper'
            : 'countdown-timer-wrapper show'
        }
      >
        <div className="timer-contents">
          <div className="timer-heading">
            <h2>
              &nbsp;
              <span className="oomph">30%</span> off any course or bundle
            </h2>
          </div>

          <div className="timer-section">
            <h3>Sale ends in...</h3>
            <ul className="timer-parts-list">
              <li>
                <div className="timer-part-number">{days}</div>
                <span>days</span>
              </li>
              <li>
                <div className="timer-part-number">{hours}</div>
                <span>hours</span>
              </li>
              <li>
                <div className="timer-part-number">{minutes}</div>
                <span>minutes</span>
              </li>
              <li>
                <div className="timer-part-number">{seconds}</div>
                <span>seconds</span>
              </li>
            </ul>
          </div>

          <div className="timer-tail">
            <h2>Use <CouponCode>{couponCode}</CouponCode> at checkout!</h2>
          </div>

          {
            // <CountdownTimerCTA text="Get It Now" />
          }
        </div>
      </div>
    );
  }

  private timerFunctionBody() {
    const now = new Date().getTime();
    // Find the distance between now an the count down date
    const distance = this.countDownDate - now;
    if (distance < 0) {
      this.setState({ expired: true, distance: distance });
    } else {
      this.setState({ expired: false, distance: distance });
    }
  }
}

function getBtnClassName(type: ActionBtnType, clear: boolean) {
  const classClear = clear ? 'clear' : '';

  switch (type) {
    case 'primary':
      return `btn-action green ${classClear}`;
    case 'secondary':
      return `btn-action blue ${classClear}`;
    case 'tertiary':
      return `btn-action orange ${classClear}`;
    default:
      return `btn-action green ${classClear}`;
  }
}

const CountdownTimerCTA: React.StatelessComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => {
  const className = getBtnClassName('primary', false);

  return (
    <div className="timer-cta-btn-wrapper">
      <div className="timer-cta-btn-container">
        <div className={className}>
          <a href={ctaUrl}>
            <span>{props.text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
