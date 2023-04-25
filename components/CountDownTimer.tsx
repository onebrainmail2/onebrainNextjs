import React, { useState, useEffect } from 'react';

interface Props {
  countdownDate: Date;
}

const CountDownTimer: React.FC<Props> = ({ countdownDate }) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = countdownDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div id="brain-timer">
      <span className="timer-days d-inline">{timer.days}</span>:<span className="timer-hours d-inline">{timer.hours}</span>:<span className="timer-minutes d-inline">{timer.minutes}</span>:<span className="timer-seconds d-inline">{timer.seconds}</span>
    </div>
  );
};

export default CountDownTimer;